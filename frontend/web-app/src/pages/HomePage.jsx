import styled, { keyframes } from "styled-components";
import whiteCameraIcon from "../assets/camera-icon-white.png";
import blackCameraIcon from "../assets/camera-icon.png";
import { useEffect, useRef, useState } from "react";
import LazyMount from "../components/LazyMount";
import Logo from "../components/Logo";
import ImageEditor from "../components/ImageEditor";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Recommendations from "../components/Recommendations";
import PreferenceSurvey from "../components/PreferenceSurvey";
import { recomendedationService } from "../../../shared/services/recomendationService";
import { Instagram, MessageCircle, Camera, Upload } from "lucide-react";
import { useDevice } from "../providers/DeviceProvider";
// import logo from "../assets/logo.png";

export default function HomePage() {
  const inputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [categoricalProducts, setCategoricalProducts] = useState({});
  const [loadingRecomendations, setLoadingRecomendations] = useState(true);
  const [showPreferenceSurvey, setShowPreferenceSurvey] = useState(false);
  const [showImageSourceModal, setShowImageSourceModal] = useState(false);
  const location = useLocation();
  const cameFrom = location.state?.cameFrom || null;
  const navigator = useNavigate();
  const { device } = useDevice();
  const feedbackFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";
  const instagramURL =
    "https://www.instagram.com/fitfinder_csed_2026?igsh=ZG5mamtod3lyMWZo&utm_source=ig_contact_invite";
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
    setShowImageSourceModal(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth", // animate the scroll
        block: "start", // scroll to top of element
      });
    }
  };

  useEffect(() => scrollToSection("hero"), []);

  const handleSearchWithImageClick = () => {
    if (device === "desktop") {
      handleUploadClick();
    } else {
      setShowImageSourceModal(true);
    }
  };

  const handleCameraClick = () => {
    cameraInputRef.current.click();
  };

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (!imageUploaded) {
      if (inputRef.current) inputRef.current.value = "";
      if (cameraInputRef.current) cameraInputRef.current.value = "";
    }
  }, [imageUploaded]);

  useEffect(() => {
    if (cameFrom === "signup" || cameFrom === "google-signup") {
      setShowPreferenceSurvey(true);
    }
  }, [cameFrom]);

  useEffect(() => {
    setLoadingRecomendations(true);
    recomendedationService
      .getRandomProducts()
      .then((result) => {
        if (result.ok) return result.json();
        else throw new Error("Couldn't fetch random products.");
      })
      .then((data) => {
        setCategoricalProducts(groupByCategory(data));
        setLoadingRecomendations(false);
      })
      .catch((error) => new Error(error));
  }, []);

  const groupByCategory = (products, { includeNullCategory = false } = {}) => {
    if (!Array.isArray(products)) {
      throw new TypeError("Expected an array of products");
    }

    return products.reduce((acc, item) => {
      let cat = item?.category;

      // Normalize category strings (trim extra spaces)
      if (typeof cat === "string") {
        cat = cat.trim();
      }

      // Handle missing/empty categories
      if (!cat) {
        if (!includeNullCategory) {
          return acc; // skip items with no category
        }
        cat = "Uncategorized";
      }

      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});
  };

  return (
    <Container>
      <Hero id="hero" device={device}>
        <LeftHero device={device}>
          <Welcome>
            <h1>Welcome to</h1>
          </Welcome>
          <Logo
            fontSize={
              device === "mobile" ? 60 : device === "tablet" ? 100 : 150
            }
          />
          {/* <img src={logo} /> */}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleUploadImage}
          />
          <input
            type="file"
            accept="image/*"
            capture="camera"
            ref={cameraInputRef}
            style={{ display: "none" }}
            onChange={handleUploadImage}
          />
          <ButtonContainer device={device}>
            {device === "desktop" ? (
              <SearchWithImageButton
                device={device}
                onClick={handleSearchWithImageClick}
                onMouseOver={(e) =>
                  (e.currentTarget.children[0].src = blackCameraIcon)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.children[0].src = whiteCameraIcon)
                }
                onFocus={(e) =>
                  (e.currentTarget.children[0].src = blackCameraIcon)
                }
                onBlur={(e) =>
                  (e.currentTarget.children[0].src = whiteCameraIcon)
                }
                tabIndex={0}
              >
                <img
                  src={whiteCameraIcon}
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  alt="Camera Icon"
                />
                <label style={{ marginLeft: "0.5rem", cursor: "pointer" }}>
                  Search With Image
                </label>
              </SearchWithImageButton>
            ) : (
              <JoinButton
                device={device}
                onClick={() =>
                  navigator("/registration", { state: { form: "signup" } })
                }
              >
                Join
              </JoinButton>
            )}
            <AboutUsButton
              device={device}
              onClick={() =>
                navigator("/about-us", { state: { toSection: "how-it-works" } })
              }
            >
              Demo
            </AboutUsButton>
          </ButtonContainer>
        </LeftHero>
        {device === "desktop" && (
          <RightHero device={device}>
            <AnimationContainer>
              <SegmentationVisualizer>
                <SVGMaskContainer
                  viewBox="0 0 280 280"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Blue mask regions representing detected clothing areas */}
                  <MaskRegion d="M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z" />
                  <MaskRegion d="M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z" />
                  <MaskRegion d="M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z" />

                  {/* Pink borders around detected regions */}
                  <BorderStroke d="M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z" />
                  <BorderStroke d="M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z" />
                  <BorderStroke d="M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z" />

                  {/* Interaction points - simulating click points for refinement */}
                  <PointMarker cx="95" cy="75" />
                  <PointMarker cx="175" cy="120" />
                  <PointMarker cx="105" cy="175" />
                  <PointMarker cx="200" cy="85" />
                </SVGMaskContainer>
                <InteractionHint>Click to refine</InteractionHint>
              </SegmentationVisualizer>
            </AnimationContainer>
          </RightHero>
        )}
      </Hero>

      <Recommendations
        categoricalProducts={categoricalProducts}
        loading={loadingRecomendations}
      />

      <LazyMount unmountOnHide={true}>
        <Feedback>
          <h1>Tell us what you think about FitFinder</h1>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            <MessageCircle
              width={device === "mobile" ? 50 : 24}
              height={device === "mobile" ? 50 : 24}
              flexShrink={0}
            />
            <span>
              We&apos;d love to hear your feedback! Click{" "}
              <Link
                style={{ color: "var(--links-color)" }}
                onClick={() => window.open(feedbackFormLink)}
              >
                here
              </Link>{" "}
              and drop us a message.
            </span>
          </p>
        </Feedback>
      </LazyMount>
      <LazyMount unmountOnHide={true}>
        <SocialMedia>
          <h1>Follow us on social media</h1>
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <Instagram
              width={device === "mobile" ? 120 : 60}
              height={device === "mobile" ? 120 : 60}
            />

            <p>
              Connect with us on Instagram and stay up to date with
              {device !== "mobile" && <br />}
              our announcements and future updates.&nbsp;
              {device !== "mobile" && <br />}
              <Link
                style={{ color: "var(--links-color)" }}
                onClick={() => window.open(instagramURL)}
              >
                Follow us
              </Link>
            </p>
          </div>
        </SocialMedia>
      </LazyMount>

      {imageUploaded && (
        <ImageEditor
          imageURL={imageURL}
          setImageURL={setImageURL}
          imageUploaded={imageUploaded}
          setImageUploaded={setImageUploaded}
        />
      )}
      {showPreferenceSurvey && (
        <PreferenceSurvey onClose={() => setShowPreferenceSurvey(false)} />
      )}
      {showImageSourceModal && (
        <ModalOverlay onClick={() => setShowImageSourceModal(false)}>
          <ModalContent device={device} onClick={(e) => e.stopPropagation()}>
            <ModalTitle device={device}>Choose Image Source</ModalTitle>
            <ModalButtonGroup device={device}>
              <ModalButton device={device} onClick={handleCameraClick}>
                <Camera size={24} />
                <span>Take Photo</span>
              </ModalButton>
              <ModalButton device={device} onClick={handleUploadClick}>
                <Upload size={24} />
                <span>Upload from Device</span>
              </ModalButton>
            </ModalButtonGroup>
            <CancelButton
              device={device}
              onClick={() => setShowImageSourceModal(false)}
            >
              Cancel
            </CancelButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

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

const maskDetect = keyframes`
  0% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 0.4;
  }
`;

const borderDetect = keyframes`
  0% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    opacity: 0.8;
  }
`;

const pointPulse = keyframes`
  0% {
    r: 3px;
    opacity: 0;
  }
  40% {
    r: 5px;
    opacity: 1;
  }
  100% {
    r: 3px;
    opacity: 0.6;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 150, 255, 0.3), inset 0 0 20px rgba(0, 150, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 150, 255, 0.6), inset 0 0 30px rgba(0, 150, 255, 0.2);
  }
`;

const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SegmentationVisualizer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${glow} 3s ease-in-out infinite;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: ${shimmer} 3s infinite;
    pointer-events: none;
  }
`;

const SVGMaskContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 1px rgba(0, 150, 255, 0.3));
`;

const MaskRegion = styled.path`
  fill: rgba(0, 150, 255, 0.35);
  animation: ${maskDetect} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 1.2s;
  }
`;

const BorderStroke = styled.path`
  fill: none;
  stroke: rgba(255, 105, 180, 1);
  stroke-width: 2.5;
  animation: ${borderDetect} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:nth-child(2) {
    animation-delay: 0.9s;
  }

  &:nth-child(3) {
    animation-delay: 1.5s;
  }
`;

const PointMarker = styled.circle`
  fill: rgba(255, 105, 180, 1);
  animation: ${pointPulse} 1.8s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.9s;
  }

  &:nth-child(3) {
    animation-delay: 1.4s;
  }

  &:nth-child(4) {
    animation-delay: 1.9s;
  }
`;

const InteractionHint = styled.div`
  position: absolute;
  bottom: 15px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0;
  animation: fadeInText 1s ease-out 0.5s forwards;

  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 0.6;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  animation: ${fadeIn} 1s;
  background-color: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
`;

const Welcome = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
  }

  @media (max-width: var(--tablet)) {
    font-size: 1.2rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 1rem;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "auto";
      case "tablet":
        return "65vh";
      default:
        return "75vh";
    }
  }};
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.device === "mobile" ? "2rem" : "1rem")};
  background-image: var(--bg-image);
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "2.5rem 1rem";
      case "tablet":
        return "2rem";
      default:
        return "2rem";
    }
  }};
  box-sizing: border-box;

  @media (max-width: var(--tablet)) {
    height: auto;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  @media (max-width: var(--mobile)) {
    gap: 1.5rem;
    padding: 1.5rem 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.device === "mobile" ? "0.75rem" : "1rem")};
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: var(--tablet)) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: var(--mobile)) {
    gap: 0.5rem;
  }
`;

const SearchWithImageButton = styled.button`
  border: 2px solid white;
  transition: all 0.5s;
  border-radius: 20px;
  color: white;
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.6rem 0.8rem";
      case "tablet":
        return "0.55rem 1rem";
      default:
        return "0.5rem 1rem";
    }
  }};
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.85rem";
      case "tablet":
        return "0.95rem";
      default:
        return "1rem";
    }
  }};
  /* width: ${(props) => (props.device === "mobile" ? "100%" : "auto")}; */

  &:hover {
    background-color: white;
    color: black;

    img {
      transition: all 0.5s;
      transform: translateX(-200%);
    }

    label {
      transition: all 0.5s;
      transform: translateX(-15%);
      font-size: 1.005rem;
    }
  }

  @media (max-width: var(--tablet)) {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;

    img {
      width: 18px !important;
      height: 18px !important;
    }

    label {
      margin-left: 0.3rem !important;
    }
  }
`;

const AboutUsButton = styled.button`
  border: 2px solid white;
  transition: all 0.5s;
  border-radius: 20px;
  color: white;
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.6rem 0.8rem";
      case "tablet":
        return "0.55rem 1rem";
      default:
        return "0.5rem 1rem";
    }
  }};
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.85rem";
      case "tablet":
        return "0.95rem";
      default:
        return "1rem";
    }
  }};
  /* width: ${(props) => (props.device === "mobile" ? "100%" : "auto")}; */

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: var(--tablet)) {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
  }
`;

const LeftHero = styled.div`
  animation: ${slideRight} 1s;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "1rem";
      case "tablet":
        return "1.2rem";
      default:
        return "1rem";
    }
  }};
  width: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "100%";
      case "tablet":
        return "55%";
      default:
        return "60%";
    }
  }};

  @media (max-width: var(--tablet)) {
    width: 100%;
    gap: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: var(--mobile)) {
    gap: 0.8rem;
    padding: 0.5rem;
  }
`;

const RightHero = styled.div`
  animation: ${slideLeft} 1s;
  width: ${(props) => (props.device === "tablet" ? "45%" : "40%")};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: var(--desktop)) {
    width: 45%;
  }

  @media (max-width: var(--tablet)) {
    display: none;
  }
`;

const Feedback = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  animation: ${slideLeft} 1s;
  box-sizing: border-box;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.5rem 1rem;

    h1 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: var(--mobile)) {
    padding: 1rem 0.5rem;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const SocialMedia = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  animation: ${slideRight} 1s;
  box-sizing: border-box;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.5rem 1rem;

    h1 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.95rem;
    }

    svg {
      width: 40px !important;
      height: 40px !important;
    }
  }

  @media (max-width: var(--mobile)) {
    padding: 1rem 0.5rem;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 0.85rem;
    }

    svg {
      width: 30px !important;
      height: 30px !important;
    }
  }
`;

const JoinButton = styled.button`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.6rem 0.8rem";
      case "tablet":
        return "0.55rem 1rem";
      default:
        return "0.5rem 1rem";
    }
  }};
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 2rem;
  &:hover {
    background-color: #4d96ff;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  /* backdrop-filter: blur(4px); */
`;

const ModalContent = styled.div`
  background-color: var(--bg-color);
  border-radius: 20px;
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "2rem 1.5rem";
      case "tablet":
        return "2.5rem 2rem";
      default:
        return "3rem 2.5rem";
    }
  }};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "280px";
      case "tablet":
        return "350px";
      default:
        return "400px";
    }
  }};
  max-width: 90vw;

  @media (max-width: var(--tablet)) {
    padding: 2rem 1.5rem;
    min-width: 280px;
  }

  @media (max-width: var(--mobile)) {
    padding: 1.5rem 1rem;
    min-width: 260px;
  }
`;

const ModalTitle = styled.h2`
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "1.3rem";
      case "tablet":
        return "1.5rem";
      default:
        return "1.75rem";
    }
  }};
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  text-align: center;

  @media (max-width: var(--tablet)) {
    font-size: 1.4rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 1.2rem;
  }
`;

const ModalButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.device === "mobile" ? "0.75rem" : "1rem")};

  @media (max-width: var(--mobile)) {
    gap: 0.75rem;
  }
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "1rem";
      case "tablet":
        return "1.2rem";
      default:
        return "1.25rem";
    }
  }};
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  border: none;
  border-radius: 12px;
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "1rem";
      case "tablet":
        return "1.1rem";
      default:
        return "1.15rem";
    }
  }};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    font-family: inherit;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.1rem;
    font-size: 1.05rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.9rem;
    font-size: 0.95rem;
    gap: 0.75rem;
  }
`;

const CancelButton = styled.button`
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.8rem";
      case "tablet":
        return "0.9rem";
      default:
        return "1rem";
    }
  }};
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--meta-text-color);
  border-radius: 12px;
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "1rem";
      case "tablet":
        return "1.05rem";
      default:
        return "1.1rem";
    }
  }};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--meta-text-color);
    color: var(--bg-color);
  }

  @media (max-width: var(--tablet)) {
    padding: 0.85rem;
    font-size: 1rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;
