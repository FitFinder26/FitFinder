import faiss
import numpy as np
import os

FAISS_INDEX_PATH = "faiss_index.bin"
EMBEDDING_DIM = 512   # change if your model outputs different size

def load_faiss_index():
    if os.path.exists(FAISS_INDEX_PATH):
        index = faiss.read_index(FAISS_INDEX_PATH)
    else:
        index = faiss.IndexFlatL2(EMBEDDING_DIM)
    return index

def save_faiss_index(index):
    faiss.write_index(index, FAISS_INDEX_PATH)

def add_embedding_to_faiss(index, embedding):
    """
    embedding.shape must be (512,) or (1, 512)
    """
    if len(embedding.shape) == 1:
        embedding = np.expand_dims(embedding, axis=0)

    index.add(embedding)
    return index.ntotal - 1  # FAISS ID
