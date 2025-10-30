import json
from typing import Optional
from fastapi import APIRouter, BackgroundTasks, HTTPException, Form

from app.services.simulator import image_resegment_job, image_segment_job


router = APIRouter()

# Define our *trusted* image source
TRUSTED_HOST = "res.cloudinary.com"

@router.post("/segment/", status_code=202)  # 202 Accepted
async def create_segment_job(
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

    # Enqueue the background task
    background_tasks.add_task(
        image_segment_job,
        job_id=job_id,
        image_url=image_url,
        callback_url=callback_url
    )

    # Return an immediate response
    return {
        "job_id": job_id,
        "image_url": image_url,
        "status": "queued",
        "message": "Job accepted and enqueued for processing.",
        "service": "fitfinder-ai"
    }


@router.post("re-segment/", status_code=202)  # 202 Accepted
async def create_re_segment_job(
    background_tasks: BackgroundTasks,
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
    background_tasks.add_task(
        image_resegment_job,
        job_id=job_id,
        image_url=image_url,
        points=points,
        callback_url=callback_url
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






