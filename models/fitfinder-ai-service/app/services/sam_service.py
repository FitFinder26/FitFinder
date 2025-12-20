import torch
import numpy as np
from PIL import Image
from sam2.build_sam import build_sam2
from sam2.sam2_image_predictor import SAM2ImagePredictor
from transformers import AutoProcessor, AutoModelForZeroShotObjectDetection
import gc

class SAM_service():
    def __init__(self, checkpoint, model_cfg, d_model_id, device):
        self.device = device

        # Load SAM 2
        self.sam2_model = build_sam2(model_cfg, checkpoint, device=device)
        self.predictor = SAM2ImagePredictor(self.sam2_model)

        # Load Grounding DINO
        self.processor = AutoProcessor.from_pretrained(d_model_id)
        self.model = AutoModelForZeroShotObjectDetection.from_pretrained(d_model_id).to(device)

        # State tracking to avoid re-encoding the same image
        self._current_image_ref = None

    def _prepare_image(self, image: Image.Image):
        """Helper to convert PIL to Numpy array for SAM"""
        return np.array(image.convert("RGB"))

    def _set_image_if_needed(self, image: Image.Image):
        """
        Optimization: Only runs the heavy image encoder if the image has changed.
        """
        # Compare object references or add an ID check if needed.
        # For simple flows, checking if it's the same object in memory is a good start.
        if self._current_image_ref is not image:
            self.predictor.set_image(image)
            self._current_image_ref = image
            # Clear memory after encoding (SAM caches features internally)
            gc.collect()

    def segment_image(self, image: Image.Image, boxes=None, multimask=False):
        # Set Image (Only if new)
        self._set_image_if_needed(image)

        # Predict
        masks, scores, logits = self.predictor.predict(
            box=boxes,
            multimask_output=multimask,
        )

        # CPU Cleanup
        gc.collect()

        return masks, scores, logits

    def segment_with_prompt(self, image: Image.Image, prompt: str, multimask=False):
        # Grounding DINO
        inputs = self.processor(images=image, text=prompt, return_tensors="pt").to(self.device)

        with torch.no_grad():
            outputs = self.model(**inputs)

        target_sizes = torch.tensor([image.size[::-1]])
        results = self.processor.image_processor.post_process_object_detection(
            outputs,
            threshold=0.35,
            target_sizes=target_sizes
        )[0]

        # Cleanup DINO tensors immediately to free RAM for SAM
        del inputs, outputs
        gc.collect()

        # Check if DINO found anything
        if len(results['boxes']) == 0:
            print(f"No objects found for prompt: {prompt}")
            return [], [], []

        best_box = results['boxes'].cpu().numpy()

        # Cleanup results
        del results

        cleaned_boxes = self.remove_duplicates(best_box, iou_threshold=0.75)
        gc.collect()

        # SAM 2
        # We pass the boxes directly. SAM 2 handles (N, 4) arrays fine.
        masks, scores, logits = self.segment_image(image, boxes=cleaned_boxes, multimask=multimask)

        return masks, cleaned_boxes, scores

    def calculate_iou(self, box, boxes):
        """
        Calculates IoU of one box against an array of boxes.
        """
        # Determine coordinates of the intersection rectangles
        x1 = np.maximum(box[0], boxes[:, 0])
        y1 = np.maximum(box[1], boxes[:, 1])
        x2 = np.minimum(box[2], boxes[:, 2])
        y2 = np.minimum(box[3], boxes[:, 3])

        # Calculate intersection area
        intersection_area = np.maximum(0, x2 - x1) * np.maximum(0, y2 - y1)

        # Calculate union area
        box_area = (box[2] - box[0]) * (box[3] - box[1])
        boxes_area = (boxes[:, 2] - boxes[:, 0]) * (boxes[:, 3] - boxes[:, 1])
        union_area = box_area + boxes_area - intersection_area

        # Avoid division by zero
        return intersection_area / (union_area + 1e-6)

    def remove_duplicates(self, boxes, iou_threshold=0.85):
        """
        Removes duplicate boxes based on IoU threshold.
        """
        if len(boxes) == 0:
            return []

        # We use indices to keep track of which boxes to keep
        indices = np.arange(len(boxes))
        keep = []

        while len(indices) > 0:
            # Pick the first box in the list (current "best")
            current_idx = indices[0]
            keep.append(current_idx)

            # Compare this box to the remaining boxes
            remaining_indices = indices[1:]
            current_box = boxes[current_idx]
            remaining_boxes = boxes[remaining_indices]

            # Calculate IoU
            ious = self.calculate_iou(current_box, remaining_boxes)

            # Keep only boxes that have low overlap (IoU < threshold)
            # We find indices where IoU is LESS than threshold to keep them for next round
            under_threshold_indices = np.where(ious < iou_threshold)[0]

            # Update indices list (map back to original remaining_indices)
            indices = remaining_indices[under_threshold_indices]

        return boxes[keep]

    def resegment(self, image: Image.Image, pos_points, neg_points, boxes=None):
        """
        Refines the mask based on user clicks.
        """
        # Combine points
        points = []
        labels = []

        if pos_points:
            points.extend(pos_points)
            labels.extend([1] * len(pos_points)) # 1 = Positive

        if neg_points:
            points.extend(neg_points)
            labels.extend([0] * len(neg_points)) # 0 = Negative

        points_np = np.array(points)
        labels_np = np.array(labels)

        # Set Image (Checks if it's the same image as before to save time)
        self._set_image_if_needed(image)

        # Predict using points
        masks, scores, logits = self.predictor.predict(
            point_coords=points_np,
            point_labels=labels_np,
            box=boxes,
            multimask_output=False,
        )

        gc.collect()
        return masks, scores, logits

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
