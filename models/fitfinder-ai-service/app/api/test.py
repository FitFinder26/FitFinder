# test_endpoints.py (or test_endpoint.py)
from fastapi import APIRouter

# 1. Define the router
router = APIRouter()

# 2. Define an endpoint function that uses the router
@router.get("/")
async def read_test_root():
    return {"message": "Hello from the test endpoint router!"}


class ClipTaskRequest(BaseModel):
    image_data: str
    callback_url: str
    type: str = "uploaded_img"

@router.post("/clip/process")
def trigger_clip_task(task_request: ClipTaskRequest):
    job_id = enqueue_clip_task(**task_request.model_dump())
    return {"message": "Task queued successfully", "job_id": job_id}

