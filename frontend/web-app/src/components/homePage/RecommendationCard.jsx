import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

export default function RecommendationCard({ 
  category, 
  items, 
  t, 
  onClick, 
  style 
}) {
  const { i18n } = useTranslation();

  return (
    <motion.button
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
      className="flex flex-col gap-8 w-[240px] md:w-[320px] group transition-all duration-1000 hover:-translate-y-8 text-start perspective-1000"
      style={style}
      onClick={onClick}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-[3.5rem] shadow-none group-hover:shadow-[0_80px_100px_rgba(0,0,0,0.2)] transition-all duration-1000 border-4 border-transparent group-hover:border-primary/20 bg-muted/5">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-1000" />

        <img
          src={items[0].imageURL}
          alt={category}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000 brightness-90 group-hover:brightness-100"
        />

        <div className="absolute top-8 inset-inline-end-8 scale-0 group-hover:scale-100 transition-transform duration-700 delay-100">
          <div className="w-16 h-16 bg-white dark:bg-zinc-950 rounded-2xl flex items-center justify-center text-primary shadow-2xl">
            <LayoutGrid size={28} />
          </div>
        </div>

        <div dir={i18n.dir()} className="absolute inset-x-8 bottom-8 h-18 bg-white/90 backdrop-blur-2xl rounded-2xl flex items-center justify-between px-6 translate-y-24 group-hover:translate-y-0 transition-transform duration-700 delay-200">
          <span className="font-black text-[10px] uppercase tracking-widest text-black italic">
            {t("recommendations.exploreCollection")}
          </span>
          {i18n.language === "ar" ? <ArrowLeft size={16} strokeWidth={3} className="text-black" /> : <ArrowRight size={16} strokeWidth={3} className="text-black" />}
        </div>
      </div>

      <div className="px-6 space-y-2 w-full overflow-hidden">
        <div dir={i18n.dir()} className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-20 group-hover:opacity-100 group-hover:animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all underline decoration-1 underline-offset-8">
            {t("recommendations.collectionLabel") || "COLLECTION"}
          </span>
        </div>
        <h4 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors leading-[0.8] py-2 truncate w-full" title={category}>
          {category}
        </h4>
        <p className="text-[9px] font-bold opacity-10 uppercase tracking-widest group-hover:opacity-40 transition-opacity italic">
          {t("recommendations.piecesAuthenticated", { count: items.length })}
        </p>
      </div>
    </motion.button>
  );
}
