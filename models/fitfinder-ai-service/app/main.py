# main.py
from fastapi import FastAPI
from .api.test import router as test_api
from .api.connection import route as health_api
from .api.jobs import router as jobs_api


app = FastAPI(
    title="Job Enqueue API (URL Method)",
    description="An API to accept jobs and image URLs for background processing."
)

app.include_router(jobs_api, prefix="/api/v1/job")
app.include_router(health_api, prefix="/api/v1/health")
app.include_router(test_api, prefix="/api/test")
