import requests
import json
import re
import time
import xml.etree.ElementTree as ET

from scraper.asos_scraper import HEADERS, REQUEST_TIMEOUT, SITEMAP_INDEX, SITEMAP_REQUEST_DELAY
print("Fetching sitemap index...")
r = requests.get(SITEMAP_INDEX, headers=HEADERS, timeout=REQUEST_TIMEOUT)
root = ET.fromstring(r.content)
ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
sitemaps = [s.find("ns:loc", ns).text for s in root.findall("ns:sitemap", ns)]

print(f"Found {len(sitemaps)} product sitemaps. Extracting product URLs (this may take a while)...")
product_urls = []
for sitemap in sitemaps:
    print("  parsing", sitemap)
    rr = requests.get(sitemap, headers=HEADERS, timeout=REQUEST_TIMEOUT)
    try:
        rt = ET.fromstring(rr.content)
    except Exception as e:
        continue
    for url_el in rt.findall("ns:url", ns):
        loc = url_el.find("ns:loc", ns).text
        product_urls.append(loc)
    # Small delay between sitemap requests to avoid bursty sync traffic.
    time.sleep(SITEMAP_REQUEST_DELAY)

print(f"Total product URLs discovered: {len(product_urls)}")

queue_urls = []
queue_url_set = set()
queue_cursor = 0

can_resume_queue = PRODUCT_URLS_FILE.exists() and QUEUE_CURSOR_FILE.exists()
if can_resume_queue:
    with open(PRODUCT_URLS_FILE, "r", encoding="utf-8") as f:
        for line in f:
            u = line.strip()
            if not u:
                continue
            if u in queue_url_set:
                continue
            queue_url_set.add(u)
            queue_urls.append(u)
    queue_cursor = load_cursor(QUEUE_CURSOR_FILE)
    queue_cursor = min(queue_cursor, len(queue_urls))

# Start a fresh queue when no resumable state exists.
if not queue_urls:
    queue_urls = list(dict.fromkeys(product_urls))
    queue_url_set = set(queue_urls)
    queue_cursor = 0
    with open(PRODUCT_URLS_FILE, "w", encoding="utf-8") as f:
        for u in queue_urls:
            f.write(u + "\n")
    save_cursor(QUEUE_CURSOR_FILE, queue_cursor)

print(f"Queue state: total={len(queue_urls)} cursor={queue_cursor} pending={len(queue_urls) - queue_cursor}")