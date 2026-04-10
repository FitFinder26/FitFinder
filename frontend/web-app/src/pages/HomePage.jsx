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
import { useAuthContext } from "../providers/AuthProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function HomePage() {
  const { t } = useTranslation(NAMESPACES.home);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const { i18n } = useTranslation();
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, isAuthenticated } = useAuthContext();

  const navigate = useNavigate();
  const { device } = useDevice();
  const feedbackFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";
  const instagramURL = "https://www.instagram.com/fitfinder_csed_2026?igsh=ZG5mamtod3lyMWZo&utm_source=ig_contact_invite";

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isAuthenticated]);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
    setShowImageSourceModal(false);
  };

  const handleSearchWithImageClick = () => {
    if (device === "desktop") {
      inputRef.current.click();
    } else {
      setShowImageSourceModal(true);
    }
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
      .catch((error) => console.error(error));
  }, []);

  const groupByCategory = (products, { includeNullCategory = false } = {}) => {
    if (!Array.isArray(products)) return {};
    return products.reduce((acc, item) => {
      let cat = item?.category?.trim();
      if (!cat) {
        if (!includeNullCategory) return acc;
        cat = "Uncategorized";
      }
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});
  };

  return (
    <div className="w-full flex flex-col bg-background animate-in fade-in duration-1000 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[65vh] flex flex-col md:flex-row items-center justify-center gap-12 bg-[var(--bg-image)] p-6 md:p-12 box-border overflow-hidden">
        {/* Left Hero */}
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 animate-in slide-in-from-left-10 duration-1000 text-center">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase opacity-90">{t("welcomeTo")}</h1>
            <div className="scale-75 md:scale-110 lg:scale-125 origin-center">
               <Logo fontSize={device === "mobile" ? 60 : device === "tablet" ? 100 : 150} />
            </div>
          </div>

          <input type="file" accept="image/*" ref={inputRef} className="hidden" onChange={handleUploadImage} />
          <input type="file" accept="image/*" capture="camera" ref={cameraInputRef} className="hidden" onChange={handleUploadImage} />

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {(device === "desktop" || isLoggedIn) ? (
              <Button 
                onClick={handleSearchWithImageClick}
                className="group relative h-16 px-10 rounded-[2rem] bg-white text-black hover:bg-black hover:text-white transition-all duration-500 overflow-hidden border-2 border-white font-bold text-lg w-full sm:w-auto"
              >
                <Camera size={24} className="mr-2 transition-transform duration-500 group-hover:scale-125" />
                <span>{t("searchWithImage")}</span>
              </Button>
            ) : (
                <Button 
                    onClick={() => navigate("/registration", { state: { form: "signup" } })}
                    className="h-16 px-14 rounded-[2rem] bg-[#6bcb77] text-white hover:bg-[#4d96ff] transition-all font-bold text-xl shadow-2xl w-full sm:w-auto"
                >
                    {t("join")}
                </Button>
            )}
            
            <Button 
                variant="outline"
                onClick={() => navigate("/about-us", { state: { toSection: "how-it-works" } })}
                className="h-16 px-10 rounded-[2rem] bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all font-bold text-lg w-full sm:w-auto"
            >
                {t("demo")}
            </Button>
          </div>
        </div>

        {/* Right Hero (Animation) */}
        {device === "desktop" && (
          <div className="flex-1 flex justify-center items-center animate-in slide-in-from-right-10 duration-1000">
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              <div className="relative w-[340px] h-[340px] rounded-[40px] bg-white/10 backdrop-blur-3xl border border-white/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-glow flex items-center justify-center group">
                 {/* SVG Simulation */}
                 <svg className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]" viewBox="0 0 280 280">
                    <path className="fill-primary/30 animate-mask-detect" d="M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z" />
                    <path className="fill-primary/30 animate-mask-detect [animation-delay:0.6s]" d="M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z" />
                    <path className="fill-primary/30 animate-mask-detect [animation-delay:1.2s]" d="M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z" />

                    <path className="fill-none stroke-secondary stroke-[4] animate-border-detect" d="M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z" />
                    <path className="fill-none stroke-secondary stroke-[4] animate-border-detect [animation-delay:0.9s]" d="M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z" />
                    <path className="fill-none stroke-secondary stroke-[4] animate-border-detect [animation-delay:1.5s]" d="M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z" />

                    <circle className="fill-secondary animate-point-pulse [animation-delay:0.4s]" cx="95" cy="75" r="5" />
                    <circle className="fill-secondary animate-point-pulse [animation-delay:0.9s]" cx="175" cy="120" r="5" />
                    <circle className="fill-secondary animate-point-pulse [animation-delay:1.4s]" cx="105" cy="175" r="5" />
                 </svg>
                 <div className="absolute bottom-8 font-black text-[12px] tracking-[0.3em] uppercase text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                    {t("clickToRefine")}
                 </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Recommendations Section */}
      <Recommendations
        categoricalProducts={categoricalProducts}
        loading={loadingRecomendations}
      />

      {/* Feedback Section */}
      <LazyMount unmountOnHide={true}>
        <section className="w-full py-24 px-6 md:px-12 bg-muted/20">
          <div className="max-w-5xl mx-auto space-y-10 animate-in slide-in-from-bottom-10 duration-1000">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{t("feedbackTitle")}</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-background p-10 rounded-[3rem] shadow-xl border border-border/50 group hover:border-primary/50 transition-colors">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-primary" size={40} />
              </div>
              <p className="text-2xl md:text-3xl font-bold leading-tight text-center md:text-left">
                {t("feedbackMessage")}{" "}
                <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary text-2xl md:text-3xl font-black underline underline-offset-[12px] decoration-4 hover:decoration-secondary transition-all" 
                    onClick={() => window.open(feedbackFormLink)}
                >
                    {t("feedbackHere")}
                </Button>{" "}
                {t("feedbackMessageEnd")}
              </p>
            </div>
          </div>
        </section>
      </LazyMount>

      {/* Social Media Section */}
      <LazyMount unmountOnHide={true}>
        <section className="w-full py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-10 animate-in slide-in-from-bottom-10 duration-1000">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center md:text-left">{t("socialMediaTitle")}</h2>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-[#e1306c]/5 via-[#5851db]/5 to-[#4d96ff]/5 p-10 rounded-[3rem] border border-border/50 group">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shrink-0 shadow-2xl animate-glow group-hover:rotate-12 transition-transform">
                <Instagram className="text-white" size={48} />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                    {t("socialMediaMessage")}
                </p>
                <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary text-2xl md:text-3xl font-black underline underline-offset-[12px] decoration-4 hover:decoration-secondary transition-all" 
                    onClick={() => window.open(instagramURL)}
                >
                    {t("followUs")}
                </Button>
              </div>
            </div>
          </div>
        </section>
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

      {/* Image Source Selection Modal (Mobile) */}
      <Dialog open={showImageSourceModal} onOpenChange={setShowImageSourceModal}>
        <DialogContent className="sm:max-w-[425px] rounded-[3rem] p-10 border-none shadow-2xl bg-background/95 backdrop-blur-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl font-black mb-8 tracking-tighter">{t("chooseImageSource")}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6">
            <Button 
              className="flex justify-start gap-4 h-20 bg-[#fa587e] hover:bg-[#fa587e]/90 rounded-3xl text-white text-xl font-black shadow-[0_10px_30px_rgba(250,88,126,0.3)] transition-all hover:-translate-y-1"
              onClick={() => cameraInputRef.current.click()}
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Camera size={28} />
              </div>
              <span>{t("takePhoto")}</span>
            </Button>
            <Button 
                variant="outline"
                className="flex justify-start gap-4 h-20 rounded-3xl border-2 border-primary/20 hover:bg-primary/5 text-xl font-black transition-all hover:-translate-y-1"
                onClick={() => inputRef.current.click()}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Upload size={28} className="text-primary" />
              </div>
              <span>{t("uploadFromDevice")}</span>
            </Button>
            <Button variant="ghost" onClick={() => setShowImageSourceModal(false)} className="rounded-2xl mt-4 font-black text-muted-foreground hover:text-foreground">
              {tCommon("cancel")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
