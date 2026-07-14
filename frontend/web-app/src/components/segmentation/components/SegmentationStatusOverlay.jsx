import { HashLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SegmentationStatusOverlay({
  segmentationStatus,
  setLoading,
  segmentationService,
  setSegmentationStatus,
}) {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md z-30 transition-all duration-700 p-6">
      <div className="w-full max-w-[280px] bg-muted/40 backdrop-blur-3xl p-8 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col items-center gap-6 border border-foreground/10 animate-in zoom-in-95 duration-500">
        <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150" />
            <HashLoader size={45} color="var(--primary)" />
        </div>
        
        <div className="space-y-1.5 text-center relative">
          <h4 className="font-black uppercase tracking-tighter text-sm italic opacity-100">
            {segmentationStatus === "uploading" ? t("broadcastingImage") : t("aiVisionSegmenting")}
          </h4>
          <p className="text-[9px] font-bold opacity-40 uppercase tracking-[0.2em] animate-pulse">{t("processingPixelArrays")}</p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="rounded-xl px-6 h-9 font-black uppercase tracking-widest text-[9px] bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 transition-all hover:scale-105"
          onClick={() => {
            setLoading(false);
            segmentationService.endSession();
            setSegmentationStatus("idle");
          }}
        >
          {t("abortProtocol")}
        </Button>
      </div>
    </div>
  );
}
