import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, ExternalLink, ShoppingBag, Info, Sparkles, ChevronRight, Share2, ArrowRight } from "lucide-react";
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      }).catch(err => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      Notifier.notifySuccess(t("linkCopied") || "Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground animate-in slide-in-from-bottom-10 duration-1000 pb-40 selection:bg-primary selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Navigation Layer */}
        <div className="flex items-center justify-between mb-16 animate-in fade-in duration-700">
          <Button
            variant="ghost"
            className="h-14 rounded-2xl gap-4 hover:translate-x-[-8px] transition-all font-black uppercase tracking-widest text-[10px] bg-muted/20 px-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} strokeWidth={3} />
            {t("back")}
          </Button>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="w-14 h-14 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-all font-bold" onClick={handleShare}>
              <Share2 size={22} />
            </Button>
            <Button variant="ghost" size="icon" className={cn("w-14 h-14 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-all text-rose-500", liked && "bg-rose-500 text-white")} onClick={toggleFavorite}>
              {liked ? <AiFillHeart size={26} /> : <Heart size={26} strokeWidth={2.5} />}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Massive Product Reveal */}
          <div className="lg:col-span-7 flex flex-col gap-8 animate-in slide-in-from-left-20 duration-1000">
            <div className="relative group">
              {/* Abstract Shadows / Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[120px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000" />

              <div className="relative overflow-hidden rounded-[4rem] bg-background/50 backdrop-blur-3xl p-10 md:p-20 shadow-[0_80px_150px_rgba(0,0,0,0.15)] border-4 border-border/5 group-hover:scale-[1.01] transition-transform duration-1000 cursor-zoom-in">
                <img
                  src={product.imageURL}
                  alt={product.title}
                  className="w-full h-auto max-h-[700px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                />

                {/* Floating Status */}
                <Badge className="absolute top-12 left-12 px-6 py-2 rounded-full font-black uppercase tracking-widest text-[9px] italic bg-white/10 backdrop-blur-md text-foreground border-foreground/5 shadow-2xl">
                  ARCHIVAL ITEM #{id.slice(-6).toUpperCase()}
                </Badge>
              </div>
            </div>

            {/* Micro Gallery (if applicable) or Visual Detail Card */}
            <div className="grid grid-cols-4 gap-4 opacity-50 hover:opacity-100 transition-opacity duration-500">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-3xl bg-muted/20 border border-border/10 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                  <img src={product.imageURL} alt="Detail" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Details Grid */}
          <div className="lg:col-span-5 flex flex-col gap-12 animate-in slide-in-from-right-20 duration-1000">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Sparkles size={18} className="text-secondary animate-pulse" />
                  <span className="font-black italic text-[10px] uppercase tracking-[0.4em] opacity-30">CURATED LOOKBOOK</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.85] uppercase italic text-foreground max-w-sm">
                  {product.title}
                </h1>
              </div>

              <div className="flex items-end gap-8 pt-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-20">RETAIL VALUE</span>
                  <div className="text-6xl md:text-7xl font-black text-secondary -tracking-widest flex items-start gap-1">
                    <span className="text-3xl mt-2">$</span>
                    {product.price}
                  </div>
                </div>
                <Badge variant="outline" className="px-8 py-3 text-sm font-black rounded-2xl uppercase tracking-[0.2em] border-2 italic border-border/10 mb-2">
                  {product.seller}
                </Badge>
              </div>
            </div>

            {/* Brutalist Specs Card */}
            <div className="bg-muted/10 rounded-[4rem] p-12 md:p-16 border-4 border-border/5 space-y-12">
              <div className="flex items-center justify-between border-b border-border/10 pb-10">
                <div className="space-y-1 text-left">
                  <h3 className="font-black uppercase tracking-[0.2em] text-xs italic opacity-40">TECHNICAL ARCHIVE</h3>
                  <p className="font-bold text-sm tracking-tight">{t("productDetails") || "Specifications & Materials"}</p>
                </div>
                <Info size={32} className="opacity-10" />
              </div>

              <ul className="grid grid-cols-1 gap-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-primary/10">
                      <span className="font-black italic text-xs leading-none">{index + 1}</span>
                    </div>
                    <p className="text-2xl font-black leading-none uppercase tracking-tighter italic pt-3 group-hover:text-primary transition-colors cursor-default">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              {paragraphPart && (
                <div className="relative group/text">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 group-hover/text:bg-primary transition-colors" />
                  <p className="text-muted-foreground leading-snug text-2xl font-bold italic tracking-tight opacity-50 group-hover/text:opacity-90 transition-opacity pl-6">
                    "{paragraphPart}"
                  </p>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col gap-6 pt-8">
              <Button
                className="h-28 rounded-[3rem] bg-foreground text-background hover:bg-primary hover:text-white font-black text-3xl uppercase tracking-[0.1em] gap-8 shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-4 active:translate-y-0 group border-none"
                onClick={() => window.open(product.itemWebURL, "_blank", "noopener,noreferrer")}
              >
                <div className="relative">
                  <ShoppingBag size={40} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {t("goToStore")}
                <ChevronRight size={32} strokeWidth={4} className="group-hover:translate-x-4 transition-transform duration-700" />
              </Button>

              <div className="flex items-center justify-center gap-10 py-4 opacity-20 hover:opacity-40 transition-opacity">
                <div className="h-px flex-1 bg-foreground/20" />
                <span className="font-black text-[9px] uppercase tracking-[0.5em] italic">{t("safeCheckout") || "SECURE RE-DIRECT"}</span>
                <div className="h-px flex-1 bg-foreground/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products: Lookbook Grid */}
        <div className="mt-48 space-y-16 animate-in slide-in-from-bottom-20 duration-1000">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-muted pb-10">
            <div className="space-y-4">
              <Badge variant="outline" className="px-6 py-2 rounded-xl text-secondary border-secondary/20 font-black tracking-[0.3em] text-[10px] uppercase italic leading-none">ARCHIVE MATCHING</Badge>
              <h3 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none text-foreground">{t("similarProducts")}</h3>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer hover:text-primary transition-colors">
              <span className="font-black text-sm uppercase tracking-widest italic">{t("exploreAll") || "VIEW ALL ARCHIVE"}</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform duration-700" strokeWidth={3} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
            {similar.map((p, i) => (
              <Card
                key={p.item_id}
                className="group border-none bg-muted/5 hover:bg-background transition-all duration-700 rounded-[3.5rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_60px_100px_rgba(0,0,0,0.15)] hover:-translate-y-6 border border-transparent hover:border-border/10"
                onClick={() => navigate(`/product/${p.item_id}`, {
                  state: { product: p, similarProducts: similar },
                })}
              >
                <div className="relative aspect-[3.5/5] overflow-hidden">
                  {/* Abstract Hover Glow */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-1000" />

                  <img src={p.imageURL} alt={p.title} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-125 transition-all duration-1000" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 translate-y-20 group-hover:translate-y-0">
                    <div className="space-y-4 backdrop-blur-3xl bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                      <h4 className="font-black text-lg line-clamp-1 uppercase tracking-tighter italic leading-none">{p.title}</h4>
                      <Button variant="secondary" className="w-full font-black text-[10px] h-12 rounded-xl shadow-xl uppercase tracking-widest bg-white text-black hover:bg-primary hover:text-white transition-all">
                        {t("viewProduct") || "OPEN ARCHIVE"}
                      </Button>
                    </div>
                  </div>

                  <div className="absolute top-8 left-8">
                    <Badge className="bg-black/50 text-white backdrop-blur-md rounded-xl font-black text-[9px] uppercase tracking-widest px-4 py-2 italic border-none">MATCH {90 + i}%</Badge>
                  </div>
                </div>
                <CardContent className="p-10 space-y-6 bg-muted/2">
                  <h4 className="font-black text-2xl line-clamp-2 leading-none group-hover:text-primary transition-colors min-h-[4rem] uppercase italic tracking-tighter">
                    {p.title}
                  </h4>
                  <div className="flex justify-between items-end pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-20 leading-none mb-2 italic">VALUATION</span>
                      <span className="text-4xl font-black text-secondary -tracking-widest flex items-start gap-1 leading-none">
                        <span className="text-base mt-1">$</span>
                        {p.price}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest opacity-30 px-4 py-2 rounded-xl border-border/10 italic">
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
