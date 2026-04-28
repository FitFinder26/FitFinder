import MagicButton from "../../common/MagicButton";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

import { useOnboarding, ONBOARDING_STEPS } from "../../../providers/OnboardingProvider";

export default function SegmentationActions({
  masks,
  processImage,
  reSegmentImage,
  imageURL,
  loading,
  selected,
  sendSelected,
}) {
  const { t } = useTranslation(NAMESPACES.editor);
  const { currentStep, nextStep } = useOnboarding();

  const handleSegmentClick = () => {
    if (masks.length === 0) {
      processImage();
    } else {
      reSegmentImage();
    }
  };

  const handleSendSelected = () => {
    sendSelected();
  };

  return (
    <div className="flex flex-col gap-4">
      <MagicButton 
        id="segment-button"
        onClick={handleSegmentClick} 
        isDisabled={!imageURL} 
        loading={loading}
        name={masks.length === 0 ? t("segment") : t("resegment")} 
      />
      
      {selected.length !== 0 && (
        <Button
          id="send-selected-button"
          onClick={handleSendSelected}
          className="h-16 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] bg-rose-500 hover:bg-rose-600 text-white font-black text-lg sm:text-xl uppercase tracking-widest shadow-xl animate-in fade-in slide-in-from-right-4 duration-500"
        >
          {t("sendSelected")}
        </Button>
      )}
    </div>
  );
}
