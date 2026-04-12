import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function CustomizationGuide() {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="bg-muted/10 p-10 rounded-[3rem] border border-border/10 w-full animate-in fade-in slide-in-from-top-4 duration-1000 delay-300">
      <div className="flex items-center gap-4 mb-4">
        <Search size={22} className="text-secondary opacity-40" />
        <span className="text-[10px] font-black tracking-widest opacity-20 uppercase italic">{t("searchArchitecture")}</span>
      </div>
      <p className="font-bold text-sm tracking-tight opacity-50 italic leading-relaxed">
        {t("guideLine1") || "Specify fabric, pattern, and occasion for most accurate AI lookup."} <br />
        <span className="text-primary/60">{t("guideExamples") || "e.g., 'Vintage leather oversized jacket'"}</span>
      </p>
    </div>
  );
}
