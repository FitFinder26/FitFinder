import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Providers & Services
import { useDevice } from "../../providers/DeviceProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { recomendedationService } from "../../../../shared/services/recomendationService";
import { NAMESPACES } from "../../locales/namespaces";

// Global Components
import ImageEditor from "../../components/ImageEditor";
import RecommendationsSection from "../../components/homePage/RecommendationsSection";
import PreferenceSurvey from "../../components/PreferenceSurvey";

// Refactored HomePage Components
import HeroSection from "../../components/homePage/HeroSection";
import FeaturesSection from "../../components/homePage/FeaturesSection";
import FeedbackSection from "../../components/homePage/FeedbackSection";
import SocialSection from "../../components/homePage/SocialSection";
import ImageSourceDialog from "../../components/common/ImageSourceDialog";
import StoresSection from "../../components/homePage/StoresSection";
import NeuralBackground from "../../components/homePage/NeuralBackground";

export default function HomePage() {
  const { t } = useTranslation(NAMESPACES.home);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
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
  const { isAuthenticated } = useAuthContext();

  const navigate = useNavigate();
  const { device } = useDevice();

  const feedbackFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";
  const instagramURL = "https://www.instagram.com/fitfinder_csed_2026?igsh=ZG5mamtod3lyMWZo&utm_source=ig_contact_invite";

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isAuthenticated]);

  // Hook components to the top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageURL(URL.createObjectURL(file));
    setImageUploaded(true);
    setShowImageSourceModal(false);
    
    // Reset the input value so the same file can be selected again
    e.target.value = "";
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
    <div className="w-full relative flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <NeuralBackground />
      {/* Hidden inputs for image handling */}
      <input type="file" accept="image/*" ref={inputRef} className="hidden" onChange={handleUploadImage} />
      <input type="file" accept="image/*" capture="camera" ref={cameraInputRef} className="hidden" onChange={handleUploadImage} />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <HeroSection
          t={t}
          device={device}
          isLoggedIn={isLoggedIn}
          handleSearchWithImageClick={handleSearchWithImageClick}
          navigate={navigate}
        />

        <FeaturesSection t={t} />

        <RecommendationsSection
          categoricalProducts={categoricalProducts}
          loading={loadingRecomendations}
        />

        <StoresSection />

        <FeedbackSection t={t} feedbackFormLink={feedbackFormLink} />

        <SocialSection t={t} instagramURL={instagramURL} />
      </div>

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

      <ImageSourceDialog
        open={showImageSourceModal}
        onOpenChange={setShowImageSourceModal}
        t={t}
        inputRef={inputRef}
        cameraInputRef={cameraInputRef}
      />

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
      `}</style>
    </div>
  );
}
