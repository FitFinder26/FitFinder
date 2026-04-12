import { HashLoader } from "react-spinners";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function CustomizationPreview({ segmentedImageSrc }) {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="relative group w-full flex justify-center sticky top-0">
      <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[80px] opacity-20 animate-pulse pointer-events-none" />
      <Card className="relative z-10 w-full aspect-square max-w-md rounded-[3.5rem] bg-muted/20 border-border/10 overflow-hidden shadow-2xl flex items-center justify-center p-8 md:p-12 backdrop-blur-3xl group-hover:scale-[1.02] transition-transform duration-700">
        {segmentedImageSrc ? (
          <img 
            src={segmentedImageSrc} 
            alt={t("croppedAlt")} 
            className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-in zoom-in duration-1000" 
          />
        ) : (
          <HashLoader size={40} color="gray" />
        )}
        <Badge 
          variant="secondary" 
          className="absolute top-8 right-8 font-black uppercase tracking-widest text-[10px] italic bg-white/10 backdrop-blur-md text-white border-white/20"
        >
          {t("segmentFocused")}
        </Badge>
      </Card>
    </div>
  );
}
