import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noDataFound from "../assets/noFavorites.svg";
import { useAuthContext } from "../providers/AuthProvider";
import { favoriteService } from "../../../shared/services/favoriteService";
import { AiFillHeart } from "react-icons/ai";
import { Notifier } from "../components/Notifier";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Filter, SlidersHorizontal, Heart, Trash2 } from "lucide-react";
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

export default function FavoritePage() {
  const { device } = useDevice();
  const { t } = useTranslation(NAMESPACES.favorites);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [sortOrder, setSortOrder] = useState("similarity");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [filters, setFilters] = useState({
    category: new Set(),
    store: new Set(),
  });
  const [showFilters, setShowFilters] = useState(device !== "mobile");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingRemoveId, setPendingRemoveId] = useState(null);

  useEffect(() => {
    setShowFilters(device !== "mobile");
  }, [device]);

  useEffect(() => {
    if (!isAuthenticated())
      navigate("/registration", { state: { form: "signup" } });
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    favoriteService
      .getFavorites()
      .then((data) => {
        settingSellers(data);
        extractCategoryFromData(data);
        extractStoresFromData(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in retreiving favorites: ", error);
      });
  }, []);

  const removeFromFavorite = async (itemId) => {
    try {
      const response = await favoriteService.removeFromFavorite(itemId);
      if (!response.ok) throw new Error("Failed to remove from favorite");
      setProducts((prev) => prev.filter((p) => p.item_id !== itemId));
      Notifier.notifySuccess(t("removeSuccess"));
    } catch (error) {
      Notifier.notifyError(t("removeError"));
      console.error(error);
    }
  };

  const requestRemoveFromFavorite = (itemId, e) => {
    e.stopPropagation();
    setPendingRemoveId(itemId);
    setConfirmOpen(true);
  };

  const confirmRemove = async () => {
    setConfirmOpen(false);
    if (!pendingRemoveId) return;
    await removeFromFavorite(pendingRemoveId);
    setPendingRemoveId(null);
  };

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
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-12 animate-in slide-in-from-left-10 duration-700">
            <div className="px-4 space-y-2">
               <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-2">{t("title")}</h1>
               <div className="h-1.5 w-24 bg-primary rounded-full mb-4" />
               <p className="text-muted-foreground font-black tracking-[0.2em] uppercase text-[10px] opacity-40">{t("curatedSelection") || "MY STYLE VAULT"}</p>
            </div>

            <div className="hidden lg:block space-y-12 px-4 shadow-sm border border-border/10 p-8 rounded-[3rem] bg-muted/5">
                <div className="flex items-center justify-between border-b border-border/10 pb-6">
                    <h3 className="text-3xl font-black tracking-tighter uppercase">{t("filters")}</h3>
                    <Filter size={24} className="opacity-20" />
                </div>
                
                {/* Categories */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{t("category")}</h4>
                  <div className="space-y-4">
                    {categories.map((c) => (
                      <div key={c} className="flex items-center space-x-4 group cursor-pointer" onClick={() => toggleFilter("category", c)}>
                        <Checkbox checked={filters.category.has(c)} className="w-6 h-6 rounded-lg border-2" />
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
                        <Checkbox checked={filters.store.has(s)} className="w-6 h-6 rounded-lg border-2" />
                        <span className="text-lg font-bold group-hover:text-primary transition-colors capitalize uppercase tracking-tight">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden px-4">
                <Button 
                    variant="outline" 
                    className="w-full h-16 rounded-2xl gap-3 font-black text-xl shadow-xl border-2 uppercase"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <SlidersHorizontal size={22} />
                    {showFilters ? tCommon("hide") : tCommon("show")} {t("filters")}
                </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-16 animate-in slide-in-from-right-10 duration-700">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 border-b border-border/10 pb-10">
               <div className="space-y-2">
                <h2 className="text-5xl md:text-7xl font-black tracking-[ -0.05em] uppercase leading-none italic">
                    {loading ? tCommon("loading") : `${visible.length} FAUX`}
                </h2>
                <p className="text-muted-foreground font-black tracking-widest uppercase text-xs opacity-50 ml-1">SAVED PIECES READY FOR PURCHASE</p>
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
              <div className="flex flex-col items-center justify-center py-40 text-center space-y-12 animate-in fade-in zoom-in duration-1000">
                <div className="relative">
                    <img src={noDataFound} alt={t("noResultsAlt")} className="w-96 h-96 opacity-5 grayscale brightness-50" />
                    <Heart size={100} className="absolute inset-0 m-auto text-rose-500 opacity-20 animate-pulse" />
                </div>
                <div className="space-y-4">
                    <h3 className="text-5xl font-black uppercase tracking-tighter opacity-20">Your Closet is Empty</h3>
                    <p className="text-muted-foreground font-bold max-w-sm mx-auto tracking-tight text-lg opacity-60">Heart pieces while browsing to build your personal style collection here.</p>
                </div>
                <Button 
                    className="rounded-[2.5rem] h-20 px-16 bg-primary text-white font-black border-none uppercase tracking-[0.2em] text-xl hover:scale-110 transition-all shadow-[0_20px_60px_rgba(250,88,126,0.4)]" 
                    onClick={() => navigate("/")}
                >
                    {t("browseNow") || "Start Exploring"}
                </Button>
              </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                {loading
                    ? Array.from({ length: 6 }).map((_, idx) => (
                        <Card key={idx} className="border-none bg-muted/10 rounded-[4rem] overflow-hidden shadow-none p-4">
                        <Skeleton className="w-full aspect-[3/4] rounded-[3rem]" />
                        <CardContent className="p-10 space-y-4">
                            <Skeleton className="h-6 w-full" />
                            <div className="flex justify-between items-center">
                            <Skeleton className="h-10 w-1/3 rounded-xl" />
                            <Skeleton className="h-6 w-1/4 rounded-lg" />
                            </div>
                        </CardContent>
                        </Card>
                    ))
                    : visible.map((p) => (
                        <Card
                        key={p.item_id}
                        className="group border-none bg-muted/5 hover:bg-background transition-all duration-700 rounded-[4rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_60px_100px_rgba(0,0,0,0.2)] hover:-translate-y-6 border border-transparent hover:border-border/50"
                        onClick={() =>
                            navigate(`/product/${p.item_id}`, {
                                state: {
                                    product: p,
                                    similarProducts: visible.filter((x) => x.category === p.category),
                                },
                            })
                        }
                        >
                        <div className="relative overflow-hidden p-3 origin-center">
                            <CardImageWithLoader src={p.imageURL} alt={p.title} t={t} />
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute top-8 right-8 bg-white/90 backdrop-blur-2xl hover:bg-rose-500 hover:text-white transition-all duration-500 w-16 h-16 rounded-3xl shadow-2xl text-rose-500 z-20 group-hover:scale-110"
                                onClick={(e) => requestRemoveFromFavorite(p.item_id, e)}
                            >
                                <Trash2 size={30} />
                            </Button>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <CardContent className="p-12 pt-6 space-y-6 text-card-foreground">
                            <h4 className="font-black text-2xl line-clamp-2 leading-[1.1] group-hover:text-primary transition-all duration-500 h-[2.5em] tracking-tighter uppercase italic">
                            {p.title}
                            </h4>
                            <div className="flex justify-between items-end pt-6 border-t border-border/10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">PRICE</span>
                                    <span className="text-4xl font-black text-primary -tracking-widest capitalize">${p.price}</span>
                                </div>
                                <Badge variant="secondary" className="font-black uppercase tracking-[0.2em] px-6 py-3 rounded-2xl text-[10px] bg-muted/50 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
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

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-[480px] rounded-[4rem] p-12 border-none shadow-[0_50px_100px_rgba(0,0,0,0.4)] bg-background/95 backdrop-blur-3xl">
          <DialogHeader className="space-y-6">
            <div className="mx-auto w-24 h-24 bg-rose-500/10 rounded-[2rem] flex items-center justify-center text-rose-500 mb-2">
                <Trash2 size={48} />
            </div>
            <DialogTitle className="text-center text-4xl font-black tracking-tighter uppercase">{t("removeTitle")}</DialogTitle>
            <DialogDescription className="text-center text-xl font-bold opacity-60 leading-relaxed px-4">
              {t("removePrompt") || "Are you sure you want to remove this piece from your vault?"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-col gap-5 mt-12 pb-4">
            <Button 
                variant="destructive" 
                className="w-full h-20 rounded-3xl font-black text-2xl uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(244,63,94,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
                onClick={confirmRemove}
            >
                {t("yesRemove") || "Remove Piece"}
            </Button>
            <Button 
                variant="ghost" 
                className="w-full h-16 rounded-3xl font-black text-muted-foreground uppercase tracking-widest text-sm hover:bg-muted"
                onClick={() => setConfirmOpen(false)}
            >
                {tCommon("cancel")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
