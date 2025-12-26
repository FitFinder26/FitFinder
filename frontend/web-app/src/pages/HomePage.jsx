import styled, { keyframes } from "styled-components";
import whiteCameraIcon from "../assets/camera-icon-white.png";
import blackCameraIcon from "../assets/camera-icon.png";
import ilustratorImage from "../assets/ilustrator.png";
import { useEffect, useRef, useState } from "react";
import LazyMount from "../components/LazyMount";
import Logo from "../components/Logo";
import ImageEditor from "../components/ImageEditor";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Recommendations from "../components/Recommendations";
import PreferenceSurvey from "../components/PreferenceSurvey";
import { recomendedationService } from "../../../shared/services/recomendationService";
import { Instagram, MessageCircle } from "lucide-react";

export default function HomePage() {
  const inputRef = useRef(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [categoricalProducts, setCategoricalProducts] = useState({});
  const [loadingRecomendations, setLoadingRecomendations] = useState(true);
  const [showPreferenceSurvey, setShowPreferenceSurvey] = useState(false);
  const location = useLocation();
  const cameFrom = location.state?.cameFrom || null;
  const navigator = useNavigate();
  const welcomeVideo =
    "https://gnygxghbaxatvpryczjc.supabase.co/storage/v1/object/sign/files/1766772231119-z52pm8eh.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTg5ZDg2ZS00MTZlLTRkMzItOGYxZS03OGJmMGZhMDA1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy8xNzY2NzcyMjMxMTE5LXo1MnBtOGVoLm1wNCIsImlhdCI6MTc2Njc3MjYwMCwiZXhwIjoxNzY2Nzc2MjAwfQ.BYI808o4E4MmYXI6pc_1bd52B8Z6KBp-piM9KtqZ3hE";
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
  };

  useEffect(() => {
    if (!imageUploaded) inputRef.current.value = "";
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
      <Hero>
        <LeftHero>
          <Welcome>
            <h1>Welcome to</h1>
          </Welcome>
          <Logo fontSize={150} />
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleUploadImage}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchWithImageButton
              onClick={() => inputRef.current.click()}
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
            <AboutUsButton onClick={() => navigator("/inspiration")}>
              About us
            </AboutUsButton>
          </div>
        </LeftHero>
        <RightHero>
          {/*<img src={ilustratorImage} alt="illustrator image" />*/}
          <VideoBox
            autoPlay
            loop
            muted
            src={welcomeVideo}
            onClick={() => window.open(welcomeVideo)}
            width="600"
          />
        </RightHero>
      </Hero>

      <Recommendations
        categoricalProducts={categoricalProducts}
        loading={loadingRecomendations}
      />

      <LazyMount>
        <Feedback>
          <h1>Tell us what you think about FitFinder</h1>
          <p
            style={{
              display: "flex",
              alignContent: "center",
              marginLeft: "1rem",
            }}
          >
            <MessageCircle
              width={20}
              height={20}
              style={{ marginRight: "0.5rem" }}
            />
            Feel free to click&nbsp;
            <Link style={{ color: "var(--links-color)" }}>here</Link>&nbsp; and
            drop us a message.
          </p>
        </Feedback>
      </LazyMount>
      <LazyMount>
        <SocialMedia>
          <h1>Follow us on social media</h1>
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <Instagram width={60} height={60} />

            <p>
              Connect with us on Instagram and stay up to date with
              <br />
              our announcements and future updates.
              <br />
              <Link style={{ color: "var(--links-color)" }}>Follow us</Link>
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

const Container = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-rows: 4;
  grid-template-columns: 1;
  animation: ${fadeIn} 1s;
  background-color: var(--bg-color);
  color: var(--text-color);
`;

const Welcome = styled.div`
  text-align: start;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const Hero = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: row;
  background-image: var(--bg-image);
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

    label {
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
  width: 60%;
`;

const RightHero = styled.div`
  animation: ${slideLeft} 1s;
  width: 40%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Feedback = styled.div`
  padding: 1rem;
  animation: ${slideLeft} 1s;
`;

const SocialMedia = styled.div`
  padding: 1rem;
  animation: ${slideRight} 1s;
`;

const VideoBox = styled.video`
  border-radius: 20px;
  transform: perspective(600px) rotateY(-15deg) scale(0.9) rotateX(10deg)
    translateX(-50px);
  /* filter: blur(2px); */
  opacity: 0.9;
  transition: 0.6s ease all;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.25);
  width: 85%;
  &:hover {
    transform: perspective(600px) rotateY(0deg) rotateX(0deg) scale(1);
    filter: blur(0);
    opacity: 1;
  }
`;
