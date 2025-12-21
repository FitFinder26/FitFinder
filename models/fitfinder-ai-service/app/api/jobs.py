from cmd import PROMPT
import json
from pickle import NONE
from re import L
from typing import Any, List, Optional
from pydantic import BaseModel
from fastapi import APIRouter, BackgroundTasks, HTTPException, Form, Query, Request

from app.services.simulator import image_resegment_job, image_segment_job, download_image
from app.workers.clip_worker.faiss_manager import search_top_k_similar
from app.db import get_items_by_faiss_ids
import io
from PIL import Image
import numpy as np

router = APIRouter()

# Define our *trusted* image source
TRUSTED_HOST = "res.cloudinary.com"

class ReSegmentRequest(BaseModel):
    job_id: str
    image_url: str
    pos_points: List[List[int]]
    neg_points: List[List[int]]
    boxes: Optional[List[List[int]]] = None
    callback_url: Optional[str] = None

class SearchRequest(BaseModel):
    job_id: str
    image_url: str
    mask_json: List[List[int]]
    prompt: Optional[str] = None

@router.post("/segment/", status_code=202)  # 202 Accepted
async def create_segment_job(
    request: Request,
    background_tasks: BackgroundTasks,
    job_id: str = Form(..., description="The unique ID for this job."),
    image_url: str = Form(..., description="The public URL of the image (e.g., from Cloudinary)."),
    callback_url: Optional[str] = Form(None, description="The callback URL for notification.")
):

    sam_service = getattr(request.app.state, "sam_service", None)
    if sam_service is None:
        raise HTTPException(
            status_code=503,
            detail="SAM service not available"
        )

    # This is just for user-friendliness.
    if not image_url.startswith(f"https://{TRUSTED_HOST}"):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid image_url. Must be a secure URL from {TRUSTED_HOST}"
        )

    # Enqueue the background task
    background_tasks.add_task(
        image_segment_job,
        job_id=job_id,
        sam_instance=sam_service,
        image_url=image_url,
        callback_url=callback_url,
        TRUSTED_HOST=TRUSTED_HOST
    )


    # Return an immediate response
    return {
        "job_id": job_id,
        "image_url": image_url,
        "status": "queued",
        "message": "Job accepted and enqueued for processing.",
        "service": "fitfinder-ai"
    }


@router.post("/re-segment/", status_code=202)  # 202 Accepted
async def create_re_segment_job(
    request: Request,
    background_tasks: BackgroundTasks,
    body: ReSegmentRequest
):
    sam_service = getattr(request.app.state, "sam_service", None)
    if sam_service is None:
        raise HTTPException(
            status_code=503,
            detail="SAM service not available"
        )

    if not body.image_url.startswith(f"https://{TRUSTED_HOST}"):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid image_url. Must be a secure URL from {TRUSTED_HOST}"
        )


    # Enqueue the background task
    background_tasks.add_task(
        image_resegment_job,
        job_id=body.job_id,
        image_url=body.image_url,
        pos_points=body.pos_points,
        neg_points=body.neg_points,
        callback_url=body.callback_url,
        boxes=body.boxes,
        TRUSTED_HOST=TRUSTED_HOST,
        sam_instance=sam_service
    )

    # Return an immediate response
    return {
        "job_id": body.job_id,
        "image_url": body.image_url,
        "positive_points_received": body.pos_points,
        "negative_points_received": body.neg_points,
        "status": "queued",
        "message": "re-segment job accepted and enqueued for processing.",
        "service": "fitfinder-ai"
    }


@router.post("/search/", status_code=200) # 200 OK
async def search_job(
    request: Request,
    body: SearchRequest
):
    if not body.image_url.startswith(f"https://{TRUSTED_HOST}"):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid image_url. Must be a secure URL from {TRUSTED_HOST}"
        )

    sam_service = getattr(request.app.state, "sam_service", None)
    if sam_service is None:
        raise HTTPException(
            status_code=503,
            detail="SAM service not available"
        )

    try:
        mask = np.array(body.mask_json)

        if mask.ndim != 2:
            raise ValueError(f"Mask must be 2D (w, h), got {mask.shape}")

        if not np.isin(mask, [0, 1]).all():
            raise ValueError("Mask must contain only binary values (0 or 1)")

        mask = mask.astype(np.uint8)
        mask = mask[np.newaxis, :, :]  # (1, w, h)

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid mask JSON: {str(e)}"
    )


    image_bytes = await download_image(body.image_url, job_id=body.job_id)

    # Returns a PIL Image (transparent PNG)
    segmented_image_result = sam_service.get_segmented_image(
        image=image_bytes,
        mask=mask
    )
    # Placeholder: In a real implementation, this would query a database or index.

    clip_service = getattr(request.app.state, "clip_service", None)
    if clip_service is None:
        raise HTTPException(
            status_code=503,
            detail="CLIP service not available"
        )

    try:
        embedding = clip_service.get_image_embedding(segmented_image_result)

        distances, indices = search_top_k_similar(
            embedding,
            index_type="store_item",
            k=10
        )
        
        items = get_items_by_faiss_ids(indices.tolist())
        
        return {
                "job_id": body.job_id,
                "results": [
                    {
                        "item": item,
                        "distance": float(dist)
                    }
                    for item, dist in zip(items, distances)
                ],
                "status": "completed",
                "service": "fitfinder-ai"
            }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Search failed: {str(e)}"
        )
