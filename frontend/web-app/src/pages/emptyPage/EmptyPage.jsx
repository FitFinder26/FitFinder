import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import { Button } from "@/components/ui/button";
import { Home, Trash2 } from "lucide-react";

const EmptyPage = () => {
  const { t } = useTranslation(NAMESPACES.common);
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-12 animate-in fade-in zoom-in duration-1000">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[100px] animate-pulse" />
        <div className="relative z-10 w-64 h-64 bg-muted/20 border-border/10 rounded-[4rem] flex items-center justify-center group overflow-hidden">
          <Trash2 size={120} className="text-primary/20 group-hover:scale-125 transition-transform duration-700" strokeWidth={1} />
          <span className="absolute text-[12rem] font-black opacity-5 italic tracking-tighter select-none">404</span>
        </div>
      </div>

      <div className="space-y-6 max-w-sm">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
          {t("error404") || "Lost in Space"}
        </h1>
        <p className="text-xl font-bold opacity-40 italic tracking-tight leading-relaxed">
          {t("pageNotFound") || "This coordinate doesn't exist in our fashion archive."}
        </p>
      </div>

      <div className="mt-12">
        <Button asChild className="h-20 px-12 rounded-[2rem] bg-primary text-white font-black text-xl uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
          <Link to="/" className="flex items-center gap-4">
            <Home size={24} />
            {t("goHome")}
          </Link>
        </Button>
      </div>

      <div className="mt-20 opacity-10 font-black uppercase tracking-[1em] text-[8px]">
        FitFinder Archival Failure
      </div>
    </div>
  );
};

export default EmptyPage;
