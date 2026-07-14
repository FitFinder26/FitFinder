import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";

export default function ImageSourceModal({ 
    open, 
    onOpenChange, 
    t, 
    tCommon, 
    inputRef, 
    cameraInputRef 
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-[4rem] p-0 border-none shadow-[0_60px_120px_rgba(0,0,0,0.5)] bg-background/80 backdrop-blur-3xl overflow-hidden">
        <div className="p-12 md:p-16 space-y-12">
          <DialogHeader className="space-y-4">
            <div className="w-16 h-1 bg-foreground/10 mx-auto rounded-full" />
            <DialogTitle className="text-center text-4xl font-black uppercase italic tracking-tighter pt-4 animate-in slide-in-from-bottom-2">
              {t("modals.chooseSource")}
            </DialogTitle>
            <p className="text-center font-bold opacity-30 italic text-sm">{t("modals.selectMethod")}</p>
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
                <span className="block text-2xl font-black uppercase tracking-tighter italic">{t("modals.takePhoto")}</span>
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{t("modals.instantCapture")}</span>
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
                <span className="block text-2xl font-black uppercase tracking-tighter italic">{t("modals.uploadFromDevice")}</span>
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{t("modals.archivalUpload")}</span>
              </div>
            </Button>
          </div>

          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="w-full h-16 rounded-3xl font-black uppercase tracking-widest text-[10px] opacity-30 hover:opacity-100 hover:bg-transparent italic decoration-2 underline-offset-8 underline"
          >
            {t("modals.cancel")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
