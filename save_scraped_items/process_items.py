import json
import glob
import numpy as np
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
sys.path.append(str(PROJECT_ROOT))

from db import create_table, insert_item_metadata
from models.fitfinder_ai_service.app.workers.clip_worker.faiss_manager import (
    add_embedding
)



# TEMP: placeholder embedding generator (until you send the real code)
def generate_embedding(image_url):
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
