import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SegmentationStatusOverlay from "./SegmentationStatusOverlay";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";
import { Sparkles } from "lucide-react";

import { useOnboarding, ONBOARDING_STEPS } from "../../../providers/OnboardingProvider";

const SegmentationCanvas = forwardRef(({
  loading,
  clickMode,
  toggleMask,
  handleCanvasMove,
  setHovered,
  segmentationStatus,
  setLoading,
  segmentationService,
  setSegmentationStatus,
  sessionStarted,
  imageObj,
  maskCanvases,
  borderCanvases,
  selected,
  hovered,
  selectedPoints,
  deselectedPoints,
}, ref) => {
  const { t } = useTranslation(NAMESPACES.editor);
  const { currentStep, nextStep } = useOnboarding();
  const [isGlowing, setIsGlowing] = useState(false);

  const handleMaskClick = (e) => {
    if (currentStep === ONBOARDING_STEPS.SELECT_MASK) {
      nextStep();
    }
    if (clickMode === "add") {
      toggleMask(e, "add");
    } else {
      toggleMask(e, "remove");
    }
  };

  useEffect(() => {
    if (segmentationStatus === "completed" && maskCanvases.length > 0) {
      setIsGlowing(true);
      const timer = setTimeout(() => setIsGlowing(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [segmentationStatus, maskCanvases.length]);

  const drawCanvas = () => {
    const canvas = ref.current;
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

    const glowColors = ["#00ffd5", "#fc218f", "#ffff00", "#00ff00", "#ff00ff", "#00ffff", "#ff8800"];

    maskCanvases.forEach((mc, idx) => {
      if (isGlowing) {
        drawColoredMask(mc, glowColors[idx % glowColors.length], 0.7);
      } else if (!selected.includes(idx) && hovered !== idx) {
        drawColoredMask(mc, "rgba(0,150,255,1)", 0.5);
      }
    });

    if (!isGlowing && hovered !== null && !selected.includes(hovered)) {
      drawColoredMask(maskCanvases[hovered], "rgba(255,105,180,1)", 0.6);
    }

    let colors = ["#00ffd5", "#fc218f", "#ff0000", "#4a4902", "#ff0000"];
    selected.forEach((idx, i) => {
      drawColoredMask(maskCanvases[idx], colors[i % colors.length], 0.85);
      const border = borderCanvases[idx];
      if (border) ctx.drawImage(border, 0, 0, canvas.width, canvas.height);
    });

    // Draw Points with Numbers
    ctx.font = "bold 14px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    selectedPoints.forEach(([x, y], idx) => {
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, 2 * Math.PI);
      ctx.fillStyle = "#fc218f";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(252, 33, 143, 0.5)";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#fff";
      ctx.fillText(idx + 1, x, y);
    });

    deselectedPoints.forEach(([x, y], idx) => {
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, 2 * Math.PI);
      ctx.fillStyle = "#00d2ff";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(0, 210, 255, 0.5)";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#fff";
      ctx.fillText(idx + 1, x, y);
    });
  };

  useEffect(() => {
    drawCanvas();
  }, [hovered, selected, maskCanvases, borderCanvases, imageObj, selectedPoints, deselectedPoints, isGlowing]);

  return (
    <div className="flex-1 w-full lg:max-w-2xl relative group order-1">
      <div className="absolute inset-0 bg-primary/20 rounded-[2rem] sm:rounded-[3rem] blur-[80px] opacity-10 animate-pulse pointer-events-none" />
      {!sessionStarted ? (
        <div className="relative w-full aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-border/10 bg-muted/10 backdrop-blur-3xl group-hover:scale-[1.01] transition-transform duration-700">
          <canvas
            ref={ref}
            onClick={handleMaskClick}
            onContextMenu={(e) => { e.preventDefault(); toggleMask(e, "remove"); }}
            onMouseMove={handleCanvasMove}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "w-full h-full object-contain cursor-crosshair transition-all duration-1000 segmentation-mask",
              loading ? "blur-xl scale-110 opacity-50" : "blur-0 scale-100 opacity-100"
            )}
          />
          {loading && (
            <SegmentationStatusOverlay
              segmentationStatus={segmentationStatus}
              setLoading={setLoading}
              segmentationService={segmentationService}
              setSegmentationStatus={setSegmentationStatus}
            />
          )}

          {/* Post-segmentation Instruction Overlay */}
          {!loading && segmentationStatus === "completed" && !isGlowing && selected.length === 0 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8 text-center animate-in fade-in duration-700">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl animate-pulse">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">
                  {t("clickToSelect") || "CLICK ANYWHERE TO SELECT ITEM"}
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full aspect-square bg-muted/20 rounded-[2rem] sm:rounded-[3rem] flex flex-col items-center justify-center gap-6 border-2 border-dashed border-border/20">
          <p className="font-black uppercase tracking-widest text-xs opacity-30 animate-pulse">{t("connectingServer")}</p>
        </div>
      )}
    </div>
  );
});

SegmentationCanvas.displayName = "SegmentationCanvas";

export default SegmentationCanvas;
