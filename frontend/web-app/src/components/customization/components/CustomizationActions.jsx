import { HashLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";
import { ChevronLeft, ChevronRight, Sparkles, Wand2 } from "lucide-react";

export default function CustomizationActions({
  prompt,
  setPrompt,
  isSearching,
  handleSearch,
  setIsBeingCustomized,
}) {
  const { t, i18n } = useTranslation(NAMESPACES.editor);

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <div className="flex items-center gap-3 ml-2 group">
          <Wand2 size={24} className="text-primary group-hover:rotate-45 transition-transform duration-500" />
          <h4 className="text-xs font-black uppercase tracking-[0.4em] opacity-40">{t("itemContext")}</h4>
        </div>
        <Textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder={t("promptPlaceholder") || "Describe the style, material, or specific details..."}
          disabled={isSearching}
          className="min-h-[220px] rounded-[3rem] bg-muted/10 border-2 border-border/10 focus:border-primary/50 font-bold text-lg p-10 shadow-inner resize-none transition-all focus:shadow-2xl focus:shadow-primary/5"
        />
      </div>

      <div className="flex flex-col gap-6">
        <Button
          onClick={handleSearch}
          disabled={isSearching}
          className="h-28 rounded-[2.5rem] bg-primary text-white font-black text-2xl uppercase tracking-[0.2em] shadow-[0_25px_60px_rgba(250,88,126,0.35)] hover:bg-rose-600 hover:scale-[1.02] active:scale-95 transition-all group w-full"
        >
          {isSearching ? <HashLoader size={30} color="#fff" /> : (
            <div className="flex items-center gap-6">
              <Sparkles size={32} className="animate-pulse" />
              {t("search")}
            </div>
          )}
        </Button>
        <Button
          variant="ghost"
          onClick={() => setIsBeingCustomized(false)}
          className="h-16 rounded-[2rem] font-black text-sm uppercase tracking-widest gap-4 hover:bg-muted/30 group opacity-40 hover:opacity-100"
        >
          {i18n.dir() === "rtl" ? (
            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
          ) : (
            <ChevronLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          )}
          {t("back")}
        </Button>
      </div>
    </div>
  );
}
