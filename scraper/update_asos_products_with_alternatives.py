import argparse
import json
import re
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

import requests
from bs4 import BeautifulSoup


HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

SCRAPED_IDS_FILE = "data/asos/scraped_product_ids.json"


def extract_js_var(html: str, var_name: str) -> Optional[Any]:
    pattern = rf"{re.escape(var_name)}\s*=\s*(.*?);"
    matches = re.findall(pattern, html, re.DOTALL)

    if not matches:
        return None

    raw = matches[-1]

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return None


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return re.sub(r"-{2,}", "-", slug)


def normalize_possible_url(value: str) -> Optional[str]:
    if not value:
        return None

    value = value.strip()
    if not value:
        return None

    if value.startswith("http://") or value.startswith("https://"):
        return value

    if value.startswith("/"):
        return f"https://www.asos.com{value}"

    return None


def extract_product_id_from_url(url: str) -> Optional[int]:
    match = re.search(r"/prd/(\d+)", url)
    if not match:
        return None
    return int(match.group(1))


def load_scraped_product_ids(ids_file: Path, data_dir: Path) -> Set[int]:
    if ids_file.exists():
        try:
            with open(ids_file, "r", encoding="utf-8") as f:
                raw = json.load(f)
            if isinstance(raw, list):
                return {int(x) for x in raw if str(x).isdigit()}
        except (OSError, json.JSONDecodeError, ValueError):
            pass

    ids: Set[int] = set()
    for file_path in sorted(data_dir.glob("*.json")):
        items = load_json_list(file_path)
        for item in items:
            if isinstance(item, dict):
                product_id = item.get("id")
                if isinstance(product_id, int):
                    ids.add(product_id)
                elif isinstance(product_id, str) and product_id.isdigit():
                    ids.add(int(product_id))
    return ids


def save_scraped_product_ids(ids_file: Path, product_ids: Set[int]) -> None:
    with open(ids_file, "w", encoding="utf-8") as f:
        json.dump(sorted(list(product_ids)), f, indent=2)


def extract_alternative_urls_from_facets(
    facets: List[Dict[str, Any]],
    main_product_id: Optional[int],
) -> List[Tuple[str, int]]:
    urls: List[Tuple[str, int]] = []

    for facet in facets:
        if not isinstance(facet, dict):
            continue

        products = facet.get("products", [])
        if not isinstance(products, list):
            continue

        for alt_product in products:
            if not isinstance(alt_product, dict):
                continue

            alt_product_id = alt_product.get("productId")
            if alt_product_id is None or alt_product_id == main_product_id:
                continue

            direct_url = (
                alt_product.get("url")
                or alt_product.get("productUrl")
                or alt_product.get("linkUrl")
                or alt_product.get("href")
            )
            normalized_direct = normalize_possible_url(direct_url) if isinstance(direct_url, str) else None
            if normalized_direct:
                urls.append((normalized_direct, int(alt_product_id)))
                continue

            brand_name = alt_product.get("brandName")
            product_name = alt_product.get("name")
            if isinstance(brand_name, str) and isinstance(product_name, str):
                brand_slug = slugify(brand_name)
                product_slug = slugify(product_name)
                if brand_slug and product_slug:
                    urls.append((f"https://www.asos.com/{brand_slug}/{product_slug}/prd/{alt_product_id}", int(alt_product_id)))

    return urls


def fetch_product_payload(
    session: requests.Session,
    url: str,
    retries: int,
    timeout: int,
    retry_delay: float,
) -> Optional[Dict[str, Any]]:
    for attempt in range(1, retries + 1):
        try:
            response = session.get(url, headers=HEADERS, timeout=timeout)
            if response.status_code >= 400:
                return None

            response.raise_for_status()
            soup = BeautifulSoup(response.text, "lxml")
            html = str(soup)

            product_payload = extract_js_var(html, "window.asos.pdp.config.product")
            if isinstance(product_payload, dict):
                return product_payload
            return None

        except requests.RequestException:
            if attempt < retries:
                time.sleep(retry_delay)
            else:
                return None

    return None


def load_json_list(file_path: Path) -> List[Any]:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        if isinstance(data, list):
            return data
    except (OSError, json.JSONDecodeError):
        pass
    return []


def save_json_list(file_path: Path, data: List[Any]) -> None:
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def update_products_and_urls(
    data_dir: Path,
    urls_file: Path,
    scraped_ids_file: Path,
    retries: int,
    timeout: int,
    retry_delay: float,
    request_delay: float,
    limit: Optional[int],
) -> Tuple[int, int, int, int, int, int, int]:
    product_files = sorted(data_dir.glob("*.json"))
    if not product_files:
        print(f"No product files found in {data_dir}")
        return 0, 0, 0, 0, 0, 0

    existing_urls = load_json_list(urls_file)
    existing_urls = [u for u in existing_urls if isinstance(u, str) and u.strip()]
    url_set: Set[str] = set(existing_urls)
    scraped_product_ids = load_scraped_product_ids(scraped_ids_file, data_dir)

    processed = 0
    updated_products = 0
    failed = 0
    files_updated = 0
    appended_urls = 0

    with requests.Session() as session:
        for product_file in product_files:
            products = load_json_list(product_file)
            if not products:
                continue

            file_changed = False

            for product in products:
                if limit is not None and processed >= limit:
                    break

                if not isinstance(product, dict):
                    continue

                product_url = product.get("url")
                if not isinstance(product_url, str) or not product_url.strip():
                    continue

                processed += 1
                payload = fetch_product_payload(
                    session=session,
                    url=product_url,
                    retries=retries,
                    timeout=timeout,
                    retry_delay=retry_delay,
                )

                if payload is None:
                    failed += 1
                    continue

                current_product_id = payload.get("id", product.get("id"))
                if isinstance(current_product_id, int):
                    scraped_product_ids.add(current_product_id)
                elif isinstance(current_product_id, str) and current_product_id.isdigit():
                    scraped_product_ids.add(int(current_product_id))
                else:
                    fallback_id = extract_product_id_from_url(product_url)
                    if fallback_id is not None:
                        scraped_product_ids.add(fallback_id)

                facet_group = payload.get("facetGroup", {})
                facets = facet_group.get("facets", []) if isinstance(facet_group, dict) else []
                if not isinstance(facets, list):
                    facets = []

                old_alternative = product.get("alternative")
                if old_alternative != facets:
                    product["alternative"] = facets
                    updated_products += 1
                    file_changed = True

                main_product_id = payload.get("id", product.get("id"))
                alt_urls = extract_alternative_urls_from_facets(facets, main_product_id)
                for alt_url, alt_product_id in alt_urls:
                    # Skip alternatives that already exist as scraped products.
                    if alt_product_id in scraped_product_ids:
                        continue

                    if alt_url not in url_set:
                        existing_urls.append(alt_url)
                        url_set.add(alt_url)
                        appended_urls += 1

                if request_delay > 0:
                    time.sleep(request_delay)

            if file_changed:
                save_json_list(product_file, products)
                files_updated += 1
                print(f"Updated {product_file.name}")

            if limit is not None and processed >= limit:
                break

    if appended_urls > 0:
        save_json_list(urls_file, existing_urls)

    save_scraped_product_ids(scraped_ids_file, scraped_product_ids)

    return processed, updated_products, failed, files_updated, appended_urls, len(url_set), len(scraped_product_ids)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Update existing ASOS product files with 'alternative' facets and append new alternative URLs to urls.json"
    )
    parser.add_argument("--data-dir", default="data/asos/data", help="Directory containing product type JSON files")
    parser.add_argument("--urls-file", default="data/asos/urls.json", help="Path to urls.json")
    parser.add_argument("--ids-file", default=SCRAPED_IDS_FILE, help="Path to scraped product IDs file")
    parser.add_argument("--retries", type=int, default=3, help="Retries per product URL")
    parser.add_argument("--timeout", type=int, default=30, help="HTTP request timeout in seconds")
    parser.add_argument("--retry-delay", type=float, default=2.0, help="Delay between retries in seconds")
    parser.add_argument("--request-delay", type=float, default=0.4, help="Delay between product requests in seconds")
    parser.add_argument("--limit", type=int, default=None, help="Optional max number of products to process")
    args = parser.parse_args()

    data_dir = Path(args.data_dir)
    urls_file = Path(args.urls_file)
    ids_file = Path(args.ids_file)

    if not data_dir.exists() or not data_dir.is_dir():
        raise SystemExit(f"Invalid data directory: {data_dir}")

    if not urls_file.exists():
        raise SystemExit(f"urls.json does not exist: {urls_file}")

    print("=" * 70)
    print("UPDATING SCRAPED PRODUCTS")
    print("=" * 70)
    print(f"Data directory: {data_dir}")
    print(f"URLs file:      {urls_file}")
    if args.limit is not None:
        print(f"Limit:          {args.limit} products")
    print()

    started = time.time()
    processed, updated_products, failed, files_updated, appended_urls, final_url_count, total_scraped_ids = update_products_and_urls(
        data_dir=data_dir,
        urls_file=urls_file,
        scraped_ids_file=ids_file,
        retries=args.retries,
        timeout=args.timeout,
        retry_delay=args.retry_delay,
        request_delay=args.request_delay,
        limit=args.limit,
    )
    elapsed = time.time() - started

    print("\n" + "=" * 70)
    print("UPDATE SUMMARY")
    print("=" * 70)
    print(f"Processed products:     {processed}")
    print(f"Products updated:       {updated_products}")
    print(f"Failed fetches:         {failed}")
    print(f"Files updated:          {files_updated}")
    print(f"New URLs appended:      {appended_urls}")
    print(f"Total URLs in file:     {final_url_count}")
    print(f"Tracked scraped IDs:    {total_scraped_ids}")
    print(f"Elapsed time (seconds): {elapsed:.2f}")
    print("=" * 70)


if __name__ == "__main__":
    main()
