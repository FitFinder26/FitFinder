import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, ExternalLink, ShoppingBag } from "lucide-react";
import { AiFillHeart } from "react-icons/ai";
import { favoriteService } from "../../../shared/services/favoriteService";
import { Notifier } from "../components/Notifier";
import { useAuthContext } from "../providers/AuthProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation(NAMESPACES.product);
  const { i18n } = useTranslation();
  
  const productFromState = location.state?.product;
  const product = useMemo(() => {
    const base = productFromState || {
      favorite: false,
      item_id: id,
      title: t("productFallbackTitle", { id }),
      price: "0.00",
      seller: t("unknownSeller"),
      imageURL: `https://picsum.photos/seed/product-${id}/600/720`,
      description: t("fallbackDescription"),
    };

    return {
      ...base,
      title: base.title || t("productFallbackTitle", { id }),
      seller: base.seller || t("unknownSeller"),
      description: base.description || t("fallbackDescription"),
    };
  }, [productFromState, id, t]);

  const similar = location.state?.similarProducts || [];
  const rawDescription = product.description;
  const [featuresPart, paragraphPart] = rawDescription.split(" Description ");
  const [liked, setLiked] = useState(product.favorite);
  const [animating, setAnimating] = useState(false);
  const { isAuthenticated } = useAuthContext();

  const features = featuresPart
    .split(/[•🔹]|\s{3}/)
    .map((item) => item.trim())
    .filter(Boolean);

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    if (!isAuthenticated()) {
      navigate("/registration", { state: { form: "signup" } });
      return;
    }

    try {
      const response = await favoriteService.toggleFavorite(product.item_id, !liked);
      if (!response.ok) throw new Error("Failed to toggle favorite");

      setLiked((prev) => !prev);
      setAnimating(true);
      setTimeout(() => setAnimating(false), 480);
    } catch (error) {
      console.error("Something went wrong in setting as favorite: ", error);
      Notifier.notifyError(t("favoriteError"));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground animate-in slide-in-from-bottom-5 duration-700 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Breadcrumb / Back Button */}
        <Button 
            variant="ghost" 
            className="mb-8 gap-2 hover:translate-x-[-4px] transition-transform font-bold"
            onClick={() => navigate(-1)}
        >
            <ArrowLeft size={18} />
            {t("back")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[600px] group">
              <div className="overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-2xl transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 border border-border/5">
                <img 
                    src={product.imageURL} 
                    alt={product.title} 
                    className="w-full h-auto max-h-[600px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <Button
                size="icon"
                className={cn(
                    "absolute top-8 right-8 w-16 h-16 rounded-full border-none shadow-2xl transition-all duration-300",
                    liked ? "bg-rose-500 text-white hover:bg-rose-600" : "bg-white text-rose-500 hover:bg-rose-50"
                )}
                onClick={toggleFavorite}
              >
                {liked ? <AiFillHeart size={34} className={cn(animating && "animate-in zoom-in-125 duration-300")} /> : <Heart size={32} />}
                {animating && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-rose-500/50 opacity-0" />
                )}
              </Button>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="space-y-4">
               <div className="flex justify-between items-start gap-4">
                  <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase">
                    {product.title}
                  </h1>
               </div>
               <div className="flex items-center gap-6">
                 <span className="text-5xl font-black text-primary -tracking-widest capitalize">${product.price}</span>
                 <Badge variant="secondary" className="px-6 py-2 text-sm font-black rounded-full uppercase tracking-wider">
                    {t("sellerLabel", { seller: product.seller })}
                 </Badge>
               </div>
            </div>

            <div className="bg-muted/30 rounded-[3rem] p-10 border border-border/50 shadow-inner">
               <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-40 flex items-center gap-3">
                 <ShoppingBag size={18} />
                 {t("productDetails") || "Technical Specifications"}
               </h3>
               
               <ul className="space-y-5 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex gap-5 items-start text-xl font-bold leading-snug">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary mt-3.5 shrink-0 shadow-[0_0_10px_rgba(250,88,126,0.5)]" />
                      {feature}
                    </li>
                  ))}
               </ul>

               {paragraphPart && (
                 <p className="text-muted-foreground leading-relaxed text-xl italic opacity-80 border-t border-border/10 pt-8 mt-5">
                    "{paragraphPart}"
                 </p>
               )}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Button 
                    className="flex-1 h-20 rounded-3xl bg-primary text-primary-foreground hover:opacity-95 font-black text-2xl gap-4 shadow-[0_15px_40px_rgba(250,88,126,0.3)] transition-all hover:-translate-y-1.5 active:translate-y-0"
                    onClick={() => window.open(product.itemWebURL, "_blank", "noopener,noreferrer")}
                >
                    <ExternalLink size={28} />
                    {t("goToStore")}
                </Button>
                <Button 
                    variant="outline"
                    className="h-20 px-10 rounded-3xl border-2 font-black text-2xl transition-all hover:bg-muted hover:-translate-y-1 active:translate-y-0"
                    onClick={() => navigate(-1)}
                >
                    {t("back")}
                </Button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-32 space-y-12">
          <div className="flex items-center gap-8">
             <h3 className="text-5xl font-black tracking-tighter uppercase">{t("similarProducts")}</h3>
             <div className="h-0.5 flex-1 bg-gradient-to-r from-border/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {similar.map((p) => (
              <Card 
                key={p.item_id} 
                className="group border-none bg-muted/20 hover:bg-background transition-all duration-500 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-none hover:shadow-2xl hover:-translate-y-3 border border-transparent hover:border-border/50"
                onClick={() => navigate(`/product/${p.item_id}`, {
                    state: { product: p, similarProducts: similar },
                })}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                   <img src={p.imageURL} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <Button variant="secondary" className="w-full font-black text-lg h-14 rounded-2xl shadow-xl">
                        {t("viewProduct") || "Quick View"}
                      </Button>
                   </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h4 className="font-black text-xl line-clamp-2 leading-tight group-hover:text-primary transition-colors min-h-[3.5rem] uppercase">
                    {p.title}
                  </h4>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-3xl font-black text-primary">${p.price}</span>
                    <Badge variant="outline" className="text-[12px] font-black uppercase tracking-widest opacity-50 px-3 py-1 rounded-lg">
                        {p.seller}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
