import { useState, useRef, useEffect } from "react";
import MagicButton from "./MagicButton";
import {HashLoader} from 'react-spinners';
import { SAMService } from "../../../shared/services/SAMService";
import styled, { keyframes } from "styled-components";
import { ImageSegmenterTester } from "../../../shared/components/ImageSegmenterTester";
import { Notifier } from "./Notifier";

export default function SAMFrontend({ imageURL, loading, setLoading, imageObj, setImageObj, setSelectedSegments, setIsBeingCustomized }) {
  const [masks, setMasks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [deselectedPoints, setDeselectedPoints] = useState([]);
  const [hovered, setHovered] = useState(null);
  const canvasRef = useRef(null);

  // Draw the image on canvas when imageURL changes
  useEffect(() => {
    if (!imageURL || !canvasRef.current) return;

    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Make canvas match image size or parent container
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setImageObj(img);
    };
  }, [imageURL]);

  // prevent default right click on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleContextMenu = (e) => e.preventDefault();
    canvas.addEventListener("contextmenu", handleContextMenu);
    return () => canvas.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // Send image to backend SAM API
  const processImage = async () => {
    if (!imageURL) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", await fetch(imageURL).then((r) => r.blob()));

    // const data = await SAMService.segment(formData, selectedPoints, deselectedPoints).json(); // { masks: [ {id, points:[[x,y], ...]} ] }
    
    // tester
    const data = ImageSegmenterTester(imageObj, 5, 4, 4);

    setMasks(data.masks);
    setLoading(false);
  };

  // Click mask to select/deselect
  // Ray-casting point in polygon (works for convex/concave, polygon points [[x,y],...])
function pointInPolygon(point, polygon) {
  const [px, py] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    // Check if point is exactly on a vertex — treat as inside
    if ((px === xi && py === yi) || (px === xj && py === yj)) return true;

    const intersect =
      ((yi > py) !== (yj > py)) &&
      (px < ((xj - xi) * (py - yi)) / (yj - yi + 0.00000001) + xi); // avoid /0
    if (intersect) inside = !inside;
  }
  return inside;
}

const handleCanvasMove = (e) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;

  // Find the first mask the cursor is inside
  const hoveredMask = masks.find((mask) =>
    pointInPolygon([x, y], mask.points)
  );

  // Update state only when it changes to avoid excessive re-renders
  setHovered((prev) => (prev?.id === hoveredMask?.id ? prev : hoveredMask || null));
};

// Left click
const handleCanvasClick = (e) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  // getBoundingClientRect in CSS pixels
  const rect = canvas.getBoundingClientRect();

  // Convert client coords → canvas pixel coordinates (account for CSS scaling & devicePixelRatio)
  const clientX = e.clientX;
  const clientY = e.clientY;

  // CSS size:
  const cssWidth = rect.width;
  const cssHeight = rect.height;

  // Canvas internal pixel buffer size (actual drawing buffer)
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Scale factor from CSS pixels to canvas pixels
  const scaleX = canvasWidth / cssWidth;
  const scaleY = canvasHeight / cssHeight;

  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top) * scaleY;

  // saving points for showing them and sending them later as clues
  setSelectedPoints((prev) => [...prev, { x, y }]);

  // Optional debugging:
  // console.log({ clientX, clientY, rect, canvasWidth, canvasHeight, scaleX, scaleY, x, y });

  // Ensure masks exist and have points in the same coordinate space as the canvas's pixel coords
  if (!masks || !Array.isArray(masks)) return;

  // find clicked mask (normalize id types so "1" and 1 match)
  const clickedMask = masks.find((mask) => {
    if (!mask || !Array.isArray(mask.points)) return false;
    return pointInPolygon([x, y], mask.points);
  });

  if (!clickedMask) return;

  const clickedId = String(clickedMask.id); // normalize to string (or Number(...) if you prefer)

  setSelected((prev) => {
    // normalize prev to strings for comparison
    const prevStrs = prev.map((p) => String(p));
    const already = prevStrs.includes(clickedId);

    if (already) {
      return prev;
    } else {
      // add original type? keep consistent type - we'll add same type as mask.id
      // If you want selected state to keep numbers, use Number(clickedId) instead.
      const newId = typeof clickedMask.id === "number" ? clickedMask.id : clickedId;
      setSelectedSegments((prevSeg)=>([...prevSeg, clickedMask]))
      return [...prev, newId];
    }
  });
};

// Right click
const handleCanvasUnclick = (e) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  // getBoundingClientRect in CSS pixels
  const rect = canvas.getBoundingClientRect();

  // Convert client coords → canvas pixel coordinates (account for CSS scaling & devicePixelRatio)
  const clientX = e.clientX;
  const clientY = e.clientY;

  // CSS size:
  const cssWidth = rect.width;
  const cssHeight = rect.height;

  // Canvas internal pixel buffer size (actual drawing buffer)
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Scale factor from CSS pixels to canvas pixels
  const scaleX = canvasWidth / cssWidth;
  const scaleY = canvasHeight / cssHeight;

  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top) * scaleY;

  // saving points for showing them and sending them later as clues
  setDeselectedPoints((prev) => [...prev, { x, y }]);

  // Optional debugging:
  // console.log({ clientX, clientY, rect, canvasWidth, canvasHeight, scaleX, scaleY, x, y });

  // Ensure masks exist and have points in the same coordinate space as the canvas's pixel coords
  if (!masks || !Array.isArray(masks)) return;

  // find clicked mask (normalize id types so "1" and 1 match)
  const clickedMask = masks.find((mask) => {
    if (!mask || !Array.isArray(mask.points)) return false;
    return pointInPolygon([x, y], mask.points);
  });

  if (!clickedMask) return;

  const clickedId = String(clickedMask.id); // normalize to string (or Number(...) if you prefer)

  setSelected((prev) => {
    // normalize prev to strings for comparison
    const prevStrs = prev.map((p) => String(p));
    const already = prevStrs.includes(clickedId);

    if (already) {
      setSelectedSegments((prevSeg)=>{
        return prevSeg.filter((seg)=>seg!=clickedMask)
      })
      // remove
      return prev.filter((id) => String(id) !== clickedId);
    } else {
      return prev;
    }
  });
}

  // Redraw masks on canvas whenever masks or selection change
  useEffect(() => {
  if (!canvasRef.current || !imageObj) return;

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // quality settings
  ctx.clearRect(0, 0, width, height);
  ctx.imageSmoothingEnabled = true;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // draw base image
  ctx.drawImage(imageObj, 0, 0, width, height);
  if (!masks?.length) return;

  const selectedMasks = masks.filter((m) => selected.includes(m.id));

  // -------------------------
  // If any mask is selected -> draw a dimmed/blurred background
  // but leave selected mask regions "revealed" (transparent core).
  // -------------------------
  if (selectedMasks.length > 0) {
    // Option A: blur background (preferred) using an offscreen canvas
    // create blurred background
    const offBg = document.createElement("canvas");
    offBg.width = width;
    offBg.height = height;
    const bgCtx = offBg.getContext("2d");
    bgCtx.drawImage(imageObj, 0, 0, width, height);

    // apply blur if available
    if ("filter" in bgCtx) {
      bgCtx.filter = "blur(8px)"; // tune blur amount
      const tmp = document.createElement("canvas");
      tmp.width = width;
      tmp.height = height;
      tmp.getContext("2d").drawImage(offBg, 0, 0);
      bgCtx.clearRect(0, 0, width, height);
      bgCtx.filter = "blur(10px)";
      bgCtx.drawImage(tmp, 0, 0);
      bgCtx.filter = "none";
    }

    // darken the blurred background a little
    bgCtx.fillStyle = "rgba(0,0,0,0.25)";
    bgCtx.fillRect(0, 0, width, height);

    // draw the blurred/dim background onto main canvas
    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(offBg, 0, 0);
    ctx.restore();

    // Punch out (reveal) the selected mask regions so the clear (non-dim) image shows
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    selectedMasks.forEach((mask) => {
      ctx.beginPath();
      mask.points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.closePath();
      ctx.fill();
    });
    ctx.restore();

    // After punching out, redraw the original image *only inside* the selected regions
    // so they appear crisp (not blurred), using clip for each selected mask
    selectedMasks.forEach((mask) => {
      ctx.save();
      ctx.beginPath();
      mask.points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(imageObj, 0, 0, width, height);
      ctx.restore();
    });
  }

  // -------------------------
  // Render hover highlight and selected glow outlines
  // -------------------------
  masks.forEach((mask) => {
    const isSelected = selected.includes(mask.id);
    const isHovered = hovered?.id === mask.id;

    // build path once per mask
    ctx.beginPath();
    mask.points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
    ctx.closePath();

    if (isHovered && !isSelected) {
      // Hover: soft blue interior glow (no border)
      ctx.save();
      ctx.fillStyle = "rgba(0, 150, 255, 0.18)"; // interior tint
      ctx.shadowColor = "rgba(0, 180, 255, 0.75)";
      ctx.shadowBlur = 30;
      ctx.fill();
      ctx.restore();

      // subtle faint inner edge (optional, uncomment if you want a hint)
      // ctx.save(); ctx.lineWidth = 1; ctx.strokeStyle = "rgba(255,255,255,0.05)"; ctx.stroke(); ctx.restore();
    } else if (isSelected) {
      // Selected: transparent core with a soft pink glow outline
      // We'll render the glow via an offscreen canvas (softest) with fallback to multi-stroke

      // build offscreen halo
      let usedOffscreen = false;
      try {
        const off = document.createElement("canvas");
        off.width = width;
        off.height = height;
        const octx = off.getContext("2d");
        octx.lineJoin = "round";
        octx.lineCap = "round";

        // draw a thick solid stroke that will become the halo
        octx.beginPath();
        mask.points.forEach(([x, y], i) => (i === 0 ? octx.moveTo(x, y) : octx.lineTo(x, y)));
        octx.closePath();

        octx.lineWidth = 30; // base halo thickness - tune this
        octx.strokeStyle = "rgba(255,105,180,1)";
        octx.stroke();

        // blur the thick stroke to get a smooth halo if filter supported
        if ("filter" in octx) {
          const tmp = document.createElement("canvas");
          tmp.width = width;
          tmp.height = height;
          tmp.getContext("2d").drawImage(off, 0, 0);

          octx.clearRect(0, 0, width, height);
          octx.filter = "blur(30px)"; // halo softness - tune
          octx.drawImage(tmp, 0, 0);
          octx.filter = "none";

          // composite halo onto main canvas with additive blending for glow
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.drawImage(off, 0, 0);
          ctx.restore();

          usedOffscreen = true;
        }
      } catch (err) {
        usedOffscreen = false;
      }

      // fallback: multi-stroke additive rings (fast & compatible)
      if (!usedOffscreen) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const rings = [
          { w: 20, a: 0.18 },
          { w: 40, a: 0.12 },
          { w: 70, a: 0.06 },
        ];
        // draw the crisp path first as transparent core (so inner is not blocked)
        // then draw rings
        for (const r of rings) {
          ctx.lineWidth = r.w;
          ctx.strokeStyle = `rgba(255,105,180,${r.a})`;
          ctx.stroke();
        }
        ctx.globalCompositeOperation = "source-over";
        ctx.restore();
      }

      // OPTIONAL: faint inner definition (very transparent) - comment out to be fully transparent
      ctx.save();
      ctx.lineWidth = 10;
      ctx.strokeStyle = "rgba(255,105,180,0.5)"; // extremely faint edge to hint shape
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.restore();
    } else {
      // Default masks (not hovered or selected): faint dashed outline
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.restore();
    }
  });

  // -------------------------
  // Draw clicked points
  // -------------------------
  selectedPoints.forEach(({ x, y }) => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255,105,180,0.9)"; // pink
    ctx.fill();
  });

  deselectedPoints.forEach(({ x, y }) => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(0,150,255,0.9)"; // blue
    ctx.fill();
  });

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [masks, selected, hovered, imageObj]);




  // Send selected masks to API
  const sendSelected = async () => {
    if (selected.length > 1){
      Notifier.notifyError("You must select just one segment to search for!");
      return;
    }
    setIsBeingCustomized(true);
  };

  return (
    <div style={{ position: "relative", width: "100%", textAlign: "center", animation: "fadeIn 0.5s" }}>

      <div style={{ position: "relative", display: "inline-block" }}>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onContextMenu={handleCanvasUnclick}
          onMouseMove={handleCanvasMove}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: imageURL ? "block" : "none",
            border: "1px solid #444",
            maxWidth: "100%",
            filter: loading && 'blur(20px)',
            animation: "fadeIn 1.5s"
          }}
        />
        {loading && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              gap:"1rem",
              flexDirection:"column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:"transparent",
              color:"##f994ac"
            }}
          >
            <HashLoader size={50} color={"#fff"} />
            <p>The image is being segmented, Please be patient...</p>
            <Button onClick={()=> setLoading(false)} bgColor="orange" bgColorHover="red">cancel</Button>
          </div>
        )}
      </div>

      <div style={{ marginTop: 10 }}>
        <MagicButton processImage={processImage} isDisabled={!imageURL || loading} name={masks.length==0?"Segment":"Re-segment"} />
        {!selected.length == 0 && <Button onClick={sendSelected} bgColor="rgba(255,105,180,1)" marginLeft="1rem">
          Send Selected
        </Button>}
      </div>
    </div>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;


const Button = styled.button`
    background: ${props => props.bgColor || "white"};
    color: ${props => props.color || "white"};
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: inherit;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 2px solid transparent;
    border-radius: 2rem;
    margin-left: ${props=> props.marginLeft || "0rem"};
    animation: fadeIn 0.5s;

    &:hover {
        background-color: ${props => props.bgColorHover || "#6BCB77"};
    }

`;