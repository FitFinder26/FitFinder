import Logo from "./Logo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useState, useRef } from "react";
import ImageEditor from "./ImageEditor";
import SideBar from "./SideBar";
import { Camera, Upload, UserIcon, Languages } from "lucide-react";
import { useDevice } from "../providers/DeviceProvider";
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import logoSrc from "../assets/logo.png";
import {
  toggleLanguage,
  getCurrentLanguage,
  getLanguageDisplayName,
} from "../locales/languageHelper";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

export default function Navbar({ navigationBlocked, setIsSideBarOpen }) {
  const { user, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [showImageSourceModal, setShowImageSourceModal] = useState(false);
  const inputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const { device } = useDevice();
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  const { t } = useTranslation(NAMESPACES.navbar);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const { i18n } = useTranslation();

  // Accessibility: focus management for nav
  const navRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated()) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isAuthenticated]);

  const handleLanguageToggle = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const newLang = await toggleLanguage();
    setCurrentLang(newLang);
  };

  useEffect(() => {
    if (!imageUploaded) {
      if (inputRef.current) inputRef.current.value = "";
      if (cameraInputRef.current) cameraInputRef.current.value = "";
    }
  }, [imageUploaded]);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
    setShowImageSourceModal(false);
  };

  const handleProfilePicClick = () => {
    setIsSideBarOpen(true);
  };

  const handleSearchWithImageClick = () => {
    if (device === "desktop") {
      handleUploadClick();
    } else {
      setShowImageSourceModal(true);
    }
  };

  const handleCameraClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cameraInputRef.current.click();
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    inputRef.current.click();
  };

  return (
    <nav ref={navRef} aria-label={t('mainNavigation', { defaultValue: 'Main navigation' })}>
      <NavContainer $language={i18n.language}>
        <div
          style={{
            display: "flex",
            textAlign: i18n.language === "ar" ? "right" : "left",
            cursor: "pointer",
          }}
          onClick={() => navigate("/", { state: { cameFrom: "navbar" } })}
          tabIndex={0}
          role="link"
          aria-label={t('goHome', { defaultValue: 'Go to home page' })}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate("/", { state: { cameFrom: "navbar" } }); }}
        >
          <LogoIcon
            src={logoSrc}
            alt={t("logoAlt", { appName: tCommon("appName") })}
            title={t("logoTitle")}
          />
          <LanguageToggleButton
            onClick={handleLanguageToggle}
            title={t("toggleLanguage")}
            aria-label={t("toggleLanguage")}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleLanguageToggle(e); }}
           
          >
            <Languages size={20} />
            {device === "desktop" && <span>{getLanguageDisplayName(currentLang)}</span>}
          </LanguageToggleButton>
        </div>

        <div style={{ gridColumn: "2", textAlign: "center" }}>
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
          <SearchWithImageButton
            onClick={device === "desktop" ? handleUploadClick : handleSearchWithImageClick}
            title={t("searchWithImage")}
            aria-label={t("searchWithImage")}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (device === "desktop") {
                  handleUploadClick(e);
                } else {
                  handleSearchWithImageClick();
                }
              }
            }}
          >
            <Camera width={24} height={24} />
            {device === "desktop" && <label
              style={{
                marginLeft: i18n.language === "ar" ? "0" : "0.5rem",
                marginRight: i18n.language === "ar" ? "0.5rem" : "0",
                cursor: "pointer",
              }}
            >
              {t("searchWithImage")}
            </label>}
          </SearchWithImageButton>
        </div>

        <div
          style={{
            gridColumn: "3",
            textAlign: "right",
            gap: "2rem",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <ProfileButton
              $language={i18n.language}
              onClick={handleProfilePicClick}
              title={t("profileButtonTitle")}
              aria-label={t("profileButtonTitle")}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleProfilePicClick(); }}
            >
              <AvatarContainer>
                <AvatarWrap>
                  {user && user.profileImageURL && !imgError ? (
                    <AvatarImg
                      src={user.profileImageURL}
                      alt={user.userName}
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <AvatarFallback>
                      <UserIcon size={48} />
                    </AvatarFallback>
                  )}
                </AvatarWrap>
              </AvatarContainer>
            </ProfileButton>
          ) : (
            <>
              <NavButton
                onClick={() =>
                  navigate("/registration", { state: { form: "login" } })
                }
                disabled={navigationBlocked}
                aria-label={t("login")}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate("/registration", { state: { form: "login" } }); }}
              
              >
                {t("login")}
              </NavButton>
              {device !== "mobile" && (
                <JoinButton
                  onClick={() =>
                    navigate("/registration", { state: { form: "signup" } })
                  }
                  disabled={navigationBlocked}
                  aria-label={t("join")}
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate("/registration", { state: { form: "signup" } }); }}
                  
                >
                  {t("join")}
                </JoinButton>
              )}
            </>
          )}
        </div>
      </NavContainer>
      {imageUploaded && (
        <ImageEditor
          imageUploaded={imageUploaded}
          setImageUploaded={setImageUploaded}
          imageURL={imageURL}
          setImageURL={setImageURL}
        />
      )}
      {showImageSourceModal && (
        <ModalOverlay
          $language={i18n.language}
          onClick={() => setShowImageSourceModal(false)}
          role="presentation"
        >
          <ModalContent device={device} onClick={(e) => { e.stopPropagation(); e.preventDefault(); }} role="dialog" aria-modal="true">
            <ModalTitle device={device}>{t("chooseImageSource")}</ModalTitle>
            <ModalButtonGroup device={device}>
              <ModalButton device={device} onClick={handleCameraClick} aria-label={t("takePhoto")}
                tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCameraClick(e); }}>
                <Camera size={24} />
                <span>{t("takePhoto")}</span>
              </ModalButton>
              <ModalButton device={device} onClick={handleUploadClick} aria-label={t("uploadFromDevice")}
                tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleUploadClick(e); }}>
                <Upload size={24} />
                <span>{t("uploadFromDevice")}</span>
              </ModalButton>
            </ModalButtonGroup>
            <CancelButton
              device={device}
              onClick={() => setShowImageSourceModal(false)}
              aria-label={t("cancel")}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowImageSourceModal(false); e.preventDefault(); e.stopPropagation(); }}
            >
              {t("cancel")}
            </CancelButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </nav>
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
  ${(props) => (props.$language === "ar" ? "right: 0;" : "left: 0;")};
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
  width: 60px;
  height: 60px;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;

const SearchWithImageButton = styled.button.attrs({ type: "button" })`
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
const ProfileButton = styled.button.attrs({ type: "button" })`
  ${(props) =>
    props.$language === "ar" ? "margin-left: 1rem;" : "margin-right: 1rem;"}
  transition: all 0.3s ease-in-out;
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    scale: 1.1;
  }
`;
const NavButton = styled.button.attrs({ type: "button" })`
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

const JoinButton = styled.button.attrs({ type: "button" })`
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  ${(props) => (props.$language === "ar" ? "right: 0;" : "left: 0;")};

  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  backdrop-filter: blur(4px);
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

const ModalButton = styled.button.attrs({ type: "button" })`
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

const CancelButton = styled.button.attrs({ type: "button" })`
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

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 8px;
`;

const AvatarWrap = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: solid 2px white;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(255, 255, 255, 0.06); */
`;

const LanguageToggleButton = styled.button.attrs({ type: "button" })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: var(--text-color);
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: var(--text-color);
    background: rgba(255, 255, 255, 0.05);
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    font-family: inherit;
  }

  @media (max-width: var(--tablet)) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    gap: 0.4rem;
  }

  @media (max-width: var(--mobile)) {
    span {
      display: none;
    }
    padding: 0.5rem;
  }
`;
