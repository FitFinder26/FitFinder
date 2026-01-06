import Logo from "./Logo";
import styled from "styled-components";
import cameraIcon from "../assets/camera-icon.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useState, useRef } from "react";
import ImageEditor from "./ImageEditor";
import SideBar from "./SideBar";
import { Camera } from "lucide-react";
import { useDevice } from "../providers/DeviceProvider";

export default function Navbar({ navigationBlocked, setIsSideBarOpen }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const inputRef = useRef(null);
  const { device } = useDevice();

  useEffect(() => {
    if (isAuthenticated()) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isAuthenticated]);
  useEffect(() => {
    if (!imageUploaded) inputRef.current.value = "";
  }, [imageUploaded]);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
  };

  return (
    <>
      <NavContainer>
        {device !== "mobile" && <div
          style={{ gridColumn: "1", textAlign: "left", cursor: "pointer" }}
          onClick={() => navigate("/", { state: { cameFrom: "navbar" } })}
        >
          {/* <Logo fontSize={70} scale={0.4} variant={0} /> */}
          <LogoIcon src="/logo.png" alt="FITFINDER" title="Home" />
        </div>}
        <div style={{ gridColumn: "2", textAlign: "center" }}>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleUploadImage}
          />
          <SearchWithImageButton onClick={() => inputRef.current.click()}>
            <Camera width={24} height={24} />
            <label style={{ marginLeft: "0.5rem", cursor: "pointer" }}>
              Search With Image
            </label>
          </SearchWithImageButton>
        </div>
        {device !== "mobile" && <div
          style={{
            gridColumn: "3",
            textAlign: "right",
            gap: "2rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {isLoggedIn ? (
            <NavButton onClick={() => setIsSideBarOpen(true)}>
              Profile
            </NavButton>
          ) : (
            <>
              <NavButton
                onClick={() =>
                  navigate("/registration", { state: { form: "login" } })
                }
                disabled={navigationBlocked}
              >
                Login
              </NavButton>
              <JoinButton
                onClick={() =>
                  navigate("/registration", { state: { form: "signup" } })
                }
                disabled={navigationBlocked}
              >
                Join
              </JoinButton>
            </>
          )}
        </div>}
      </NavContainer>
      {imageUploaded && (
        <ImageEditor
          imageUploaded={imageUploaded}
          setImageUploaded={setImageUploaded}
          imageURL={imageURL}
          setImageURL={setImageURL}
        />
      )}
    </>
  );
}

// 🎨 Styled Components
const NavContainer = styled.nav`
  position: absolute;
  inset: 0;
  z-index: 10;
  padding: 1rem;
  color: var(--text-color);
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 4.5rem;
  /* box-shadow: 0 1px 4px var(--back-drop-shadow-color); */
  align-items: center;
  padding: 0;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--navbar-bg-image);
    background-size: cover;
    background-position: center;
    opacity: 0.4; /* crucial */
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: -2;
  }
`;

const LogoIcon = styled.img`
  width: 70px;
  height: 70px;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.3;
  }
`;

const SearchWithImageButton = styled.button`
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  &:hover {
    border: 2px solid var(--text-color);
  }
`;

const NavButton = styled.button`
  background: none;
  color: var(--text-color);
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  &:hover {
    border-bottom: 2px solid var(--text-color);
  }
`;

const JoinButton = styled.button`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 2rem;
  &:hover {
    background-color: #4d96ff;
  }
`;
