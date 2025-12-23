import { useState, useRef, useEffect } from "react";
import MagicButton from "./MagicButton";
import { HashLoader } from "react-spinners";
import { Notifier } from "./Notifier";
import AddRemoveMaskToggleButton from "./AddRemoveMaskToggleButton";
import styled, { keyframes } from "styled-components";
import { segmentationService } from "../../../shared/services/segmentationService";
import { bigArray } from "./masks";

export default function SAMFrontend({
  imageURL,
  loading,
  setLoading,
  imageObj,
  setImageObj,
  setSelectedSegments,
  setIsBeingCustomized,
}) {
  const [masks, setMasks] = useState(bigArray); // raw SAM masks
  // const [masks, setMasks] = useState([]); // raw SAM masks
  const [maskCanvases, setMaskCanvases] = useState([]); // blue overlays
  const [borderCanvases, setBorderCanvases] = useState([]); // strong pink borders
  const [selected, setSelected] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [clickMode, setClickMode] = useState("add"); // "add" or "remove"
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [deselectedPoints, setDeselectedPoints] = useState([]);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [segmentationStatus, setSegmentationStatus] = useState("idle");
  const canvasRef = useRef(null);

  // Prevent right-click & start session
  useEffect(() => {
    const sessionId = segmentationService.connect();
    if (sessionId) setSessionStarted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleContextMenu = (e) => e.preventDefault();
    canvas.addEventListener("contextmenu", handleContextMenu);
    return () => canvas.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // receive masks from segmentationService and close the websocket on unmount
  useEffect(() => {
    // Subscribe to service updates
    const unsubscribe = segmentationService.subscribeToMasks((segmentation) => {
      const convertedMasks = convertMasksToPoints(segmentation.masks);
      setBoxes(segmentation.boxes);
      console.log(
        "number of masks received in SAMFrontend:",
        convertedMasks.length
      );
      setMasks(convertedMasks);
      console.log("Masks received in SAMFrontend:", newMasks);
      setSegmentationStatus("completed");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Load main image
  useEffect(() => {
    if (!imageURL || !canvasRef.current) return;
    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setImageObj(img);
    };
  }, [imageURL]);

  // Pre-render mask canvases and borders
  useEffect(() => {
    if (!masks.length) return;

    const blueCanvases = [];
    const pinkBorderCanvases = [];

    masks.forEach((mask) => {
      const h = mask.length;
      const w = mask[0].length;

      // Mask overlay (blue)
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = w;
      maskCanvas.height = h;
      const mCtx = maskCanvas.getContext("2d");
      const imgData = mCtx.createImageData(w, h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          if (mask[y][x] === 1) {
            imgData.data[i] = 0;
            imgData.data[i + 1] = 150;
            imgData.data[i + 2] = 255;
            imgData.data[i + 3] = 100; // semi-transparent blue
          } else imgData.data[i + 3] = 0;
        }
      }
      mCtx.putImageData(imgData, 0, 0);
      blueCanvases.push(maskCanvas);

      // Border overlay (strong pink)
      const borderCanvas = document.createElement("canvas");
      borderCanvas.width = w;
      borderCanvas.height = h;
      const bCtx = borderCanvas.getContext("2d");
      const bImgData = bCtx.createImageData(w, h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (mask[y][x] === 1) {
            // Only outline pixels (check neighbors)
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
              bImgData.data[i + 3] = 255; // full pink
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
    if (!Array.isArray(masks2DArray) || masks2DArray.length === 0) {
      return [];
    }

    const height = masks2DArray.length;
    const width = masks2DArray[0].length;

    // Find the maximum mask index (e.g. 1,2,3...)
    let maxMaskId = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        maxMaskId = Math.max(maxMaskId, masks2DArray[y][x]);
      }
    }

    // Create empty binary masks
    const masks = Array.from({ length: maxMaskId }, () =>
      Array.from({ length: height }, () => Array(width).fill(0))
    );

    // Fill masks
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const maskId = masks2DArray[y][x];
        if (maskId > 0) {
          // maskId starts from 1 → index is maskId - 1
          masks[maskId - 1][y][x] = 1;
        }
      }
    }

    return masks;
  };

  // Send image to backend SAM API
  const processImage = async () => {
    if (!imageURL) return;
    setSegmentationStatus("uploading");
    setLoading(true);

    const blob = await fetch(imageURL).then((r) => r.blob());
    const file = new File([blob], "photo.jpg", {
      type: blob.type || "image/jpeg",
    });

    const formData = new FormData();
    formData.append("image", file);

    // await segmentationService
    //   .segment(formData)
    //   .then((response) => {
    //     if (response.ok) {
    //       setSegmentationStatus("segmenting");
    //     } else {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     if (data && data.error) {
    //       Notifier.notifyError(`Segmentation failed: ${data.error}`);
    //       setSegmentationStatus("idle");
    //       setLoading(false);
    //     }
    //   })
    //   .catch((error) => {
    //     Notifier.notifyError(
    //       `Segmentation failed. Please try again.\n${error}`
    //     );
    //     setLoading(false);
    //     setSegmentationStatus("idle");
    //   });
  };

  const getSelectedBoxes = () => {
    let positiveBoxes = boxes;
    let negativeBoxes = boxes;
    let outputBoxes = [];
    if (selectedPoints.length > 0) {
      positiveBoxes.filter((box) => {
        selectedPoints.forEach((point) => {
          if (
            point[0] > box[0] &&
            point[0] < box[2] &&
            point[1] < box[1] &&
            point[1] > box[3]
          ) {
            return true;
          }
        });
      });
    }

    if (deselectedPoints.length > 0) {
      negativeBoxes.filter((box) => {
        deselectedPoints.forEach((point) => {
          if (
            point[0] > box[0] &&
            point[0] < box[2] &&
            point[1] < box[1] &&
            point[1] > box[3]
          ) {
            return true;
          }
        });
      });
    }

    outputBoxes = positiveBoxes;
    negativeBoxes.forEach((negBox) => {
      if (!outputBoxes.includes(negBox)) outputBoxes.push(negBox);
    });

    console.log("Selected boxes:", outputBoxes);
    return outputBoxes;
  };

  const reSegmentImage = async () => {
    if (!imageURL) return;
    if (selectedPoints.length === 0 && deselectedPoints.length === 0) {
      Notifier.notifyError(
        "Please provide selected or deselected points for re-segmentation."
      );
      return;
    }
    setSegmentationStatus("uploading");
    setLoading(true);

    const blob = await fetch(imageURL).then((r) => r.blob());
    const file = new File([blob], "photo.jpg", {
      type: blob.type || "image/jpeg",
    });

    const formData = new FormData();
    formData.append("image", file);
    formData.append("selected_points", JSON.stringify(selectedPoints));
    formData.append("deselected_points", JSON.stringify(deselectedPoints));
    formData.append("boxes", JSON.stringify(getSelectedBoxes()));

    await segmentationService
      .resegment(formData)
      .then((response) => {
        if (response.ok) {
          setSegmentationStatus("segmenting");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.error) {
          Notifier.notifyError(`Segmentation failed: ${data.error}`);
          setSegmentationStatus("idle");
          setLoading(false);
        }
      })
      .catch((error) => {
        Notifier.notifyError(
          `Segmentation failed. Please try again.\n${error}`
        );
        setLoading(false);
        setSegmentationStatus("idle");
      });
  };

  // Hover detection
  const handleCanvasMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !maskCanvases.length) return;

    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    let hoveredIdx = null;
    for (let i = maskCanvases.length - 1; i >= 0; i--) {
      const ctx = maskCanvases[i].getContext("2d");
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

  // Toggle selection
  const toggleMask = (e, mode) => {
    const canvas = canvasRef.current;
    if (!canvas || !maskCanvases.length) return;

    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    let clickedIdx = null;
    for (let i = maskCanvases.length - 1; i >= 0; i--) {
      const ctx = maskCanvases[i].getContext("2d");
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
      setSelectedSegments((prev) =>
        prev.filter((s) => s !== masks[clickedIdx])
      );
      setDeselectedPoints((prev) => [...prev, [x, y]]);
    }
  };

  const handleCanvasClick = (e) => toggleMask(e, "add");
  const handleCanvasUnclick = (e) => toggleMask(e, "remove");

  // Draw everything
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imageObj) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    // 1. Draw main image
    ctx.globalAlpha = 1;
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

    // Function to draw a colored mask
    const drawColoredMask = (maskCanvas, color, alpha) => {
      const tmp = document.createElement("canvas");
      tmp.width = maskCanvas.width;
      tmp.height = maskCanvas.height;
      const tmpCtx = tmp.getContext("2d");

      // Draw mask
      tmpCtx.drawImage(maskCanvas, 0, 0);

      // Fill with color using source-in
      tmpCtx.globalCompositeOperation = "source-in";
      tmpCtx.fillStyle = color;
      tmpCtx.globalAlpha = alpha;
      tmpCtx.fillRect(0, 0, tmp.width, tmp.height);

      // Draw onto main canvas
      ctx.drawImage(tmp, 0, 0, canvas.width, canvas.height);
    };

    // 2. Unselected masks
    maskCanvases.forEach((mc, idx) => {
      if (!selected.includes(idx) && hovered !== idx) {
        drawColoredMask(mc, "rgba(0,150,255,1)", 0.5);
      }
    });

    // 3. Hovered mask
    if (hovered !== null && !selected.includes(hovered)) {
      drawColoredMask(maskCanvases[hovered], "rgba(255,105,180,1)", 0.6);
    }

    let colors = ["#00ffd5", "#fc218f", "#ff0000", "#4a4902", "#ff0000"];
    let colorIndex = 0;
    // 4. Selected masks + border
    selected.forEach((idx) => {
      drawColoredMask(
        maskCanvases[idx],
        colors[colorIndex % colors.length],
        0.95
      );
      const border = borderCanvases[idx];
      if (border) ctx.drawImage(border, 0, 0, canvas.width, canvas.height);
      colorIndex++;
    });

    // 5. Draw points
    selectedPoints.forEach(({ x, y }) => {
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(255,105,180,1)";
      ctx.fill();
    });

    deselectedPoints.forEach(({ x, y }) => {
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(0,150,255,1)";
      ctx.fill();
    });
  };

  // Redraw whenever hover/selection changes
  useEffect(() => {
    drawCanvas();
  }, [
    hovered,
    selected,
    maskCanvases,
    borderCanvases,
    imageObj,
    selectedPoints,
    deselectedPoints,
  ]);

  const sendSelected = () => {
    if (selected.length > 1) {
      Notifier.notifyError("You must select just one segment to search for!");
      return;
    }
    setIsBeingCustomized(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        animation: "fadeIn 0.5s",
      }}
    >
      {!sessionStarted ? (
        <div style={{ position: "relative", display: "inline-block" }}>
          <Canvas
            ref={canvasRef}
            onClick={
              clickMode === "add" ? handleCanvasClick : handleCanvasUnclick
            }
            onContextMenu={
              selected.length ? handleCanvasUnclick : handleCanvasClick
            }
            onMouseMove={handleCanvasMove}
            onMouseLeave={() => setHovered(null)}
            imageURL={imageURL}
            loading={loading}
          />
          {loading && (
            <Overlay>
              <StatusLoader>
                <HashLoader size={50} color="#fff" />
                {segmentationStatus === "uploading" && (
                  <p>Uploading image...</p>
                )}
                {segmentationStatus === "segmenting" && (
                  <p>Segmenting image, please wait...</p>
                )}
                <Button
                  onClick={() => {
                    setLoading(false);
                    segmentationService.endSession();
                    setSegmentationStatus("idle");
                  }}
                  bgColor="orange"
                  bgColorHover="red"
                >
                  Cancel
                </Button>
              </StatusLoader>
            </Overlay>
          )}
        </div>
      ) : (
        <Overlay>
          <HashLoader size={50} color="#fff" />
          <p>Connecting to segmentation server...</p>
        </Overlay>
      )}
      <div style={{ marginTop: 10 }}>
        {masks.length === 0 ? (
          <MagicButton
            processImage={processImage}
            isDisabled={!imageURL || loading}
            name={"Segment"}
          />
        ) : (
          <MagicButton
            processImage={reSegmentImage}
            isDisabled={!imageURL || loading}
            name={"Re-segment"}
          />
        )}
        {selected.length !== 0 && (
          <Button
            onClick={sendSelected}
            bgColor="rgba(255,105,180,1)"
            marginLeft="1rem"
          >
            Send Selected
          </Button>
        )}
      </div>
      <div
        style={{
          marginTop: 10,
          opacity: masks.length === 0 ? "0" : "1",
          transition: "all 1s",
        }}
      >
        <AddRemoveMaskToggleButton
          disabled={selected.length === 0}
          mode={clickMode}
          setMode={setClickMode}
        />
      </div>
    </div>
  );
}

// Styled Components
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Canvas = styled.canvas`
  display: ${({ imageURL }) => (imageURL ? "block" : "none")};
  border: none;
  max-width: 100%;
  filter: ${({ loading }) => (loading ? "blur(20px)" : "none")};
  animation: ${fadeIn} 1.5s;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: black;
`;

const Button = styled.button`
  background: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "white"};
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 2rem;
  margin-left: ${(props) => props.marginLeft || "0rem"};
  animation: ${fadeIn} 0.5s;

  &:hover {
    background-color: ${(props) => props.bgColorHover || "#6BCB77"};
  }
`;

const StatusLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #e0e7ff 0%, #f3e7e9 50%, #e0e7ff 100%);
  opacity: 75%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
`;
