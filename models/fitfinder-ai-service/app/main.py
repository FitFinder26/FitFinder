# main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager
from .api.test import router as test_api
from .api.connection import route as health_api
from .api.jobs import router as jobs_api
from .services import sam_service
import torch

sam_service_instance = None

def get_default_device():
    if torch.cuda.is_available():
        device = torch.device("cuda")
    elif torch.backends.mps.is_available():
        device = torch.device("mps")
    else:
        device = torch.device("cpu")

    print(f"Using device: {device}")

    if device.type == "cuda":
        # Note: In a persistent app, context managers for autocast are usually used
        # inside the inference function, but we can set global backend settings here.
        if torch.cuda.get_device_properties(0).major >= 8:
            torch.backends.cuda.matmul.allow_tf32 = True
            torch.backends.cudnn.allow_tf32 = True

    return device

@asynccontextmanager
async def lifespan(app: FastAPI):
    global sam_service_instance
    print("Starting up the FitFinder AI Service...")

    device = get_default_device()
    checkpoint_path = "/app/checkpoints/sam2.1_hiera_large.pt"
    config_path = "configs/sam2.1/sam2.1_hiera_l.yaml"

    print("Loading SAM2 Model...")
    try:
        sam_service_instance =  sam_service(checkpoint_path, config_path, device)
        print("SAM2 Model Loaded Successfully.")
    except Exception as e:
        print(f"Error loading model: {e}")

    print("SAM Service initialized.")

    yield
    sam_service_instance = None
    print("Shutting down the FitFinder AI Service...")



app = FastAPI(
    title="FitFinder AI Service",
    description="Backend service for FitFinder AI-powered image segmentation.",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(jobs_api, prefix="/api/v1/job")
app.include_router(health_api, prefix="/api/v1/health")
app.include_router(test_api, prefix="/api/test")
