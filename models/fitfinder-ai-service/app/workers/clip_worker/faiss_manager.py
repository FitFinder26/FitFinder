# faiss_manager.py
import numpy as np
import faiss
import os

EMBEDDING_DIM = 512
FAISS_DIR = "app/workers/clip_worker/faiss_indexes"
os.makedirs(FAISS_DIR, exist_ok=True)
UPLOADED_IMGS_INDEX_PATH = os.path.join(FAISS_DIR, "faiss_uploaded_imgs.index")
STORED_ITEMS_INDEX_PATH = os.path.join(FAISS_DIR, "faiss_stored_items.index")



def get_index_path(index_type: str) -> str:
    """Returns path to the appropriate FAISS index."""
    if index_type == "uploaded_img":
        return UPLOADED_IMGS_INDEX_PATH
    elif index_type == "store_item":
        return STORED_ITEMS_INDEX_PATH
    else:
        raise ValueError("Invalid index_type. Use 'uploaded_img' or 'store_item'.")


def load_or_create_index(index_type: str):
    path = get_index_path(index_type)
    if os.path.exists(path):
        print(f"Loading existing FAISS index: {path}")
        return faiss.read_index(path)
    else:
        print(f"Creating new FAISS index: {path}")
        return faiss.IndexFlatL2(EMBEDDING_DIM)


def save_index(index, index_type: str):
    path = get_index_path(index_type)
    faiss.write_index(index, path)
    print(f"Saved FAISS index: {path}")


def add_embedding(embedding: np.ndarray, index_type: str):
    index = load_or_create_index(index_type)

    # Ensure correct shape and dtype
    embedding = np.asarray(embedding, dtype=np.float32)
    if embedding.ndim == 1:
        embedding = np.expand_dims(embedding, axis=0)

    index.add(embedding)
    faiss_id = index.ntotal - 1

    save_index(index, index_type)
    return faiss_id


def search_top_k_similar(embedding: np.ndarray, index_type: str, k=5):
    index = load_or_create_index(index_type)

    embedding = np.asarray(embedding, dtype=np.float32)
    if embedding.ndim == 1:
        embedding = np.expand_dims(embedding, axis=0)

    distances, indices = index.search(embedding, k)
    return distances, indices