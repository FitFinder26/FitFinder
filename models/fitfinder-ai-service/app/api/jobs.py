import array
from email.mime import image
import json
from typing import Optional
from fastapi import APIRouter, BackgroundTasks, HTTPException, Form, Query, Request
from app.api.connection import segment_queue, resegment_queue
import io
from PIL import Image
from app.services.simulator import image_resegment_job, image_segment_job, download_image


router = APIRouter()

# Define our *trusted* image source
TRUSTED_HOST = "res.cloudinary.com"
@router.post("/segment/", status_code=202)  # 202 Accepted
async def create_segment_job(
    request: Request,
    background_tasks: BackgroundTasks,
    job_id: str = Form(..., description="The unique ID for this job."),
    image_url: str = Form(..., description="The public URL of the image (e.g., from Cloudinary)."),
    callback_url: Optional[str] = Form(None, description="The callback URL for notification.")
):

    # This is just for user-friendliness.
    if not image_url.startswith(f"https://{TRUSTED_HOST}"):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid image_url. Must be a secure URL from {TRUSTED_HOST}"
        )

    sam_service = request.app.state.sam_service

    if not sam_service:
        raise HTTPException(
            status_code=500,
            detail="SAM service is not initialized."
        )

    # Enqueue the background task
    segment_queue.enqueue(
        image_segment_job,
        job_id=job_id,
        image_url=image_url,
        callback_url=callback_url,
        TRUSTED_HOST=TRUSTED_HOST,
        sam_instance=sam_service
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
    job_id: str = Form(..., description="The unique ID for this job."),
    image_url: str = Form(..., description="The public URL of the image (e.g., from Cloudinary)."),
    points_json: str = Form(..., description="A JSON string of points, e.g., '[[10, 20], [30, 40]]' or '[{\"x\": 10, \"y\": 20}]'"),
    callback_url: Optional[str] = Form(None, description="The callback URL for notification.")
):
    if not image_url.startswith(f"https://{TRUSTED_HOST}"):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid image_url. Must be a secure URL from {TRUSTED_HOST}"
        )

    sam_service = request.app.state.sam_service

    if not sam_service:
        raise HTTPException(
            status_code=500,
            detail="SAM service is not initialized."
        )

    try:
        points = json.loads(points_json)
        if not isinstance(points, list):
            raise HTTPException(
                status_code=400,
                detail="Invalid points_json. Must be a JSON array."
            )
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=400,
            detail="Invalid points_json. Could not decode JSON."
        )


    # Enqueue the background task
    resegment_queue.enqueue(
        image_resegment_job,
        job_id=job_id,
        image_url=image_url,
        points=points,
        callback_url=callback_url,
        TRUSTED_HOST=TRUSTED_HOST,
        sam_instance=sam_service
    )

    # Return an immediate response
    return {
        "job_id": job_id,
        "image_url": image_url,
        "points_received": points,
        "status": "queued",
        "message": "re-segment job accepted and enqueued for processing.",
        "service": "fitfinder-ai"
    }


@router.post("/search/", status_code=200) # 200 OK
async def search_job(
    request: Request,
    # Change Form to Query
    prompt: Optional[str] = Form(None, description="Search prompt or criteria."),
    # Change Form to Query
    job_id: str = Form(..., description="Optional job ID to filter results."),
    image_url: str = Form(..., description="Optional image URL to filter results."),
    mask: array.array = Form(..., description="Optional mask to filter results.")
):
    if not image_url.startswith(f"https://{TRUSTED_HOST}"):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid image_url. Must be a secure URL from {TRUSTED_HOST}"
        )

    sam_service = request.app.state.sam_service
    if not sam_service:
        raise HTTPException(
            status_code=500,
            detail="SAM service is not initialized."
        )

    try:
        mask_data = json.loads(mask_json)
        mask = np.array(mask_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid mask JSON: {str(e)}")

    image_bytes = await download_image(image_url, job_id=job_id)

    # Returns a PIL Image (transparent PNG)
    segmented_image_result = sam_service.get_segmented_image(
        image=Image.open(io.BytesIO(image_bytes)),
        mask=mask
    )
    # Placeholder: In a real implementation, this would query a database or index.

    results = [
        'sample_result_1',
        'sample_result_2',
        'sample_result_3',
        'sample_result_4',
        'sample_result_5'
    ]
    return {
        "job_id": job_id,
        "results": results,
        "message": "Search functionality not yet implemented.",
        "service": "fitfinder-ai"
    }
