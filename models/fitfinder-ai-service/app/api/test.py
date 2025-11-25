from fastapi import APIRouter
from pydantic import BaseModel
from app.services.clip_service import enqueue_clip_task

router = APIRouter()

@router.get("/")
async def read_test_root():
    return {"status": "ok", "message": "Service is still alive LOL.", "service": "fitfinder-ai"}


class ClipTaskRequest(BaseModel):
    image_data: str
    callback_url: str
    type: str = "uploaded_img"

@router.post("/clip/process")
def trigger_clip_task(task_request: ClipTaskRequest):
    job_id = enqueue_clip_task(**task_request.model_dump())
    return {"message": "Task queued successfully", "job_id": job_id}

