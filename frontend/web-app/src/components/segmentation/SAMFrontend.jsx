import { useState, useRef, useEffect } from "react";
import { Notifier } from "../Notifier";
import AddRemoveMaskToggleButton from "../AddRemoveMaskToggleButton";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../locales/namespaces";
import { cn } from "@/lib/utils";

// Sub-components
import SegmentationCanvas from "./components/SegmentationCanvas";
import SegmentationActions from "./components/SegmentationActions";
import PointRepository from "./components/PointRepository";
import SegmentationGuide from "./components/SegmentationGuide";

import { useOnboarding, ONBOARDING_STEPS } from "../../providers/OnboardingProvider";

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
  const { currentStep, setCurrentStep, nextStep } = useOnboarding();
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
    segmentationService.connect();
    setSessionStarted(false); // Service handles internal state, we just reset UI flags

    // Onboarding synchronization
    if (currentStep === ONBOARDING_STEPS.CHOOSE_SOURCE || currentStep === ONBOARDING_STEPS.NAVBAR_SEARCH) {
      setCurrentStep(ONBOARDING_STEPS.SEGMENT_IMAGE);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleContextMenu = (e) => e.preventDefault();
    canvas.addEventListener("contextmenu", handleContextMenu);
    return () => canvas.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  useEffect(() => {
    const unsubscribe = segmentationService.subscribeToMasks(
      (segmentation) => {
        if (segmentation?.error) {
          Notifier.notifyError(t("segmentationFailed", { error: segmentation.error }));
          setSegmentationStatus("idle");
          setLoading(false);
          if (currentStep === ONBOARDING_STEPS.SELECT_MASK) {
            setCurrentStep(ONBOARDING_STEPS.SEGMENT_IMAGE);
          }
          return;
        }
        
        const convertedMasks = convertMasksToPoints(segmentation.masks);
        if (segmentation?.boxes) setBoxes(segmentation.boxes);
        setMasks(convertedMasks);
        setSegmentationStatus("completed");
        setLoading(false);

        // Advance onboarding
        if (currentStep === ONBOARDING_STEPS.SEGMENT_IMAGE) {
            nextStep();
        }
      }
    );
    return () => unsubscribe();
  }, [segmentationService, t, currentStep, nextStep]);

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
  }, [imageURL, setImageObj]);

  useEffect(() => {
    if (!masks.length) return;

    const blueCanvases = [];
    const pinkBorderCanvases = [];

    masks.forEach((mask) => {
      const h = mask.length;
      const w = mask[0].length;
      
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = w; maskCanvas.height = h;
      const mCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      const imgData = mCtx.createImageData(w, h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          if (mask[y][x] === 1) {
            imgData.data[i] = 0; imgData.data[i + 1] = 150;
            imgData.data[i + 2] = 255; imgData.data[i + 3] = 100;
          } else imgData.data[i + 3] = 0;
        }
      }
      mCtx.putImageData(imgData, 0, 0);
      blueCanvases.push(maskCanvas);

      const borderCanvas = document.createElement("canvas");
      borderCanvas.width = w; borderCanvas.height = h;
      const bCtx = borderCanvas.getContext("2d", { willReadFrequently: true });
      const bImgData = bCtx.createImageData(w, h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (mask[y][x] === 1) {
            const neighbors = [
              mask[y - 1]?.[x] || 0, mask[y + 1]?.[x] || 0,
              mask[y]?.[x - 1] || 0, mask[y]?.[x + 1] || 0,
            ];
            if (neighbors.some((n) => n === 0)) {
              const i = (y * w + x) * 4;
              bImgData.data[i] = 255; bImgData.data[i + 1] = 105;
              bImgData.data[i + 2] = 180; bImgData.data[i + 3] = 255;
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
      for (let x = 0; x < width; x++) maxMaskId = Math.max(maxMaskId, masks2DArray[y][x]);
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
    const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await segmentationService.segment(formData);
      if (response?.error) {
        Notifier.notifyError(t("segmentationFailedShort", { error: response.error }));
        setSegmentationStatus("idle");
        setLoading(false);
        if (currentStep === ONBOARDING_STEPS.SELECT_MASK) {
          setCurrentStep(ONBOARDING_STEPS.SEGMENT_IMAGE);
        }
      } else setSegmentationStatus("segmenting");
    } catch (error) {
      Notifier.notifyError(t("segmentationFailed", { error: error.message }));
      setLoading(false);
      setSegmentationStatus("idle");
      if (currentStep === ONBOARDING_STEPS.SELECT_MASK) {
        setCurrentStep(ONBOARDING_STEPS.SEGMENT_IMAGE);
      }
    }
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

    try {
      const response = await segmentationService.resegment(formData);
      if (response.ok) {
        setSegmentationStatus("segmenting");
      } else {
        const data = await response.json();
        if (data?.error) {
          Notifier.notifyError(t("segmentationFailedShort", { error: data.error }));
          setSegmentationStatus("idle");
          setLoading(false);
          if (currentStep === ONBOARDING_STEPS.SELECT_MASK) {
            setCurrentStep(ONBOARDING_STEPS.SEGMENT_IMAGE);
          }
        }
      }
    } catch (error) {
      Notifier.notifyError(t("segmentationFailed", { error: error.message }));
      setLoading(false);
      setSegmentationStatus("idle");
      if (currentStep === ONBOARDING_STEPS.SELECT_MASK) {
        setCurrentStep(ONBOARDING_STEPS.SEGMENT_IMAGE);
      }
    }
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
      if (pixel[3] > 0) { hoveredIdx = i; break; }
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
      if (pixel[3] > 0) { clickedIdx = i; break; }
    }
    
    if (clickedIdx === null) return;
    if (mode === "add") {
      if (!selected.includes(clickedIdx)) {
        setSelected([...selected, clickedIdx]);
        setSelectedPoints([...selectedPoints, [x, y]]);
        setSelectedSegments((prev) => [...prev, masks[clickedIdx]]);
      }
    } else {
      setSelected(selected.filter((i) => i !== clickedIdx));
      setDeselectedPoints([...deselectedPoints, [x, y]]);
      setSelectedSegments((prev) => prev.filter((s) => s !== masks[clickedIdx]));
    }
  };

  const removePoint = (idx, type) => {
    if (type === "selected") {
      setSelectedPoints(prev => prev.filter((_, i) => i !== idx));
      setSelected(prev => prev.filter((_, i) => i !== idx));
      setSelectedSegments(prev => prev.filter((_, i) => i !== idx));
    } else {
      setDeselectedPoints(prev => prev.filter((_, i) => i !== idx));
    }
  };

  const sendSelected = () => {
    if (selected.length !== 1) {
      Notifier.notifyError(t("selectOneSegment"));
      return;
    }
    setIsBeingCustomized(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12 animate-in fade-in zoom-in duration-1000">
      <SegmentationCanvas 
        ref={canvasRef}
        loading={loading}
        clickMode={clickMode}
        toggleMask={toggleMask}
        handleCanvasMove={handleCanvasMove}
        setHovered={setHovered}
        segmentationStatus={segmentationStatus}
        setLoading={setLoading}
        segmentationService={segmentationService}
        setSegmentationStatus={setSegmentationStatus}
        sessionStarted={sessionStarted}
        imageObj={imageObj}
        maskCanvases={maskCanvases}
        borderCanvases={borderCanvases}
        selected={selected}
        hovered={hovered}
        selectedPoints={selectedPoints}
        deselectedPoints={deselectedPoints}
      />

      <div className="w-full lg:w-80 flex flex-col gap-8 lg:gap-10 order-2 lg:sticky lg:top-12">
        <SegmentationActions 
          masks={masks}
          processImage={processImage}
          reSegmentImage={reSegmentImage}
          imageURL={imageURL}
          loading={loading}
          selected={selected}
          sendSelected={sendSelected}
        />

        <div className="space-y-8">
            <div className={cn(
               "border-t border-border/10 pt-8 transition-all duration-500",
               masks.length === 0 ? "opacity-30 pointer-events-none grayscale" : "opacity-100"
            )}>
              <AddRemoveMaskToggleButton disabled={selected.length === 0} mode={clickMode} setMode={setClickMode} />
            </div>

            <PointRepository 
              selectedPoints={selectedPoints}
              deselectedPoints={deselectedPoints}
              removePoint={removePoint}
            />

            <SegmentationGuide />
        </div>
      </div>
    </div>
  );
}
