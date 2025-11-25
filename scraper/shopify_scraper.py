import requests
import json
import time
import random

def scrape_shopify_store(store_url, limit=20):
    """
    Scrape products from a Shopify store via its /products.json endpoint.
    
    Args:
        store_url (str): e.g., "https://www.tentree.com"
        limit (int): maximum number of products to scrape

    Returns:
        List of dictionaries with product info similar to eBay format
    """
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

            for p in products:
                if len(results) >= limit:
                    break

                # Shopify prices are under variants
                variants = p.get("variants", [])
                price = variants[0]["price"] if variants else None
                currency = variants[0].get("currency") if variants else None

                # Get first image URL
                images = p.get("images", [])
                image_url = images[0]["src"] if images else None

                results.append({
                    "title": p.get("title"),
                    "price": price,
                    "currency": currency,
                    "item_web_url": f"{store_url.rstrip('/')}/products/{p.get('handle')}",
                    "image_url": image_url,
                    "category": None,
                    "description": p.get("body_html"),
                    "source": store_url
                })

            page += 1
            time.sleep(random.uniform(1, 2))

        except Exception as e:
            print(f"Error scraping {url}: {e}")
            break

    return results
