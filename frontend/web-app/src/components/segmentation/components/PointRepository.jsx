import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function PointRepository({
  selectedPoints,
  deselectedPoints,
  removePoint,
}) {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 ml-2 group">
        <Sparkles size={18} className="text-primary group-hover:rotate-12 transition-transform" />
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{t("pointList")}</h4>
      </div>

      <div className="max-h-64 overflow-y-auto no-scrollbar space-y-4 pr-2">
        {/* Selected Points */}
        {selectedPoints.length > 0 && (
          <div className="space-y-2">
            <span className="text-[8px] font-black uppercase tracking-widest opacity-20 ml-2">{t("selectedPointsLabel")}</span>
            <div className="grid grid-cols-1 gap-2">
              {selectedPoints.map((p, i) => (
                <div key={`sel-${i}`} className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-3 group/item hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-[#fc218f] text-white font-black rounded-lg h-6 w-6 flex items-center justify-center p-0">{i + 1}</Badge>
                    <span className="text-[10px] font-bold opacity-40 italic">X:{Math.round(p[0])} Y:{Math.round(p[1])}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removePoint(i, "selected")}
                    className="h-8 w-8 rounded-xl hover:bg-rose-500/20 text-rose-500 opacity-0 group-hover/item:opacity-100 transition-all"
                  >
                    <XCircle size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deselected Points */}
        {deselectedPoints.length > 0 && (
          <div className="space-y-2">
            <span className="text-[8px] font-black uppercase tracking-widest opacity-20 ml-2">{t("deselectedPointsLabel")}</span>
            <div className="grid grid-cols-1 gap-2">
              {deselectedPoints.map((p, i) => (
                <div key={`desel-${i}`} className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-3 group/item hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-[#00d2ff] text-white font-black rounded-lg h-6 w-6 flex items-center justify-center p-0">{i + 1}</Badge>
                    <span className="text-[10px] font-bold opacity-40 italic">X:{Math.round(p[0])} Y:{Math.round(p[1])}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removePoint(i, "deselected")}
                    className="h-8 w-8 rounded-xl hover:bg-sky-500/20 text-sky-500 opacity-0 group-hover/item:opacity-100 transition-all"
                  >
                    <XCircle size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedPoints.length === 0 && deselectedPoints.length === 0 && (
          <div className="h-20 flex items-center justify-center border-2 border-dashed border-white/5 rounded-[2rem] opacity-20 italic text-[10px] font-bold">
            {t("noPoints")}
          </div>
        )}
      </div>
    </div>
  );
}
