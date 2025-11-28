from PIL import Image
import numpy as np
from sam2.build_sam import build_sam2
from sam2.sam2_image_predictor import SAM2ImagePredictor

class SAM_service():
    def __init__(self, checkpoint, model_cfg):
        self.sam2_model = build_sam2(model_cfg, checkpoint, device=device)
        self.predictor = SAM2ImagePredictor(self.sam2_model)

    def _prepare_image(self, image: Image.Image):
        """Helper to convert PIL to Numpy array for SAM"""
        return np.array(image.convert("RGB"))

    def segment_image(self, image: Image.Image, multimask=False):
        self.predictor.set_image(image)

        masks, scores, logits = self.predictor.predict(
            point_coords=None,
            point_labels=None,
            multimask_output=multimask,
        )

        return masks, scores, logits

    def resegment(self, image: Image.Image, pos_points, neg_points):
        points = pos_points + neg_points
        points = np.array(points)

        positive_labels = np.ones(len(pos_points))
        negative_labels = np.zeros(len(neg_points))
        labels = np.concatenate((positive_labels, negative_labels), axis=0)

        self.predictor.set_image(image)

        masks, scores, logits = self.predictor.predict(
            point_coords=points,
            point_labels=labels,
            multimask_output=False,
        )

        return masks, scores, logits


    def get_segmented_image(self, image: Image.Image, mask):
        """
        Applies the mask to the image and returns a transparent PNG.
        """
        image_np = self._prepare_image(image)

        # Ensure mask is in the correct shape (H, W)
        # SAM often returns (1, H, W) or (N, H, W), we need the single mask plane
        if len(mask.shape) == 3:
            mask = mask[0]

        # Create an RGBA image
        h, w, c = image_np.shape
        rgba_image = np.zeros((h, w, 4), dtype=np.uint8)

        # Copy RGB channels
        rgba_image[..., :3] = image_np

        # Set Alpha channel: 255 (opaque) where mask is True, 0 (transparent) elsewhere
        rgba_image[..., 3] = np.where(mask > 0, 255, 0)

        return Image.fromarray(rgba_image)

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


