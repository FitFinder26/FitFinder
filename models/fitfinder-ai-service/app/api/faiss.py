"""
faiss.py  –  FAISS management endpoints
-----------------------------------------
Endpoints
  POST /add-embedding   – add a pre-computed embedding to the stored-item index
  GET  /download-index  – download the raw faiss_stored_items.index file

Upload behaviour
  After every /add-embedding call the updated index is pushed back to
  HuggingFace Hub (FitFinder/faiss-storage) in the background so the
  remote copy always mirrors the latest local state.

Cron behaviour
  Every call to /add-embedding resets a 15-minute inactivity timer.
  When the timer fires (no new embeddings for 15 min) the service
  re-downloads faiss_stored_items.index from HuggingFace Hub and
  reloads it into the in-process FaissService instance so the two
  stores stay in sync.
"""

import asyncio
import os
from typing import List, Optional

import numpy as np
from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import FileResponse
from huggingface_hub import hf_hub_download, upload_file as hf_upload_file
from pydantic import BaseModel, field_validator

from app.services.faiss_service import FAISS_DIR, INDEX_PATHS, EMBEDDING_DIM

router = APIRouter()

# ── inactivity timer state ────────────────────────────────────────────────────
_refresh_task: Optional[asyncio.Task] = None
_INACTIVITY_SECONDS = 15 * 60  # 15 minutes


async def _refresh_after_inactivity(faiss_service) -> None:
    """Sleep for 15 minutes then push the local index to HuggingFace Hub and refresh from the remote store."""
    await asyncio.sleep(_INACTIVITY_SECONDS)

    print("[FAISS] 15‑min inactivity elapsed – uploading index to HuggingFace Hub …")
    try:
        # Upload the current local index first
        await _upload_to_hf(faiss_service.index_path)
    except Exception as exc:
        print(f"[FAISS] Upload failed during inactivity refresh: {exc}")

    print("[FAISS] Downloading latest index from HuggingFace Hub …")
    try:
        hf_hub_download(
            repo_id="FitFinder/faiss-storage",
            filename="faiss_stored_items.index",
            local_dir="/data",
            local_dir_use_symlinks=False,
            force_download=True,          # always fetch the latest version
        )
        # Reload the index file into the live service instance
        import faiss as _faiss
        new_index = _faiss.read_index(INDEX_PATHS["stored_item"])
        faiss_service.index = new_index
        print("[FAISS] Index reloaded successfully after inactivity refresh.")
    except asyncio.CancelledError:
        # Timer was reset – nothing to do
        pass
    except Exception as exc:
        print(f"[FAISS] Refresh failed: {exc}")


def _reset_inactivity_timer(faiss_service) -> None:
    """Cancel any pending refresh task and start a fresh one."""
    global _refresh_task
    if _refresh_task and not _refresh_task.done():
        _refresh_task.cancel()
    _refresh_task = asyncio.create_task(
        _refresh_after_inactivity(faiss_service)
    )


async def _upload_to_hf(index_path: str) -> None:
    """Push the local index file to HuggingFace Hub in the background."""
    try:
        print("[FAISS] Uploading updated index to HuggingFace Hub …")
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(
            None,
            lambda: hf_upload_file(
                path_or_fileobj=index_path,
                path_in_repo="faiss_stored_items.index",
                repo_id="FitFinder/faiss-storage",
                repo_type="dataset",
            ),
        )
        print("[FAISS] HuggingFace Hub upload complete.")
    except Exception as exc:
        print(f"[FAISS] HuggingFace upload failed: {exc}")


# ── request / response models ─────────────────────────────────────────────────

class AddEmbeddingRequest(BaseModel):
    embedding: List[float]

    @field_validator("embedding", mode="before")
    @classmethod
    def flatten_and_check(cls, v):
        """Accept a flat or nested (batch‑size‑1) list and ensure correct dim."""
        flat = np.array(v, dtype=np.float32).ravel().tolist()
        if len(flat) != EMBEDDING_DIM:
            raise ValueError(
                f"Embedding must contain {EMBEDDING_DIM} values, got {len(flat)}"
            )
        return flat


class AddEmbeddingResponse(BaseModel):
    faiss_id: int
    message: str


# ── endpoints ─────────────────────────────────────────────────────────────────

@router.post(
    "/add-embedding",
    response_model=AddEmbeddingResponse,
    status_code=200,
    summary="Add a pre-computed embedding to the stored-item FAISS index",
)
async def add_embedding(request: Request, body: AddEmbeddingRequest):
    """
    Accepts a flat list of floats as `embedding` in the JSON body,
    adds it to the *stored_item* FAISS index, persists the index to
    disk, and (re)starts the 15-minute inactivity timer.
    """
    faiss_service = getattr(request.app.state, "faiss_service", None)
    if faiss_service is None:
        raise HTTPException(status_code=503, detail="FAISS service not available")

    try:
        embedding_np = np.array(body.embedding, dtype=np.float32)
        faiss_id = faiss_service.add_embedding(embedding_np)
        faiss_service.save_index()
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Failed to add embedding: {exc}")

    # Reset the 15-min inactivity cron
    _reset_inactivity_timer(faiss_service)

    return AddEmbeddingResponse(
        faiss_id=faiss_id,
        message=f"Embedding added at FAISS id {faiss_id}. Index saved. "
                f"Inactivity timer reset ({_INACTIVITY_SECONDS // 60} min).",
    )


@router.get(
    "/download-index",
    summary="Download the faiss_stored_items.index file",
    response_class=FileResponse,
)
async def download_index():
    """
    Streams the raw `faiss_stored_items.index` binary file that lives
    inside the Docker container at /data/faiss_stored_items.index.
    """
    index_path = INDEX_PATHS["stored_item"]
    if not os.path.exists(index_path):
        raise HTTPException(
            status_code=404,
            detail=f"Index file not found at {index_path}",
        )

    return FileResponse(
        path=index_path,
        media_type="application/octet-stream",
        filename="faiss_stored_items.index",
    )


class RemoveEmbeddingResponse(BaseModel):
    removed_faiss_id: int
    remaining_total: int
    message: str


@router.delete(
    "/remove-embedding/{faiss_id}",
    response_model=RemoveEmbeddingResponse,
    status_code=200,
    summary="Remove an embedding from the stored-item FAISS index by its ID",
)
async def remove_embedding(request: Request, faiss_id: int):
    """
    Removes the embedding at `faiss_id` from the in-memory FAISS index,
    saves the updated index to disk, and resets the 15-minute inactivity timer.

    **⚠️ ID shift warning:** FAISS flat indexes use sequential integer IDs
    (0, 1, 2, …).  Deleting ID *N* shifts every ID greater than *N* down by 1.
    Update your own database to reflect the new IDs after calling this endpoint.
    """
    faiss_service = getattr(request.app.state, "faiss_service", None)
    if faiss_service is None:
        raise HTTPException(status_code=503, detail="FAISS service not available")

    try:
        remaining_total = faiss_service.remove_embedding(faiss_id)
        faiss_service.save_index()
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Failed to remove embedding: {exc}")

    # Reset the 15-min inactivity cron
    _reset_inactivity_timer(faiss_service)

    return RemoveEmbeddingResponse(
        removed_faiss_id=faiss_id,
        remaining_total=remaining_total,
        message=f"Embedding {faiss_id} removed. {remaining_total} vector(s) remain. "
                f"⚠️ All IDs > {faiss_id} have shifted down by 1. "
                f"Inactivity timer reset ({_INACTIVITY_SECONDS // 60} min).",
    )

