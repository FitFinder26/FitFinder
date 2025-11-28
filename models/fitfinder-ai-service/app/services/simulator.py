import asyncio
import io
import random
from PIL import Image
from typing import Any, List, Optional
import httpx
import numpy as np


http_client = httpx.AsyncClient(timeout=30.0)

sam_instance = app.state.sam_service

async def generate_mock_mask(height: int, width: int):
    # Create a fake 128x128 binary mask (white square in the middle)
    mask = np.zeros((height, width), dtype=np.uint8)
    pos = (random.randint(10, height - 90), random.randint(10, width - 90))
    mask[pos[0]:pos[0] + 80, pos[1]:pos[1] + 80] = 1

    # Return the encoded mask
    return {
        "mask_id": "mock_1",
        "mask_data": mask.tolist()
    }

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



async def image_segment_job(job_id: str, image_url: str, TRUSTED_HOST: str, callback_url: Optional[str] = None):
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
        image = Image.open(io.BytesIO(image_bytes))
        print(f"--- [Segment {job_id}] Downloaded {len(image_bytes)} bytes. ---")

    except httpx.HTTPStatusError as e:
        print(f"--- [Segment {job_id}] ERROR: HTTP error while downloading: {e} ---")
        return
    except httpx.RequestError as e:
        print(f"--- [Segment {job_id}] ERROR: Network error while downloading: {e} ---")
        return

    # Here, we would pass 'image_bytes' to ML model,
    # image processing library, etc.
    print(f"--- [Segment {job_id}] Processing image... ---")

    masks, scores, logits = sam_instance.segment_image(image, multimask=True)

    print(f"--- [Segment Job {job_id}] COMPLETED ---")

    if callback_url:
        print(f"--- [Segment {job_id}] Notifying callback URL: {callback_url} ---")
        # Simulate some results

        results = {
            "job_id": job_id,
            "status": "segmented",
            "masks": [masks[i].tolist() for i in range(len(masks))]
        }
        try:
            response = await http_client.put(callback_url, json=results)
            response.raise_for_status() # Raise exception for 4xx/5xx errors
            print(f"--- [Segment {job_id}] Callback notification successful (Status: {response.status_code}) ---")
        except httpx.RequestError as e:
            # Handle network errors, timeouts, etc.
            print(f"--- [Segment {job_id}] ERROR: Failed to send callback notification: {e} ---")
        except httpx.HTTPStatusError as e:
            # Handle non-2xx responses
            print(f"--- [Segment {job_id}] ERROR: Callback notification received non-2xx status: {e.response.status_code} ---")


async def image_resegment_job(job_id: str, image_url: str, TRUSTED_HOST: str, points: List[Any], callback_url: Optional[str] = None):
    """
    This is  background worker function for re-segment job.
    It runs *after* the API response has been sent.

    It will download the image from the URL and process it using the points.

    this will be changed to Redis job worker in the future.
    """
    print(f"--- [Re-Segment Job {job_id}] STARTING ---")
    print(f"--- [Re-Segment Job {job_id}] Received {len(points)} points: {points} ---")


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
        image = Image.open(io.BytesIO(image_bytes))

        print(f"--- [Re-Segment Job {job_id}] Downloaded {len(image_bytes)} bytes. ---")

    except httpx.HTTPStatusError as e:
        print(f"--- [Re-Segment Job {job_id}] ERROR: HTTP error while downloading: {e} ---")
        return
    except httpx.RequestError as e:
        print(f"--- [Re-Segment Job {job_id}] ERROR: Network error while downloading: {e} ---")
        return

    # Here, we would pass 'image_bytes' and 'points' to your SAM model,
    # image processing library, etc.
    print(f"--- [Re-Segment Job {job_id}] Processing image with points... ---")
    await asyncio.sleep(3)  # Simulate 3 seconds

    # 4. --- Job Finished ---
    print(f"--- [Re-Segment Job {job_id}] COMPLETED ---")

    if callback_url:
        print(f"--- [Re-Segment Job {job_id}] Notifying callback URL: {callback_url} ---")
        # Simulate some results

        mask = await generate_mock_mask(image.height, image.width)
        results = {
            "job_id": job_id,
            "status": "re-segmented",
            "masks": [mask]
        }
        try:
            response = await http_client.put(callback_url, json=results)
            response.raise_for_status() # Raise exception for 4xx/5xx errors
            print(f"--- [Re-Segment Job {job_id}] Callback notification successful (Status: {response.status_code}) ---")
        except httpx.RequestError as e:
            # Handle network errors, timeouts, etc.
            print(f"--- [Re-Segment Job {job_id}] ERROR: Failed to send callback notification: {e} ---")
        except httpx.HTTPStatusError as e:
            # Handle non-2xx responses
            print(f"--- [Re-Segment Job {job_id}] ERROR: Callback notification received non-2xx status: {e.response.status_code} ---")
