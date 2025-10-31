---
title: FitFinder AI Service
emoji: 🧠
colorFrom: blue
colorTo: purple
sdk: docker
app_file: app/main.py
pinned: false
---

# 🧠 FitFinder AI Service

This service powers the AI layer of the **FitFinder** system — responsible for tasks like object segmentation (SAM) and image embedding generation (OpenCLIP).
It’s built using **FastAPI** for the REST interface and **Celery** (with Redis/RabbitMQ) for background processing.

---

## 🚀 Features

- Segments user-uploaded images using SAM (Segment Anything Model)
- Generates embeddings using OpenCLIP (for image similarity search)
- Communicates with the main **Spring Boot backend** via REST or message queues
- Supports scalable async processing using **Celery workers**
- Containerized via **Docker** for deployment on GCP or any cloud service

---

## 📁 Project Structure

```
fitfinder-ai-service/
├── app/
│   ├── main.py                # FastAPI entry point
│   ├── api/
│   │   ├── endpoints.py       # Defines API routes
│   ├── models.py              # Pydantic models for request/response
│   ├── tasks.py               # Celery background tasks
│   ├── workers/
│   │   ├── segment_worker.py  # SAM model worker
│   ├── services/
│   │   ├── sam_service.py     # Handles segmentation logic
│   │   └── clip_service.py    # Handles OpenCLIP embedding logic
│   └── utils/
│       ├── storage.py         # File saving, caching, etc.
│       └── security.py        # Token or auth helpers
├── Dockerfile
├── docker-compose.yml
├── pyproject.toml
├── poetry.lock
├── .env.example
└── README.md
```

---

## ⚙️ 1. Setup Using Poetry (Recommended)

> Poetry automatically creates and manages a virtual environment for you.

### 🪄 Steps

```bash
# 1️⃣ Install Poetry (if not installed)
pip install poetry

# 2️⃣ Install dependencies
poetry install

# 3️⃣ Activate Poetry shell
poetry shell

# 4️⃣ Run the FastAPI app
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### 🧪 Verify it’s running

Visit 🔗 http://localhost:8000
Open the auto-generated docs 🔗 http://localhost:8000/docs

---

## ⚙️ 2. Manual Setup (Without Poetry)

If you prefer using standard Python + pip:

```bash
# 1️⃣ Create a virtual environment
python -m venv venv

# 2️⃣ Activate it
# On Windows:
venv\Scripts\activate
# On macOS / Linux:
source venv/bin/activate

# 3️⃣ Install dependencies
pip install -r requirements.txt

# 4️⃣ Run the FastAPI app
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

---

## 🐳 3. Run With Docker

Make sure you have Docker installed, then run:

```bash
# Build and start the container
docker build -t fitfinder-ai-service .
docker run -d -p 8000:8000 fitfinder-ai-service
```

Or, if you’re using **docker-compose**:

```bash
docker-compose up --build
```

---

## ⚙️ 4. Environment Variables

Copy `.env.example` to `.env` and fill in your values: (didn't finished yet)

```
MODEL_PATH=/models/sam2
REDIS_URL=redis://localhost:6379/0
QUEUE_NAME=ai_tasks
```

---

## 🔐 5. Uvicorn Command (Explained)

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

| Argument         | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `app.main:app`   | Points to the FastAPI instance (`app` object) inside `app/main.py` |
| `--host 0.0.0.0` | Allows external access (needed for Docker or GCP)                  |
| `--port 8000`    | Runs the app on port 8000                                          |

---

## 🧮 6. Useful Commands

| Task              | Command                                    |
| ----------------- | ------------------------------------------ |
| Run locally       | `poetry run uvicorn app.main:app --reload` |
| Format code       | `poetry run black app/`                    |
| Lint              | `poetry run flake8 app/`                   |
| Test              | `poetry run pytest`                        |
| Exit poetry shell | `exit`                                     |

---

## 🥪 7. Testing

All test files should be placed under `tests/`:

```
tests/
 ├── test_endpoints.py
 ├── test_services.py
 └── test_utils.py
```

To run all tests:

```bash
poetry run pytest
```

---

## 🌐 8. API Documentation

Once running, visit:

- Swagger UI → http://localhost:8000/docs
- ReDoc → http://localhost:8000/redoc

---

## 🤌 License

This project is for academic use (Alexandria University, CSE Department).

---

## ✨ Contributors

<!-- - **Mohamed Abdel-Moneim** — AI Engineer
- **Team FitFinder** — Graduation Project Team -->

<!-- # Models Used in FitFinder

We currently use the following models:

- **SAM 2**: For segmentation tasks.
- **FAISS**: For efficient similarity search and clustering.
- **OpenCLIP**: For image and text embedding.

More models may be added in the future as needed. -->
