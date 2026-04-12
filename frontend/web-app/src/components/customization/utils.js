// Crop SAM masks from the original image
export const cropSelectedSegments = (imageObj, masks) => {
  if (!imageObj || !masks || masks.length === 0) return null;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = imageObj.width;
    canvas.height = imageObj.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    
    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = masks[0][0].length;
    maskCanvas.height = masks[0].length;
    const maskCtx = maskCanvas.getContext("2d");
    const maskData = maskCtx.createImageData(maskCanvas.width, maskCanvas.height);
    
    masks.forEach((mask) => {
      for (let y = 0; y < mask.length; y++) {
        for (let x = 0; x < mask[0].length; x++) {
          const i = (y * mask[0].length + x) * 4;
          if (mask[y][x]) maskData.data[i + 3] = 255;
        }
      }
    });
    
    maskCtx.putImageData(maskData, 0, 0);
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(maskCanvas, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
  } catch (err) {
    console.error("Cropping Error:", err);
    return null;
  }
};
