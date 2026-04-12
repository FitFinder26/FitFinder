import { PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SearchEmptyState({ clearFilters }) {
    const { t } = useTranslation(NAMESPACES.search);

    return (
        <div className="flex flex-col items-center justify-center py-48 text-center space-y-12 animate-in fade-in zoom-in duration-1000">
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted/10 border-8 border-border/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000">
                    <PackageSearch size={100} className="text-foreground opacity-10" strokeWidth={1} />
                    <span className="absolute text-5xl font-black opacity-30 italic leading-none animate-bounce">?</span>
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none opacity-40">
                    {t("noResultsFound") || "ARCHIVE EMPTY"}
                </h3>
                <p className="text-2xl font-bold opacity-20 italic max-w-sm mx-auto leading-tight tracking-tight">
                    {t("noResultsDesc") || "No style coordinates found for this visual prompt. Try adjusting your parameters."}
                </p>
            </div>
            <Button 
                variant="outline" 
                className="h-20 px-16 rounded-[2rem] font-black border-4 border-foreground/10 uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all shadow-2xl" 
                onClick={clearFilters}
            >
                {t("reinitializeFilters") || "RE-INITIALIZE FILTERS"}
            </Button>
        </div>
    );
}
