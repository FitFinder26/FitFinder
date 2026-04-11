import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import noDataFound from "../assets/noDataFound.svg";
import { AiFillHeart } from "react-icons/ai";
import { useDevice } from "../providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Filter, SlidersHorizontal, PackageSearch, Sparkles, LayoutGrid, ListFilter, Trash2, ArrowRight, Info } from "lucide-react";
import Logo from "../components/Logo";
import { cn } from "@/lib/utils";

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

export default function SearchResultPage() {
  const { device } = useDevice();
  const { t } = useTranslation(NAMESPACES.search);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [sortOrder, setSortOrder] = useState("similarity");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(device !== "mobile");

  const location = useLocation();
  const navigate = useNavigate();
  const searchingPeice = location.state?.searchingPeice || null;

  const [filters, setFilters] = useState({
    category: new Set(),
    store: new Set(),
  });

  useEffect(() => {
    setShowFilters(device !== "mobile");
  }, [device]);

  useEffect(() => {
    const productsFromState = location.state?.products || [];
    setLoading(true);
    setTimeout(() => {
      const productsCopy = JSON.parse(JSON.stringify(productsFromState));
      settingSellers(productsCopy);
      extractCategoryFromData(productsCopy);
      extractStoresFromData(productsCopy);
      setProducts(productsCopy);
      setLoading(false);
    }, 1200);
  }, [location.state?.products]);

  const extractCategoryFromData = (prods) => {
    const extracted = [...new Set(prods.map(p => p.category).filter(Boolean))];
    setCategories(extracted);
  };

  const extractStoresFromData = (prods) => {
    const extracted = [...new Set(prods.map(p => p.seller).filter(Boolean))];
    setStores(extracted);
  };

  const getWebsiteName = (url) => {
    try {
      const { hostname } = new URL(url);
      return hostname.replace(/^www\./, "").split(".")[0].replace(/-/g, " ");
    } catch {
      return "store";
    }
  };

  const settingSellers = (prods) => {
    prods.forEach((p) => {
      p.seller = getWebsiteName(p.itemWebURL);
    });
  };

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      next[group].has(value) ? next[group].delete(value) : next[group].add(value);
      return next;
    });
  };

  const visible = products
    .filter((p) => {
      if (filters.store.size && !filters.store.has(p.seller)) return false;
      if (filters.category.size && !filters.category.has(p.category)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "lowest_price") return a.price - b.price;
      if (sortOrder === "highest_price") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 selection:bg-primary selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20 animate-in slide-in-from-bottom-10 duration-1000">
           <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="px-6 py-1.5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] border-primary/20 text-primary italic">RESULTS ARCHIVE</Badge>
                <div className="flex items-center gap-2 opacity-30">
                    <Sparkles size={14} className="fill-current" />
                    <span className="text-[9px] font-black uppercase tracking-widest">{visible.length} MATCHES FOUND</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] text-foreground">
                {loading ? tCommon("loading") : "ARCHIVE LOOKUP"}
              </h1>
              <p className="text-xl font-bold opacity-30 italic max-w-xl">{t("similaritySearchActive") || "Neural similarity engine active. Fetching best visual matches from cross-platform archives."}</p>
           </div>
           
           <div className="flex items-center gap-6 w-full lg:w-auto">
             <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full lg:w-[280px] h-16 rounded-3xl bg-muted/20 border-4 border-border/10 font-black uppercase tracking-widest text-[10px] shadow-sm px-8">
                    <div className="flex items-center gap-4">
                        <ListFilter size={18} strokeWidth={3} />
                        <SelectValue placeholder={t("sortSimilarity")} />
                    </div>
                </SelectTrigger>
                <SelectContent className="rounded-[2.5rem] border-border/10 p-4 shadow-3xl bg-background/95 backdrop-blur-3xl">
                    <SelectItem value="similarity" className="font-black py-4 uppercase text-[10px] tracking-widest rounded-2xl mb-2">{t("sortSimilarity")}</SelectItem>
                    <SelectItem value="lowest_price" className="font-black py-4 uppercase text-[10px] tracking-widest rounded-2xl mb-2">{t("sortLowest")}</SelectItem>
                    <SelectItem value="highest_price" className="font-black py-4 uppercase text-[10px] tracking-widest rounded-2xl">{t("sortHighest")}</SelectItem>
                </SelectContent>
             </Select>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-16 animate-in slide-in-from-left-20 duration-1000">
            {/* Search Preview: Brutalist Card */}
            <div className="relative group">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-1000 rounded-[4rem] blur-[80px]" />
                <div className="relative bg-muted/5 rounded-[4rem] p-10 md:p-12 border-4 border-border/5 space-y-10 group-hover:bg-muted/10 transition-all duration-700 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-border/10 pb-8">
                        <div className="space-y-1">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 italic leading-none">{t("segmentedImage") || "VISUAL SOURCE"}</h3>
                            <p className="font-bold text-xs tracking-tight">Active Context</p>
                        </div>
                        <PackageSearch size={28} className="opacity-10" />
                    </div>
                    
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-background border-4 border-white/5 shadow-2xl flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-1000">
                        {searchingPeice ? (
                        <img src={searchingPeice} alt={t("previewAlt")} className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:rotate-6 transition-all duration-1000" />
                        ) : (
                        <div className="flex flex-col items-center gap-4 text-muted-foreground opacity-20">
                            <PackageSearch size={48} />
                            <span className="font-black italic uppercase tracking-widest text-[9px]">{t("segmentedImage")}</span>
                        </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
                    </div>
                    
                    <Button variant="ghost" className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[9px] opacity-20 hover:opacity-100 hover:bg-white/10 italic" onClick={() => navigate("/")}>
                        RE-UPLOAD ARCHIVE
                    </Button>
                </div>
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:block space-y-16 px-4">
                <div className="space-y-12">
                     {/* Category Filter */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">{t("category")}</h4>
                            <div className="h-px bg-border/10 flex-1" />
                        </div>
                        <div className="space-y-6">
                            {categories.map((c) => (
                            <div key={c} className="flex items-center justify-between group cursor-pointer" onClick={() => toggleFilter("category", c)}>
                                <div className="flex items-center space-x-5">
                                    <Checkbox checked={filters.category.has(c)} className={cn(
                                        "w-6 h-6 rounded-xl border-2 transition-all",
                                        filters.category.has(c) ? "bg-primary border-primary" : "border-border/30"
                                    )} title={c} />
                                    <span className={cn(
                                        "text-xl font-black uppercase italic tracking-tighter transition-all duration-500",
                                        filters.category.has(c) ? "text-primary scale-110" : "opacity-40 hover:opacity-100"
                                    )}>{c}</span>
                                </div>
                                <span className={cn(
                                    "text-[9px] font-black uppercase tracking-widest transition-all",
                                    filters.category.has(c) ? "opacity-40" : "opacity-5"
                                )}>SELECTED</span>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Store Filter */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">{t("store")}</h4>
                            <div className="h-px bg-border/10 flex-1" />
                        </div>
                        <div className="space-y-6">
                            {stores.map((s) => (
                            <div key={s} className="flex items-center justify-between group cursor-pointer" onClick={() => toggleFilter("store", s)}>
                                <div className="flex items-center space-x-5">
                                    <Checkbox checked={filters.store.has(s)} className={cn(
                                        "w-6 h-6 rounded-xl border-2 transition-all",
                                        filters.store.has(s) ? "bg-secondary border-secondary" : "border-border/30"
                                    )} title={s} />
                                    <span className={cn(
                                        "text-xl font-black uppercase italic tracking-tighter transition-all duration-500",
                                        filters.store.has(s) ? "text-secondary scale-110" : "opacity-40 hover:opacity-100"
                                    )}>{s}</span>
                                </div>
                                <span className={cn(
                                    "text-[9px] font-black uppercase tracking-widest transition-all",
                                    filters.store.has(s) ? "opacity-40" : "opacity-5"
                                )}>SELECTED</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reset Filters */}
                {(filters.category.size > 0 || filters.store.size > 0) && (
                    <Button 
                        variant="ghost" 
                        onClick={() => setFilters({ category: new Set(), store: new Set() })}
                        className="w-full h-20 rounded-3xl border-4 border-dashed border-border/10 flex items-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-black uppercase tracking-widest italic group"
                    >
                        <Trash2 size={24} className="opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500" />
                        {t("clearFilters") || "PURGE ALL FILTERS"}
                    </Button>
                )}
            </div>

            {/* Mobile Filter Grid */}
            <div className="lg:hidden animate-in slide-in-from-bottom-5 duration-700">
                <Button 
                    variant="outline" 
                    className="w-full h-20 rounded-3xl gap-6 font-black text-2xl uppercase tracking-tighter border-4 border-border/10 shadow-3xl bg-background group"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <SlidersHorizontal size={28} className={cn("transition-transform group-active:rotate-90 duration-500", showFilters && "text-primary")} />
                    {showFilters ? t("hide") : t("show")} {t("filters")}
                </Button>
                
                {showFilters && (
                    <div className="mt-8 p-12 bg-muted/10 rounded-[4rem] space-y-16 border-4 border-border/5 animate-in slide-in-from-top-12 duration-1000 cubic-bezier(0.7, 0, 0.3, 1) shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                         <div className="space-y-10">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">{t("category")}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {categories.map((c) => (
                                <div key={c} className={cn(
                                    "flex items-center space-x-5 p-6 rounded-[2rem] border-4 transition-all duration-500",
                                    filters.category.has(c) ? "bg-primary border-primary/20 text-white" : "bg-background/40 border-border/5"
                                )} onClick={() => toggleFilter("category", c)}>
                                    <Checkbox checked={filters.category.has(c)} />
                                    <span className="font-black text-xl uppercase italic tracking-tighter">{c}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">{t("store")}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stores.map((s) => (
                                <div key={s} className={cn(
                                    "flex items-center space-x-5 p-6 rounded-[2rem] border-4 transition-all duration-500",
                                    filters.store.has(s) ? "bg-secondary border-secondary/20 text-white" : "bg-background/40 border-border/5"
                                )} onClick={() => toggleFilter("store", s)}>
                                    <Checkbox checked={filters.store.has(s)} />
                                    <span className="font-black text-xl uppercase italic tracking-tighter">{s}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                        {(filters.category.size > 0 || filters.store.size > 0) && (
                            <Button 
                                variant="destructive" 
                                onClick={() => setFilters({ category: new Set(), store: new Set() })}
                                className="w-full h-20 rounded-3xl font-black uppercase tracking-widest transition-all shadow-xl"
                            >
                                {t("clearFilters") || "PURGE ALL FILTERS"}
                            </Button>
                        )}
                    </div>
                )}
            </div>
          </aside>

          {/* Main Results Grid */}
          <main className="lg:col-span-9 space-y-16 animate-in slide-in-from-right-20 duration-1000">
            
            {visible.length === 0 && !loading ? (
              <div className="flex flex-col items-center justify-center py-48 text-center space-y-12 animate-in fade-in zoom-in duration-1000">
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted/10 border-8 border-border/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000">
                        <PackageSearch size={100} className="text-foreground opacity-10" strokeWidth={1} />
                        <span className="absolute text-5xl font-black opacity-30 italic leading-none animate-bounce">?</span>
                    </div>
                </div>
                <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none opacity-40">{t("noResultsFound") || "ARCHIVE EMPTY"}</h3>
                    <p className="text-2xl font-bold opacity-20 italic max-w-sm mx-auto leading-tight tracking-tight">No style coordinates found for this visual prompt. Try adjusting your parameters.</p>
                </div>
                <Button 
                    variant="outline" 
                    className="h-20 px-16 rounded-[2rem] font-black border-4 border-foreground/10 uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all shadow-2xl" 
                    onClick={() => setFilters({ category: new Set(), store: new Set() })}
                >
                    {t("clearFilters") || "RE-INITIALIZE FILTERS"}
                </Button>
              </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 pt-4">
                {loading
                    ? Array.from({ length: 9 }).map((_, idx) => (
                        <Card key={idx} className="border-none bg-muted/5 rounded-[4rem] overflow-hidden shadow-none animate-in fade-in duration-500" style={{animationDelay: `${idx * 0.1}s`}}>
                            <Skeleton className="w-full aspect-[4/5]" />
                            <CardContent className="p-10 space-y-6">
                                <Skeleton className="h-10 w-full rounded-2xl" />
                                <div className="flex justify-between items-center pt-4">
                                    <div className="space-y-2 w-1/3">
                                        <Skeleton className="h-4 w-1/2 rounded-full" />
                                        <Skeleton className="h-10 w-full rounded-xl" />
                                    </div>
                                    <Skeleton className="h-8 w-1/4 rounded-2xl" />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                    : visible.map((p, idx) => (
                        <Card
                        key={p.item_id}
                        className="group border-none bg-muted/2 hover:bg-background transition-all duration-1000 rounded-[4.5rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_80px_120px_rgba(0,0,0,0.2)] hover:-translate-y-6 border border-transparent hover:border-border/10 animate-in slide-in-from-bottom-10 duration-1000"
                        style={{animationDelay: `${idx * 0.05}s`}}
                        onClick={() =>
                            navigate(`/product/${p.item_id}`, {
                            state: {
                                product: p,
                                similarProducts: visible.filter((x) => x.category === p.category),
                            },
                            })
                        }
                        >
                        <div className="relative overflow-hidden">
                            <CardImageWithLoader src={p.imageURL} alt={p.title} t={t} />
                            
                            {/* Visual Layer Indicators */}
                            <div className="absolute top-10 left-10 flex flex-col gap-3">
                                <Badge className="bg-black/40 text-white backdrop-blur-md px-4 py-2 rounded-2xl font-black text-[9px] uppercase tracking-widest italic border-none shadow-2xl">MATCH {90 + (idx % 10)}%</Badge>
                                {p.favorite && (
                                    <div className="bg-rose-500 text-white p-2.5 rounded-2xl shadow-2xl animate-in zoom-in duration-700 w-fit">
                                        <AiFillHeart size={20} />
                                    </div>
                                )}
                            </div>

                            {/* Hover Action Overlay */}
                            <div className="absolute inset-x-10 bottom-10 translate-y-24 group-hover:translate-y-0 transition-all duration-1000 z-20">
                                <Button className="w-full h-16 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-3xl shadow-3xl hover:bg-primary hover:text-white transition-all space-x-3">
                                    <span>OPEN ARCHIVE</span>
                                    <ArrowRight size={16} strokeWidth={3} />
                                </Button>
                            </div>
                        </div>

                        <CardContent className="p-12 space-y-6 bg-muted/1">
                            <h4 className="font-black text-2xl line-clamp-2 leading-[0.9] group-hover:text-primary transition-all duration-700 h-[2.5em] tracking-tighter uppercase italic">
                                {p.title}
                            </h4>
                            <div className="flex justify-between items-end pt-8 border-t-2 border-border/5">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-20 mb-2 italic">VALUATION</span>
                                    <span className="text-4xl font-black text-primary -tracking-widest flex items-start gap-1 leading-none">
                                        <span className="text-base mt-2">$</span>
                                        {p.price}
                                    </span>
                                </div>
                                <Badge variant="secondary" className="font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl text-[11px] bg-muted/50 border-2 border-border/5 group-hover:bg-foreground group-hover:text-background transition-all duration-700 italic">
                                    {p.seller}
                                </Badge>
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                </div>
            )}
            
            {/* Archive Meta Footer */}
            <div className="pt-24 flex flex-col items-center gap-10">
                <div className="flex items-center gap-6 w-full opacity-10">
                    <div className="h-px bg-foreground flex-1" />
                    <Info size={24} />
                    <div className="h-px bg-foreground flex-1" />
                </div>
                <div className="space-y-4 text-center">
                    <Logo fontSize={40} />
                    <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-20 italic">ARCHIVE LOOKUP PROTOCOL v5.0.1</p>
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
