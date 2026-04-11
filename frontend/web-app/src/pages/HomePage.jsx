import { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import ImageEditor from "../components/ImageEditor";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Recommendations from "../components/Recommendations";
import PreferenceSurvey from "../components/PreferenceSurvey";
import { recomendedationService } from "../../../shared/services/recomendationService";
import { Instagram, MessageCircle, Camera, Upload, Sparkles, ChevronRight, Zap, ArrowRight, ShieldCheck, Shirt } from "lucide-react";
import { useDevice } from "../providers/DeviceProvider";
import { useAuthContext } from "../providers/AuthProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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
    <div className="w-full flex flex-col bg-background animate-in fade-in duration-1000 overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Hero Section: High Fashion brutalist styling */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 md:px-12 box-border overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-primary/10 rounded-full blur-[180px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[70%] bg-secondary/10 rounded-full blur-[180px] animate-pulse delay-700" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:invert" />
        </div>

        <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            {/* Left Column: Messaging */}
            <div className="flex-1 space-y-12 text-center lg:text-left animate-in slide-in-from-left-20 duration-1000">
                <div className="space-y-6">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <Badge variant="outline" className="px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px] border-primary/30 text-primary italic shadow-lg shadow-primary/5">
                            ALPHA v2.4.0
                        </Badge>
                        <div className="flex items-center gap-2 opacity-30">
                            <Zap size={14} className="fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">AI POWERED</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase italic tracking-[-0.05em] leading-[0.85] text-foreground">
                        {t("welcomeTo") || "DISCOVER YOUR"}<br />
                        <span className="text-secondary drop-shadow-[0_10px_30px_rgba(107,203,119,0.3)]">PERFECT</span> FIT
                    </h1>
                    
                    <div className="scale-90 md:scale-110 lg:scale-125 origin-center lg:origin-left py-6">
                        <Logo fontSize={device === "mobile" ? 50 : device === "tablet" ? 80 : 120} />
                    </div>

                    <p className="max-w-xl mx-auto lg:mx-0 text-xl md:text-2xl font-bold opacity-40 italic tracking-tight leading-tight">
                        Revolutionizing personal style through the lens of artificial intelligence. Your archive, refined.
                    </p>
                </div>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                    <input type="file" accept="image/*" ref={inputRef} className="hidden" onChange={handleUploadImage} />
                    <input type="file" accept="image/*" capture="camera" ref={cameraInputRef} className="hidden" onChange={handleUploadImage} />

                    {(device === "desktop" || isLoggedIn) ? (
                        <Button 
                            onClick={handleSearchWithImageClick}
                            className="group relative h-24 px-12 rounded-[2.5rem] bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-700 overflow-hidden font-black text-2xl uppercase tracking-tighter w-full sm:w-auto shadow-2xl shadow-black/10 hover:shadow-primary/30"
                        >
                            <Camera size={32} className="mr-6 transition-all duration-700 group-hover:rotate-12 group-hover:scale-125 group-hover:text-white" strokeWidth={2.5} />
                            <span>{t("searchWithImage")}</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                    ) : (
                        <Button 
                            onClick={() => navigate("/registration", { state: { form: "signup" } })}
                            className="h-24 px-16 rounded-[2.5rem] bg-secondary text-white hover:bg-primary transition-all duration-700 font-black text-3xl uppercase tracking-tighter w-full sm:w-auto shadow-2xl shadow-secondary/20 hover:shadow-primary/30"
                        >
                            {t("join") || "ENTER ARCHIVE"}
                        </Button>
                    )}
                    
                    <Button 
                        variant="outline"
                        onClick={() => navigate("/about-us", { state: { toSection: "how-it-works" } })}
                        className="h-24 px-12 rounded-[2.5rem] bg-transparent border-4 border-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-700 font-black text-2xl uppercase tracking-tighter w-full sm:w-auto group"
                    >
                        {t("demo") || "HOW IT WORKS"}
                        <ChevronRight className="ml-4 transition-transform group-hover:translate-x-2" size={28} strokeWidth={3} />
                    </Button>
                </div>
            </div>

            {/* Right Column: AI Visualizer */}
            <div className="hidden lg:block flex-1 animate-in slide-in-from-right-20 duration-1000 perspective-1000">
                <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 transition-transform duration-1000 ease-out">
                    {/* Abstract Card Layer */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[5rem] blur-[120px] opacity-20 pointer-events-none" />
                    
                    <div className="relative w-[500px] h-[600px] rounded-[4rem] bg-background/40 backdrop-blur-3xl border-4 border-foreground/5 overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.3)] group cursor-default">
                        
                        {/* Header Simulation */}
                        <div className="absolute top-10 left-10 right-10 flex items-center justify-between z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-rose-500 animate-pulse" />
                                <span className="font-black text-[10px] tracking-[0.4em] uppercase opacity-40 italic">LIVE SEGMENTATION</span>
                            </div>
                            <Badge className="bg-white/10 text-primary border-none text-[8px] font-black tracking-widest italic">NEURAL ENGINE ACTIVE</Badge>
                        </div>

                        {/* Visual Animation Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full p-20 flex items-center justify-center">
                                {/* SVG AI Simulation */}
                                <svg className="w-full h-full filter drop-shadow-[0_0_30px_rgba(250,88,126,0.3)] animate-float" viewBox="0 0 400 500">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" className="stop-color-primary" stopColor="rgba(250,88,126,0.4)" />
                                            <stop offset="100%" className="stop-color-secondary" stopColor="rgba(107,203,119,0.4)" />
                                        </linearGradient>
                                    </defs>
                                    
                                    {/* Mock Cloth Shapes with animation */}
                                    <path className="fill-[url(#grad1)] stroke-primary stroke-[6] animate-pulse duration-[3000ms]" 
                                          d="M 120 100 Q 150 80 180 90 L 220 120 Q 200 160 180 200 Q 140 190 120 160 Z" />
                                    <path className="fill-[url(#grad1)] stroke-secondary stroke-[6] animate-pulse duration-[4000ms] delay-1000" 
                                          d="M 230 180 Q 280 160 320 200 L 330 300 Q 280 340 230 310 Z" />
                                    <path className="fill-[url(#grad1)] stroke-primary stroke-[6] animate-pulse duration-[5000ms] delay-2000" 
                                          d="M 100 280 Q 160 260 200 300 L 180 400 Q 120 420 80 380 Z" />

                                    {/* Scanning line */}
                                    <rect className="fill-primary/20 animate-scan" x="50" y="0" width="300" height="4" />
                                    
                                    {/* Detect Points */}
                                    {[
                                        {cx: 150, cy: 140, d: 0.1}, {cx: 260, cy: 230, d: 0.8}, {cx: 140, cy: 350, d: 1.5},
                                        {cx: 200, cy: 110, d: 0.5}, {cx: 290, cy: 200, d: 1.2}, {cx: 120, cy: 320, d: 1.9}
                                    ].map((p, i) => (
                                        <g key={i} className="animate-in fade-in duration-1000" style={{animationDelay: `${p.d}s`}}>
                                            <circle cx={p.cx} cy={p.cy} r="12" className="fill-primary/10 stroke-primary/30 stroke-[2] animate-ping" />
                                            <circle cx={p.cx} cy={p.cy} r="6" className="fill-primary" />
                                        </g>
                                    ))}
                                </svg>
                            </div>
                        </div>

                        {/* Footer Status Overlay */}
                        <div className="absolute bottom-10 left-10 right-10 h-24 bg-background/80 backdrop-blur-3xl rounded-[2.5rem] border-2 border-primary/20 flex items-center justify-between px-10 group-hover:translate-y-0 translate-y-32 transition-transform duration-700">
                             <div className="flex gap-4 items-center">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Sparkles size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-black uppercase text-[10px] tracking-widest">{t("clickToRefine") || "SMART EXTRACT"}</h4>
                                    <p className="text-[9px] font-bold opacity-40 uppercase tracking-tighter">AI VISION ENGINE 5.0</p>
                                </div>
                             </div>
                             <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Floating Metrics / Features */}
        <div className="container relative z-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: <ShieldCheck />, title: "SECURE ARCHIVE", desc: "Your data is encrypted by default." },
                { icon: <Zap />, title: "INSTANT LOOKUP", desc: "Cross-platform visual search." },
                { icon: <Shirt />, title: "CURATED STYLE", desc: "Neuro-personalized matching." }
            ].map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center p-12 bg-muted/10 rounded-[3.5rem] border border-border/5 hover:bg-muted/20 transition-all group scale-95 hover:scale-100 duration-500">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:rotate-12 transition-transform">
                        {f.icon}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tighter italic mb-4">{f.title}</h3>
                    <p className="font-bold opacity-30 italic tracking-tight">{f.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <Recommendations
        categoricalProducts={categoricalProducts}
        loading={loadingRecomendations}
      />

      {/* Feedback Section: Brutalist Card */}
        <section className="w-full py-32 px-6 md:px-12 bg-muted/5">
          <div className="max-w-6xl mx-auto space-y-16 animate-in slide-in-from-bottom-20 duration-1000">
            <div className="space-y-4">
                <Badge className="bg-secondary/10 text-secondary border-none px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest italic leading-none animate-pulse">COMMUNITY INSIGHTS</Badge>
                <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none">{t("feedbackTitle") || "SHARE YOUR VISION"}</h2>
            </div>
            
            <div className="relative group cursor-pointer overflow-hidden rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)]" onClick={() => window.open(feedbackFormLink)}>
                 <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 bg-background p-16 md:p-24 border-8 border-muted/10 group-hover:border-white/20 transition-all duration-1000">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-muted flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-1000 rotate-[-8deg] group-hover:rotate-0 shadow-2xl">
                        <MessageCircle className="text-primary" size={60} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <p className="text-3xl md:text-5xl font-black leading-[0.9] italic group-hover:text-white transition-colors duration-1000 tracking-tighter">
                            {t("feedbackMessage") || "Your voice shapes the future of FitFinder."}
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-primary group-hover:text-white transition-colors duration-1000">
                            <span className="text-xl font-bold uppercase tracking-widest leading-none">{t("feedbackHere") || "SUBMIT REVIEW"}</span>
                            <ArrowRight className="animate-in slide-in-from-left-2 transition-all group-hover:translate-x-4" strokeWidth={4} />
                        </div>
                    </div>
                 </div>
            </div>
          </div>
        </section>

      {/* Social Media Section: Gradiant Fusion */}
        <section className="w-full py-40 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-[150px] opacity-30 pointer-events-none" />
          
          <div className="max-w-6xl mx-auto space-y-20 relative z-10 text-center animate-in slide-in-from-bottom-20 duration-1000">
            <div className="space-y-6">
                <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none">{t("socialMediaTitle") || "JOIN THE FOLD"}</h2>
                <p className="text-xl md:text-2xl font-bold opacity-30 italic max-w-2xl mx-auto">{t("socialMediaMessage") || "Exclusive lookbooks, AI updates, and archival releases on our Instagram."}</p>
            </div>

            <div className="inline-block" onClick={() => window.open(instagramURL)}>
                <Button className="group relative h-32 px-16 rounded-[4rem] bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600 p-1 shadow-[0_30px_60px_rgba(238,42,123,0.3)] transition-transform hover:scale-110 duration-700 active:scale-95">
                    <div className="h-full w-full bg-background rounded-[3.8rem] flex items-center justify-center gap-8 px-12 group-hover:bg-transparent transition-colors duration-1000">
                        <Instagram className="text-foreground group-hover:text-white transition-colors duration-1000" size={56} strokeWidth={2.5} />
                        <span className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-white transition-colors duration-1000">@FITFINDER_CSED</span>
                    </div>
                </Button>
            </div>
            
            <div className="pt-20 opacity-5 font-black uppercase tracking-[2em] text-[10px] select-none">ARCHITECTURE DESIGNED BY ARTIFICIAL INTELLIGENCE</div>
          </div>
        </section>

      {/* Popups & Modals */}
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

      {/* Image Source Selection Modal (Mobile): Premium bottom sheet style */}
      <Dialog open={showImageSourceModal} onOpenChange={setShowImageSourceModal}>
        <DialogContent className="max-w-lg rounded-[4rem] p-0 border-none shadow-[0_60px_120px_rgba(0,0,0,0.5)] bg-background/80 backdrop-blur-3xl overflow-hidden">
          <div className="p-12 md:p-16 space-y-12">
            <DialogHeader className="space-y-4">
                <div className="w-16 h-1 bg-foreground/10 mx-auto rounded-full" />
                <DialogTitle className="text-center text-4xl font-black uppercase italic tracking-tighter pt-4 animate-in slide-in-from-bottom-2">
                    {t("chooseImageSource") || "SELECT SOURCE"}
                </DialogTitle>
                <p className="text-center font-bold opacity-30 italic text-sm">{tCommon("selectMethod") || "Choose how you want to input your visual context."}</p>
            </DialogHeader>

            <div className="grid gap-6">
                <Button 
                    className="flex justify-start gap-8 h-28 bg-primary hover:bg-rose-600 rounded-[2.5rem] text-white transition-all hover:-translate-y-2 shadow-2xl shadow-primary/30 group px-10"
                    onClick={() => cameraInputRef.current.click()}
                >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                        <Camera size={36} strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <span className="block text-2xl font-black uppercase tracking-tighter italic">{t("takePhoto")}</span>
                        <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{tCommon("instantCapture") || "LIVE CAMERA"}</span>
                    </div>
                </Button>

                <Button 
                    variant="outline"
                    className="flex justify-start gap-8 h-28 rounded-[2.5rem] border-4 border-foreground/5 hover:bg-foreground hover:text-background transition-all hover:-translate-y-2 group px-10"
                    onClick={() => inputRef.current.click()}
                >
                    <div className="w-16 h-16 bg-foreground/5 group-hover:bg-background/20 rounded-2xl flex items-center justify-center transition-all group-hover:rotate-[-12deg]">
                        <Upload size={36} className="text-foreground group-hover:text-background" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <span className="block text-2xl font-black uppercase tracking-tighter italic">{t("uploadFromDevice")}</span>
                        <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{tCommon("archivalUpload") || "LOCAL FILE"}</span>
                    </div>
                </Button>
            </div>

            <Button 
                variant="ghost" 
                onClick={() => setShowImageSourceModal(false)} 
                className="w-full h-16 rounded-3xl font-black uppercase tracking-widest text-[10px] opacity-30 hover:opacity-100 hover:bg-transparent italic decoration-2 underline-offset-8 underline"
            >
              {tCommon("cancel") || "ABORT SELECTION"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Global Style Animations for the Hero AI visualizer */}
      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes scan {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(500px); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scan { animation: scan 4s linear infinite; }
        .stop-color-primary { stop-color: var(--primary); }
        .stop-color-secondary { stop-color: var(--secondary); }
      `}</style>
    </div>
  );
}
