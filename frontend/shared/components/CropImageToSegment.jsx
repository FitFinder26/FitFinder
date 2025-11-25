/**
 * Crop an image to a polygon mask and return a free-floating image (HTMLImageElement).
 * The cropped image preserves transparency outside the mask.
 *
 * @param {HTMLImageElement} imageObj - Source image element (fully loaded).
 * @param {{id: string|number, points: [number, number][]}} mask - Mask polygon points.
 * @returns {Promise<HTMLImageElement>} - The cropped transparent image.
 */
export async function CropImageToSegment(imageObj, mask) {
  if (!imageObj || !mask?.points?.length) throw new Error("Invalid image or mask");

  // --- 1. Calculate bounding box of mask
  const xs = mask.points.map(([x]) => x);
  const ys = mask.points.map(([, y]) => y);
  const minX = Math.max(Math.min(...xs), 0);
  const maxX = Math.min(Math.max(...xs), imageObj.width);
  const minY = Math.max(Math.min(...ys), 0);
  const maxY = Math.min(Math.max(...ys), imageObj.height);

  const cropW = maxX - minX;
  const cropH = maxY - minY;

  // --- 2. Prepare offscreen canvas
  const off = document.createElement("canvas");
  off.width = cropW;
  off.height = cropH;
  const ctx = off.getContext("2d");

  // --- 3. Clip to polygon region
  ctx.save();
  ctx.translate(-minX, -minY);
  ctx.beginPath();
  mask.points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
  ctx.closePath();
  ctx.clip();

  // --- 4. Draw source image only through clipped area
  ctx.drawImage(imageObj, 0, 0);
  ctx.restore();

  // --- 5. Return as an HTMLImageElement
  const croppedURL = off.toDataURL("image/png");
  return await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = croppedURL;
  });
}
