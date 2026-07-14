/**
 * Extracts average colors from the edges of an image to create an ambient light effect.
 * Note: Requires the image server to support CORS (crossOrigin="Anonymous").
 */
export async function getEdgeColors(imageUrl) {
    if (!imageUrl) return null;

    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;

        img.onload = () => {
            try {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d", { willReadFrequently: true });
                
                // Use a small version of the image for faster processing
                const targetW = 100;
                const targetH = 150;
                canvas.width = targetW;
                canvas.height = targetH;
                
                ctx.drawImage(img, 0, 0, targetW, targetH);

                const sampleSize = 5;

                const getAverageColor = (x, y, w, h, alpha = 0.4) => {
                    const data = ctx.getImageData(x, y, w, h).data;
                    let r = 0, g = 0, b = 0;
                    
                    for (let i = 0; i < data.length; i += 4) {
                        r += data[i];
                        g += data[i+1];
                        b += data[i+2];
                    }
                    
                    const count = data.length / 4;
                    if (count === 0) return "rgba(0,0,0,0)";
                    
                    let avgR = Math.round(r/count);
                    let avgG = Math.round(g/count);
                    let avgB = Math.round(b/count);

                    // Boost saturation and brightness for professional "YouTube-style" ambient glow
                    // Convert to HSL, boost S and L, then back to RGB or just simple boost
                    const boost = 1.5;
                    avgR = Math.min(255, avgR * boost);
                    avgG = Math.min(255, avgG * boost);
                    avgB = Math.min(255, avgB * boost);
                    
                    return `rgba(${Math.round(avgR)}, ${Math.round(avgG)}, ${Math.round(avgB)}, ${alpha})`;
                };

                const colors = {
                    topLeft: getAverageColor(0, 0, sampleSize, sampleSize, 0.5),
                    topRight: getAverageColor(targetW - sampleSize, 0, sampleSize, sampleSize, 0.5),
                    bottomLeft: getAverageColor(0, targetH - sampleSize, sampleSize, sampleSize, 0.5),
                    bottomRight: getAverageColor(targetW - sampleSize, targetH - sampleSize, sampleSize, sampleSize, 0.5),
                    center: getAverageColor(targetW/4, targetH/4, targetW/2, targetH/2, 0.3),
                };

                // Create a professional multi-stop gradient
                colors.gradient = `
                    radial-gradient(circle at 0% 0%, ${colors.topLeft} 0%, transparent 70%),
                    radial-gradient(circle at 100% 0%, ${colors.topRight} 0%, transparent 70%),
                    radial-gradient(circle at 0% 100%, ${colors.bottomLeft} 0%, transparent 70%),
                    radial-gradient(circle at 100% 100%, ${colors.bottomRight} 0%, transparent 70%),
                    radial-gradient(circle at 50% 50%, ${colors.center} 0%, transparent 80%)
                `.replace(/\s+/g, ' ').trim();

                resolve(colors);
            } catch (e) {
                console.warn("CORS limitation: Could not analyze image pixels for ambient light.", e);
                resolve(null);
            }
        };

        img.onerror = () => {
            resolve(null);
        };
    });
}
