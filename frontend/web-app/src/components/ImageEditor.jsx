import SAMFrontend from "./SAMFrontend";
import { Sheet } from "react-modal-sheet";
import CustomizeSegment from "./CustomizeSegment";
import { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { segmentationService } from "../../../shared/services/segmentationService";

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

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [loading]);

  useEffect(() => {
    setSelectedSegments([]);
  }, [isBeingCustomized]);

  useEffect(() => {
    console.log("Reset selected segments");
  }, [imageUploaded]);

  const handleCloseSegmentationSheet = () => {
    setImageUploaded(false);
    setLoading(false);
    setImageURL(null);
    setImageObj(null);
    setSelectedSegments([]);
    setIsBeingCustomized(false);
  };

  return (
    <Sheet isOpen={imageUploaded} onClose={handleCloseSegmentationSheet}>
      <Sheet.Container style={ContainerStyle}>
        <Sheet.Header
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.527)",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
          }}
        />
        <Sheet.Content ref={scrollRef}>
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
          <Toaster />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

const ContainerStyle = {
  borderTopLeftRadius: "2rem",
  borderTopRightRadius: "2rem",
  backgroundColor: "transparent",
  width: "50%",
  marginLeft: "25%",
  "background-image":
    "repeating-linear-gradient(0deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(90deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.05) 0 2px,rgba(0, 0, 0, 0.05) 2px 4px), linear-gradient(-45deg, var(--bg-color) 0%, #90b9f644 100%)",
  "background-size": "6px 6px, 6px 6px, 12px 12px, cover",
  "background-blend-mode": "multiply, multiply, overlay, normal",
  "mask-composite": "intersect",
};
