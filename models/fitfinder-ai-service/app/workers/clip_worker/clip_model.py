# clip_model.py
import torch
import torch.nn.functional as F
from PIL import Image
import open_clip
import io
import base64

_device = "cuda" if torch.cuda.is_available() else "cpu"
_model = None
_preprocess = None
_tokenizer = None

def get_model():
    """Lazy-load the OpenCLIP model."""
    global _model, _preprocess, _tokenizer
    if _model is None:
        print("🔹 Loading OpenCLIP model...")
        _model, _, _preprocess = open_clip.create_model_and_transforms(
            'ViT-B-32', 
            pretrained='laion2b_s34b_b79k'
        )
        _tokenizer = open_clip.get_tokenizer('ViT-B-32')
        _model = _model.to(_device)
        _model.eval()
    return _model, _preprocess, _tokenizer

def get_image_embedding(image):
    """
    image_data: raw bytes or base64 string
    """
    # If base64 encoded, decode it
    # if isinstance(image_data, str):
    #     image_data = base64.b64decode(image_data)

    model, preprocess, _ = get_model()
    # image = Image.open(io.BytesIO(image_data)).convert("RGB")
    image_tensor = preprocess(image).unsqueeze(0).to(_device)

    with torch.no_grad():
        embedding = model.encode_image(image_tensor)
        embedding /= embedding.norm(dim=-1, keepdim=True)

    return embedding.cpu().numpy().astype("float32")

def get_text_embedding(texts: list[str]):
    model, _, tokenizer = get_model()
    tokens = tokenizer(texts).to(_device)
    with torch.no_grad():
        embeddings = model.encode_text(tokens)
        embeddings /= embeddings.norm(dim=-1, keepdim=True)
    return embeddings.cpu().numpy().astype("float32")

def cosine_similarity(emb1, emb2):
    emb1 = torch.tensor(emb1)
    emb2 = torch.tensor(emb2)
    return F.cosine_similarity(emb1, emb2).item()

# for debugging without faiss
def get_KNN_cosine_similarity(query_emb, embeddings, k=5):
    query_emb = torch.tensor(query_emb)
    embeddings = torch.tensor(embeddings)
    similarities = F.cosine_similarity(query_emb, embeddings)
    top_k_indices = torch.topk(similarities, k).indices.tolist()
    return top_k_indices

def get_embeddings(data, mode="image"):
    if mode == "image":
        return get_image_embedding(data)
    elif mode == "text":
        return get_text_embedding(data)
    else:
        raise ValueError("Invalid mode: must be 'image' or 'text'")