FROM python:3.12-slim
# later: FROM nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04

# Install System Dependencies
# git: required for pip install git+...
# wget: required to download the checkpoint
# libgl1 & libglib2.0-0: required for OpenCV (image processing functionality in SAM)
RUN apt-get update && apt-get install -y \
    git \
    wget \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Download the SAM 2.1 Checkpoint
RUN mkdir -p /app/checkpoints
RUN wget -P /app/checkpoints https://dl.fbaipublicfiles.com/segment_anything_2/092824/sam2.1_hiera_large.pt

# Install Poetry
RUN pip install poetry

# Copy project definition first (better for caching)
COPY pyproject.toml poetry.lock* README.md ./

# Install dependencies system-wide (no virtualenv inside container)
RUN poetry config virtualenvs.create false

# Install dependencies (no root install)
RUN poetry install --no-root --no-interaction --no-ansi

RUN pip install open_clip_torch

RUN pip install faiss-cpu
# Install SAM 2 directly from GitHub
RUN pip install 'git+https://github.com/facebookresearch/sam2.git'

# Copy the rest of the app
COPY ./app ./app

# Expose port
EXPOSE 7860

# Command to run FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860"]
