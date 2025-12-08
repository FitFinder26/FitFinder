import numpy as np
from PIL import Image
import requests
import io

from services.sam_service import get_segmented_image, segment_image
from workers.clip_worker.clip_model import get_image_embedding
from workers.clip_worker.faiss_manager import search_top_k_similar


async def run_full_search_pipeline(image_url: str, k=10):
    response = requests.get(image_url)
    image = Image.open(io.BytesIO(response.content)).convert("RGB")

    # get segmented img
    masks, scores, logits = segment_image(image)
    if len(masks) == 0:
        raise ValueError("SAM2 returned no masks.")

    best_mask = masks[int(np.argmax(scores))]
    segmented_img = get_segmented_image(image, best_mask)

    # get embedding
    embedding = get_image_embedding(segmented_img)

    # FAISS search
    distances, indices = search_top_k_similar(
        embedding,
        index_type="store_item",
        k=k
    )

    return {
        "indices": indices.tolist(),
        "distances": distances.tolist()
    }

