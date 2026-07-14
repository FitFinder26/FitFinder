import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../animations/SplitText";

export default function RecommendationHeader({ t, collectionCount, loading }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-muted pb-12">
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4"
        >
          <Badge variant="outline" className="px-6 py-2 rounded-xl border-primary/20 text-primary font-black tracking-[0.3em] text-[10px] uppercase italic leading-none">
            {t("recommendations.neuralCuration")}
          </Badge>
          <div className="flex items-center gap-2 opacity-30">
            <Sparkles size={14} className="fill-current animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {t("recommendations.collections", { count: collectionCount })}
            </span>
          </div>
        </motion.div>
        
        <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none text-foreground">
          <SplitText>{t("recommendations.title")}</SplitText>
        </h2>
      </div>
    </div>
  );
}
