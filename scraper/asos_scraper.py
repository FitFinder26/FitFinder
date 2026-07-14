#!/usr/bin/env python3
"""
ASOS product scraper - sitemap -> product JSONL + alternatives -> per-category folders
Produces:
 - data/product_urls.txt      (one URL per line)
 - data/products.jsonl        (one JSON object per line, compact product record)
 - data/products.json         (single compact JSON array)
 - data/asos/categories/*.json (one compact JSON array per category)
 - data/alternatives.json     (JSON mapping: product_url -> [alt_product_url,...])
 - output/<category>/<product_id>.json  (individual product files)
"""

import asyncio
import aiohttp
import json
import random
import re
import time
import xml.etree.ElementTree as ET
from pathlib import Path
from multiprocessing import Process, Queue

# ---------- CONFIG ----------
SITEMAP_INDEX = "https://www.asos.com/product-sitemap-index-COM.xml"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "Accept": "application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}
CONCURRENCY = 6                # reduced simultaneous requests (half of previous 12)
STEP_BATCH_SIZE = 6            # keep in sync with CONCURRENCY
REQUEST_TIMEOUT = 12
MAX_REQUESTS_PER_SECOND = 6.0  # faster request pacing while keeping lower in-flight concurrency
MAX_RETRIES = 2
BACKOFF_BASE_SECONDS = 1.2
BACKOFF_JITTER_SECONDS = 0.5
SITEMAP_REQUEST_DELAY = 0.2
OUTPUT_DIR = Path("output")
DATA_DIR = Path("data/asos")
PRODUCT_URLS_FILE = DATA_DIR / "product_urls.txt"
QUEUE_CURSOR_FILE = DATA_DIR / "product_urls.cursor"
PRODUCTS_JSONL = DATA_DIR / "products.jsonl"
PRODUCTS_JSON = DATA_DIR / "products.json"
CATEGORIES_JSON_DIR = DATA_DIR / "categories"
ALTS_FILE = DATA_DIR / "alternatives.json"
DELAY_BETWEEN_REQUESTS = 0.0   # per-worker extra delay (seconds); set >0 for politeness
# -----------------------------

DATA_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)
CATEGORIES_JSON_DIR.mkdir(parents=True, exist_ok=True)

# -------- helpers --------
def slugify(name: str) -> str:
    """Create a slug that matches ASOS-like URL slugs: lowercase, hyphens for separators."""
    s = name.lower()
    # replace non-alnum by hyphen
    s = re.sub(r"[^\w\s-]", "", s, flags=re.UNICODE)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-{2,}", "-", s)
    s = s.strip("-")
    return s

def sanitize_filename(name: str) -> str:
    safe = re.sub(r'[^A-Za-z0-9 _-]', '', name).strip()
    return safe[:120] or "unknown"

def extract_product_id_from_url(url: str):
    """Extract product ID from ASOS product URL like .../prd/12345678."""
    m = re.search(r"/prd/(\d+)", url)
    return m.group(1) if m else None

def load_cursor(path: Path) -> int:
    """Load queue cursor index from disk."""
    if not path.exists():
        return 0
    try:
        raw = path.read_text(encoding="utf-8").strip()
        return max(0, int(raw)) if raw else 0
    except Exception:
        return 0

def save_cursor(path: Path, cursor: int):
    """Persist queue cursor index to disk."""
    path.write_text(str(max(0, cursor)), encoding="utf-8")

def load_scraped_ids_from_jsonl(path: Path):
    """Read existing JSONL file and return a set of already scraped product IDs."""
    scraped_ids = set()
    if not path.exists():
        return scraped_ids

    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                obj = json.loads(line)
            except json.JSONDecodeError:
                continue
            pid = obj.get("id")
            if pid is not None:
                scraped_ids.add(str(pid))
    return scraped_ids

def convert_jsonl_to_compact_json(jsonl_path: Path, json_path: Path):
    """Convert newline-delimited JSON records into one compact JSON array file."""
    with open(jsonl_path, "r", encoding="utf-8") as src, open(json_path, "w", encoding="utf-8") as dst:
        dst.write("[")
        first = True
        for line in src:
            record = line.strip()
            if not record:
                continue
            if first:
                dst.write(record)
                first = False
            else:
                dst.write("," + record)
        dst.write("]")

def write_category_json_files(jsonl_path: Path, category_dir: Path):
    """Create one JSON file per product category from products.jsonl."""
    category_dir.mkdir(parents=True, exist_ok=True)
    buckets = {}

    with open(jsonl_path, "r", encoding="utf-8") as src:
        for line in src:
            line = line.strip()
            if not line:
                continue
            try:
                product = json.loads(line)
            except json.JSONDecodeError:
                continue

            product_type = product.get("productType") or {}
            category_name = sanitize_filename(product_type.get("name") or "unknown")
            buckets.setdefault(category_name, []).append(product)

    for category_name, products in buckets.items():
        out_path = category_dir / f"{category_name}.json"
        with open(out_path, "w", encoding="utf-8") as out:
            out.write(json.dumps(products, ensure_ascii=False, separators=(",", ":")))

def summarize_products(jsonl_path: Path):
    """Return total products and per-category counts from products.jsonl."""
    category_counts = {}
    total_products = 0

    if not jsonl_path.exists():
        return total_products, category_counts

    with open(jsonl_path, "r", encoding="utf-8") as src:
        for line in src:
            line = line.strip()
            if not line:
                continue
            try:
                product = json.loads(line)
            except json.JSONDecodeError:
                continue

            total_products += 1
            product_type = product.get("productType") or {}
            category = sanitize_filename(product_type.get("name") or "unknown")
            category_counts[category] = category_counts.get(category, 0) + 1

    return total_products, category_counts

def writer_worker(write_queue: Queue):
    """Process dedicated to writing product records to files as they arrive."""
    with open(PRODUCTS_JSONL, "a", encoding="utf-8") as products_out:
        while True:
            item = write_queue.get()
            if item is None:
                break

            if item.get("type") != "product":
                continue

            product_record = item.get("product") or {}
            pid = product_record.get("id")
            if pid is None:
                continue

            products_out.write(json.dumps(product_record, ensure_ascii=False) + "\n")

            category = "unknown"
            ptype = product_record.get("productType") or {}
            if ptype.get("name"):
                category = sanitize_filename(ptype["name"])

            category_dir = OUTPUT_DIR / category
            category_dir.mkdir(parents=True, exist_ok=True)
            product_file = category_dir / f"{pid}.json"
            with open(product_file, "w", encoding="utf-8") as pf:
                pf.write(json.dumps(product_record, ensure_ascii=False, indent=2))

class AsyncRateLimiter:
    """Simple global rate limiter shared across async tasks in one process."""
    def __init__(self, max_requests_per_second: float):
        self.min_interval = 1.0 / max_requests_per_second if max_requests_per_second > 0 else 0.0
        self._lock = asyncio.Lock()
        self._last_request_at = 0.0

    async def wait_turn(self):
        if self.min_interval <= 0:
            return
        async with self._lock:
            now = time.monotonic()
            wait_for = self.min_interval - (now - self._last_request_at)
            if wait_for > 0:
                await asyncio.sleep(wait_for)
            self._last_request_at = time.monotonic()

async def fetch_text(session: aiohttp.ClientSession, url: str, rate_limiter: AsyncRateLimiter) -> tuple[int, str]:
    last_status = 0
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            await rate_limiter.wait_turn()
            async with session.get(url, timeout=REQUEST_TIMEOUT) as resp:
                status = resp.status
                text = await resp.text(errors="ignore")

                if status in (429, 500, 502, 503, 504) and attempt < MAX_RETRIES:
                    backoff = (BACKOFF_BASE_SECONDS ** attempt) + random.uniform(0, BACKOFF_JITTER_SECONDS)
                    await asyncio.sleep(backoff)
                    last_status = status
                    continue

                return status, text
        except Exception:
            if attempt < MAX_RETRIES:
                backoff = (BACKOFF_BASE_SECONDS ** attempt) + random.uniform(0, BACKOFF_JITTER_SECONDS)
                await asyncio.sleep(backoff)
                continue
            return last_status, ""

    return last_status, ""

def _extract_js_expression_until_semicolon(text: str, start_idx: int):
    """Extract JS expression from start index until top-level semicolon."""
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

    return text[i:].strip() if i < len(text) else None

def find_last_assignment_block(text: str, var_name: str):
    """Find last assignment to var_name and return RHS JS expression."""
    pattern = re.compile(rf"{re.escape(var_name)}\s*=")
    matches = list(pattern.finditer(text))
    if not matches:
        return None

    # Walk backwards to find the latest valid assignment expression.
    for m in reversed(matches):
        rhs = _extract_js_expression_until_semicolon(text, m.end())
        if rhs:
            return rhs
    return None

def extract_js_var(html: str, var_name: str):
    """test.py-compatible wrapper: extract + parse a JS-assigned variable."""
    raw = find_last_assignment_block(html, var_name)
    if not raw:
        return None
    return parse_js_value(raw)

def parse_js_value(raw: str):
    """Try to parse JSON-like JS value. Returns Python object or None."""
    if raw is None:
        return None
    # JS may contain single-quoted strings or trailing commas; try to make it JSON-safe
    s = raw.strip()

    # ASOS often serializes JSON in single-quoted JS strings: '...json...'
    if len(s) >= 2 and s[0] == "'" and s[-1] == "'":
        inner = s[1:-1]
        inner = inner.replace("\\'", "'")
        inner = inner.replace('\\"', '"')
        try:
            return json.loads(inner)
        except Exception:
            pass

    # quick check for primitives
    if s in ("null", "undefined"):
        return None
    # Replace JS-style single quotes with double quotes only when safe is hard; attempt direct json.loads first
    try:
        parsed = json.loads(s)
        # Some assignments are JSON serialized as a string literal.
        if isinstance(parsed, str) and parsed and parsed[0] in "[{":
            try:
                return json.loads(parsed)
            except Exception:
                return parsed
        return parsed
    except Exception:
        # attempt minor normalization: replace single quotes with double quotes and remove trailing commas
        t = s
        t = re.sub(r",\s*([}\]])", r"\1", t)  # remove trailing commas
        # best-effort for simple JS object literals: quote bare keys
        t = re.sub(r"([{,]\s*)([A-Za-z_$][A-Za-z0-9_$]*)(\s*:)", r'\1"\2"\3', t)
        # convert unquoted keys to quoted keys is complex — hope ASOS emits valid JSON in these assignments
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

def extract_json_ld_product(html: str):
    """Best-effort fallback from Product JSON-LD blocks."""
    scripts = re.findall(
        r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',
        html,
        flags=re.IGNORECASE | re.DOTALL,
    )
    for raw in scripts:
        raw = raw.strip()
        if not raw:
            continue
        try:
            data = json.loads(raw)
        except Exception:
            continue

        candidates = data if isinstance(data, list) else [data]
        for item in candidates:
            if not isinstance(item, dict):
                continue
            typ = item.get("@type")
            if typ == "Product" or (isinstance(typ, list) and "Product" in typ):
                offers = item.get("offers") or {}
                if isinstance(offers, list):
                    offers = offers[0] if offers else {}
                images = item.get("image") or []
                if isinstance(images, str):
                    images = [images]
                return {
                    "name": item.get("name"),
                    "images": images,
                    "currentPrice": offers.get("price"),
                    "currency": offers.get("priceCurrency"),
                    "brand": (offers.get("brand") if isinstance(offers.get("brand"), str) else None),
                }
    return None

# -------- scraping pipeline --------
async def process_product(
    session: aiohttp.ClientSession,
    url: str,
    sem: asyncio.Semaphore,
    rate_limiter: AsyncRateLimiter,
):
    async with sem:
        status, html = await fetch_text(session, url, rate_limiter)
        if status >= 400:
            return {"status": "invalid", "url": url, "httpStatus": status}
        if status != 200 or not html:
            return {"status": "failed", "url": url, "httpStatus": status}

        pid_from_url = extract_product_id_from_url(url)

        # Use the same extraction pattern used by test.py for product URL pages.
        product = extract_js_var(html, "window.asos.pdp.config.product")
        stock = extract_js_var(html, "window.asos.pdp.config.stockPriceResponse")
        ratings = extract_js_var(html, "window.asos.pdp.config.ratings")

        # If stock not in page try API fallback (async)
        fallback_pid = None
        if product and isinstance(product.get("id"), (int, str)):
            fallback_pid = str(product["id"])
        elif pid_from_url:
            fallback_pid = str(pid_from_url)

        if not stock and fallback_pid:
            pid = fallback_pid
            api_url = f"https://www.asos.com/api/product/catalogue/v4/stockprice?productIds={pid}&store=ROW&currency=USD"
            for attempt in range(1, MAX_RETRIES + 1):
                try:
                    await rate_limiter.wait_turn()
                    async with session.get(api_url, headers=HEADERS, timeout=REQUEST_TIMEOUT) as r:
                        if r.status == 200:
                            stock = await r.json()
                            break
                        if r.status in (429, 500, 502, 503, 504) and attempt < MAX_RETRIES:
                            backoff = (BACKOFF_BASE_SECONDS ** attempt) + random.uniform(0, BACKOFF_JITTER_SECONDS)
                            await asyncio.sleep(backoff)
                            continue
                        break
                except Exception:
                    if attempt < MAX_RETRIES:
                        backoff = (BACKOFF_BASE_SECONDS ** attempt) + random.uniform(0, BACKOFF_JITTER_SECONDS)
                        await asyncio.sleep(backoff)
                        continue
                    stock = None

        pid = (product.get("id") if isinstance(product, dict) else None) or pid_from_url
        # stock is usually a list; find matching product entry
        stock_item = None
        if isinstance(stock, list):
            for x in stock:
                # compare as strings to be safe
                if str(x.get("productId")) == str(pid):
                    stock_item = x
                    break
        elif isinstance(stock, dict) and stock.get("productId") == pid:
            stock_item = stock

        current = None
        previous = None
        currency = None
        sizes = []
        if stock_item:
            pp = stock_item.get("productPrice", {})
            cur = pp.get("current") or {}
            prev = pp.get("previous") or {}
            current = cur.get("value")
            previous = prev.get("value")
            currency = pp.get("currency")
            # variants
            for v in stock_item.get("variants", []):
                sizes.append({
                    "variantId": v.get("variantId"),
                    "sizeName": v.get("sizeName") or v.get("size"),
                    "isInStock": bool(v.get("isInStock"))
                })

        # Fallback parse from JSON-LD when structured PDP object is incomplete.
        ld_product = extract_json_ld_product(html)

        name = product.get("name") if isinstance(product, dict) else None
        images = [img.get("url") for img in (product.get("images") or [])] if isinstance(product, dict) else []
        if not name and ld_product:
            name = ld_product.get("name")
        if (not images) and ld_product:
            images = ld_product.get("images") or []
        if current is None and ld_product:
            current = ld_product.get("currentPrice")
        if not currency and ld_product:
            currency = ld_product.get("currency")

        # Only require core fields; all other missing attributes are kept as null.
        has_minimum_required = bool(name) and bool(images) and (current is not None) and bool(currency)
        if not has_minimum_required:
            return {"status": "failed", "url": url, "httpStatus": status}

        # Build final product record (pruned to useful fields)
        product_record = {
            "url": url,
            "id": pid,
            "website": "asos",
            "name": name,
            "gender": (product.get("gender") if isinstance(product, dict) else None),
            "brand": (product.get("brandName") if isinstance(product, dict) else None),
            "isNoSize": (product.get("isNoSize") if isinstance(product, dict) else None),
            "isOneSize": (product.get("isOneSize") if isinstance(product, dict) else None),
            "isDiscontinued": (product.get("isDiscontinued") if isinstance(product, dict) else None),
            "productType": (product.get("productType") if isinstance(product, dict) else None),   # dict {id,name}
            "images": images,
            "sizes": sizes,
            "currentPrice": current,
            "previousPrice": previous,
            "currency": currency,
            "rating": (ratings.get("averageOverallRating") if isinstance(ratings, dict) else None),
            "timestamp": int(time.time())
        }

        # Build alternatives mapping using product['facetGroup'] SupplierColour facet when available
        alt_urls = []
        # current product slug (derived from URL or name)
        # extract slug from URL: the segment before '/prd/<id>'
        try:
            m = re.search(r"/([^/]+)/prd/" + re.escape(str(pid)), url) if pid is not None else None
            if m:
                current_slug = m.group(1)
            else:
                # fallback to slugifying product name
                current_slug = slugify(name or "")
        except Exception:
            current_slug = slugify(name or "")

        # check facetGroup structure
        facet_group = (product.get("facetGroup") if isinstance(product, dict) else {}) or {}
        facets = facet_group.get("facets") or []
        for f in facets:
            if f.get("type") == "SupplierColour" and isinstance(f.get("products"), list):
                for p in f.get("products"):
                    # p has productId and name
                    alt_pid = p.get("productId")
                    alt_name = p.get("name") or ""
                    alt_slug = slugify(alt_name)
                    # construct alt URL by replacing slug part of original url with alt_slug
                    alt_url = url.replace(current_slug, alt_slug)
                    # ensure we also replace the product id if necessary
                    alt_url = re.sub(r"/prd/\d+$", f"/prd/{alt_pid}", alt_url)
                    alt_urls.append(alt_url)
        # ensure unique and exclude self
        alt_urls = [u for u in dict.fromkeys(alt_urls) if u and u != url]

        # optional polite delay
        if DELAY_BETWEEN_REQUESTS:
            await asyncio.sleep(DELAY_BETWEEN_REQUESTS)

        return {
            "status": "success",
            "url": url,
            "id": str(pid),
            "product": product_record,
            "altUrls": alt_urls,
        }

async def main():
    # 1) Get sitemap list (sync using requests for reliability)
    import requests
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

    # Resume support: skip URLs that map to product IDs already present in products.jsonl.
    scraped_ids = load_scraped_ids_from_jsonl(PRODUCTS_JSONL)
    if scraped_ids:
        original_count = len(product_urls)
        product_urls = [
            u for u in product_urls
            if (extract_product_id_from_url(u) not in scraped_ids)
        ]
        skipped = original_count - len(product_urls)
        print(f"Resume mode: skipped {skipped} already scraped product URLs.")

    # Persistent queue: resume from existing queue file + cursor when possible.
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

    # Optionally you can limit for testing:
    # product_urls = product_urls[:1000]

    # Prepare async session and semaphore
    sem = asyncio.Semaphore(CONCURRENCY)
    alternatives_map = {}
    # ensure products.jsonl exists (append mode will create)
    open(PRODUCTS_JSONL, "a", encoding="utf-8").close()

    # Two-process model: this process fetches APIs, writer process persists results.
    write_queue = Queue(maxsize=2000)
    writer_process = Process(target=writer_worker, args=(write_queue,))
    writer_process.start()

    # Rebuild URL set from loaded queue and add any fresh sitemap URLs not yet queued.
    new_seed_urls_added = 0
    for u in product_urls:
        if u not in queue_url_set:
            queue_url_set.add(u)
            queue_urls.append(u)
            new_seed_urls_added += 1

    # Keep queue file in sync if new sitemap URLs were appended to memory.
    if new_seed_urls_added > 0:
        with open(PRODUCT_URLS_FILE, "w", encoding="utf-8") as f:
            for u in queue_urls:
                f.write(u + "\n")
    rate_limiter = AsyncRateLimiter(MAX_REQUESTS_PER_SECOND)

    conn = aiohttp.TCPConnector(limit_per_host=CONCURRENCY)
    timeout = aiohttp.ClientTimeout(total=REQUEST_TIMEOUT)
    async with aiohttp.ClientSession(headers=HEADERS, connector=conn, timeout=timeout) as session:
        success_count = 0
        invalid_count = 0
        failed_count = 0

        processed_attempts = 0
        started_at = time.monotonic()
        with open(PRODUCT_URLS_FILE, "a", encoding="utf-8") as queue_file:
            while queue_cursor < len(queue_urls):
                batch_end = min(queue_cursor + STEP_BATCH_SIZE, len(queue_urls))
                batch_urls = queue_urls[queue_cursor:batch_end]

                batch_tasks = [
                    process_product(session, u, sem, rate_limiter)
                    for u in batch_urls
                ]
                chunk = await asyncio.gather(*batch_tasks)
                processed_attempts += len(batch_urls)
                queue_cursor = batch_end
                save_cursor(QUEUE_CURSOR_FILE, queue_cursor)

                for result in chunk:
                    status = (result or {}).get("status") if isinstance(result, dict) else "failed"
                    if status == "success":
                        success_count += 1
                        write_queue.put({"type": "product", "product": result.get("product")})

                        source_url = result.get("url")
                        alt_urls = result.get("altUrls") or []
                        if source_url and alt_urls:
                            alternatives_map[source_url] = alt_urls

                        # URL file works as queue: append newly discovered alternative URLs.
                        for alt_url in alt_urls:
                            alt_pid = extract_product_id_from_url(alt_url)
                            if not alt_url or alt_url in queue_url_set:
                                continue
                            if alt_pid and alt_pid in scraped_ids:
                                continue
                            queue_url_set.add(alt_url)
                            queue_urls.append(alt_url)
                            queue_file.write(alt_url + "\n")
                    elif status == "invalid":
                        invalid_count += 1
                    else:
                        failed_count += 1

                queue_file.flush()

                elapsed = max(time.monotonic() - started_at, 1e-6)
                rate = processed_attempts / elapsed
                pending = len(queue_urls) - queue_cursor
                eta_seconds = int(pending / rate) if rate > 0 else -1
                eta_text = f"{eta_seconds}s" if eta_seconds >= 0 else "unknown"

                print(
                    f"Processed {processed_attempts} attempts "
                    f"| pending={pending} "
                    f"| success={success_count} invalid={invalid_count} failed={failed_count} "
                    f"| rate={rate:.2f}/s ETA~{eta_text}"
                )

    write_queue.put(None)
    writer_process.join()

    # Save alternatives map
    with open(ALTS_FILE, "w", encoding="utf-8") as af:
        af.write(json.dumps(alternatives_map, indent=2, ensure_ascii=False))

    convert_jsonl_to_compact_json(PRODUCTS_JSONL, PRODUCTS_JSON)
    write_category_json_files(PRODUCTS_JSONL, CATEGORIES_JSON_DIR)

    total_products, category_counts = summarize_products(PRODUCTS_JSONL)
    print(f"Final stats: totalProducts={total_products} totalCategories={len(category_counts)}")
    for category, count in sorted(category_counts.items(), key=lambda x: (-x[1], x[0])):
        print(f"  {category}: {count}")

    print(
        "Done. Products JSONL:", PRODUCTS_JSONL,
        "Products JSON:", PRODUCTS_JSON,
        "Category JSON dir:", CATEGORIES_JSON_DIR,
        "Alternatives:", ALTS_FILE,
    )

if __name__ == "__main__":
    asyncio.run(main())