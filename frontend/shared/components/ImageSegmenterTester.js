/**
 * Mock segmentation generator for testing SAM-like logic.
 * Generates random polygon masks on top of an image.
 *
 * @param {HTMLImageElement} image - Image object (already loaded)
 * @param {number} maxMasks - Number of fake masks to generate
 * @param {number} minPoints - Min vertices per mask polygon
 * @param {number} maxPoints - Max vertices per mask polygon
 * @returns {Object} { masks: [ { id, points: [[x, y], ...] } ] }
 */
export function ImageSegmenterTester(image, maxMasks = 5, minPoints = 3, maxPoints = 8) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;

  // Draw image to access its size
  ctx.drawImage(image, 0, 0, image.width, image.height);

  const masks = [];

  for (let i = 0; i < maxMasks; i++) {
    const numPoints = Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;
    const points = [];

    // Generate random polygon within image boundaries
    for (let j = 0; j < numPoints; j++) {
      const x = Math.floor(Math.random() * image.width);
      const y = Math.floor(Math.random() * image.height);
      points.push([x, y]);
    }

    masks.push({
      id: i + 1,
      points
    });
  }

  return { masks };
}
