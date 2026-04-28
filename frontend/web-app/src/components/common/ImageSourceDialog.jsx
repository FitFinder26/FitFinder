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
 */
export default function ImageSourceDialog({
  open,
  onOpenChange,
  t, // expects a translate function
  cameraInputRef,
  inputRef
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[94%] max-w-[480px] sm:w-full rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 border-none shadow-[0_50px_150px_rgba(0,0,0,0.5)] bg-background/90 backdrop-blur-2xl overflow-hidden !z-[100]">
        {/* Animated Background Accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[100px] -translate-y-24 translate-x-12 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-[100px] translate-y-24 -translate-x-12 animate-pulse [animation-delay:1s]" />

        <DialogHeader className="mb-8 sm:mb-12 text-center space-y-4 relative z-10">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-2 border border-primary/10 shadow-inner">
            <Camera className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
          </div>
          <div className="space-y-1">
            <DialogTitle className="text-3xl sm:text-4xl font-black uppercase tracking-tighter italic leading-none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {t("modals.chooseSource") || t("chooseSource") || "CHOOSE SOURCE"}
            </DialogTitle>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 italic">
              {t("modals.selectMethod") || t("selectMethod") || "Visual Intelligence Input"}
            </p>
          </div>
        </DialogHeader>

        <div className="grid gap-4 sm:gap-6 relative z-10">
          <Button
            className="group relative h-24 sm:h-32 rounded-[1.5rem] sm:rounded-[2.5rem] bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-700 flex items-center justify-start px-8 sm:px-10 border-none overflow-hidden shadow-xl hover:shadow-primary/30 active:scale-95"
            onClick={() => cameraInputRef.current?.click()}
          >
            <div className="flex items-center gap-6 sm:gap-8 transition-transform duration-700 group-hover:translate-x-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-background/10 flex items-center justify-center group-hover:rotate-12 transition-all">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-black text-xl sm:text-2xl uppercase italic leading-none tracking-tight">
                  {t("modals.takePhoto") || t("takePhoto") || "TAKE PHOTO"}
                </span>
                <span className="text-[9px] sm:text-[10px] font-black opacity-40 mt-1 sm:mt-2 uppercase tracking-widest italic">
                  {t("modals.instantCapture") || "LIVE CAPTURE"}
                </span>
              </div>
            </div>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <Button
            variant="outline"
            className="group relative h-24 sm:h-32 rounded-[1.5rem] sm:rounded-[2.5rem] border-4 border-foreground/5 bg-muted/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-700 flex items-center justify-start px-8 sm:px-10 overflow-hidden active:scale-95"
            onClick={() => inputRef.current?.click()}
          >
            <div className="flex items-center gap-6 sm:gap-8 transition-transform duration-700 group-hover:translate-x-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:rotate-[-12deg] transition-all">
                <Upload className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-black text-xl sm:text-2xl uppercase italic leading-none tracking-tight">
                  {t("modals.uploadFromDevice") || t("uploadFromDevice") || "UPLOAD"}
                </span>
                <span className="text-[9px] sm:text-[10px] font-black opacity-40 mt-1 sm:mt-2 uppercase tracking-widest italic">
                  {t("modals.archivalUpload") || "STATIC ARCHIVE"}
                </span>
              </div>
            </div>
          </Button>

          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="h-12 sm:h-14 font-black uppercase tracking-[0.5em] text-[9px] sm:text-[10px] opacity-20 hover:opacity-100 mt-4 transition-all hover:bg-transparent italic hover:tracking-[0.7em] decoration-2 underline-offset-8 underline"
          >
            {t("modals.cancel") || t("cancel") || "ABORT"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
