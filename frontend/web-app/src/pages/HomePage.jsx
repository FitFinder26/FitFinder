import styled, { keyframes } from 'styled-components';
import whiteCameraIcon from '../assets/camera-icon-white.png';
import blackCameraIcon from '../assets/camera-icon.png';
import ilustratorImage from '../assets/ilustrator.png';
import { useRef, useState } from 'react';
import Logo from '../components/Logo';
import ImageEditor from '../components/ImageEditor';

export default function HomePage (){
    const inputRef = useRef(null);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setImageURL(URL.createObjectURL(file));
        setImageUploaded(true);
    };

    return (
        <Container>
            <Hero>
                <LeftHero>
                    <Logo fontSize={150}/>
                    <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: "none" }}
                        onChange={handleUploadImage}
                    />
                    <SearchWithImageButton 
                        onClick={() => inputRef.current.click()}
                        onMouseOver={(e)=> e.currentTarget.children[0].src = blackCameraIcon}
                        onMouseOut={(e)=> e.currentTarget.children[0].src = whiteCameraIcon}
                        onFocus={(e)=> e.currentTarget.children[0].src = blackCameraIcon}
                        onBlur={(e)=> e.currentTarget.children[0].src = whiteCameraIcon}
                        tabIndex={0}>
                        <img src={whiteCameraIcon} style={{ width: '24px', height: '24px', cursor: 'pointer' }} alt="Camera Icon" />
                        <label style={{ marginLeft: '0.5rem', cursor: 'pointer' }}>Search With Image</label>
                    </SearchWithImageButton>
                </LeftHero>
                <RightHero>
                    <img src={ilustratorImage} alt='illustrator image'/>
                </RightHero>
            </Hero>
            <ImageEditor imageURL={imageURL} setImageURL={setImageURL} imageUploaded={imageUploaded} setImageUploaded={setImageUploaded}/>
        </Container>
    );
};

const slideRight = keyframes`
    from{
        opacity: 0.5;
        transform: translateX(-10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`;

const slideLeft = keyframes`
    from{
        opacity: 0.5;
        transform: translateX(10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`;

const fadeIn = keyframes`
    from{
        opacity: 0.5;
    }
    to{
        opacity: 1;
    }
`;

const Container = styled.div`
    margin-top: 4.5rem;
    display: grid;
    grid-template-rows: 4;
    grid-template-columns: 1;
    animation: ${fadeIn} 1s;
`;

const Hero = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: row;
    background-image : repeating-linear-gradient(0deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(90deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.05) 0 2px,rgba(0, 0, 0, 0.05) 2px 4px), linear-gradient(-45deg, var(--primary-color) 0%, var(--secondary-color) 100%);
`;

const SearchWithImageButton = styled.button`
    border: 2px solid white;
    transition: all 0.5s;
    border-radius: 20px;
    color: white;
    padding: 0.5rem 1rem;
    background-color: transparent;
    display: flex;
    align-items: center;  
    font-weight: 500;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        background-color: white;
        color: black;
        
        img {
            transition: all 0.5s;
            transform: translateX(-200%);
        }

        label{
            transition: all 0.5s;
            transform: translateX(-15%);
            font-size: 1.005rem;
        }
    }
`;

const LeftHero = styled.div`
    animation: ${slideRight} 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 70%;
`;

const RightHero = styled.div`
    animation: ${slideLeft} 1s;
    width: 30%;
    padding: 1rem;
    img{
        width: 100%;
        object-fit: fill;
        height: 100%;
    }
`;