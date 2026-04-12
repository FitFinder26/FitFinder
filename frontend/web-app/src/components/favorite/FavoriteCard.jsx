import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

function CardImageWithLoader({ src, alt, t }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted group-hover:aspect-[3/4.2] transition-all duration-1000">
      {status === "loading" && <Skeleton className="absolute inset-0 z-10" />}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
          {t("noImage")}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-110"
        )}
      />
    </div>
  );
}

const FavoriteCard = ({ product, navigate, requestRemoveFromFavorite, similarProducts, t }) => {
  return (
    <Card
      className="group border-none bg-muted/5 hover:bg-background transition-all duration-700 rounded-[4rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_60px_100px_rgba(0,0,0,0.2)] hover:-translate-y-6 border border-transparent hover:border-border/50"
      onClick={() =>
        navigate(`/product/${product.item_id}`, {
          state: {
            product: product,
            similarProducts: similarProducts,
          },
        })
      }
    >
      <div className="relative overflow-hidden p-3 origin-center">
        <CardImageWithLoader src={product.imageURL} alt={product.title} t={t} />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-8 right-8 bg-white/90 backdrop-blur-2xl hover:bg-rose-500 hover:text-white transition-all duration-500 w-16 h-16 rounded-3xl shadow-2xl text-rose-500 z-20 group-hover:scale-110"
          onClick={(e) => requestRemoveFromFavorite(product.item_id, e)}
        >
          <Trash2 size={30} />
        </Button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </div>
      <CardContent className="p-12 pt-6 space-y-6 text-card-foreground">
        <h4 className="font-black text-2xl line-clamp-2 leading-[1.1] group-hover:text-primary transition-all duration-500 h-[2.5em] tracking-tighter uppercase italic">
          {product.title}
        </h4>
        <div className="flex justify-between items-end pt-6 border-t border-border/10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">{t("price")}</span>
            <span className="text-4xl font-black text-primary -tracking-widest capitalize">
              ${product.price}
            </span>
          </div>
          <Badge
            variant="secondary"
            className="font-black uppercase tracking-[0.2em] px-6 py-3 rounded-2xl text-[10px] bg-muted/50 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm"
          >
            {product.seller}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
