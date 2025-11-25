from PIL import Image
import numpy as np
import torch
from sam2 import build_sam2_model_from_checkpoint

MODEL_CHECKPOINT = "sam2_hiera_large.pt"

# Initialize device (only once)
def _init_device():
    if torch.cuda.is_available():
        device = torch.device("cuda")
    elif torch.backends.mps.is_available():
        device = torch.device("mps")
    else:
        device = torch.device("cpu")
    print(f"Using device: {device}")
    return device

# Load SAM model (only once)
def _load_sam_model(device):
    sam_model = build_sam2_model_from_checkpoint(MODEL_CHECKPOINT)
    sam_model.to(device)
    sam_model.eval()
    return sam_model

# Global initialization
device = _init_device()
sam_model = _load_sam_model(device)


def segment(image: Image.Image):
    """
    Run SAM2 segmentation on the given image.
    Returns masks or segmented regions.
    """
    # TODO: Implement SAM2 inference here
    pass


def resegment(image: Image.Image, clues: dict):
    """
    Rerun segmentation with user-provided clues.
    Clues may include points, boxes, or masks.
    """
    # TODO: Implement SAM2 guided inference here
    pass


def create_segmented_object(image: Image.Image, mask: np.ndarray):
    """
    Combine original image and mask to produce final visualization
    or extracted object.
    """
    # TODO: Blend image and mask or crop region
    pass
