import styled, { keyframes } from "styled-components";
import whiteCameraIcon from "../assets/camera-icon-white.png";
import blackCameraIcon from "../assets/camera-icon.png";
// import ilustratorImage from "../assets/ilustrator.png";
import { useEffect, useRef, useState } from "react";
import LazyMount from "../components/LazyMount";
import Logo from "../components/Logo";
import ImageEditor from "../components/ImageEditor";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Recommendations from "../components/Recommendations";
import PreferenceSurvey from "../components/PreferenceSurvey";
import { recomendedationService } from "../../../shared/services/recomendationService";

export default function HomePage() {
  const inputRef = useRef(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [categoricalProducts, setCategoricalProducts] = useState({});
  const [products, setProducts] = useState([]);
  const [showPreferenceSurvey, setShowPreferenceSurvey] = useState(false);
  const location = useLocation();
  const cameFrom = location.state?.cameFrom || null;
  const navigator = useNavigate();
  const welcomeVideo =
    "https://media.istockphoto.com/id/1140675444/video/young-surfer-ripping-gnarly-turn.mp4?s=mp4-640x640-is&k=20&c=Y8S6HPimKxeMPx8DPAbqrjayjLvxlkScIuNO5lkcLXM=";
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
    recomendedationService
      .getRandomProducts()
      .then((result) => {
        if (result.ok) return result.json();
        else throw new Error("Couldn't fetch random products.");
      })
      .then((data) => {
        setProducts(data);
        setCategoricalProducts(groupByCategory(data));
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
          {/* <img src={ilustratorImage} alt="illustrator image" /> */}
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
        products={products}
        categoricalProducts={categoricalProducts}
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ marginRight: "0.3rem" }}
              fill="#202020"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 13.7 2.45 15.3 3.24 16.71L2.09 21.09L6.47 19.95C7.88 20.75 9.48 21.2 11.16 21.2H12C17.52 21.2 22 16.72 22 11.2C22 6.13 17.52 2 12 2Z" />
            </svg>
            Feel free to click&nbsp;<Link>here</Link>&nbsp; and drop us a
            message.
          </p>
        </Feedback>
      </LazyMount>
      <LazyMount>
        <SocialMedia>
          <h1>Follow us on social media</h1>
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <svg
              width="60"
              height="60"
              style={{ marginLeft: "1rem" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 2h-9A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2zm-4 16A6 6 0 1 1 12 6a6 6 0 0 1 0 12zm5-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                fill="none"
                stroke="black"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              Connect with us on Instagram and stay up to date with
              <br />
              our announcements and future updates.
              <br />
              <Link>Follow us</Link>
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
  margin-top: 1rem;
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
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const Hero = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: row;
  background-image: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.08) 0 1px,
      rgba(0, 0, 0, 0.05) 1px 2px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.08) 0 1px,
      rgba(0, 0, 0, 0.05) 1px 2px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.05) 0 2px,
      rgba(0, 0, 0, 0.05) 2px 4px
    ),
    linear-gradient(
      -45deg,
      var(--primary-color) 0%,
      var(--secondary-color) 100%
    );
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
  filter: blur(2px);
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
