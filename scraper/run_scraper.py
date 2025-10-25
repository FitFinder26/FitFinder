# scraper/run_scraper.py
from scraper.ebay_scraper import scrape_ebay_items
import json
import os

if __name__ == "__main__":
    with open("scraper/queries.txt", "r") as f:
        queries = [line.strip() for line in f if line.strip()]

    os.makedirs("data/raw", exist_ok=True)

    for query in queries:
        print(f"Scraping eBay for '{query}'...")

        items = scrape_ebay_items(query, limit=20)

        output_path = f"data/raw/{query.replace(' ', '_')}.json"
        with open(output_path, "w") as f:
            json.dump(items, f, indent=2)

        print(f"Saved {len(items)} items to {output_path}")

