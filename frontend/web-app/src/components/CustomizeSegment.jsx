import { useEffect, useRef, useState } from "react";
import { CropImageToSegment } from "../../../shared/components/CropImageToSegment";
import styled, { keyframes } from "styled-components";
import { SAMService } from "../../../shared/services/SAMService";
import { useNavigate } from "react-router-dom";
import { Notifier } from "./Notifier";

export default function CustomizeSegment ({ imageObj, setIsBeingCustomized, selectedSegments }){
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
        try{
            const data = await SAMService.search(segmentedImage.src, prompt);
            navigator('/search');
        }catch(error){
            Notifier.notifyError(error);
        }
        
    }

    return(
        <Container>
            
            <CroppedImagePreview src={segmentedImage.src || ""} alt="cropped"/>
            <Prompt onChange={handlePromptChange} placeholder="Enter any additional details..."/>
            <ButtonsContainer>
                <BackButton onClick={()=>setIsBeingCustomized(false)}><span>Back</span></BackButton>
                <SearchButton onClick={handleSearch}>Search</SearchButton>
            </ButtonsContainer>
        </Container>
    );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s;
    padding: 1rem;
`;

const CroppedImagePreview = styled.img`
    width: 50% ;
    animation: fadeIn 1.5s;
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