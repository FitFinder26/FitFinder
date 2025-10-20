FROM python:3.12-slim
# later: FROM nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04

# Set working directory
WORKDIR /app

# Install Poetry
RUN pip install poetry

# Copy project definition first (better for caching)
COPY pyproject.toml poetry.lock* ./

# Install dependencies system-wide (no virtualenv inside container)
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi

# Copy the rest of the app
COPY ./app ./app

# Expose port
EXPOSE 8000

# Command to run FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
