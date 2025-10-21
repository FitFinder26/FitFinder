import { useState, useRef, useEffect } from "react";
import MagicButton from "./MagicButton";
import {HashLoader} from 'react-spinners';
import { SAMService } from "../../../shared/services/SAMService";
import styled from "styled-components";

export default function SAMFrontend({ imageURL, loading, setLoading }) {
  const [imageObj, setImageObj] = useState(null);
  const [masks, setMasks] = useState([]);
  const [selected, setSelected] = useState([]);
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

  // Send image to backend SAM API
  const processImage = async () => {
    if (!imageURL) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", await fetch(imageURL).then((r) => r.blob()));

    const data = await SAMService.segment(formData).json(); // { masks: [ {id, points:[[x,y], ...]} ] }
    setMasks(data.masks);
    setLoading(false);
  };

  // Click mask to select/deselect
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedMask = masks.find((mask) =>
      pointInPolygon([x, y], mask.points)
    );
    if (!clickedMask) return;

    setSelected((prev) =>
      prev.includes(clickedMask.id)
        ? prev.filter((id) => id !== clickedMask.id)
        : [...prev, clickedMask.id]
    );
  };

  // Redraw masks on canvas whenever masks or selection change
  useEffect(() => {
    if (!canvasRef.current || !imageObj) return;

    const ctx = canvasRef.current.getContext("2d");
    ctx.drawImage(imageObj, 0, 0, canvasRef.current.width, canvasRef.current.height);

    masks.forEach((mask) => {
      ctx.beginPath();
      mask.points.forEach(([x, y], i) =>
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      );
      ctx.closePath();

      ctx.fillStyle = selected.includes(mask.id)
        ? "rgba(255, 0, 0, 0.4)"
        : "rgba(0, 255, 0, 0.2)";
      ctx.fill();
    });
  }, [masks, selected, imageObj]);

  // Send selected masks to API
  const sendSelected = async () => {
    await SAMService.sendSegments(selected);
  };

  return (
    <div style={{ position: "relative", width: "100%", textAlign: "center" }}>

      <div style={{ position: "relative", display: "inline-block" }}>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          style={{
            display: imageURL ? "block" : "none",
            border: "1px solid #444",
            maxWidth: "100%",
            filter: loading && 'blur(20px)',
            transition: "all .3s ease-in-out"
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
        {!selected.length === 0 && <Button onClick={sendSelected} bgColor="orange" marginLeft="1rem">
          Send Selected
        </Button>}
      </div>
    </div>
  );
}

// 🔍 helper
function pointInPolygon(point, vs) {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0],
      yi = vs[i][1];
    const xj = vs[j][0],
      yj = vs[j][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

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
    transition: all 0.3s;
    border-radius: 2rem;
    margin-left: ${props=> props.marginLeft || "0rem"};

    &:hover {
        background-color: ${props => props.bgColorHover || "#6BCB77"};
    }

`;