import { useEffect, useRef, useState } from "react";
import { CropImageToSegment } from "../../../shared/components/CropImageToSegment";
import styled, { keyframes } from "styled-components";
import { SAMService } from "../../../shared/services/SAMService";
import { useNavigate } from "react-router-dom";
import { Notifier } from "./Notifier";

export default function CustomizeSegment ({ imageObj, setIsBeingCustomized, selectedSegments, setImageUploaded }){
    const [segmentedImage, setSegmentedImage] = useState(new Image());
    const [prompt, setPrompt] = useState('');
    const canvasRef = useRef(null);
    const navigator = useNavigate();

    // Cropping the image on the selected segments
    useEffect(()=>{
        let croppingSegment = selectedSegments;
        if (selectedSegments.length > 1)
            croppingSegment = selectedSegments[0];
        CropImageToSegment(imageObj, croppingSegment)
        .then((croppedImage)=>setSegmentedImage(croppedImage));
    }, []);

    const handlePromptChange = (e)=>{
        const { value } = e.target;
        setPrompt(value);
    };

    const handleSearch = async()=>{
        await SAMService.search(segmentedImage.src, prompt)
        .then((response)=>{
            if (response.status == 200){
                setImageUploaded(false);
                navigator('/search');
            }
            else 
                throw new Error("Failed to search.");
        })
        .catch((error) => Notifier.notifyError(error.message));
    }

    return(
        <Container> 
            <CroppedImagePreview src={segmentedImage.src || ""} alt="cropped"/>
            <Prompt onChange={handlePromptChange} placeholder="Enter any additional details..."/>
            <ButtonsContainer>
                <BackButton onClick={()=>setIsBeingCustomized(false)}><span>Back</span></BackButton>
                <SearchButton onClick={handleSearch}>Search</SearchButton>
            </ButtonsContainer>
            <Guide title="Instructions Guide">
                <p>You can add an extra information about the cloth you are looking for <small>(e.g. black, cutting, linen.)</small> then click <strong>Search</strong> to search for the desired cloth on Web.</p>
            </Guide>
        </Container>
    );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;


const gleam = keyframes`
  0% {
    transform: translateX(-150%) rotate(25deg);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(150%) rotate(25deg);
    opacity: 0;
  }
`;

const Guide = styled.div`
  margin-top: 10;
  opacity: ${({opacity}) => (opacity ? '0' : '1')}; 
  transition: all 1s;
  padding: 1rem;
  margin: 1rem;
  background-color: #f0f8ff72;
  border-radius: 2rem;
  animation: ${fadeIn} 1s;

  p{
    animation: ${fadeIn} 1s;
    font-family: 'Cinzel', 'MedievalSharp', serif;
  
  }

  position: relative;

  background: rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(31, 38, 135, 0.37),
    inset 0 4px 8px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
  }

  /* Gleam overlay */
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
    width: 50% ;
    animation: ${fadeIn} 1.5s;
`;

const Prompt = styled.textarea`
    width: 100%;
    padding: 1rem;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const BackButton = styled.button`
    color: black;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: inherit;
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    transition: all 0.5s ease-in-out;

    /* default state */
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
    background: #6BCB77;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: inherit;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2rem;
    margin-left: 0rem;
    align-content: center;
    &:hover {
        background-color: rgba(255,105,180,1);
    }
`;