import requests
from app.workers.clip_worker.faiss_manager import add_embedding
from app.workers.clip_worker.clip_model import get_image_embedding

def process_clip_task(task):
    try:
        image_data = task["image_data"]
        embedding = get_image_embedding(image_data)
        faiss_id = add_embedding(embedding, task["type"])
        status = "success"
    except Exception as e:
        print("Error processing task:", e)
        faiss_id = None
        status = "failure"

    try:
        requests.post(
            f"{task['callback_url']}/callback/clip-complete",
            json={"job_id": task["job_id"], "status": status, "faiss_id": faiss_id},
            timeout=5
        )
    except requests.RequestException as e:
        print("Callback failed:", e)
