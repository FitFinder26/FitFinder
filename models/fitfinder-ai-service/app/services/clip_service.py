# clip_service.py
import uuid
from app.tasks import clip_process_task

VALID_ITEM_TYPES = ["uploaded_img", "store_item"]

def enqueue_clip_task(image_data: str, callback_url: str, item_type: str = "uploaded_img"):
    """
    Validates input and sends a CLIP processing task to Celery.
    """
    if not image_data:
        raise ValueError("Image data is required")
    if item_type not in VALID_ITEM_TYPES:
        raise ValueError(f"Invalid item_type, must be one of {VALID_ITEM_TYPES}")
    if not callback_url:
        raise ValueError("Callback URL is required")

    task = {
        "job_id": str(uuid.uuid4()),
        "image_data": image_data,
        "type": item_type,
        "callback_url": callback_url
    }

    clip_process_task.delay(task)
    return task["job_id"]
