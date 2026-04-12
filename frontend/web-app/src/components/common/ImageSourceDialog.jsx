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
      <DialogContent className="sm:max-w-[480px] rounded-[3.5rem] p-12 border-none shadow-[0_50px_150px_rgba(0,0,0,0.4)] bg-background/95 backdrop-blur-3xl animate-in zoom-in-95 duration-700 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -translate-y-16" />
        
        <DialogHeader className="mb-10 text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-[2rem] bg-muted flex items-center justify-center text-primary mb-2 border border-border/10">
              <Camera size={32} />
          </div>
          <DialogTitle className="text-3xl font-black uppercase tracking-tighter italic leading-none">
            {t("modals.chooseSource") || t("chooseSource") || "CHOOSE SOURCE"}
          </DialogTitle>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-20 italic">
            {t("modals.selectMethod") || t("selectMethod") || "Visual Intelligence Input"}
          </p>
        </DialogHeader>

        <div className="grid gap-6 relative z-10">
          <Button 
            className="group h-24 rounded-[2rem] bg-black text-white hover:bg-primary transition-all duration-700 flex flex-col items-center justify-center p-0 border-none relative overflow-hidden"
            onClick={() => cameraInputRef.current?.click()}
          >
            <div className="flex items-center gap-6 group-hover:scale-110 transition-transform">
              <Camera size={32} className="opacity-40 group-hover:opacity-100" />
              <div className="flex flex-col items-start border-l border-white/20 pl-6 text-left">
                  <span className="font-black text-xl uppercase italic leading-none">
                    {t("modals.takePhoto") || t("takePhoto") || "TAKE PHOTO"}
                  </span>
                  <span className="text-[9px] font-black opacity-30 mt-1 uppercase tracking-widest">
                    {t("modals.instantCapture") || "LIVE CAPTURE"}
                  </span>
              </div>
            </div>
          </Button>

          <Button 
              variant="outline"
              className="group h-24 rounded-[2rem] border-4 border-border/10 bg-muted/5 hover:border-primary/50 transition-all duration-700 flex items-center justify-center gap-6"
              onClick={() => inputRef.current?.click()}
          >
            <Upload size={32} className="opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500" />
            <div className="flex flex-col items-start border-l border-border/10 pl-6 text-left">
                  <span className="font-black text-xl uppercase italic leading-none">
                    {t("modals.uploadFromDevice") || t("uploadFromDevice") || "UPLOAD FROM DEVICE"}
                  </span>
                  <span className="text-[9px] font-black opacity-30 mt-1 uppercase tracking-widest">
                    {t("modals.archivalUpload") || "STATIC ARCHIVE"}
                  </span>
            </div>
          </Button>
          
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="h-14 font-black uppercase tracking-widest text-[10px] opacity-20 hover:opacity-100 mt-4 rounded-xl">
            {t("modals.cancel") || t("cancel") || "CANCEL"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
