import styled, { keyframes } from 'styled-components';
import whiteCameraIcon from '../assets/camera-icon-white.png';
import blackCameraIcon from '../assets/camera-icon.png';
import ilustratorImage from '../assets/ilustrator.png';
import { useRef, useState } from 'react';
import LazyMount from '../components/LazyMount'
import Logo from '../components/Logo';
import ImageEditor from '../components/ImageEditor';
import { Link, useNavigate } from 'react-router-dom';
import Recommendations from '../components/Recommendations';

export default function HomePage (){
    const inputRef = useRef(null);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [imageURL, setImageURL] = useState(null);
    const navigator = useNavigate();

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
                    <Welcome>
                        <h1>Welcome to</h1>
                    </Welcome>
                    <Logo fontSize={150}/>
                    <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: "none" }}
                        onChange={handleUploadImage}
                    />
                    <div style={{display:"flex", flexDirection:"row", gap:"1rem", justifyContent:"center", alignItems:"center"}}>
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
                        <AboutUsButton
                            onClick={() => navigator('/inspiration')}>
                            About us
                        </AboutUsButton>
                    </div>
                </LeftHero>
                <RightHero>
                    <img src={ilustratorImage} alt='illustrator image'/>
                </RightHero>
            </Hero>

            <Recommendations/>

            <LazyMount>
                <Feedback>
                    <h1>Tell us what you think about FitFinder</h1>
                    <p style={{display:"flex", alignContent: "center", marginLeft:"1rem"}}>
                        <svg width="20" height="20" viewBox="0 0 24 24" style={{marginRight:"0.3rem"}} fill="#202020" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.7 2.45 15.3 3.24 16.71L2.09 21.09L6.47 19.95C7.88 20.75 9.48 21.2 11.16 21.2H12C17.52 21.2 22 16.72 22 11.2C22 6.13 17.52 2 12 2Z" />
                        </svg> 
                        Feel free to click&nbsp;<Link>here</Link>&nbsp; and drop us a message.
                    </p>
                </Feedback>
            </LazyMount>
            <LazyMount>
                <SocialMedia>
                    <h1>Follow us on social media</h1>
                    <div style={{display:"flex", gap: "0.3rem", alignItems: "center"}}>
                        <svg width="60" height="60" style={{marginLeft:"1rem"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M16.5 2h-9A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2zm-4 16A6 6 0 1 1 12 6a6 6 0 0 1 0 12zm5-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                fill="none" 
                                stroke="black" 
                                stroke-width="1" 
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p>Connect with us on Instagram and stay up to date with
                            <br/>our announcements and future updates.
                            <br/><Link>Follow us</Link></p>
                    </div>
                </SocialMedia>
            </LazyMount>

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

const Welcome = styled.div`
    text-align: start;
    width: 100%;
    color: white;
    font-size: 1.5rem;
    h1{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
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

const AboutUsButton = styled.button`
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

    &:hover {
        background-color: white;
        color: black;
    }
`;

const LeftHero = styled.div`
    animation: ${slideRight} 1s;
    padding: 1rem;
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

const Feedback = styled.div`
    padding: 1rem;
    animation: ${slideLeft} 1s;
`;

const SocialMedia = styled.div`
    padding: 1rem;
    animation: ${slideRight} 1s;
`;