import SAMFrontend from "./SAMFrontend";
import CustomizeSegment from "./CustomizeSegment";
import { useEffect, useRef, useState } from "react";
import { segmentationService } from "../../../shared/services/segmentationService";
import { useDevice } from "../providers/DeviceProvider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";

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
        "max-w-4xl p-0 overflow-hidden border-none rounded-[3rem] bg-background/50 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)]",
        "h-[90vh] md:h-[85vh] flex flex-col"
      )}>
        <DialogHeader className="p-8 pb-4 border-b border-border/10 bg-muted/20">
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter italic text-center">
            {isBeingCustomized ? "Refine & Search" : "AI Segmentation Editor"}
          </DialogTitle>
        </DialogHeader>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8">
           <div className="max-w-3xl mx-auto h-full flex flex-col justify-center">
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
        <Toaster />
      </DialogContent>
    </Dialog>
  );
}
