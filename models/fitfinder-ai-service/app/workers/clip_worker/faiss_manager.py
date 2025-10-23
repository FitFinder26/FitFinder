import numpy as np
import faiss
import os

EMBEDDING_DIM = 512

FAISS_DIR = "app/workers/clip_worker/faiss_indexes"
UPLOADED_IMGS_INDEX_PATH = "faiss_uploaded_imgs.index"
STORED_ITEMS_INDEX_PATH = "faiss_stored_items.index"

os.makedirs(FAISS_DIR, exist_ok=True)

def load_or_create_index(path: str):
    if os.path.exists(path):
        print(f"Loading existing FAISS index: {path}")
        return faiss.read_index(path)
    print(f"Creating new FAISS index: {path}")
    return faiss.IndexFlatL2(EMBEDDING_DIM)


faiss_uploaded_imgs_index = load_or_create_index(UPLOADED_IMGS_INDEX_PATH)
faiss_stored_items_index = load_or_create_index(STORED_ITEMS_INDEX_PATH)


def save_indexes():
    faiss.write_index(faiss_uploaded_imgs_index, UPLOADED_IMGS_INDEX_PATH)
    faiss.write_index(faiss_stored_items_index, STORED_ITEMS_INDEX_PATH)
    print("FAISS indexes saved.")


def add_embedding(embedding: np.ndarray, index_type: str):
    if embedding.ndim == 1:
        embedding = np.expand_dims(embedding, axis=0)

    if index_type == "uploaded_img":
        faiss_uploaded_imgs_index.add(embedding)
        faiss_id = faiss_uploaded_imgs_index.ntotal - 1
    elif index_type == "store_item":
        faiss_stored_items_index.add(embedding)
        faiss_id = faiss_stored_items_index.ntotal - 1
    else:
        raise ValueError("Invalid index_type. Use 'uploaded_img' or 'store_item'.")

    save_indexes()
    return faiss_id


def search_top_k_similar(embedding: np.ndarray, index_type: str, k=5):
    if embedding.ndim == 1:
        embedding = np.expand_dims(embedding, axis=0)

    if index_type == "uploaded_img":
        distances, indices = faiss_uploaded_imgs_index.search(embedding, k)
    elif index_type == "store_item":
        distances, indices = faiss_stored_items_index.search(embedding, k)
    else:
        raise ValueError("Invalid index_type. Use 'uploaded_img' or 'store_item'.")

    return distances, indices