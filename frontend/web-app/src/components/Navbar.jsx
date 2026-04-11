import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useState, useRef } from "react";
import ImageEditor from "./ImageEditor";
import { Camera, Upload, UserIcon, Languages, Sparkles, LogIn, ChevronRight } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
        scrolled ? "h-20 bg-background/80 backdrop-blur-2xl border-b-2 border-border/10 shadow-2xl" : "h-24 bg-transparent pt-4"
    )}>
      
      <div className="max-w-[1440px] mx-auto h-full grid grid-cols-3 items-center px-4 md:px-12">
        {/* Left Section: Branding & Lang */}
        <div className="flex items-center gap-6">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate("/", { state: { cameFrom: "navbar" } })}
          >
            <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                <img 
                    src={logoSrc} 
                    alt="FitFinder" 
                    className={cn(
                        "transition-all duration-700 group-hover:rotate-12 group-hover:scale-110",
                        scrolled ? "w-10 h-10" : "w-14 h-14"
                    )} 
                />
            </div>
            {!scrolled && (
                <div className="hidden lg:flex flex-col animate-in fade-in slide-in-from-left-4 duration-1000">
                    <span className="font-black text-xs uppercase tracking-[0.5em] italic leading-none opacity-40">AI PLATFORM</span>
                    <span className="font-black text-xl uppercase italic tracking-tighter leading-none pt-1">FITFINDER</span>
                </div>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLanguageToggle}
            className="hidden md:flex gap-3 h-10 rounded-xl px-4 hover:bg-muted/50 group border border-transparent hover:border-border/10"
          >
            <Languages size={14} className="group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-black text-[10px] uppercase tracking-widest">{getLanguageDisplayName(currentLang)}</span>
          </Button>
        </div>

        {/* Center: Search Action */}
        <div className="flex justify-center">
          <input type="file" accept="image/*" ref={inputRef} className="hidden" onChange={handleUploadImage} />
          <input type="file" accept="image/*" capture="camera" ref={cameraInputRef} className="hidden" onChange={handleUploadImage} />
          
          <Button 
            variant="outline" 
            onClick={handleSearchWithImageClick}
            className={cn(
                "group relative h-12 md:h-14 rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] transition-all duration-700 italic gap-4",
                scrolled ? "bg-muted/50 border-primary shadow-xl shadow-primary/10" : "bg-white/10 backdrop-blur-md border-white/20 hover:border-primary text-foreground"
            )}
          >
            <Camera size={18} className="group-hover:scale-125 transition-transform" />
            <span className="hidden sm:inline">{t("searchWithImage")}</span>
            <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
          </Button>
        </div>

        {/* Right Section: Auth */}
        <div className="flex justify-end items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-6">
                {!scrolled && (
                    <div className="hidden xl:flex flex-col items-end opacity-40">
                        <span className="text-[9px] font-black uppercase tracking-widest">VERIFIED ACCOUNT</span>
                        <span className="text-[10px] font-black italic">{user?.userName}</span>
                    </div>
                )}
                <Avatar 
                    className={cn(
                        "cursor-pointer hover:rotate-12 transition-all duration-700 border-4 border-primary/20 hover:border-primary shadow-2xl",
                        scrolled ? "w-10 h-10" : "w-12 h-12"
                    )} 
                    onClick={handleProfilePicClick}
                >
                <AvatarImage src={user?.profileImageURL} alt={user?.userName} />
                <AvatarFallback className="bg-muted font-black uppercase text-[10px]">{user?.userName?.slice(0, 2) || "FF"}</AvatarFallback>
                </Avatar>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/registration", { state: { form: "login" } })}
                disabled={navigationBlocked}
                className="font-black uppercase tracking-widest text-[10px] h-10 px-6 rounded-xl hover:bg-muted/50"
              >
                {t("login")}
              </Button>
              <Button 
                onClick={() => navigate("/registration", { state: { form: "signup" } })}
                disabled={navigationBlocked}
                className="h-12 px-8 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs italic shadow-[0_15px_40px_rgba(250,88,126,0.25)] hover:scale-105 active:scale-95 transition-all gap-4 hidden sm:flex border-none"
              >
                <Sparkles size={16} />
                {t("join")}
              </Button>
            </div>
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

      {/* Mobile Image Source Dialog - Refined Brutalist UI */}
      <Dialog open={showImageSourceModal} onOpenChange={setShowImageSourceModal}>
        <DialogContent className="sm:max-w-[480px] rounded-[3.5rem] p-12 border-none shadow-[0_50px_150px_rgba(0,0,0,0.4)] bg-background/95 backdrop-blur-3xl animate-in zoom-in-95 duration-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -translate-y-16" />
          
          <DialogHeader className="mb-10 text-center space-y-4">
            <div className="mx-auto w-20 h-20 rounded-[2rem] bg-muted flex items-center justify-center text-primary mb-2 border border-border/10">
                <Camera size={32} />
            </div>
            <DialogTitle className="text-3xl font-black uppercase tracking-tighter italic leading-none">{t("chooseImageSource")}</DialogTitle>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-20 italic">Visual Intelligence Input</p>
          </DialogHeader>

          <div className="grid gap-6 relative z-10">
            <Button 
              className="group h-24 rounded-[2rem] bg-black text-white hover:bg-primary transition-all duration-700 flex flex-col items-center justify-center p-0 border-none relative overflow-hidden"
              onClick={() => cameraInputRef.current.click()}
            >
              <div className="flex items-center gap-6 group-hover:scale-110 transition-transform">
                <Camera size={32} className="opacity-40 group-hover:opacity-100" />
                <div className="flex flex-col items-start border-l border-white/20 pl-6 text-left">
                    <span className="font-black text-xl uppercase italic leading-none">{t("takePhoto")}</span>
                    <span className="text-[9px] font-black opacity-30 mt-1 uppercase tracking-widest">LIVE CAPTURE</span>
                </div>
              </div>
            </Button>

            <Button 
                variant="outline"
                className="group h-24 rounded-[2rem] border-4 border-border/10 bg-muted/5 hover:border-primary/50 transition-all duration-700 flex items-center justify-center gap-6"
                onClick={() => inputRef.current.click()}
            >
              <Upload size={32} className="opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500" />
              <div className="flex flex-col items-start border-l border-border/10 pl-6 text-left">
                    <span className="font-black text-xl uppercase italic leading-none">{t("uploadFromDevice")}</span>
                    <span className="text-[9px] font-black opacity-30 mt-1 uppercase tracking-widest">STATIC ARCHIVE</span>
              </div>
            </Button>
            
            <Button variant="ghost" onClick={() => setShowImageSourceModal(false)} className="h-14 font-black uppercase tracking-widest text-[10px] opacity-20 hover:opacity-100 mt-4 rounded-xl">
              {t("cancel")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
