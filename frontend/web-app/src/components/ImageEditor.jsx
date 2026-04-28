import SAMFrontend from "@/components/segmentation/SAMFrontend";
import CustomizeSegment from "@/components/customization/CustomizeSegment";
import { useEffect, useRef, useState } from "react";
import { segmentationService } from "@shared/services/segmentationService";
import { useDevice } from "@/providers/DeviceProvider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import DynamicTips from "./common/DynamicTips";

export default function ImageEditor({
  imageUploaded,
  setImageUploaded,
  imageURL,
  setImageURL,
}) {
  const [loading, setLoading] = useState(false);
  const [imageObj, setImageObj] = useState(null);
  const [selectedSegments, setSelectedSegments] = useState([]);
  const [isBeingCustomized, setIsBeingCustomized] = useState(false);
  const { t } = useTranslation(NAMESPACES.editor);
  const scrollRef = useRef();
  const { device } = useDevice();

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [loading]);

  useEffect(() => {
    setSelectedSegments([]);
  }, [isBeingCustomized]);

  const handleCloseSegmentationSheet = () => {
    segmentationService.endSession();
    setImageUploaded(false);
    setLoading(false);
    setImageURL(null);
    setImageObj(null);
    setSelectedSegments([]);
    setIsBeingCustomized(false);
  };

  return (
    <Dialog open={imageUploaded} onOpenChange={handleCloseSegmentationSheet}>
      <DialogContent className={cn(
        "max-w-4xl p-0 border-none rounded-[3rem] bg-background/95 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.2)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.5)]",
        "h-[90vh] md:h-[85vh] overflow-y-auto flex flex-col no-scrollbar cursor-default"
      )} onWheel={(e) => e.stopPropagation()}>
        <div className="shrink-0 sticky top-0 z-50 backdrop-blur-3xl border-b border-border/10 bg-muted/40">
          <DialogHeader className="p-8 pb-2 flex flex-row items-center justify-between border-none bg-transparent">
            <DialogTitle className="text-2xl font-black uppercase tracking-tighter italic">
              {isBeingCustomized ? t("refineAndSearch") : t("aiSegmentationEditor")}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-2xl hover:bg-rose-500/10 hover:text-rose-500 transition-all opacity-50 hover:opacity-100"
              onClick={handleCloseSegmentationSheet}
            >
              <X size={24} strokeWidth={3} />
            </Button>
          </DialogHeader>
          <div className="pb-4">
            <DynamicTips tips={isBeingCustomized ? t("tips.customization", { returnObjects: true }) : t("tips.segmentation", { returnObjects: true })} />
          </div>
        </div>

        <div ref={scrollRef} className="p-4 md:p-12">
          <div className="max-w-3xl mx-auto min-h-full flex flex-col">
            {isBeingCustomized ? (
              <CustomizeSegment
                imageObj={imageObj}
                setIsBeingCustomized={setIsBeingCustomized}
                selectedSegments={selectedSegments}
                setImageUploaded={setImageUploaded}
                segmentationService={segmentationService}
                handleCloseSegmentationSheet={handleCloseSegmentationSheet}
              />
            ) : (
              <SAMFrontend
                imageURL={imageURL}
                loading={loading}
                setLoading={setLoading}
                imageObj={imageObj}
                setImageObj={setImageObj}
                setSelectedSegments={setSelectedSegments}
                setIsBeingCustomized={setIsBeingCustomized}
                segmentationService={segmentationService}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
