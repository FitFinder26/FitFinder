import React from "react";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * Unified Image Source Dialog
 * Used for choosing between camera capture and local file upload.
 * Premium brutalist design with cinematic transitions.
 */import { useOnboarding, ONBOARDING_STEPS } from "../../providers/OnboardingProvider";

export default function ImageSourceDialog({
  open,
  onOpenChange,
  t, // expects a translate function
  cameraInputRef,
  inputRef
}) {
  const { currentStep, nextStep, setCurrentStep } = useOnboarding();

  const handleSourceClick = (e, callback) => {
    e.preventDefault();
    if (currentStep === ONBOARDING_STEPS.CHOOSE_SOURCE) {
      nextStep();
    }
    callback();
  };

  const handleCancel = (e) => {
    if (e) e.preventDefault();
    if (currentStep === ONBOARDING_STEPS.CHOOSE_SOURCE) {
      setCurrentStep(ONBOARDING_STEPS.NAVBAR_SEARCH);
    }
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={handleCancel}>
      <DialogContent className="w-[94%] max-w-[480px] sm:w-full rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 border-none shadow-[0_50px_150px_rgba(0,0,0,0.5)] bg-background/90 backdrop-blur-2xl overflow-hidden !z-[100]">
        {/* Animated Background Accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[100px] -translate-y-24 translate-x-12 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[100px] translate-y-24 -translate-x-12 animate-pulse" />
        
        <DialogHeader className="relative z-10 text-center space-y-4 mb-8">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
            <Camera size={32} />
          </div>
          <div className="space-y-2">
            <DialogTitle className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
              {t("modals.imageSource.title") || "Select Source"}
            </DialogTitle>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-40 italic">
              {t("modals.imageSource.subtitle") || "How would you like to provide the image?"}
            </p>
          </div>
        </DialogHeader>

        <div id="image-source-options" className="grid gap-4 sm:gap-6 relative z-10">
          <Button
            type="button"
            className="group relative h-24 sm:h-32 rounded-[1.5rem] sm:rounded-[2.5rem] bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-700 flex items-center justify-start px-8 sm:px-10 border-none overflow-hidden shadow-xl hover:shadow-primary/30 active:scale-95 image-source-option"
            onClick={(e) => handleSourceClick(e, () => cameraInputRef.current?.click())}
          >
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10 flex items-center gap-6 sm:gap-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-background/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Camera size={24} className="sm:w-8 sm:h-8" />
              </div>
              <div className="text-left">
                <span className="block text-lg sm:text-xl font-black italic uppercase leading-none mb-1">{t("modals.imageSource.camera") || "Take Photo"}</span>
                <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-widest opacity-50">{t("modals.imageSource.cameraDesc") || "Capture using device camera"}</span>
              </div>
            </div>
          </Button>

          <Button
            type="button"
            className="group relative h-24 sm:h-32 rounded-[1.5rem] sm:rounded-[2.5rem] bg-muted/30 hover:bg-muted/50 text-foreground transition-all duration-700 flex items-center justify-start px-8 sm:px-10 border border-border/10 overflow-hidden shadow-xl active:scale-95 image-source-option"
            onClick={(e) => handleSourceClick(e, () => inputRef.current?.click())}
          >
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10 flex items-center gap-6 sm:gap-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                <Upload size={24} className="sm:w-8 sm:h-8" />
              </div>
              <div className="text-left">
                <span className="block text-lg sm:text-xl font-black italic uppercase leading-none mb-1">{t("modals.imageSource.gallery") || "Upload Image"}</span>
                <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-widest opacity-50">{t("modals.imageSource.galleryDesc") || "Select from your gallery"}</span>
              </div>
            </div>
          </Button>

          <Button
            variant="ghost"
            type="button"
            onClick={handleCancel}
            className="h-12 sm:h-14 font-black uppercase tracking-[0.5em] text-[9px] sm:text-[10px] opacity-20 hover:opacity-100 mt-4 transition-all hover:bg-transparent italic hover:tracking-[0.7em] decoration-2 underline-offset-8 underline"
          >
            {t("modals.cancel") || t("cancel") || "ABORT"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
