import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SegmentationGuide() {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="bg-primary/5 border border-primary/10 p-8 rounded-[2.5rem] flex flex-col gap-6 group hover:bg-primary/10 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <Info size={22} />
        </div>
        <h5 className="font-black text-[10px] uppercase tracking-widest opacity-50 italic">{t("segmentationGuide")}</h5>
      </div>
      <p className="font-bold text-sm tracking-tight italic opacity-90 leading-relaxed">
        {t("segmentationCanvasDesc") || "Click parts of your image to define specific clothing items. Right-click to remove points."}
      </p>
    </div>
  );
}
