import json
import glob
import numpy as np
import sys
import httpx
from PIL import Image
import io
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
sys.path.append(str(PROJECT_ROOT))

from db import create_table, insert_item_metadata
from models.fitfinder_ai_service.app.workers.clip_worker.faiss_manager import (
    add_embedding
)

http_client = httpx.AsyncClient(timeout=30.0)

# TEMP: placeholder embedding generator (until you send the real code)
async def generate_embedding(image_url):
    try:
        response = await http_client.get(image_url)

        response.raise_for_status()

        image_bytes = response.content
        image = Image.open(io.BytesIO(image_bytes))

    except httpx.HTTPStatusError as e:
        print(f"---  ERROR: HTTP error while downloading: {e} ---")
        return
    except httpx.RequestError as e:
        print(f"---  ERROR: Network error while downloading: {e} ---")
        return

    # TODO: replace with your CLIP embedding code
    # Must return a numpy array of size (512,)
    return np.random.rand(512).astype("float32")

RAW_DATA_PATH = "data/raw/*.json"

def process_items():
    print("📌 Creating table if not exists...")
    create_table()

    print("📌 Processing JSON files...")
    for file_path in glob.glob(RAW_DATA_PATH):
        print(f"➡️ Reading: {file_path}")

        with open(file_path, "r") as f:
            item = json.load(f)

        # --- Generate embedding (replace later with real model)
        embedding = generate_embedding(item["imageURL"])
        faiss_id = add_embedding(embedding, index_type="store_item")

        # --- Insert metadata into PostgreSQL
        insert_item_metadata(
            faiss_id=faiss_id,
            title=item.get("title", ""),
            price=float(item.get("price", 0)),
            currency=item.get("currency", ""),
            item_web_url=item.get("itemWebURL", ""),
            image_url=item.get("imageURL", ""),
            category=item.get("category", ""),
            description=item.get("description", ""),
            source=item.get("source", "scraper")
        )

        print(f"   ✔ Stored item with FAISS ID {faiss_id}")

    print("🎉 Done!")
