import { useState, useRef, useEffect } from "react";
import MagicButton from "./MagicButton";
import { HashLoader } from "react-spinners";
import { Notifier } from "./Notifier";
import AddRemoveMaskToggleButton from "./AddRemoveMaskToggleButton";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Sparkles, Info, XCircle } from "lucide-react";

export default function SAMFrontend({
  imageURL,
  loading,
  setLoading,
  imageObj,
  setImageObj,
  setSelectedSegments,
  setIsBeingCustomized,
  segmentationService,
}) {
  const { t } = useTranslation(NAMESPACES.editor);
  const [masks, setMasks] = useState([]);
  const [maskCanvases, setMaskCanvases] = useState([]);
  const [borderCanvases, setBorderCanvases] = useState([]);
  const [selected, setSelected] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [clickMode, setClickMode] = useState("add");
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [deselectedPoints, setDeselectedPoints] = useState([]);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [segmentationStatus, setSegmentationStatus] = useState("idle");
  const canvasRef = useRef(null);

  useEffect(() => {
    const sessionId = segmentationService.connect();
    if (sessionId) setSessionStarted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleContextMenu = (e) => e.preventDefault();
    canvas.addEventListener("contextmenu", handleContextMenu);
    return () => canvas.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const unsubscribeFromSegmentation = segmentationService.subscribeToMasks(
    (segmentation) => {
      if (segmentation?.error) {
        Notifier.notifyError(t("segmentationFailed", { error: segmentation.error }));
        setSegmentationStatus("idle");
        setLoading(false);
        return;
      } else if (segmentation?.masks && segmentation?.boxes) {
        const convertedMasks = convertMasksToPoints(segmentation.masks);
        setBoxes(segmentation.boxes);
        setMasks(convertedMasks);
      } else {
        const convertedMasks = convertMasksToPoints(segmentation.masks);
        setMasks(convertedMasks);
      }
      setSegmentationStatus("completed");
      setLoading(false);
    }
  );

  useEffect(() => {
    return () => {
      unsubscribeFromSegmentation();
    };
  }, []);

  useEffect(() => {
    if (!imageURL || !canvasRef.current) return;
    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setImageObj(img);
    };
  }, [imageURL]);

  useEffect(() => {
    if (!masks.length) return;

    const blueCanvases = [];
    const pinkBorderCanvases = [];

    masks.forEach((mask) => {
      const h = mask.length;
      const w = mask[0].length;
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = w;
      maskCanvas.height = h;
      const mCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      const imgData = mCtx.createImageData(w, h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          if (mask[y][x] === 1) {
            imgData.data[i] = 0;
            imgData.data[i + 1] = 150;
            imgData.data[i + 2] = 255;
            imgData.data[i + 3] = 100;
          } else imgData.data[i + 3] = 0;
        }
      }
      mCtx.putImageData(imgData, 0, 0);
      blueCanvases.push(maskCanvas);

      const borderCanvas = document.createElement("canvas");
      borderCanvas.width = w;
      borderCanvas.height = h;
      const bCtx = borderCanvas.getContext("2d", { willReadFrequently: true });
      const bImgData = bCtx.createImageData(w, h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (mask[y][x] === 1) {
            const neighbors = [
              mask[y - 1]?.[x] || 0,
              mask[y + 1]?.[x] || 0,
              mask[y]?.[x - 1] || 0,
              mask[y]?.[x + 1] || 0,
            ];
            if (neighbors.some((n) => n === 0)) {
              const i = (y * w + x) * 4;
              bImgData.data[i] = 255;
              bImgData.data[i + 1] = 105;
              bImgData.data[i + 2] = 180;
              bImgData.data[i + 3] = 255;
            }
          }
        }
      }
      bCtx.putImageData(bImgData, 0, 0);
      pinkBorderCanvases.push(borderCanvas);
    });

    setMaskCanvases(blueCanvases);
    setBorderCanvases(pinkBorderCanvases);
  }, [masks]);

  const convertMasksToPoints = (masks2DArray) => {
    if (!Array.isArray(masks2DArray) || masks2DArray.length === 0) return [];
    const height = masks2DArray.length;
    const width = masks2DArray[0].length;
    let maxMaskId = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        maxMaskId = Math.max(maxMaskId, masks2DArray[y][x]);
      }
    }
    const masks = Array.from({ length: maxMaskId }, () =>
      Array.from({ length: height }, () => Array(width).fill(0))
    );
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const maskId = masks2DArray[y][x];
        if (maskId > 0) masks[maskId - 1][y][x] = 1;
      }
    }
    return masks;
  };

  const processImage = async () => {
    if (!imageURL) return;
    setSegmentationStatus("uploading");
    setLoading(true);
    const blob = await fetch(imageURL).then((r) => r.blob());
    const file = new File([blob], "photo.jpg", { type: blob.type || "image/jpeg" });
    const formData = new FormData();
    formData.append("image", file);

    await segmentationService.segment(formData).then((response) => {
      if (response?.error) {
        Notifier.notifyError(t("segmentationFailedShort", { error: response.error }));
        setSegmentationStatus("idle");
        setLoading(false);
      } else setSegmentationStatus("segmenting");
    }).catch((error) => {
      Notifier.notifyError(t("segmentationFailed", { error }));
      setLoading(false);
      setSegmentationStatus("idle");
    });
  };

  const reSegmentImage = async () => {
    if (!imageURL) return;
    if (selectedPoints.length === 0 && deselectedPoints.length === 0) {
      Notifier.notifyError(t("providePoints"));
      return;
    }
    setSegmentationStatus("uploading");
    setLoading(true);
    const formData = {
      pos_points: selectedPoints.map(p => [Math.round(p[0]), Math.round(p[1])]),
      neg_points: deselectedPoints.map(p => [Math.round(p[0]), Math.round(p[1])]),
      boxes: boxes,
    };

    await segmentationService.resegment(formData).then((response) => {
      if (response.ok) setSegmentationStatus("segmenting");
      else return response.json();
    }).then((data) => {
      if (data && data.error) {
        Notifier.notifyError(t("segmentationFailedShort", { error: data.error }));
        setSegmentationStatus("idle");
        setLoading(false);
      }
    }).catch((error) => {
      Notifier.notifyError(t("segmentationFailed", { error }));
      setLoading(false);
      setSegmentationStatus("idle");
    });
  };

  const handleCanvasMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !maskCanvases.length) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    let hoveredIdx = null;
    for (let i = maskCanvases.length - 1; i >= 0; i--) {
      const ctx = maskCanvases[i].getContext("2d", { willReadFrequently: true });
      const px = Math.floor((x * maskCanvases[i].width) / canvas.width);
      const py = Math.floor((y * maskCanvases[i].height) / canvas.height);
      const pixel = ctx.getImageData(px, py, 1, 1).data;
      if (pixel[3] > 0) {
        hoveredIdx = i;
        break;
      }
    }
    setHovered(hoveredIdx);
  };

  const toggleMask = (e, mode) => {
    const canvas = canvasRef.current;
    if (!canvas || !maskCanvases.length) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    let clickedIdx = null;
    for (let i = maskCanvases.length - 1; i >= 0; i--) {
      const ctx = maskCanvases[i].getContext("2d", { willReadFrequently: true });
      const px = Math.floor((x * maskCanvases[i].width) / canvas.width);
      const py = Math.floor((y * maskCanvases[i].height) / canvas.height);
      const pixel = ctx.getImageData(px, py, 1, 1).data;
      if (pixel[3] > 0) {
        clickedIdx = i;
        break;
      }
    }
    if (clickedIdx === null) return;
    if (mode === "add") {
      if (!selected.includes(clickedIdx)) {
        setSelected([...selected, clickedIdx]);
        setSelectedSegments((prev) => [...prev, masks[clickedIdx]]);
        setSelectedPoints((prev) => [...prev, [x, y]]);
      }
    } else {
      setSelected(selected.filter((i) => i !== clickedIdx));
      setSelectedSegments((prev) => prev.filter((s) => s !== masks[clickedIdx]));
      setDeselectedPoints((prev) => [...prev, [x, y]]);
    }
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imageObj) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 1;
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

    const drawColoredMask = (maskCanvas, color, alpha) => {
      const tmp = document.createElement("canvas");
      tmp.width = maskCanvas.width;
      tmp.height = maskCanvas.height;
      const tmpCtx = tmp.getContext("2d", { willReadFrequently: true });
      tmpCtx.drawImage(maskCanvas, 0, 0);
      tmpCtx.globalCompositeOperation = "source-in";
      tmpCtx.fillStyle = color;
      tmpCtx.globalAlpha = alpha;
      tmpCtx.fillRect(0, 0, tmp.width, tmp.height);
      ctx.drawImage(tmp, 0, 0, canvas.width, canvas.height);
    };

    maskCanvases.forEach((mc, idx) => {
      if (!selected.includes(idx) && hovered !== idx) drawColoredMask(mc, "rgba(0,150,255,1)", 0.5);
    });

    if (hovered !== null && !selected.includes(hovered)) drawColoredMask(maskCanvases[hovered], "rgba(255,105,180,1)", 0.6);

    let colors = ["#00ffd5", "#fc218f", "#ff0000", "#4a4902", "#ff0000"];
    selected.forEach((idx, i) => {
      drawColoredMask(maskCanvases[idx], colors[i % colors.length], 0.85);
      const border = borderCanvases[idx];
      if (border) ctx.drawImage(border, 0, 0, canvas.width, canvas.height);
    });

    selectedPoints.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, 2 * Math.PI);
      ctx.fillStyle = "#fc218f";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();
    });

    deselectedPoints.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, 2 * Math.PI);
      ctx.fillStyle = "#00d2ff";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();
    });
  };

  useEffect(() => {
    drawCanvas();
  }, [hovered, selected, maskCanvases, borderCanvases, imageObj, selectedPoints, deselectedPoints]);

  const sendSelected = () => {
    if (selected.length !== 1) {
      Notifier.notifyError(t("selectOneSegment"));
      return;
    }
    setIsBeingCustomized(true);
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-10 animate-in fade-in zoom-in duration-700">
      <div className="relative w-full aspect-square md:max-w-xl group">
        {!sessionStarted ? (
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-border/10 bg-black/20">
            <canvas
              ref={canvasRef}
              onClick={clickMode === "add" ? (e) => toggleMask(e, "add") : (e) => toggleMask(e, "remove")}
              onContextMenu={(e) => { e.preventDefault(); toggleMask(e, "remove"); }}
              onMouseMove={handleCanvasMove}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "w-full h-full object-contain cursor-crosshair transition-all duration-1000",
                loading ? "blur-xl scale-110 opacity-50" : "blur-0 scale-100 opacity-100"
              )}
            />
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-3xl z-30 transition-all duration-500">
                <div className="bg-background/80 p-12 rounded-[3.5rem] shadow-2xl flex flex-col items-center gap-8 border border-white/10">
                    <HashLoader size={60} color="var(--primary)" />
                    <div className="space-y-2 text-center">
                        <h4 className="font-black uppercase tracking-tighter text-xl italic">
                            {segmentationStatus === "uploading" ? "Broadcasting Image..." : "AI Vision Segmenting..."}
                        </h4>
                        <p className="text-xs font-bold opacity-40 uppercase tracking-widest animate-pulse">Processing Pixel Arrays</p>
                    </div>
                    <Button 
                        variant="destructive" 
                        size="sm" 
                        className="rounded-full px-8 h-10 font-black uppercase tracking-widest text-[10px]"
                        onClick={() => { setLoading(false); segmentationService.endSession(); setSegmentationStatus("idle"); }}
                    >
                        Abort Protocol
                    </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-muted/20 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 border-2 border-dashed border-border/20">
             <HashLoader size={40} color="gray" />
             <p className="font-black uppercase tracking-widest text-xs opacity-30 animate-pulse">{t("connectingServer")}</p>
          </div>
        )}
      </div>

      <div className="w-full max-w-xl space-y-8">
        <div className="flex flex-wrap justify-center gap-4">
          {masks.length === 0 ? (
            <MagicButton processImage={processImage} isDisabled={!imageURL || loading} name={t("segment")} />
          ) : (
            <MagicButton processImage={reSegmentImage} isDisabled={!imageURL || loading} name={t("resegment")} />
          )}
          {selected.length !== 0 && (
            <Button 
                onClick={sendSelected} 
                className="h-16 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-lg uppercase tracking-widest shadow-xl animate-in fade-in slide-in-from-left-4 duration-500"
            >
                {t("sendSelected")}
            </Button>
          )}
        </div>

        <div className={cn(
            "space-y-6 transition-all duration-1000",
            masks.length === 0 ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        )}>
           <div className="flex justify-center">
            <AddRemoveMaskToggleButton disabled={selected.length === 0} mode={clickMode} setMode={setClickMode} />
           </div>

           <div className="bg-primary/5 border border-primary/10 p-8 rounded-[2.5rem] flex items-start gap-6 group hover:bg-primary/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Info size={28} />
              </div>
              <div className="space-y-1">
                <h5 className="font-black text-xs uppercase tracking-widest opacity-30 italic">Segmentation Guide</h5>
                <p className="font-bold text-sm tracking-tight italic opacity-70">
                    {t("segmentationCanvasDesc") || "Click parts of your image to define specific clothing items. Right-click to remove points."}
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
