import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useState, useRef } from "react";
import ImageEditor from "./ImageEditor";
import { Camera, Upload, UserIcon, Languages } from "lucide-react";
import { useDevice } from "../providers/DeviceProvider";
import logoSrc from "../assets/logo.png";
import {
  toggleLanguage,
  getCurrentLanguage,
  getLanguageDisplayName,
} from "../locales/languageHelper";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const { i18n } = useTranslation();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
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
      inputRef.current.click();
    } else {
      setShowImageSourceModal(true);
    }
  };

  return (
    <nav className="relative z-50 w-full h-[4.5rem] flex items-center px-4 md:px-8 bg-background/50 backdrop-blur-xl border-b border-border/10 overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-[var(--navbar-bg-image)] bg-cover bg-center opacity-40" />
      
      <div className="grid grid-cols-3 w-full items-center">
        {/* Left Section: Logo & Language */}
        <div className="flex items-center gap-2 md:gap-4">
          <div 
            className="flex items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate("/", { state: { cameFrom: "navbar" } })}
          >
            <img src={logoSrc} alt={t("logoAlt", { appName: tCommon("appName") })} className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLanguageToggle}
            className="gap-2 text-foreground font-medium hidden sm:flex"
          >
            <Languages size={18} />
            <span>{getLanguageDisplayName(currentLang)}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleLanguageToggle}
            className="sm:hidden"
          >
            <Languages size={18} />
          </Button>
        </div>

        {/* Center Section: Search with Image */}
        <div className="flex justify-center">
          <input type="file" accept="image/*" ref={inputRef} className="hidden" onChange={handleUploadImage} />
          <input type="file" accept="image/*" capture="camera" ref={cameraInputRef} className="hidden" onChange={handleUploadImage} />
          
          <Button 
            variant="outline" 
            onClick={handleSearchWithImageClick}
            className="gap-2 border-foreground/20 hover:border-foreground transition-all bg-background/20"
          >
            <Camera size={20} />
            <span className="hidden md:inline">{t("searchWithImage")}</span>
          </Button>
        </div>

        {/* Right Section: Auth/Profile */}
        <div className="flex justify-end items-center gap-2 md:gap-4">
          {isLoggedIn ? (
            <Avatar className="cursor-pointer hover:scale-110 transition-transform border-2 border-foreground/10" onClick={handleProfilePicClick}>
              <AvatarImage src={user?.profileImageURL} alt={user?.userName} />
              <AvatarFallback><UserIcon size={24} /></AvatarFallback>
            </Avatar>
          ) : (
            <>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/registration", { state: { form: "login" } })}
                disabled={navigationBlocked}
              >
                {t("login")}
              </Button>
              <Button 
                onClick={() => navigate("/registration", { state: { form: "signup" } })}
                disabled={navigationBlocked}
                className="rounded-full bg-[#6bcb77] hover:bg-[#4d96ff] transition-colors font-medium hidden sm:flex text-white"
              >
                {t("join")}
              </Button>
            </>
          )}
        </div>
      </div>

      {imageUploaded && (
        <ImageEditor
          imageUploaded={imageUploaded}
          setImageUploaded={setImageUploaded}
          imageURL={imageURL}
          setImageURL={setImageURL}
        />
      )}

      {/* Mobile Image Source Dialog */}
      <Dialog open={showImageSourceModal} onOpenChange={setShowImageSourceModal}>
        <DialogContent className="sm:max-w-[425px] rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold mb-4">{t("chooseImageSource")}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <Button 
              className="flex justify-start gap-4 h-14 bg-gradient-to-r from-[#fa587e] to-[#2f68c5] hover:opacity-90 rounded-xl text-white"
              onClick={() => cameraInputRef.current.click()}
            >
              <Camera size={24} />
              <span className="font-semibold">{t("takePhoto")}</span>
            </Button>
            <Button 
              variant="outline"
              className="flex justify-start gap-4 h-14 rounded-xl border-2 hover:bg-accent"
              onClick={() => inputRef.current.click()}
            >
              <Upload size={24} />
              <span className="font-semibold">{t("uploadFromDevice")}</span>
            </Button>
            <Button variant="ghost" onClick={() => setShowImageSourceModal(false)} className="rounded-xl mt-2">
              {t("cancel")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
