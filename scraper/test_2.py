import requests
import xml.etree.ElementTree as ET


sitemap_index = "https://www.asos.com/product-sitemap-index-COM.xml"
headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

print("Fetching sitemap index...")
r = requests.get(sitemap_index, headers=headers, timeout=30)
root = ET.fromstring(r.content)

print("Sitemap index fetched and parsed.")
ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}

sitemaps = []
print("Extracting sitemaps from index...")
for sitemap in root.findall("ns:sitemap", ns):
    loc = sitemap.find("ns:loc", ns).text
    sitemaps.append(loc)

print("Sitemaps extracted.")
print("Total sitemaps:", len(sitemaps))
print(sitemaps[:5])

print("Fetching sitemaps...")
product_urls = []
for sitemap in sitemaps:
    print(f"Fetching {sitemap}...")
    r = requests.get(sitemap, headers=headers, timeout=30)
    root = ET.fromstring(r.content)
    print("Fetched and parsed sitemap.")

    for url in root.findall("ns:url", ns):
        loc = url.find("ns:loc", ns).text
        product_urls.append(loc)

# print("Done.")
print("Total sitemaps processed:", len(sitemaps))
print("Total product URLs found:", len(product_urls))
print("Sample product URLs:")
for url in range(0, 110, 5):
    print(product_urls[url])
