# main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager
from .api.test import router as test_api
from .api.connection import route as health_api
from .api.jobs import router as jobs_api
from .services.sam_service import SAM_service
from .services.clip_service import CLIPService
from app.services.faiss_service import FaissService

import torch


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
    print("Starting up the FitFinder AI Service...")

    device = get_default_device()
    checkpoint_path = "/app/checkpoints/sam2.1_hiera_large.pt"
    config_path = "configs/sam2.1/sam2.1_hiera_l.yaml"
    d_model_id = "IDEA-Research/grounding-dino-tiny"

    print("Loading SAM2 Model...")
    app.state.sam_service = SAM_service(
        checkpoint_path,
        model_cfg=config_path,
        d_model_id=d_model_id,
        device=device
    )

    print("SAM Service initialized.")


    app.state.clip_service = CLIPService(device=device, sam_instance=app.state.sam_service)
    print("CLIP Model Loaded Successfully.")

    app.state.faiss_service = FaissService(index_type="stored_item")
    print("FAISS Service initialized.")
    yield

    print("Shutting down the FitFinder AI Service...")
    app.state.sam_service = None
    app.state.clip_service = None
    app.state.faiss_service = None
    if torch.cuda.is_available():
        torch.cuda.empty_cache()



app = FastAPI(
    title="FitFinder AI Service",
    description="Backend service for FitFinder AI-powered image segmentation.",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(jobs_api, prefix="/api/v1/job")
app.include_router(health_api, prefix="/api/v1/health")
app.include_router(test_api, prefix="/api/test")
