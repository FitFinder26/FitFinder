"""
ASOS Product Scraper
Combines sitemap URL extraction and product detail scraping with resumable progress tracking.

Workflow:
  1. Fetches all product URLs from ASOS sitemap index
  2. Saves URLs to data/asos/urls.json
  3. Scrapes each product URL for details (name, price, images, type, etc.)
  4. Saves products to data/asos/data/<productType>.json (grouped by product type)
  5. Maintains progress in data/asos/progress.txt for resumable scraping
  6. Retries failed requests up to 3 times
  7. Skips URLs with HTTP status >= 400
  8. Prints summary of successful/failed scrapes
"""

import requests
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup
import json
import re
import time
import os
from pathlib import Path
from typing import Optional, Dict, List, Set, Tuple


# ============= CONFIGURATION =============
SITEMAP_INDEX_URL = "https://www.asos.com/product-sitemap-index-COM.xml"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

# Paths
DATA_DIR = "data/asos"
URLS_FILE = f"{DATA_DIR}/urls.json"
ALT_FILE = f"{DATA_DIR}/alt.json"
PRODUCTS_DIR = f"{DATA_DIR}/data"
PROGRESS_FILE = f"{DATA_DIR}/progress.txt"

# Retry configuration
RETRY_ATTEMPTS = 3
RETRY_DELAY = 2  # seconds
REQUEST_TIMEOUT = 30  # seconds
POLITENESS_DELAY = 0.5  # delay between requests (seconds)

# Missing image detection
MISSING_IMAGE_URL = "https://images.asos-media.com/products/missing/missing-1-none.svg"
MISSING_FILE = f"{DATA_DIR}/missing.json"

# Alternative URLs tracking (to avoid re-adding discovered URLs on resume)
DISCOVERED_URLS_FILE = f"{DATA_DIR}/discovered_alternative_urls.json"
SCRAPED_IDS_FILE = f"{DATA_DIR}/scraped_product_ids.json"
BATCH_WRITE_SIZE = 100  # Write URLs to disk every N discovered URLs
CHECKPOINT_WRITE_INTERVAL = 100  # Persist state every N processed URLs


# ============= DIRECTORY SETUP =============
def ensure_directories():
    """Create necessary directories if they don't exist."""
    Path(DATA_DIR).mkdir(parents=True, exist_ok=True)
    Path(PRODUCTS_DIR).mkdir(parents=True, exist_ok=True)


# ============= URL FETCHING (Phase 1) =============
def fetch_all_product_urls() -> List[str]:
    """
    Fetch all product URLs from ASOS sitemap index.

    Returns:
        List of product URLs
    """
    print("=" * 60)
    print("PHASE 1: FETCHING PRODUCT URLs FROM SITEMAP")
    print("=" * 60)

    print("\nFetching sitemap index...")
    try:
        r = requests.get(SITEMAP_INDEX_URL, headers=HEADERS, timeout=REQUEST_TIMEOUT)
        r.raise_for_status()
        root = ET.fromstring(r.content)
    except requests.RequestException as e:
        print(f"✗ Error fetching sitemap index: {e}")
        return []

    ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    sitemaps = []

    print("Extracting sitemaps from index...")
    for sitemap in root.findall("ns:sitemap", ns):
        loc_elem = sitemap.find("ns:loc", ns)
        if loc_elem is not None and loc_elem.text:
            sitemaps.append(loc_elem.text)

    print(f"✓ Found {len(sitemaps)} sitemaps\n")

    product_urls = []
    print("Fetching and parsing sitemaps...")
    for idx, sitemap_url in enumerate(sitemaps, 1):
        try:
            print(f"  [{idx}/{len(sitemaps)}] {sitemap_url}...")
            r = requests.get(sitemap_url, headers=HEADERS, timeout=REQUEST_TIMEOUT)
            r.raise_for_status()
            root = ET.fromstring(r.content)

            for url_elem in root.findall("ns:url", ns):
                loc_elem = url_elem.find("ns:loc", ns)
                if loc_elem is not None and loc_elem.text:
                    product_urls.append(loc_elem.text)

            print(f"    ✓ Extracted {len([u for u in root.findall('ns:url', ns)])} URLs")

        except requests.RequestException as e:
            print(f"    ✗ Error: {e}")
            continue

    print(f"\n✓ Total product URLs extracted: {len(product_urls)}\n")
    return product_urls


def save_urls_to_file(urls: List[str]):
    """Save product URLs to JSON file."""
    try:
        with open(URLS_FILE, "w", encoding="utf-8") as f:
            json.dump(urls, f, indent=2)
        print(f"✓ Saved {len(urls)} URLs to {URLS_FILE}\n")
    except IOError as e:
        print(f"✗ Error saving URLs to file: {e}\n")


def load_urls_from_file() -> List[str]:
    """Load product URLs from JSON file."""
    if not os.path.exists(URLS_FILE):
        print(f"URLs file not found: {URLS_FILE}\n")
        return []

    try:
        with open(URLS_FILE, "r", encoding="utf-8") as f:
            urls = json.load(f)
            print(f"✓ Loaded {len(urls)} URLs from {URLS_FILE}\n")
            return urls
    except (IOError, json.JSONDecodeError) as e:
        print(f"✗ Error loading URLs from file: {e}\n")
        return []


# ============= PROGRESS TRACKING =============
def load_progress() -> int:
    """
    Load last processed URL index from progress file.

    Returns:
        Index of last processed URL (0 if no progress exists)
    """
    if not os.path.exists(PROGRESS_FILE):
        return 0

    try:
        with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
            return int(f.read().strip())
    except (IOError, ValueError):
        return 0


def save_progress(index: int):
    """Save current URL index to progress file."""
    try:
        with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
            f.write(str(index))
    except IOError as e:
        print(f"✗ Error saving progress: {e}")


def clear_progress():
    """Clear progress file (call when scraping is complete)."""
    try:
        if os.path.exists(PROGRESS_FILE):
            os.remove(PROGRESS_FILE)
            print("✓ Progress file cleared (scraping session completed)")
    except Exception as e:
        print(f"Warning: Could not clear progress file: {e}")


# ============= PRODUCT SCRAPING (Phase 2) =============
def extract_js_var(html: str, var_name: str) -> Optional[Dict]:
    """
    Extract and parse JavaScript variable from HTML.

    Args:
        html: HTML source code
        var_name: JavaScript variable name (e.g., "window.asos.pdp.config.product")

    Returns:
        Parsed dict/value, raw string, or None if not found
    """
    pattern = rf"{re.escape(var_name)}\s*=\s*(.*?);"
    matches = re.findall(pattern, html, re.DOTALL)

    if not matches:
        return None

    raw = matches[-1]  # take last occurrence

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return raw


def scrape_product(url: str) -> Tuple[Optional[Dict], Optional[str]]:
    """
    Scrape product details from URL with retry logic.

    Args:
        url: Product URL to scrape

    Returns:
        Tuple of (product dict or None, failure reason or None)
    """
    for attempt in range(1, RETRY_ATTEMPTS + 1):
        try:
            r = requests.get(url, headers=HEADERS, timeout=REQUEST_TIMEOUT)

            # Skip if status >= 400
            if r.status_code >= 400:
                return None, f"HTTP status {r.status_code}"

            r.raise_for_status()

            soup = BeautifulSoup(r.text, "lxml")
            html = str(soup)

            # Extract product info
            product = extract_js_var(html, "window.asos.pdp.config.product")
            if not product:
                return None, "Missing window.asos.pdp.config.product"

            if not isinstance(product, dict):
                return None, "Product payload is not valid JSON (likely JS object literal)"

            # Fetch stock and pricing
            stock = None
            try:
                stock_url = f"https://www.asos.com/api/product/catalogue/v4/stockprice?productIds={product.get('id')}&store=ROW&currency=USD&keyStoreDataversion=qx71qrg-45&country=EG"
                stock_r = requests.get(stock_url, headers=HEADERS, timeout=REQUEST_TIMEOUT)
                stock_r.raise_for_status()
                stock = stock_r.json()
            except Exception:
                stock = []

            # Extract ratings
            ratings = extract_js_var(html, "window.asos.pdp.config.ratings")

            # Find matching stock item
            stock_item = None
            if isinstance(stock, list):
                for x in stock:
                    if x.get("productId") == product.get("id"):
                        stock_item = x
                        break

            # Extract pricing
            currency = None
            current_price = None
            previous_price = None

            if stock_item:
                try:
                    current_price = stock_item["productPrice"]["current"]["value"]
                    previous_price = stock_item["productPrice"]["previous"]["value"]
                    currency = stock_item["productPrice"]["currency"]
                except (KeyError, TypeError):
                    pass

            # Extract product type (used for categorization)
            product_type = product.get("productType", {})
            if isinstance(product_type, dict):
                product_type_name = product_type.get("name", "Unknown")
            else:
                product_type_name = str(product_type) if product_type else "Unknown"

            # Some products do not include facetGroup; keep scraping and store empty alternatives.
            facets = []
            facet_group = product.get("facetGroup")
            if isinstance(facet_group, dict):
                raw_facets = facet_group.get("facets", [])
                if isinstance(raw_facets, list):
                    facets = raw_facets

            # Build result
            return {
                "url": url,
                "id": product.get("id"),
                "name": product.get("name"),
                "gender": product.get("gender"),
                "isNoSize": product.get("isNoSize"),
                "brand": product.get("brandName"),
                "isOneSize": product.get("isOneSize"),
                "isDiscontinued": product.get("isDiscontinued"),
                "productType": product_type_name,
                "images": [x.get("url") for x in product.get("images", []) if x.get("url")],
                "alternative": facets,
                "currentPrice": current_price,
                "previousPrice": previous_price,
                "currency": currency,
                "rating": ratings.get("averageOverallRating") if ratings else None,
                "provider": "asos"
            }, None

        except requests.RequestException as e:
            if attempt < RETRY_ATTEMPTS:
                time.sleep(RETRY_DELAY)
                continue
            return None, f"Request error after {RETRY_ATTEMPTS} attempts: {e}"
        except KeyError as e:
            return None, f"Missing expected field in product payload: {e}"
        except Exception as e:
            return None, f"Unexpected parsing/scraping error: {e}"

    return None, "Unknown failure"


# ============= ALTERNATIVE URLS EXTRACTION =============
def extract_alternative_urls(product: Dict, main_product_id: int) -> List[str]:
    """
    Extract alternative product URLs from facets that have different IDs.

    Args:
        product: Product dict containing facetGroup
        main_product_id: ID of the main product

    Returns:
        List of alternative product URLs to add
    """
    alternative_urls = []

    try:
        facet_group = product.get("facetGroup", {})
        facets = facet_group.get("facets", [])
        if not facets and isinstance(product.get("alternative"), list):
            facets = product.get("alternative", [])

        for facet in facets:
            if not isinstance(facet, dict):
                continue

            # Each facet may be a color variant group
            products_in_facet = facet.get("products", [])
            if not products_in_facet:
                continue

            for alt_product in products_in_facet:
                if not isinstance(alt_product, dict):
                    continue

                alt_product_id = alt_product.get("productId")

                # Skip if same product ID or missing ID
                if alt_product_id is None or alt_product_id == main_product_id:
                    continue

                # Extract URL from product data
                # Try to construct URL from product info
                brand_name = alt_product.get("brandName", "").lower().replace(" ", "-")
                product_name = alt_product.get("name", "").lower().replace(" ", "-")
                product_id = alt_product.get("productId")

                if brand_name and product_name and product_id:
                    url = f"https://www.asos.com/{brand_name}/{product_name}/prd/{product_id}"
                    alternative_urls.append(url)

    except Exception as e:
        pass

    return alternative_urls


def add_new_urls_to_alt(
    new_urls: List[str],
    main_urls: List[str],
    existing_alt_urls: List[str],
    discovered_urls: set,
    pending_batch: List[str],
    scraped_product_ids: Set[int],
) -> tuple[int, List[str]]:
    """
    Add new alternative URLs to alt.json with optimized batching (no immediate disk writes).

    Args:
        new_urls: List of new URLs to add
        main_urls: Main sitemap URLs loaded from urls.json
        existing_alt_urls: Existing list of alternative URLs loaded from alt.json
        discovered_urls: Set of previously discovered alternative URLs
        pending_batch: Accumulative batch of new URLs waiting to be written
        scraped_product_ids: Set of product IDs that are already scraped

    Returns:
        Tuple of (count of URLs actually added, updated pending_batch)
    """
    if not new_urls:
        return 0, pending_batch

    main_urls_set = set(main_urls)
    existing_alt_set = set(existing_alt_urls)
    added_count = 0

    for url in new_urls:
        alt_product_id = extract_product_id_from_url(url)

        # Skip alternatives already scraped (dedupe by product ID).
        if alt_product_id is not None and alt_product_id in scraped_product_ids:
            continue

        # Skip if already in main list, already in alt list, or already discovered before
        if (
            url not in main_urls_set
            and url not in existing_alt_set
            and url not in discovered_urls
        ):
            existing_alt_urls.append(url)
            existing_alt_set.add(url)
            discovered_urls.add(url)
            pending_batch.append(url)
            added_count += 1

    return added_count, pending_batch


def flush_alt_urls_batch(existing_alt_urls: List[str], pending_batch: List[str]) -> None:
    """
    Flush accumulated alternative URLs to disk (called periodically or at end).

    Args:
        existing_alt_urls: Full list of alternative URLs to write
        pending_batch: Batch of URLs to clear after writing
    """
    if not pending_batch:
        return

    try:
        with open(ALT_FILE, "w", encoding="utf-8") as f:
            json.dump(existing_alt_urls, f, indent=2)
        pending_batch.clear()
    except IOError as e:
        print(f"  ✗ Error saving alternative URLs batch: {e}")


def load_alt_urls() -> List[str]:
    """Load existing alternative URLs from alt.json."""
    if not os.path.exists(ALT_FILE):
        return []

    try:
        with open(ALT_FILE, "r", encoding="utf-8") as f:
            urls = json.load(f)
            return urls if isinstance(urls, list) else []
    except (IOError, json.JSONDecodeError):
        return []


def load_discovered_urls() -> set:
    """Load set of alternative URLs discovered in previous runs."""
    if not os.path.exists(DISCOVERED_URLS_FILE):
        return set()

    try:
        with open(DISCOVERED_URLS_FILE, "r", encoding="utf-8") as f:
            return set(json.load(f))
    except (IOError, json.JSONDecodeError):
        return set()


def save_discovered_urls(discovered_urls: set):
    """Save discovered alternative URLs to file."""
    try:
        with open(DISCOVERED_URLS_FILE, "w", encoding="utf-8") as f:
            json.dump(sorted(list(discovered_urls)), f, indent=2)
    except IOError as e:
        print(f"  ✗ Error saving discovered URLs: {e}")


def load_scraped_product_ids() -> Set[int]:
    """Load scraped product IDs. Falls back to scanning product files if no ID file exists."""
    if os.path.exists(SCRAPED_IDS_FILE):
        try:
            with open(SCRAPED_IDS_FILE, "r", encoding="utf-8") as f:
                raw_ids = json.load(f)
            if isinstance(raw_ids, list):
                return {int(x) for x in raw_ids if str(x).isdigit()}
        except (IOError, json.JSONDecodeError, ValueError):
            pass

    scraped_ids: Set[int] = set()
    products_path = Path(PRODUCTS_DIR)
    if not products_path.exists():
        return scraped_ids

    for file_path in products_path.glob("*.json"):
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                items = json.load(f)
            if isinstance(items, list):
                for item in items:
                    if isinstance(item, dict):
                        product_id = item.get("id")
                        if isinstance(product_id, int):
                            scraped_ids.add(product_id)
                        elif isinstance(product_id, str) and product_id.isdigit():
                            scraped_ids.add(int(product_id))
        except (IOError, json.JSONDecodeError):
            continue

    return scraped_ids


def save_scraped_product_ids(scraped_ids: Set[int]):
    """Persist scraped product IDs for duplicate prevention in alternative URLs."""
    try:
        with open(SCRAPED_IDS_FILE, "w", encoding="utf-8") as f:
            json.dump(sorted(list(scraped_ids)), f, indent=2)
    except IOError as e:
        print(f"  ✗ Error saving scraped product IDs: {e}")


def extract_product_id_from_url(url: str) -> Optional[int]:
    """Extract numeric product ID from ASOS product URL ending with /prd/<id>."""
    match = re.search(r"/prd/(\d+)", url)
    if not match:
        return None
    return int(match.group(1))


# ============= PRODUCT STORAGE =============
def load_product_data(product_type: str) -> List[Dict]:
    """Load existing product data for a given type."""
    file_path = f"{PRODUCTS_DIR}/{product_type}.json"
    if not os.path.exists(file_path):
        return []

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (IOError, json.JSONDecodeError):
        return []


def save_product_data(product_type: str, products: List[Dict]):
    """Save product data to categorized JSON file."""
    file_path = f"{PRODUCTS_DIR}/{product_type}.json"
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(products, f, indent=2, ensure_ascii=False)
    except IOError as e:
        print(f"  ✗ Error saving data for {product_type}: {e}")


def add_product_to_category(product: Dict) -> str:
    """
    Add product to its category file.

    Returns:
        Product type (category) name
    """
    product_type = product.get("productType", "Unknown")

    # Sanitize filename (remove invalid chars)
    safe_type = product_type.replace("/", "_").replace("\\", "_").replace(":", "_").strip()
    if not safe_type:
        safe_type = "Unknown"

    existing_data = load_product_data(safe_type)
    existing_data.append(product)
    save_product_data(safe_type, existing_data)

    return product_type


def has_missing_image(images: List[str]) -> bool:
    """Check if product images contain the missing image URL."""
    return MISSING_IMAGE_URL in images


def load_missing_products() -> List[Dict]:
    """Load existing missing products data."""
    if not os.path.exists(MISSING_FILE):
        return []

    try:
        with open(MISSING_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except (IOError, json.JSONDecodeError):
        return []


def save_missing_products(products: List[Dict]):
    """Save missing products to file."""
    try:
        with open(MISSING_FILE, "w", encoding="utf-8") as f:
            json.dump(products, f, indent=2, ensure_ascii=False)
    except IOError as e:
        print(f"  ✗ Error saving missing products: {e}")


def add_to_missing(product: Dict):
    """Add product to missing products file."""
    existing = load_missing_products()
    existing.append(product)
    save_missing_products(existing)


# ============= MAIN SCRAPING LOOP =============
def scrape_all_products():
    """
    Main scraper:
      1. Fetch and save URLs if needed
      2. Resume from last progress
      3. Scrape each URL and categorize
      4. Print summary
    """
    ensure_directories()

    # Load URLs
    urls = load_urls_from_file()
    if not urls:
        print("No URLs found. Fetching from sitemap...\n")
        urls = fetch_all_product_urls()
        if urls:
            save_urls_to_file(urls)
        else:
            print("✗ Failed to fetch URLs. Exiting.")
            return

    # Load progress
    start_index = load_progress()

    # Load previously discovered alternative URLs
    discovered_urls = load_discovered_urls()

    # Load existing alternative URLs list
    alt_urls_list = load_alt_urls()

    # Load IDs of already scraped products
    scraped_product_ids = load_scraped_product_ids()

    print("=" * 60)
    print("PHASE 2: SCRAPING PRODUCT DETAILS")
    print("=" * 60)

    if start_index > 0:
        print(f"\n⚠ Resuming from URL index {start_index} (skipping first {start_index} URLs)\n")
    else:
        print()

    if discovered_urls:
        print(f"ℹ Previously discovered {len(discovered_urls)} alternative URLs\n")

    if alt_urls_list:
        print(f"ℹ Loaded {len(alt_urls_list)} URLs from alt.json\n")

    if scraped_product_ids:
        print(f"ℹ Loaded {len(scraped_product_ids)} scraped product IDs\n")

    successful = 0
    missed = 0
    failed = 0
    new_urls_added = 0
    total_to_process = len(urls) - start_index
    pending_batch = []  # Batch accumulator for optimized disk writes
    interrupted = False
    last_completed_index = start_index - 1
    processed_since_checkpoint = 0

    start_time = time.time()

    print(f"Processing {total_to_process} products...\n")

    try:
        for idx in range(start_index, len(urls)):
            url = urls[idx]
            progress_pct = (idx / total_to_process) * 100

            print(f"[{idx + 1}/{len(urls)}] ({progress_pct:.1f}%) {url}")

            product, fail_reason = scrape_product(url)

            if product is None:
                if fail_reason:
                    print(f"  ✗ Skipped/Failed: {fail_reason}")
                else:
                    print(f"  ✗ Skipped/Failed")
                failed += 1
            else:
                product_id = product.get("id")
                if isinstance(product_id, int):
                    scraped_product_ids.add(product_id)
                elif isinstance(product_id, str) and product_id.isdigit():
                    scraped_product_ids.add(int(product_id))

                # Extract alternative product URLs from facets
                extracted_alt_urls = extract_alternative_urls(product, product.get("id"))
                if extracted_alt_urls:
                    added, pending_batch = add_new_urls_to_alt(
                        extracted_alt_urls,
                        urls,
                        alt_urls_list,
                        discovered_urls,
                        pending_batch,
                        scraped_product_ids,
                    )
                    new_urls_added += added
                    if added > 0:
                        print(f"  ℹ Found {added} new alternative URL(s)")

                    # Flush batch if threshold reached
                    if len(pending_batch) >= BATCH_WRITE_SIZE:
                        flush_alt_urls_batch(alt_urls_list, pending_batch)
                        print(f"  ✓ Flushed {BATCH_WRITE_SIZE} URLs to disk")

                # Check for missing images
                if has_missing_image(product.get("images", [])):
                    print(f"  ⚠ Missing image detected - added to missing.json")
                    add_to_missing(product)
                    missed += 1
                else:
                    try:
                        product_type = add_product_to_category(product)
                        print(f"  ✓ → {product_type}")
                        successful += 1
                    except Exception as e:
                        print(f"  ✗ Error saving: {str(e)[:50]}")
                        failed += 1

            # Save progress after each URL
            save_progress(idx + 1)
            last_completed_index = idx
            processed_since_checkpoint += 1

            # Periodically persist in-memory state to reduce data loss on forced stop.
            if processed_since_checkpoint >= CHECKPOINT_WRITE_INTERVAL:
                if pending_batch:
                    flush_alt_urls_batch(alt_urls_list, pending_batch)
                    print("  ✓ Checkpoint: flushed pending alt URLs")

                save_discovered_urls(discovered_urls)

                if scraped_product_ids:
                    save_scraped_product_ids(scraped_product_ids)

                processed_since_checkpoint = 0

            # Politeness delay
            time.sleep(POLITENESS_DELAY)
    except KeyboardInterrupt:
        interrupted = True
        print("\n⚠ Stopped by user (Ctrl+C). Saving progress and cached URLs...")
        save_progress(last_completed_index + 1)

    elapsed = time.time() - start_time

    # Print summary
    print("\n" + "=" * 60)
    print("SCRAPING SUMMARY")
    print("=" * 60)
    print(f"Total URLs processed:  {successful + missed + failed}")
    print(f"Successful:            {successful}")
    print(f"Missed (no images):    {missed}")
    print(f"Failed/Skipped:        {failed}")
    print(f"New alternative URLs:  {new_urls_added}")
    print(f"Time elapsed:          {elapsed:.2f}s")
    if successful + missed + failed > 0:
        print(f"Avg time per URL:      {elapsed / (successful + missed + failed):.2f}s")
    print("=" * 60)

    # Clear progress file only when full run completes without interruption
    if (not interrupted) and successful + missed + failed == total_to_process:
        clear_progress()

    # Flush any remaining pending URLs
    if pending_batch:
        flush_alt_urls_batch(alt_urls_list, pending_batch)
        print(f"✓ Flushed final {len(pending_batch)} URLs to disk")

    # Save discovered URLs for next run
    if discovered_urls:
        save_discovered_urls(discovered_urls)

    if scraped_product_ids:
        save_scraped_product_ids(scraped_product_ids)

    if interrupted:
        print("✓ State saved. Re-run the script to resume from the saved index.")

    print()


# ============= ENTRY POINT =============
if __name__ == "__main__":
    scrape_all_products()
