import os
import faiss
import numpy as np
from typing import Tuple


EMBEDDING_DIM = 512
FAISS_DIR = "app/faiss_indexes"
os.makedirs(FAISS_DIR, exist_ok=True)

INDEX_PATHS = {
    "uploaded_img": os.path.join(FAISS_DIR, "faiss_uploaded_imgs.index"),
    "stored_item": os.path.join(FAISS_DIR, "faiss_stored_items.index"),
}


class FaissService:
    def __init__(self, index_type: str):
        if index_type not in INDEX_PATHS:
            raise ValueError(
                f"Invalid index_type '{index_type}'. "
                f"Use one of: {list(INDEX_PATHS.keys())}"
            )

        self.index_type = index_type
        self.index_path = INDEX_PATHS[index_type]
        self.index = self._load_or_create_index()


    def _load_or_create_index(self) -> faiss.Index:
        if os.path.exists(self.index_path):
            print(f"[FAISS] Loading index: {self.index_path}")
            index = faiss.read_index(self.index_path)
        else:
            print(f"[FAISS] Creating new index: {self.index_path}")
            index = faiss.IndexFlatL2(EMBEDDING_DIM)

        if index.d != EMBEDDING_DIM:
            raise ValueError(
                f"Embedding dim mismatch: index={index.d}, expected={EMBEDDING_DIM}"
            )

        return index

    def _normalize_embedding(self, embedding: np.ndarray) -> np.ndarray:
        embedding = np.asarray(embedding, dtype=np.float32)
        if embedding.ndim == 1:
            embedding = embedding.reshape(1, -1)

        if embedding.shape[1] != EMBEDDING_DIM:
            raise ValueError(
                f"Invalid embedding shape {embedding.shape}, "
                f"expected (*, {EMBEDDING_DIM})"
            )

        return embedding


    def add_embedding(self, embedding: np.ndarray) -> int:
        embedding = self._normalize_embedding(embedding)
        faiss_id = self.index.ntotal
        self.index.add(embedding)
        return faiss_id


    def search_top_k_similar(
        self, embedding: np.ndarray, k: int = 5
    ) -> Tuple[np.ndarray, np.ndarray]:
        
        embedding = self._normalize_embedding(embedding)

        distances, indices = self.index.search(embedding, k)

        return distances, indices

    def save_index(self) -> None:
        faiss.write_index(self.index, self.index_path)
        print(f"[FAISS] Index saved: {self.index_path}")