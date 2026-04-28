import { PackageSearch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SearchSourcePreview({ searchingPeice, prompt, visibleCount }) {
    const { t } = useTranslation(NAMESPACES.search);
    const navigate = useNavigate();

    return (
        <div className="relative group">
            <div className="flex items-center gap-2 opacity-30">
                <Sparkles size={14} className="fill-current" />
                <span className="text-[9px] font-black uppercase tracking-widest">
                    {t("matchesFound", { count: visibleCount }) || `${visibleCount} MATCHES FOUND`}
                </span>
            </div>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-1000 rounded-[4rem] blur-[80px]" />
            <div className="relative bg-muted/5 rounded-[2.5rem] sm:rounded-[4rem] p-6 sm:p-10 md:p-12 border-4 border-border/5 space-y-6 sm:space-y-10 group-hover:bg-muted/10 transition-all duration-700 overflow-hidden">
                <div className="flex items-center justify-between border-b border-border/10 pb-8">
                    <div className="space-y-1">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 italic leading-none">{t("segmentedImage") || "VISUAL SOURCE"}</h3>
                        <p className="font-bold text-xs tracking-tight">{t("activeContext") || "Active Context"}</p>
                    </div>
                    <PackageSearch size={28} className="opacity-10" />
                </div>

                <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-background border-4 border-white/5 shadow-2xl flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-1000">
                    {searchingPeice ? (
                        <img
                            src={searchingPeice}
                            alt={t("previewAlt")}
                            className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:rotate-6 transition-all duration-1000"
                        />
                    ) : (
                        <div className="flex flex-col items-center gap-4 text-muted-foreground opacity-20">
                            <PackageSearch size={48} />
                            <span className="font-black italic uppercase tracking-widest text-[9px]">{t("segmentedImage")}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
                </div>

                {prompt && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
                        <div className="flex items-center gap-2 opacity-30">
                            <Sparkles size={12} className="text-primary" />
                            <span className="text-[9px] font-black uppercase tracking-widest">{t("customRequest") || "CUSTOM REQUEST"}</span>
                        </div>
                        <p className="text-sm font-medium leading-relaxed opacity-60 bg-muted/20 p-6 rounded-[2rem] border border-border/5">
                            "{prompt}"
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
