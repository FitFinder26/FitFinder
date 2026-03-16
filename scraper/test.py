import requests
import json
import re


url = "https://www.asos.com/asos-design/asos-design-skinny-wool-tuxedo-suit-jacket-in-navy/prd/6262702"

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

def extract_js_expression_until_semicolon(text, start_idx):
    i = start_idx
    while i < len(text) and text[i].isspace():
        i += 1
    if i >= len(text):
        return None

    depth_brace = 0
    depth_bracket = 0
    depth_paren = 0
    in_string = None
    escaped = False

    for j in range(i, len(text)):
        ch = text[j]
        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == in_string:
                in_string = None
            continue

        if ch in ('"', "'"):
            in_string = ch
            continue
        if ch == "{":
            depth_brace += 1
            continue
        if ch == "}":
            depth_brace = max(0, depth_brace - 1)
            continue
        if ch == "[":
            depth_bracket += 1
            continue
        if ch == "]":
            depth_bracket = max(0, depth_bracket - 1)
            continue
        if ch == "(":
            depth_paren += 1
            continue
        if ch == ")":
            depth_paren = max(0, depth_paren - 1)
            continue

        if ch == ";" and depth_brace == 0 and depth_bracket == 0 and depth_paren == 0:
            return text[i:j].strip()

    return text[i:].strip()


def extract_js_var(html, var_name):
    pattern = re.compile(rf"{re.escape(var_name)}\s*=")
    matches = list(pattern.finditer(html))
    if not matches:
        return None

    raw = None
    for m in reversed(matches):
        raw = extract_js_expression_until_semicolon(html, m.end())
        if raw:
            break

    if not raw:
        return None

    try:
        parsed = json.loads(raw)
        if isinstance(parsed, str) and parsed and parsed[0] in "[{":
            try:
                return json.loads(parsed)
            except Exception:
                return parsed
        return parsed
    except Exception:
        t = re.sub(r",\s*([}\]])", r"\1", raw)
        t = re.sub(r"([{,]\s*)([A-Za-z_$][A-Za-z0-9_$]*)(\s*:)", r'\1"\2"\3', t)
        try:
            parsed = json.loads(t)
            if isinstance(parsed, str) and parsed and parsed[0] in "[{":
                try:
                    return json.loads(parsed)
                except Exception:
                    return parsed
            return parsed
        except Exception:
            return None


def scrape_product(url):

    r = requests.get(url, headers=headers)

    if r.status_code >= 400:
        return None

    html = r.text

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
        "alternative": product["facetGroup"]["facets"] if product.get("facetGroup") else [],
        "currentPrice": current,
        "previousPrice": previous,
        "currency": currency,
        "rating": ratings.get("averageOverallRating")
    }

data = scrape_product(url)


# print(data)
with open("data/test.json", "w") as f:
    f.write(json.dumps(data, indent=4))
print("Done.")


# data = json.loads(page_js)

# product = {
#  "name": data["name"],
# #  "gender": data["gender"],
# #  "isDiscontinued": data["isDiscontinued"],
# #  "productType": data["product"]["productType"],
# #  "brand": data["brandName"],
# #  "price": data["stockPriceResponse"],
# #  "images": data["images"].map(lambda x: x["url"]).toList(),
# #  "alternative": data["facetGroup"]["facets"],
# }