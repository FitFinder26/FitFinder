import asyncio
from enum import verify
import io
import random
from PIL import Image
from typing import Any, List, Optional
from app.services.sam_service import SAM_service
import httpx
import numpy as np


http_client = httpx.AsyncClient(timeout=30.0)

async def download_image(image_url: str, job_id: str) -> Optional[Image.Image]:
    print(f"--- [Segment {job_id}] Downloading image from: {image_url} ---")
    try:
        response = await http_client.get(image_url)

        response.raise_for_status()

        image_bytes = response.content
        image = Image.open(io.BytesIO(image_bytes))
        print(f"--- [Segment {job_id}] Downloaded {len(image_bytes)} bytes. ---")
        return image

    except httpx.HTTPStatusError as e:
        print(f"--- [Segment {job_id}] ERROR: HTTP error while downloading: {e} ---")
    except httpx.RequestError as e:
        print(f"--- [Segment {job_id}] ERROR: Network error while downloading: {e} ---")
    return None



async def image_segment_job(
        job_id: str,
        sam_instance: SAM_service,
        image_url: str,
        TRUSTED_HOST: str,
        callback_url: Optional[str] = None
        ):
    """
    This is background worker function.
    It runs *after* the API response has been sent.

    It will download the image from the URL and process it.

    this will be changed to Redis job worker in the future
    """
    print(f"--- [Segment {job_id}] STARTING ---")

    try:
        url_host = httpx.URL(image_url).host
        if url_host != TRUSTED_HOST:
            print(f"--- [Segment {job_id}] ERROR: Untrusted URL host: {url_host} ---")
            return
    except Exception as e:
        print(f"--- [Segment {job_id}] ERROR: Invalid URL: {e} ---")
        return

    print(f"--- [Segment {job_id}] Downloading image from: {image_url} ---")
    try:
        response = await http_client.get(image_url)
        response.raise_for_status()

        image_bytes = response.content

        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        print(f"--- [Segment {job_id}] Downloaded {len(image_bytes)} bytes, Mode={image.mode}, Size={image.size} ---")

    except httpx.HTTPStatusError as e:
        print(f"--- [Segment {job_id}] ERROR: HTTP error while downloading: {e} ---")
        return
    except httpx.RequestError as e:
        print(f"--- [Segment {job_id}] ERROR: Network error while downloading: {e} ---")
        return

    # Here, we would pass 'image_bytes' to ML model,
    # image processing library, etc.
    print(f"--- [Segment {job_id}] Processing image... ---")

    masks , boxes, _ = sam_instance.segment_with_prompt(image, "clothes. shoe. shirt. glove. pants. boot.".lower())

    print(f"--- [Segment Job {job_id}] COMPLETED ---")

    if callback_url:
        print(f"--- [Segment {job_id}] Notifying callback URL: {callback_url} ---")
        # Simulate some results
        if len(masks.shape) == 4:
            masks = np.squeeze(masks, axis=1)
        masks = sam_instance.squeeze_mask(masks).astype(np.uint8)

        results = {
            "job_id": job_id,
            "status": "segmented",
            "masks": [masks[i].tolist() for i in range(len(masks))],
            "boxes": boxes.tolist()
        }

        try:
            response = await http_client.put(callback_url, json=results)
            response.raise_for_status()
            print(f"--- [Segment {job_id}] Callback notification successful (Status: {response.status_code}) ---")
        except httpx.HTTPStatusError as e:
            # non-2xx HTTP response
            print(f"--- [Segment {job_id}] HTTPStatusError: {e.response.status_code}, Body: {e.response.text} ---")
        except httpx.ReadError as e:
            # network read failure (like your case)
            print(f"--- [Segment {job_id}] ReadError: {str(e)} ---")
        except httpx.RequestError as e:
            # any other network issue
            print(f"--- [Segment {job_id}] RequestError: {type(e).__name__}: {str(e)} ---")


async def image_resegment_job(
        job_id: str,
        sam_instance: SAM_service,
        image_url: str,
        TRUSTED_HOST: str,
        pos_points: List[List[int]],
        neg_points: List[List[int]],
        boxes: Optional[List[List[int]]] = None,
        callback_url: Optional[str] = None
        ):
    """
    This is  background worker function for re-segment job.
    It runs *after* the API response has been sent.

    It will download the image from the URL and process it using the points.

    this will be changed to Redis job worker in the future.
    """
    print(f"--- [Re-Segment Job {job_id}] STARTING ---")
    print(f"--- [Re-Segment Job {job_id}] Received {len(pos_points) + len(neg_points)} points ---")


    try:
        url_host = httpx.URL(image_url).host
        if url_host != TRUSTED_HOST:
            print(f"--- [Re-Segment Job {job_id}] ERROR: Untrusted URL host: {url_host} ---")
            return
    except Exception as e:
        print(f"--- [Re-Segment Job {job_id}] ERROR: Invalid URL: {e} ---")
        return

    # 2. Download the image
    print(f"--- [Re-Segment Job {job_id}] Downloading image from: {image_url} ---")
    try:
        response = await http_client.get(image_url)
        response.raise_for_status()

        image_bytes = response.content

        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        print(f"--- [Segment {job_id}] Downloaded {len(image_bytes)} bytes, Mode={image.mode}, Size={image.size} ---")

    except httpx.HTTPStatusError as e:
        print(f"--- [Re-Segment Job {job_id}] ERROR: HTTP error while downloading: {e} ---")
        return
    except httpx.RequestError as e:
        print(f"--- [Re-Segment Job {job_id}] ERROR: Network error while downloading: {e} ---")
        return

    print(f"--- [Re-Segment Job {job_id}] Processing image with points... ---")

    masks, _, _ = sam_instance.resegment(image, pos_points, neg_points, boxes=boxes)

    # 4. --- Job Finished ---
    print(f"--- [Re-Segment Job {job_id}] COMPLETED ---")

    if callback_url:
        print(f"--- [Re-Segment Job {job_id}] Notifying callback URL: {callback_url} ---")
        # Simulate some results
        if len(masks.shape) == 4:
            masks = np.squeeze(masks, axis=1)

        masks = sam_instance.squeeze_mask(masks).astype(np.uint8)
        print(f"--- [Re-Segment Job {job_id}] Generated {masks.shape} masks ---")
        results = {
            "job_id": job_id,
            "status": "re-segmented",
            "masks": [masks[i].tolist() for i in range(len(masks))]
        }
        try:
            response = await http_client.put(callback_url, json=results)
            response.raise_for_status() # Raise exception for 4xx/5xx errors
            print(f"--- [Re-Segment Job {job_id}] Callback notification successful (Status: {response.status_code}) ---")
        except httpx.RequestError as e:
            # Handle network errors, timeouts, etc.
            print(f"--- [Segment {job_id}] ERROR: {type(e).__name__}: {str(e)} ---")
        except httpx.HTTPStatusError as e:
            # Handle non-2xx responses
            print(f"--- [Re-Segment Job {job_id}] ERROR: Callback notification received non-2xx status: {e.response.status_code} ---")
