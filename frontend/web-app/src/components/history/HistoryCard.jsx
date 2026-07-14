import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Search } from "lucide-react";
import { AiFillHeart } from "react-icons/ai";
import { cn } from "@/lib/utils";

function CardImageWithLoader({ src, alt, t }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="relative w-full aspect-square md:w-48 overflow-hidden bg-muted group-hover:scale-105 transition-transform duration-1000">
      {status === "loading" && <Skeleton className="absolute inset-0 z-10" />}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground bg-muted/50 p-4 text-center">
          {t("imageUnavailable")}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 shadow-2xl",
          status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-110"
        )}
      />
    </div>
  );
}

const HistoryCard = ({ product, navigate, t }) => {
  return (
    <Card
      className="group flex flex-col md:flex-row bg-muted/5 hover:bg-background transition-all duration-1000 rounded-[2rem] overflow-hidden border border-transparent hover:border-border/10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] cursor-pointer relative"
      onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
    >
      <CardImageWithLoader src={product.imageURL} alt={product.prompt} t={t} />

      <CardContent className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Badge
              variant="secondary"
              className="px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-sm group-hover:bg-primary group-hover:text-white transition-all"
            >
              {t("entry")} {product.id.padStart(3, "0")}
            </Badge>
            <div className="flex items-center gap-2 text-muted-foreground font-black text-[10px] tracking-widest opacity-30 group-hover:opacity-60 transition-opacity">
              <Calendar size={12} />
              <span>{product.date}</span>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-[0.9] group-hover:text-primary transition-all duration-700 italic">
            {product.prompt}
          </h3>
        </div>

        <div className="flex items-end justify-between pt-6 border-t-2 border-border/5">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="w-11 h-11 rounded-lg shadow-xl bg-background group-hover:bg-primary group-hover:text-white transition-all duration-500 hover:rotate-12 border border-border/10"
              >
                <Search size={20} />
              </Button>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-[3px] border-background" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-20 mb-1">
                {t("engagement")}
              </span>
              <div className="flex items-center gap-2 text-xl font-black -tracking-tighter">
                <AiFillHeart className="text-rose-500 group-hover:scale-125 transition-transform" />
                {product.numOfLikes}
              </div>
            </div>
          </div>
          <Button
            variant="link"
            className="font-black uppercase tracking-[0.3em] text-xs hover:tracking-[0.5em] transition-all group-hover:text-primary p-0"
          >
            {t("viewDetails")}
          </Button>
        </div>
      </CardContent>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Card>
  );
};

export default HistoryCard;
