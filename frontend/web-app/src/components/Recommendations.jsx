import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Recommendation({
  categoricalProducts = null,
  loading = false,
}) {
  const { t } = useTranslation(NAMESPACES.home);
  const navigate = useNavigate();

  return (
      <div className="w-full flex flex-col gap-12 animate-in slide-in-from-right-20 duration-1000 p-12 md:p-24 bg-muted/2" aria-busy={loading}>
        
        {/* Header with status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-muted pb-12">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="px-6 py-2 rounded-xl border-primary/20 text-primary font-black tracking-[0.3em] text-[10px] uppercase italic leading-none">NEURAL CURATION</Badge>
                    <div className="flex items-center gap-2 opacity-30">
                        <Sparkles size={14} className="fill-current animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{Object.keys(categoricalProducts || {}).length} COLLECTIONS</span>
                    </div>
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none text-foreground">
                {t("recommendationsTitle") || "ARCHIVAL PICKS"}
                </h2>
            </div>
            
            {!loading && (
                <div className="flex items-center gap-4 group cursor-pointer hover:text-primary transition-colors pb-2">
                    <span className="font-black text-sm uppercase tracking-widest italic">{t("exploreAll") || "VIEW ALL CATEGORIES"}</span>
                    <ArrowRight className="group-hover:translate-x-3 transition-transform duration-700" strokeWidth={3} />
                </div>
            )}
        </div>
        
        {loading && (
          <span className="sr-only" role="status">
            {t("loadingRecommendations")}
          </span>
        )}

        <ScrollArea className="w-full whitespace-nowrap overflow-visible">
          <div className="flex w-max gap-12 md:gap-20 py-10 px-4">
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-8 w-[240px] md:w-[320px] animate-in fade-in duration-500" style={{animationDelay: `${i * 0.1}s`}}>
                    <Skeleton className="w-full aspect-square rounded-[3.5rem]" />
                    <div className="space-y-3 px-6">
                        <Skeleton className="h-4 w-1/3 rounded-full opacity-20" />
                        <Skeleton className="h-10 w-full rounded-2xl" />
                    </div>
                  </div>
                ))
              : Object.entries(categoricalProducts || {}).map(([category, items], idx) => (
                  <button
                    key={category}
                    className="flex flex-col gap-8 w-[240px] md:w-[320px] group transition-all duration-1000 hover:-translate-y-8 text-left animate-in slide-in-from-right-10 duration-1000"
                    style={{animationDelay: `${idx * 0.1}s`}}
                    onClick={() =>
                      navigate("/search-result", {
                        state: {
                          products: items,
                          searchingPeice: items[0].imageURL,
                        },
                      })
                    }
                  >
                    <div className="relative w-full aspect-square overflow-hidden rounded-[3.5rem] shadow-none group-hover:shadow-[0_80px_100px_rgba(0,0,0,0.2)] transition-all duration-1000 border-4 border-transparent group-hover:border-primary/20 bg-muted/5">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-1000" />
                      
                      <img 
                        src={items[0].imageURL} 
                        alt={category} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000 brightness-90 group-hover:brightness-100"
                      />
                      
                      <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-700 delay-100">
                        <div className="w-16 h-16 bg-white dark:bg-zinc-950 rounded-2xl flex items-center justify-center text-primary shadow-2xl">
                            <LayoutGrid size={28} />
                        </div>
                      </div>
                      
                      <div className="absolute inset-x-8 bottom-8 h-18 bg-white/90 backdrop-blur-2xl rounded-2xl flex items-center justify-between px-6 translate-y-24 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                          <span className="font-black text-[10px] uppercase tracking-widest text-black italic">EXPLORE ARCHIVE</span>
                          <ArrowRight size={16} strokeWidth={3} className="text-black" />
                      </div>
                    </div>

                    <div className="px-6 space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-20 group-hover:opacity-100 group-hover:animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all underline decoration-1 underline-offset-8">COLLECTION</span>
                        </div>
                        <h4 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors leading-[0.8] py-2">
                            {category}
                        </h4>
                        <p className="text-[9px] font-bold opacity-10 uppercase tracking-widest group-hover:opacity-40 transition-opacity italic">{items.length} PIECES AUTHENTICATED</p>
                    </div>
                  </button>
                ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-3" />
        </ScrollArea>
      </div>
  );
}
