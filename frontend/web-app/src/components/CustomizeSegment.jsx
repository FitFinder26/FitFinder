import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notifier } from "./Notifier";
import { HashLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, ChevronLeft, Sparkles, Wand2 } from "lucide-react";

// Crop SAM masks from the original image
const cropSelectedSegments = (imageObj, masks) => {
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
    console.error(err);
    return null;
  }
};

export default function CustomizeSegment({
  imageObj,
  selectedSegments,
  setIsBeingCustomized,
  setImageUploaded,
  segmentationService,
  handleCloseSegmentationSheet,
}) {
  const { t } = useTranslation(NAMESPACES.editor);
  const [segmentedImageSrc, setSegmentedImageSrc] = useState(null);
  const [selectedMask, setSelectedMask] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!imageObj) return;
    const initialSegments = [...selectedSegments];
    if (!initialSegments.length) return;
    setSelectedMask(initialSegments);
    const src = cropSelectedSegments(imageObj, initialSegments);
    if (src) setSegmentedImageSrc(src);
    else Notifier.notifyError(t("cropFailed"));
  }, []);

  const handleSearch = async () => {
    if (!segmentedImageSrc) {
      Notifier.notifyError(t("segmentNotReady"));
      return;
    }
    setIsSearching(true);
    await segmentationService.search(selectedMask[0], prompt)
      .then((response) => response.json())
      .then((products) => {
        if (products && products?.error) {
           Notifier.notifyError(t("searchFailed", { reason: products.error }));
        } else {
          setImageUploaded(false);
          segmentationService.endSession();
          handleCloseSegmentationSheet();
          navigate("/search-result", { state: { products: products, searchingPeice: segmentedImageSrc } });
        }
      })
      .catch(() => Notifier.notifyError(t("searchFailedGeneric")))
      .finally(() => setIsSearching(false));
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
      
      {/* Visual Preview */}
      <div className="relative group w-full flex justify-center">
        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[80px] opacity-20 animate-pulse pointer-events-none" />
        <Card className="relative z-10 w-64 md:w-80 aspect-square rounded-[3.5rem] bg-muted/20 border-border/10 overflow-hidden shadow-2xl flex items-center justify-center p-8 backdrop-blur-3xl group-hover:scale-105 transition-transform duration-700">
            {segmentedImageSrc ? (
                <img src={segmentedImageSrc} alt={t("croppedAlt")} className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-in zoom-in duration-1000" />
            ) : (
                <HashLoader size={40} color="gray" />
            )}
            <Badge variant="secondary" className="absolute top-6 right-6 font-black uppercase tracking-widest text-[8px] italic bg-white/10 backdrop-blur-md text-white border-white/20">
                Segment Focused
            </Badge>
        </Card>
      </div>

      {/* Input Section */}
      <div className="w-full space-y-10">
        <div className="space-y-4">
            <div className="flex items-center gap-3 ml-2 group">
                <Wand2 size={20} className="text-primary group-hover:rotate-45 transition-transform duration-500" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">ITEM CONTEXT</h4>
            </div>
            <Textarea 
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder={t("promptPlaceholder") || "Describe the style, material, or specific details..."}
                disabled={isSearching}
                className="min-h-[160px] rounded-[2.5rem] bg-muted/10 border-2 border-border/10 focus:border-primary/50 font-bold text-lg p-10 shadow-inner resize-none transition-all focus:shadow-2xl focus:shadow-primary/5"
            />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full">
            <Button 
                variant="ghost" 
                onClick={() => setIsBeingCustomized(false)}
                className="h-20 flex-1 rounded-[2rem] font-black text-xl uppercase tracking-widest gap-4 hover:bg-muted/30 group"
            >
                <ChevronLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                {t("back")}
            </Button>
            <Button 
                onClick={handleSearch} 
                disabled={isSearching}
                className="h-24 flex-[2] rounded-[2.5rem] bg-primary text-white font-black text-2xl uppercase tracking-[0.2em] shadow-[0_25px_60px_rgba(250,88,126,0.35)] hover:bg-rose-600 hover:scale-[1.02] active:scale-95 transition-all group"
            >
                {isSearching ? <HashLoader size={30} color="#fff" /> : (
                    <div className="flex items-center gap-6">
                        <Sparkles size={32} className="animate-pulse" />
                        {t("search")}
                    </div>
                )}
            </Button>
        </div>

        {/* Guide */}
        <div className="bg-muted/10 p-10 rounded-[3rem] border border-border/10">
            <div className="flex items-center gap-4 mb-4">
                <Search size={22} className="text-secondary opacity-40" />
                <span className="text-[10px] font-black tracking-widest opacity-20 uppercase italic">SEARCH ARCHITECTURE</span>
            </div>
            <p className="font-bold text-sm tracking-tight opacity-50 italic leading-relaxed">
                {t("guideLine1") || "Specify fabric, pattern, and occasion for most accurate AI lookup."} <br/>
                <span className="text-primary/60">{t("guideExamples") || "e.g., 'Vintage leather oversized jacket'"}</span>
            </p>
        </div>
      </div>
    </div>
  );
}
