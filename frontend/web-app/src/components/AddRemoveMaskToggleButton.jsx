import React from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { cn } from "@/lib/utils";
import { Plus, Minus, Wand2 } from "lucide-react";

export default function AddRemoveMaskToggleButton({ disabled, mode, setMode }) {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 duration-500">
        <fieldset className="border-none p-0 m-0">
            <legend className="sr-only">{t('maskToggleLegend') || 'Selection Mode'}</legend>
            <div className={cn(
                "relative flex items-center p-2 bg-muted/10 border-2 border-border/5 rounded-[2.5rem] w-72 h-24 transition-all shadow-2xl backdrop-blur-xl overflow-hidden",
                disabled ? "opacity-30 cursor-not-allowed grayscale pointer-events-none" : "hover:border-primary/20"
            )}>
                {/* Active Indicator Slider */}
                <div className={cn(
                    "absolute h-[calc(100%-1rem)] w-[calc(50%-0.5rem)] rounded-[2rem] bg-primary shadow-[0_10px_30px_rgba(250,88,126,0.3)] transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) z-0",
                    mode === "add" ? "start-2" : "start-[calc(50%+0.25rem)]"
                )} />

                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setMode("add")}
                    className={cn(
                        "relative z-10 flex-1 flex flex-col items-center justify-center gap-2 h-full transition-all duration-500 group",
                        mode === "add" ? "text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <Plus size={24} className={cn("transition-all duration-500", mode === "add" ? "scale-110 drop-shadow-md" : "group-hover:scale-110")} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">{t("addMask")}</span>
                </button>

                <div className="w-px h-8 bg-border/10 z-10 mx-[-0.5px]" />

                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setMode("remove")}
                    className={cn(
                        "relative z-10 flex-1 flex flex-col items-center justify-center gap-2 h-full transition-all duration-500 group",
                        mode === "remove" ? "text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <Minus size={24} className={cn("transition-all duration-500", mode === "remove" ? "scale-110 drop-shadow-md" : "group-hover:scale-110")} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">{t("removeMask")}</span>
                </button>
            </div>
        </fieldset>
        
        {/* Interaction Hint */}
        {!disabled && (
            <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest opacity-40 italic animate-pulse">
                <Wand2 size={12} />
                {mode === 'add' ? t('modePrecise') : t('modeExclusion')}
            </div>
        )}
    </div>
  );
}
