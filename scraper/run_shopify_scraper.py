import json
import os
import time
import random
import requests

RAW_DIR = "data/raw"
os.makedirs(RAW_DIR, exist_ok=True)

# Shopify stores
SHOPIFY_STORES = [
    "https://www.tentree.com",
    "https://www.adoredvintage.com"
]

# Read queries
with open("scraper/queries.txt", "r") as f:
    queries = [line.strip() for line in f if line.strip()]

def scrape_shopify_store(store_url, limit=50):
    """Scrape products from Shopify store /products.json endpoint"""
    results = []
    page = 1
    per_page = 50

    while len(results) < limit:
        url = f"{store_url.rstrip('/')}/products.json?limit={per_page}&page={page}"
        try:
            response = requests.get(url, timeout=15)
            response.raise_for_status()
            data = response.json()
            products = data.get("products", [])
            if not products:
                break

            results.extend(products[: max(0, limit - len(results))])
            page += 1
            time.sleep(random.uniform(0.5, 1.5))

        except Exception as e:
            print(f"Error scraping {store_url}: {e}")
            break

    return results

def filter_products(products, query, store_url):
    """Filter products that match query in title or description"""
    filtered = []
    for p in products:
        title = p.get("title", "").lower()
        description = p.get("body_html", "").lower()
        if query.lower() in title or query.lower() in description:
            # Get first variant for price
            variants = p.get("variants", [])
            price = variants[0]["price"] if variants else None
            currency = variants[0].get("currency") if variants else None
            images = p.get("images", [])
            image_url = images[0]["src"] if images else None

            filtered.append({
                "title": p.get("title"),
                "price": price,
                "currency": currency,
                "item_web_url": f"{store_url.rstrip('/')}/products/{p.get('handle')}",
                "image_url": image_url,
                "category": None,
                "description": p.get("body_html"),
                "source": store_url
            })
    return filtered

if __name__ == "__main__":
    for query in queries:
        combined_results = []
        print(f"Searching query: '{query}' in all Shopify stores...")

        for store in SHOPIFY_STORES:
            print(f"  Scraping store: {store}")
            products = scrape_shopify_store(store, limit=100)
            matched = filter_products(products, query, store)
            print(f"    Found {len(matched)} matching items")
            combined_results.extend(matched)

        # Save combined results in JSON
        fname = f"{query.replace(' ', '_')}.json"
        output_path = os.path.join(RAW_DIR, fname)

        # Load existing items if any
        if os.path.exists(output_path):
            with open(output_path, "r", encoding="utf-8") as f:
                existing_items = json.load(f)
        else:
            existing_items = []

        combined = existing_items + combined_results

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(combined, f, indent=2, ensure_ascii=False)

        print(f"Saved {len(combined_results)} new items → {output_path}\n")
