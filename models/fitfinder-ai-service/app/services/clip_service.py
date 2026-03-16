import torch
import numpy as np
import torch.nn.functional as F
from PIL import Image
import open_clip
import io
import httpx
from pathlib import Path
import traceback

class CLIPService:
    def __init__(self, device=None, sam_instance=None):
        self.device = device or ("cuda" if torch.cuda.is_available() else "cpu")
        print("🔹 Loading CLIP model...")
        self.model, _, self.preprocess = open_clip.create_model_and_transforms(
            'ViT-B-32', pretrained='laion2b_s34b_b79k'
        )
        self.tokenizer = open_clip.get_tokenizer('ViT-B-32')
        self.model = self.model.to(self.device)
        self.model.eval()
        self.http_client = httpx.AsyncClient(timeout=30.0)
        self.sam = sam_instance



    def get_image_embedding(self, image):
        """
        image_data: raw bytes or base64 string
        """

        image_tensor = self.preprocess(image).unsqueeze(0).to(self.device)

        with torch.no_grad():
            embedding = self.model.encode_image(image_tensor)
            embedding /= embedding.norm(dim=-1, keepdim=True)

        return embedding.cpu().numpy().astype("float32")

    def get_text_embedding(self, texts: list[str]):
        tokens = self.tokenizer(texts).to(self.device)
        with torch.no_grad():
            embeddings = self.model.encode_text(tokens)
            embeddings /= embeddings.norm(dim=-1, keepdim=True)
        return embeddings.cpu().numpy().astype("float32")

    def _cosine_similarity(self, emb1, emb2):
        emb1 = torch.tensor(emb1)
        emb2 = torch.tensor(emb2)
        return F.cosine_similarity(emb1, emb2).item()

    # for debugging without faiss
    def get_KNN_cosine_similarity(self, query_emb, embeddings, k=5):
        query_emb = torch.tensor(query_emb)
        embeddings = torch.tensor(embeddings)
        similarities = F.cosine_similarity(query_emb, embeddings)
        top_k_indices = torch.topk(similarities, k).indices.tolist()
        return top_k_indices

    def get_embeddings(self, data, mode="image"):
        if mode == "image":
            return self.get_image_embedding(data)
        elif mode == "text":
            return self.get_text_embedding(data)
        else:
            raise ValueError("Invalid mode: must be 'image' or 'text'")

    async def generate_embedding(self, image_url, text):
        try:
            response = await self.http_client.get(image_url)

            response.raise_for_status()

            image_bytes = response.content
            image = Image.open(io.BytesIO(image_bytes))

        except httpx.HTTPStatusError as e:
            print(f"---  ERROR: HTTP error while downloading: {e} ---")
            return
        except httpx.RequestError as e:
            print(f"---  ERROR: Network error while downloading: {e} ---")
            return
        except Exception as e:
            print(f"---  ERROR: Unexpected error while downloading: {e} ---")
            return

        # we don't need this!!!!
        # TODO: replace with your CLIP embedding code

        if text[-1] != '.':
            text += '.'

        masks = None
        embeddings = []

        try:
            masks , boxes, scores= self.sam.segment_with_prompt(image, text.lower())

            segmented_items = []

            for mask in masks:
                segmented_image = self.sam.get_segmented_image(image, mask)
                segmented_items.append(segmented_image)
                embeddings.append(self.get_image_embedding(segmented_image))

        except Exception as e:
            print(f"---  ERROR: {e} ---")
            traceback.print_exc()
            return

        return embeddings
