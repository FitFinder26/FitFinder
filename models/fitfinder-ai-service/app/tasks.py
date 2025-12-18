# # tasks.py
# import logging
# from celery import Celery
# from app.workers.clip_worker.worker import process_clip_task

# logger = logging.getLogger(__name__)

# celery_app = Celery(
#     "fitfinder_ai_service",
#     broker="redis://localhost:6379/0",
#     backend="redis://localhost:6379/0",
# )

# @celery_app.task(name="clip_process")
# def clip_process_task(task):
#     logger.info("Received CLIP processing task: %s", task.get("job_id"))
#     try:
#         process_clip_task(task)
#     except Exception as e:
#         logger.error("Task failed: %s", e)
#         raise e


# tasks.py
import logging

logger = logging.getLogger(__name__)

def clip_process_task(task):
    """
    Celery task disabled – kept only for compatibility.
    """
    logger.info("Celery disabled. This function should not be called.")
    from app.workers.clip_worker.worker import process_clip_task
    process_clip_task(task)
