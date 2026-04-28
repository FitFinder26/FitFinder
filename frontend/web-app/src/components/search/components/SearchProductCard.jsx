import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AiFillHeart } from "react-icons/ai";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";
import { useDevice } from "@/providers/DeviceProvider";

function CardImageWithLoader({ src, alt, t }) {
    const [status, setStatus] = useState("loading");

    return (
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted group-hover:aspect-[4/5.2] transition-all duration-1000">
            {status === "loading" && <Skeleton className="absolute inset-0 z-10" />}
            {status === "error" && (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground uppercase font-black italic opacity-20">
                    {t("noImage") || "IMAGE ARCHIVE ERROR"}
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                className={cn(
                    "w-full h-full object-cover transition-all duration-1000 group-hover:scale-110",
                    status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-110"
                )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
    );
}

export default function SearchProductCard({ product, idx, onClick, onRateClick }) {
    const { t, i18n } = useTranslation(NAMESPACES.search);
    const { device } = useDevice();

    return (
        <Card
            className="group border-none bg-muted/2 hover:bg-background transition-all duration-1000 rounded-[2.5rem] sm:rounded-[4.5rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_80px_120px_rgba(0,0,0,0.2)] hover:-translate-y-6 border border-transparent hover:border-border/10 animate-in slide-in-from-bottom-10 duration-1000"
            style={{ animationDelay: `${idx * 0.05}s` }}
            onClick={onClick}
        >
            <div className="relative overflow-hidden">
                <CardImageWithLoader src={product.imageURL} alt={product.title} t={t} />

                {/* Top Action Indicators */}
                <div className="absolute top-6 sm:top-10 inset-x-6 sm:inset-x-10 flex justify-between items-start z-30">
                    <div className="flex flex-col gap-3">
                        {product.favorite && (
                            <div className="bg-rose-500 text-white p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-2xl animate-in zoom-in duration-700 w-fit">
                                <AiFillHeart size={device === "mobile" ? 16 : 20} />
                            </div>
                        )}
                    </div>

                    <Button 
                        size="icon"
                        variant="ghost"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-white transition-all shadow-2xl group/rate"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRateClick?.(product);
                        }}
                    >
                        <Star size={device === "mobile" ? 16 : 20} className="fill-current group-hover/rate:scale-110 transition-transform" />
                    </Button>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-x-6 sm:inset-x-10 bottom-6 sm:bottom-10 translate-y-32 group-hover:translate-y-0 transition-all duration-1000 z-20">
                    <Button className="w-full h-14 sm:h-16 bg-white text-black font-black uppercase text-[9px] sm:text-[10px] tracking-widest rounded-2xl sm:rounded-3xl shadow-3xl hover:bg-primary hover:text-white transition-all space-x-3">
                        <span>{t("showProduct") || "SHOW PRODUCT"}</span>
                        {i18n.language === "en" ? <ArrowRight size={16} strokeWidth={3} /> : <ArrowLeft size={16} strokeWidth={3} />}
                    </Button>
                </div>
            </div>

            <CardContent className="p-6 sm:p-12 space-y-4 sm:space-y-6 bg-muted/1">
                <h4 className="font-black text-xl sm:text-2xl line-clamp-2 leading-[0.9] group-hover:text-primary transition-all duration-700 h-[2.5em] tracking-tighter uppercase italic">
                    {product.title}
                </h4>
                <div className="flex justify-between items-end pt-4 sm:pt-8 border-t-2 border-border/5">
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-20 mb-2 italic">
                            {t("price") || "PRICE"}
                        </span>
                        <span className="text-4xl font-black text-primary -tracking-widest flex items-start gap-1 leading-none">
                            <span className="text-base mt-2">$</span>
                            {product.price}
                        </span>
                    </div>
                    <Badge variant="secondary" className="font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl text-[11px] bg-muted/50 border-2 border-border/5 group-hover:bg-foreground group-hover:text-background transition-all duration-700 italic">
                        {product.seller}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
}
