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
import { Filter, SlidersHorizontal, PackageSearch } from "lucide-react";
import { cn } from "@/lib/utils";

function CardImageWithLoader({ src, alt, t }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted group-hover:aspect-[3/4.2] transition-all duration-700">
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
    setTimeout(() => {
      const productsCopy = JSON.parse(JSON.stringify(productsFromState));
      settingSellers(productsCopy);
      extractCategoryFromData(productsCopy);
      extractStoresFromData(productsCopy);
      setProducts(productsCopy);
      setLoading(false);
    }, 500);
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
    <div className="min-h-screen bg-background pt-[4.5rem] pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-10 animate-in slide-in-from-left-10 duration-700">
            {/* Search Preview */}
            <div className="bg-muted/10 rounded-[3rem] p-8 border border-border/50 shadow-inner group transition-all hover:bg-muted/20">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 opacity-30 flex items-center gap-3">
                 <PackageSearch size={14} />
                 {t("segmentedImage") || "Search Context"}
               </h3>
               <div className="aspect-square rounded-[2rem] overflow-hidden bg-background border border-border/5 shadow-2xl flex items-center justify-center p-4">
                 {searchingPeice ? (
                   <img src={searchingPeice} alt={t("previewAlt")} className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-1000" />
                 ) : (
                   <span className="text-muted-foreground italic opacity-50">{t("segmentedImage")}</span>
                 )}
               </div>
            </div>

            <div className="hidden lg:block space-y-10 px-4">
                <div className="flex items-center justify-between border-b border-border/10 pb-4">
                    <h3 className="text-3xl font-black tracking-tighter uppercase">{t("filters")}</h3>
                    <Filter size={24} className="opacity-20" />
                </div>
                
                {/* Categories */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{t("category")}</h4>
                  <div className="space-y-4">
                    {categories.map((c) => (
                      <div key={c} className="flex items-center space-x-4 group cursor-pointer" onClick={() => toggleFilter("category", c)}>
                        <Checkbox checked={filters.category.has(c)} className="w-5 h-5 rounded-md" />
                        <span className="text-lg font-bold group-hover:text-primary transition-colors uppercase tracking-tight">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stores */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{t("store")}</h4>
                  <div className="space-y-4">
                    {stores.map((s) => (
                      <div key={s} className="flex items-center space-x-4 group cursor-pointer" onClick={() => toggleFilter("store", s)}>
                        <Checkbox checked={filters.store.has(s)} className="w-5 h-5 rounded-md" />
                        <span className="text-lg font-bold group-hover:text-primary transition-colors capitalize uppercase tracking-tight">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
                <Button 
                    variant="outline" 
                    className="w-full h-16 rounded-2xl gap-3 font-black text-lg shadow-lg border-2"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <SlidersHorizontal size={20} />
                    {showFilters ? t("hide") : t("show")} {t("filters")}
                </Button>
                
                {showFilters && (
                    <div className="mt-6 p-8 bg-muted/20 rounded-[2.5rem] space-y-10 border border-border/50 animate-in slide-in-from-top-6 duration-500 shadow-2xl">
                         <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-30">{t("category")}</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {categories.map((c) => (
                                <div key={c} className="flex items-center space-x-3 bg-background/50 p-4 rounded-xl border border-border/5" onClick={() => toggleFilter("category", c)}>
                                    <Checkbox checked={filters.category.has(c)} />
                                    <span className="font-black text-sm uppercase">{c}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-30">{t("store")}</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {stores.map((s) => (
                                <div key={s} className="flex items-center space-x-3 bg-background/50 p-4 rounded-xl border border-border/5" onClick={() => toggleFilter("store", s)}>
                                    <Checkbox checked={filters.store.has(s)} />
                                    <span className="font-black text-sm uppercase">{s}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
          </aside>

          {/* Main Results Grid */}
          <main className="lg:col-span-3 space-y-12 animate-in slide-in-from-right-10 duration-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-border/10 pb-8">
               <div className="space-y-1">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                    {loading ? tCommon("loading") : t("resultsFound", { count: visible.length }) || `${visible.length} Results`}
                </h2>
                {!loading && <p className="text-muted-foreground font-bold tracking-widest uppercase text-xs opacity-50">{t("similaritySearchActive") || "AI Similarity Search Active"}</p>}
               </div>
               
               <div className="flex items-center gap-4 w-full sm:w-auto">
                 <Select value={sortOrder} onValueChange={setSortOrder}>
                   <SelectTrigger className="w-full sm:w-[240px] h-14 rounded-2xl bg-muted/20 border-2 font-black uppercase tracking-tight shadow-sm">
                     <SelectValue placeholder={t("sortSimilarity")} />
                   </SelectTrigger>
                   <SelectContent className="rounded-2xl border-border/50 p-2 shadow-2xl">
                     <SelectItem value="similarity" className="font-bold py-3 uppercase text-xs">{t("sortSimilarity")}</SelectItem>
                     <SelectItem value="lowest_price" className="font-bold py-3 uppercase text-xs">{t("sortLowest")}</SelectItem>
                     <SelectItem value="highest_price" className="font-bold py-3 uppercase text-xs">{t("sortHighest")}</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
            </div>

            {visible.length === 0 && !loading ? (
              <div className="flex flex-col items-center justify-center py-32 text-center space-y-8 animate-in fade-in zoom-in duration-1000">
                <div className="relative">
                    <img src={noDataFound} alt={t("noResultsAlt")} className="w-80 h-80 opacity-5 grayscale brightness-50" />
                    <PackageSearch size={80} className="absolute inset-0 m-auto text-primary opacity-20 animate-bounce" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-3xl font-black uppercase tracking-tighter opacity-30">{t("noResultsFound") || "No Exact Matches Found"}</h3>
                    <p className="text-muted-foreground font-medium max-w-xs mx-auto">Try adjusting your filters or search for a different style</p>
                </div>
                <Button 
                    variant="outline" 
                    className="rounded-2xl h-14 px-10 font-black border-2 uppercase tracking-widest hover:bg-primary hover:text-white transition-all" 
                    onClick={() => setFilters({ category: new Set(), store: new Set() })}
                >
                    {t("clearFilters") || "Reset Filters"}
                </Button>
              </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {loading
                    ? Array.from({ length: 9 }).map((_, idx) => (
                        <Card key={idx} className="border-none bg-muted/10 rounded-[3rem] overflow-hidden shadow-none">
                        <Skeleton className="w-full aspect-[3/4]" />
                        <CardContent className="p-8 space-y-4">
                            <Skeleton className="h-6 w-full" />
                            <div className="flex justify-between items-center">
                            <Skeleton className="h-8 w-1/3 rounded-xl" />
                            <Skeleton className="h-5 w-1/4 rounded-lg" />
                            </div>
                        </CardContent>
                        </Card>
                    ))
                    : visible.map((p) => (
                        <Card
                        key={p.item_id}
                        className="group border-none bg-muted/5 hover:bg-background transition-all duration-700 rounded-[3.5rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] hover:-translate-y-4 border border-transparent hover:border-border/50"
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
                            {p.favorite && (
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-2xl text-rose-500 animate-in zoom-in duration-500">
                                    <AiFillHeart size={24} />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-700" />
                        </div>
                        <CardContent className="p-10 space-y-5">
                            <h4 className="font-black text-xl line-clamp-2 leading-[1.1] group-hover:text-primary transition-all duration-500 h-[2.5em] tracking-tighter uppercase italic">
                            {p.title}
                            </h4>
                            <div className="flex justify-between items-end pt-4 border-t border-border/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-1">Price</span>
                                    <span className="text-3xl font-black text-primary -tracking-wider">${p.price}</span>
                                </div>
                                <Badge variant="secondary" className="font-black uppercase tracking-widest px-4 py-2 rounded-xl text-[10px] bg-muted/50 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    {p.seller}
                                </Badge>
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
