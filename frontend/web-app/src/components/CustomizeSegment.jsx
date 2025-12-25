import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Notifier } from "./Notifier";
import { segmentationService } from "../../../shared/services/segmentationService";
import products from "./searchResponse.json";
import { HashLoader } from "react-spinners";

// Crop SAM masks from the original image
const cropSelectedSegments = (imageObj, masks) => {
  console.log("cropSelectedSegments called");
  if (!imageObj) {
    console.error("No imageObj provided!");
    return null;
  }
  if (!masks || masks.length === 0) {
    console.error("No masks provided!");
    return null;
  }

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
    const maskData = maskCtx.createImageData(
      maskCanvas.width,
      maskCanvas.height
    );

    masks.forEach((mask, maskIndex) => {
      for (let y = 0; y < mask.length; y++) {
        for (let x = 0; x < mask[0].length; x++) {
          const i = (y * mask[0].length + x) * 4;
          if (mask[y][x]) maskData.data[i + 3] = 255; // alpha channel
        }
      }
    });

    maskCtx.putImageData(maskData, 0, 0);

    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(maskCanvas, 0, 0, canvas.width, canvas.height);

    const result = canvas.toDataURL();
    console.log("Cropped segment generated successfully");
    return result;
  } catch (err) {
    console.error("Error in cropSelectedSegments:", err);
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
  const [segmentedImageSrc, setSegmentedImageSrc] = useState(null);
  const [selectedMask, setSelectedMask] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!imageObj) {
      console.error("No imageObj!");
      return;
    }

    const initialSegments = [...selectedSegments]; // make a local copy
    if (!initialSegments.length) {
      console.warn("No masks to crop");
      return;
    }

    setSelectedMask(initialSegments);

    try {
      const src = cropSelectedSegments(imageObj, initialSegments);
      if (!src) throw new Error("Cropped segment is empty.");
      setSegmentedImageSrc(src);
    } catch (err) {
      console.error("Failed to crop segment:", err);
      Notifier.notifyError("Failed to crop segment: " + err.message);
    }
  }, []); // empty dependency array ensures this runs once

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSearch = async () => {
    if (!segmentedImageSrc) {
      console.warn("Segmented image not ready");
      Notifier.notifyError("Segmented image not ready.");
      return;
    }
    setIsSearching(true);
    await segmentationService
      .search(selectedMask[0], prompt)
      .then((response) => response.json())
      .then((products) => {
        if (products && products?.error) {
          Notifier.notifyError(`Search failed: ${products.error}`);
        } else {
          setImageUploaded(false);
          segmentationService.endSession();
          handleCloseSegmentationSheet();
          navigate("/search-result", {
            state: { products: products, searchingPeice: segmentedImageSrc },
          });
        }
      })
      .catch((err) => {
        console.error("Search failed:", err);
        Notifier.notifyError(err.message);
      });

    // setImageUploaded(false);
    // navigate("/search-result", {
    //   state: { products: products, searchingPeice: segmentedImageSrc },
    // });

    setIsSearching(false);
  };

  return (
    <Container>
      {segmentedImageSrc ? (
        <CroppedImagePreview src={segmentedImageSrc} alt="cropped segment" />
      ) : (
        <p>Loading cropped segment...</p>
      )}

      <Prompt
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter any additional details..."
      />

      <ButtonsContainer>
        <BackButton onClick={() => setIsBeingCustomized(false)}>
          <span>Back</span>
        </BackButton>
        <SearchButton onClick={handleSearch} disabled={isSearching}>
          {isSearching ? <HashLoader size={20} color="#fff" /> : "Search"}
        </SearchButton>
      </ButtonsContainer>

      <Guide>
        <p>
          Add extra information about the cloth you are looking for{" "}
          <small>(e.g., black, cutting, linen)</small> and click{" "}
          <strong>Search</strong> to find it online.
        </p>
      </Guide>
    </Container>
  );
}

// Styled components
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const gleam = keyframes`
  0% { transform: translateX(-150%) rotate(25deg); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateX(150%) rotate(25deg); opacity: 0; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s;
  padding: 1rem;
`;

const CroppedImagePreview = styled.img`
  width: 50%;
  animation: ${fadeIn} 1.5s;
`;

const Prompt = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  background-color: var(--input-bg-color);
  color: var(--text-color);
  &:focus {
    outline: none;
    border-color: #6bcb77;
    box-shadow: 0 0 0 3px rgba(107, 203, 119, 0.1);
  }

  &:hover {
    border-color: #999;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BackButton = styled.button`
  color: var(--text-color);
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  span::before {
    content: "";
    opacity: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  &:hover span::before {
    content: "< ";
    opacity: 1;
    animation: ${fadeIn} 0.5s ease forwards;
  }
`;

const SearchButton = styled.button`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2rem;

  &:hover {
    background-color: rgba(255, 105, 180, 1);
  }
`;

const Guide = styled.div`
  margin-top: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: #f0f8ff72;
  border-radius: 2rem;
  animation: ${fadeIn} 1s;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37),
    inset 0 4px 8px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: var(--text-color);
  &:hover {
    transform: translateY(-5px) scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    opacity: 0;
  }

  &:hover::after {
    animation: ${gleam} 1s ease forwards;
  }

  p {
    animation: ${fadeIn} 1s;
    font-family: "Cinzel", "MedievalSharp", serif;
  }
`;
