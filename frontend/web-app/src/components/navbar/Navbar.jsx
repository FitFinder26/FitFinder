import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useState, useRef } from "react";
import ImageEditor from "../ImageEditor";
import { useDevice } from "../../providers/DeviceProvider";
import { useTheme } from "../../providers/ThemeProvider";
import {
  toggleLanguage,
  getCurrentLanguage,
} from "../../locales/languageHelper";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../locales/namespaces";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Sub-components
import NavBranding from "./components/NavBranding";
import NavSearch from "./components/NavSearch";
import NavAuth from "./components/NavAuth";
import ImageSourceDialog from "../common/ImageSourceDialog";

export default function Navbar({ navigationBlocked, setIsSideBarOpen }) {
  const { user, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [showImageSourceModal, setShowImageSourceModal] = useState(false);
  const inputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const { device } = useDevice();
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  const { t } = useTranslation(NAMESPACES.navbar);
  const { t: tHome } = useTranslation(NAMESPACES.home);
  const { theme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageToggle = async (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    const newLang = await toggleLanguage();
    setCurrentLang(newLang);
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
    setShowImageSourceModal(false);
  };

  const handleSearchWithImageClick = () => {
    if (device === "desktop") {
      inputRef.current?.click();
    } else {
      setShowImageSourceModal(true);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={cn(
      "fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-700",
      scrolled ? "top-4 px-4" : "top-0"
    )}>
      <motion.nav 
        initial={false}
        animate={{
          width: scrolled ? (device === "mobile" ? "100%" : "520px") : "100%",
          height: scrolled ? 64 : 96,
          borderRadius: scrolled ? 32 : 0,
          backgroundColor: scrolled ? "rgba(var(--background), 0.6)" : "transparent",
          backdropFilter: scrolled ? "blur(32px)" : "blur(0px)",
          border: scrolled ? "2px solid rgba(var(--primary), 0.2)" : "0px solid transparent"
        }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className={cn(
          "pointer-events-auto relative flex items-center transition-all overflow-hidden",
          scrolled ? "shadow-[0_20px_50px_rgba(0,0,0,0.15)]" : "w-full border-none"
        )}
      >
        <div className={cn(
          "h-full flex items-center justify-between transition-all duration-700 w-full relative",
          scrolled ? "px-6 md:px-10" : "max-w-[1440px] mx-auto px-4 md:px-12"
        )}>
          <NavBranding 
            scrolled={scrolled}
            device={device}
            currentLang={currentLang}
            onLanguageToggle={handleLanguageToggle}
            theme={theme}
            onThemeToggle={toggleTheme}
            navigate={navigate}
          />

          <NavSearch 
            scrolled={scrolled}
            onSearchClick={handleSearchWithImageClick}
            t={t}
            inputRef={inputRef}
            cameraInputRef={cameraInputRef}
            handleUploadImage={handleUploadImage}
          />

          <NavAuth 
            user={user}
            isLoggedIn={isLoggedIn}
            scrolled={scrolled}
            navigationBlocked={navigationBlocked}
            onProfileClick={() => setIsSideBarOpen(true)}
            onLoginClick={() => navigate("/registration", { state: { form: "login" } })}
            onSignupClick={() => navigate("/registration", { state: { form: "signup" } })}
            t={t}
          />
        </div>

        {imageUploaded && (
          <ImageEditor
            imageUploaded={imageUploaded}
            setImageUploaded={setImageUploaded}
            imageURL={imageURL}
            setImageURL={setImageURL}
          />
        )}

        <ImageSourceDialog 
          open={showImageSourceModal}
          onOpenChange={setShowImageSourceModal}
          t={tHome}
          cameraInputRef={cameraInputRef}
          inputRef={inputRef}
        />
      </motion.nav>
    </div>
  );
}
