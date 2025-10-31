# test_clip_api.py
# testing a FastAPI endpoint that mimics the behavior of the clip_worker worker without using Celery
# just for debugging
from fastapi import FastAPI, UploadFile, Form
from app.workers.clip_worker.worker import process_clip_task
import base64
import uvicorn

app = FastAPI()

@app.post("/clip/test")
async def clip_test_endpoint(
    file: UploadFile,
    callback_url: str = Form("https://httpbin.org/post"),
    item_type: str = Form("uploaded_img")
):
    # Convert uploaded image to base64
    image_bytes = await file.read()
    image_base64 = base64.b64encode(image_bytes).decode("utf-8")

    # Prepare task payload
    task = {
        "job_id": "test_job_sync",
        "image_data": image_base64,
        "type": item_type,
        "callback_url": callback_url
    }

    # Directly call worker (synchronous, no Celery)
    process_clip_task(task)

    return {"message": "Task processed synchronously", "job_id": task["job_id"]}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
