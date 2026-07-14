import json
from pathlib import Path


DATA_DIR = Path("data/asos/data")


def count_products_in_file(file_path: Path) -> int:
    """Return number of products in a category file.

    Expects each file to be a JSON list. Returns 0 for unreadable files.
    """
    try:
        with file_path.open("r", encoding="utf-8") as f:
            payload = json.load(f)
    except (OSError, json.JSONDecodeError):
        return 0

    if isinstance(payload, list):
        return len(payload)

    return 0


def main() -> None:
    if not DATA_DIR.exists() or not DATA_DIR.is_dir():
        print(f"Directory not found: {DATA_DIR}")
        return

    counts_by_type = {}

    for file_path in sorted(DATA_DIR.glob("*.json")):
        product_type = file_path.stem
        counts_by_type[product_type] = count_products_in_file(file_path)

    total_products = sum(counts_by_type.values())
    total_types = len(counts_by_type)

    print("ASOS Scraped Product Counts")
    print("=" * 30)
    print(f"Total products: {total_products}")
    print(f"Total types: {total_types}")
    print("Products by type:")

    if not counts_by_type:
        print("- No product files found")
        return

    for product_type, count in counts_by_type.items():
        percentage = (count / total_products * 100) if total_products > 0 else 0.0
        print(f"- {product_type}: {count} ({percentage:.2f}%)")


if __name__ == "__main__":
    main()
