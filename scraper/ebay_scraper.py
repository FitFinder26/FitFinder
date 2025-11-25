# scraper/ebay_scraper.py
import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# eBay sandbox API endpoint
EBAY_API_ENDPOINT = "https://api.ebay.com/buy/browse/v1/item_summary/search"

# Get credentials
EBAY_APP_ID = os.getenv("EBAY_APP_ID")

def scrape_ebay_items(query: str, limit: int = 10):
    """
    Fetch items from eBay API based on a search query.
    
    Args:
        query (str): Search term.
        limit (int): Max number of items to return.

    Returns:
        results: A list of dictionaries containing item info.
    """

    headers = {
        "Authorization": f"Bearer {get_oauth_token()}",
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        "X-EBAY-C-ENDUSERCTX": "contextualLocation=country=US"
    }

    params = {
        "q": query,
        "limit": limit,
        "fieldgroups": "EXTENDED"
    }

    response = requests.get(EBAY_API_ENDPOINT, headers=headers, params=params)
    response.raise_for_status()

    data = response.json()
    results = []

    for item in data.get("itemSummaries", []):
        categories = item.get("categories", [])
        category_name = categories[0]["categoryName"] if categories else None

        results.append({
            "title": item.get("title"),
            "price": item.get("price", {}).get("value"),
            "currency": item.get("price", {}).get("currency"),
            "item_web_url": item.get("itemWebUrl"),
            "image_url": item.get("image", {}).get("imageUrl"),
            "category": category_name,
            "description": item.get("shortDescription"),
            "source": "ebay"
    })

    return results


def get_oauth_token():
    """
    Fetch OAuth token for eBay Sandbox API using App ID + Cert ID.
    Returns: access token string.
    """
    token_url = "https://api.ebay.com/identity/v1/oauth2/token"

    EBAY_CLIENT_ID = os.getenv("EBAY_APP_ID")
    EBAY_CLIENT_SECRET = os.getenv("EBAY_CERT_ID")

    data = {
        "grant_type": "client_credentials",
        "scope": "https://api.ebay.com/oauth/api_scope"
    }

    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    response = requests.post(
        token_url,
        data=data,
        auth=(EBAY_CLIENT_ID, EBAY_CLIENT_SECRET),
        headers=headers
    )

    if response.status_code != 200:
        print("Failed to get OAuth token:", response.text)

    response.raise_for_status()
    return response.json()["access_token"]

