"""
Rebuild ASOS local index files from already-scraped product JSON files.

This script does not call any external APIs. It reads products from data/asos/data,
then regenerates:
  - data/asos/scraped_product_ids.json
  - data/asos/alt.json

Rules:
  - scraped_product_ids.json contains only IDs of scraped (main) products.
  - alt.json contains alternative product URLs discovered from each product's
    saved "alternative" field, excluding URLs whose productId is already scraped.
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Optional, Set

DATA_DIR = Path("data/asos")
PRODUCTS_DIR = DATA_DIR / "data"
ALT_FILE = DATA_DIR / "alt.json"
SCRAPED_IDS_FILE = DATA_DIR / "scraped_product_ids.json"


def extract_product_id_from_url(url: str) -> Optional[int]:
    """Extract numeric product ID from ASOS product URL ending with /prd/<id>."""
    match = re.search(r"/prd/(\d+)", url)
    if not match:
        return None
    return int(match.group(1))


def to_int_product_id(value) -> Optional[int]:
    """Normalize product ID to int when possible."""
    if isinstance(value, int):
        return value
    if isinstance(value, str) and value.isdigit():
        return int(value)
    return None


def build_alt_url(brand_name: str, product_name: str, product_id: int) -> str:
    """Build canonical ASOS URL from alternative product metadata."""
    brand_slug = brand_name.strip().lower().replace(" ", "-")
    product_slug = product_name.strip().lower().replace(" ", "-")
    return f"https://www.asos.com/{brand_slug}/{product_slug}/prd/{product_id}"


def collect_products() -> List[Dict]:
    """Load all product objects from data/asos/data/*.json files."""
    all_products: List[Dict] = []

    if not PRODUCTS_DIR.exists():
        return all_products

    for file_path in sorted(PRODUCTS_DIR.glob("*.json")):
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                items = json.load(f)
            if isinstance(items, list):
                all_products.extend([x for x in items if isinstance(x, dict)])
        except (OSError, json.JSONDecodeError):
            continue

    return all_products


def collect_scraped_ids(products: List[Dict]) -> Set[int]:
    """Collect main scraped product IDs from product records."""
    scraped_ids: Set[int] = set()

    for product in products:
        pid = to_int_product_id(product.get("id"))
        if pid is not None:
            scraped_ids.add(pid)

    return scraped_ids


def collect_alt_urls(products: List[Dict], scraped_ids: Set[int]) -> List[str]:
    """Collect deduplicated alternative URLs, excluding already-scraped product IDs."""
    alt_urls: List[str] = []
    seen: Set[str] = set()

    for product in products:
        main_id = to_int_product_id(product.get("id"))
        alt_groups = product.get("alternative", [])

        if not isinstance(alt_groups, list):
            continue

        for group in alt_groups:
            if not isinstance(group, dict):
                continue

            alt_products = group.get("products", [])
            if not isinstance(alt_products, list):
                continue

            for alt_product in alt_products:
                if not isinstance(alt_product, dict):
                    continue

                alt_id = to_int_product_id(alt_product.get("productId"))
                if alt_id is None:
                    continue

                # Skip self references and alternatives already scraped as main products.
                if main_id is not None and alt_id == main_id:
                    continue
                if alt_id in scraped_ids:
                    continue

                brand_name = (alt_product.get("brandName") or "").strip()
                product_name = (alt_product.get("name") or "").strip()
                if not brand_name or not product_name:
                    continue

                url = build_alt_url(brand_name, product_name, alt_id)
                if url not in seen:
                    seen.add(url)
                    alt_urls.append(url)

    return alt_urls


def write_json(path: Path, payload) -> None:
    """Write JSON file with UTF-8 and indentation."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)


def main() -> None:
    products = collect_products()
    scraped_ids = collect_scraped_ids(products)
    alt_urls = collect_alt_urls(products, scraped_ids)

    write_json(SCRAPED_IDS_FILE, sorted(scraped_ids))
    write_json(ALT_FILE, alt_urls)

    print(f"Loaded products:      {len(products)}")
    print(f"Scraped IDs saved:    {len(scraped_ids)} -> {SCRAPED_IDS_FILE}")
    print(f"Alternative URLs:     {len(alt_urls)} -> {ALT_FILE}")


if __name__ == "__main__":
    main()
