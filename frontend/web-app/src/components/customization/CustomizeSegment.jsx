import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notifier } from "../Notifier";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../locales/namespaces";

// Sub-components
import CustomizationPreview from "./components/CustomizationPreview";
import CustomizationActions from "./components/CustomizationActions";

// Utils
import { cropSelectedSegments } from "./utils";

import { useOnboarding, ONBOARDING_STEPS } from "../../providers/OnboardingProvider";

export default function CustomizeSegment({
  imageObj,
  selectedSegments,
  setIsBeingCustomized,
  setImageUploaded,
  segmentationService,
  handleCloseSegmentationSheet,
}) {
  const { t } = useTranslation(NAMESPACES.editor);
  const { currentStep, setCurrentStep, nextStep } = useOnboarding();
  const [segmentedImageSrc, setSegmentedImageSrc] = useState(null);
  const [selectedMask, setSelectedMask] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStep === ONBOARDING_STEPS.SEND_SELECTED) {
      setCurrentStep(ONBOARDING_STEPS.CUSTOMIZE_SEARCH);
    }
  }, []);

  useEffect(() => {
    if (!imageObj) return;
    const initialSegments = [...selectedSegments];
    if (!initialSegments.length) return;
    
    setSelectedMask(initialSegments);
    const src = cropSelectedSegments(imageObj, initialSegments);
    if (src) setSegmentedImageSrc(src);
    else Notifier.notifyError(t("cropFailed"));
  }, [imageObj, selectedSegments, t]);

  const handleSearch = async () => {
    if (!segmentedImageSrc) {
      Notifier.notifyError(t("segmentNotReady"));
      return;
    }
    
    setIsSearching(true);
    try {
      const response = await segmentationService.search(selectedMask[0], prompt);
      const products = await response.json();
      
      if (products && products?.error) {
        Notifier.notifyError(t("searchFailed", { reason: products.error }));
        if (currentStep === ONBOARDING_STEPS.RATE_RESULTS) {
          setCurrentStep(ONBOARDING_STEPS.CUSTOMIZE_SEARCH);
        }
      } else {
        setImageUploaded(false);
        segmentationService.endSession();
        handleCloseSegmentationSheet();
        navigate("/search-result", { 
          state: { 
            products: products, 
            searchingPeice: segmentedImageSrc,
            prompt: prompt
          } 
        });
      }
    } catch (error) {
      Notifier.notifyError(t("searchFailedGeneric"));
      if (currentStep === ONBOARDING_STEPS.RATE_RESULTS) {
        setCurrentStep(ONBOARDING_STEPS.CUSTOMIZE_SEARCH);
      }
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <CustomizationPreview 
            segmentedImageSrc={segmentedImageSrc} 
          />

        <CustomizationActions 
          prompt={prompt}
          setPrompt={setPrompt}
          isSearching={isSearching}
          handleSearch={handleSearch}
          setIsBeingCustomized={setIsBeingCustomized}
        />
      </div>
    </div>
  );
}
