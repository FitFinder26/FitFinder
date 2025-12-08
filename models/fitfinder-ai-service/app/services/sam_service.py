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

def segment_image(self, image: Image.Image, boxes=None, multimask=False):
        # Set Image (Only if new)
        self._set_image_if_needed(image)

        # Predict
        masks, scores, logits = self.predictor.predict(
            point_coords=None,
            point_labels=None,
            box=boxes,
            multimask_output=multimask,
        )

        # CPU Cleanup
        gc.collect()

        return masks, scores, logits


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


def get_segmented_image(self, image: Image.Image, mask):
        """
        Applies the mask, CROPS the empty space, and returns a transparent PNG.
        """
        image_np = self._prepare_image(image)

        # Handle SAM dimensions: Ensure we have (H, W)
        if len(mask.shape) > 2:
            mask = mask[0]

        # Create RGBA
        h, w, c = image_np.shape
        rgba_image = np.zeros((h, w, 4), dtype=np.uint8)

        # Copy RGB channels
        rgba_image[..., :3] = image_np

        # Create Binary Mask
        binary_mask = mask > 0
        rgba_image[..., 3] = np.where(binary_mask, 255, 0)

        # --- NEW: CROP LOGIC ---
        # 1. Find indices where the mask is True
        # np.where returns (row_indices, col_indices)
        y_indices, x_indices = np.where(binary_mask)

        # 2. Safety Check: If mask is empty, return the original transparent image
        if len(y_indices) == 0 or len(x_indices) == 0:
            return Image.fromarray(rgba_image)

        # 3. Calculate the Bounding Box
        top = y_indices.min()
        bottom = y_indices.max()
        left = x_indices.min()
        right = x_indices.max()

        # 4. Crop the Numpy Array
        # Slice format: [start_row : end_row, start_col : end_col]
        # We add +1 because Python slicing excludes the upper bound
        cropped_rgba = rgba_image[top:bottom+1, left:right+1]

        return Image.fromarray(cropped_rgba)
