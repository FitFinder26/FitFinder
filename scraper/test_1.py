import requests
from bs4 import BeautifulSoup
import json
import re
import time


url = "https://www.asos.com/asos-design/asos-design-fuller-bust-high-neck-vest-in-black/prd/205903946"

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

def extract_js_var(html, var_name):

    pattern = rf"{var_name}\s*=\s*(.*?);"

    matches = re.findall(pattern, html, re.DOTALL)

    if not matches:
        return None

    # take last occurrence
    raw = matches[-1]

    try:
        return json.loads(raw)
    except:
        return raw


def scrape_product(url):

    r = requests.get(url, headers=headers)

    if r.status_code == 410:
        return None

    soup = BeautifulSoup(r.text, "lxml")

    html = str(soup)

    product = extract_js_var(html, "window.asos.pdp.config.product")
    stock = requests.get(f"https://www.asos.com/api/product/catalogue/v4/stockprice?productIds={product['id']}&store=ROW&currency=USD&keyStoreDataversion=qx71qrg-45&country=EG", headers=headers).json()
    ratings = extract_js_var(html, "window.asos.pdp.config.ratings")

    stock_item = next(
        (x for x in stock if x["productId"] == product["id"]),
        None
    )

    currency = None
    current = None
    previous = None

    if stock_item:
        current = stock_item["productPrice"]["current"]["value"]
        previous = stock_item["productPrice"]["previous"]["value"]
        currency = stock_item["productPrice"]["currency"]

    return {
        "url": url,
        "id": product["id"],
        "name": product["name"],
        "gender": product["gender"],
        "isNoSize": product["isNoSize"],
        "brand": product["brandName"],
        "isOneSize": product["isOneSize"],
        "isDiscontinued": product["isDiscontinued"],
        "productType": product["productType"],
        "images": [x["url"] for x in product["images"]],
        "alternative": product["facetGroup"]["facets"],
        "currentPrice": current,
        "previousPrice": previous,
        "currency": currency,
        "rating": ratings.get("averageOverallRating"),
        "provider": "asos"
    }

start_time = time.time_ns()
data = scrape_product(url)
elapsed_seconds = (time.time_ns() - start_time) / 1e9


print(data)

with open("data/test.json", "w") as f:
    f.write(json.dumps(data, indent=4))
print(f"Done. Time taken: {elapsed_seconds:.2f} seconds")