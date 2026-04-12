import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noDataFound from "@/assets/noFavorites.svg";
import { useAuthContext } from "@/providers/AuthProvider";
import { favoriteService } from "@shared/services/favoriteService";
import { Notifier } from "@/components/Notifier";
import { useDevice } from "@/providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { SlidersHorizontal, Trash2 } from "lucide-react";

// Components
import FavoriteHeader from "@/components/favorite/FavoriteHeader";
import FavoriteFilters from "@/components/favorite/FavoriteFilters";
import FavoriteControls from "@/components/favorite/FavoriteControls";
import FavoriteCard from "@/components/favorite/FavoriteCard";
import FavoriteEmptyState from "@/components/favorite/FavoriteEmptyState";

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
    const extracted = [...new Set(prods.map((p) => p.category).filter(Boolean))];
    setCategories(extracted);
  };

  const extractStoresFromData = (prods) => {
    const extracted = [...new Set(prods.map((p) => p.seller).filter(Boolean))];
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
            <FavoriteHeader t={t} />

            <FavoriteFilters
              categories={categories}
              stores={stores}
              filters={filters}
              toggleFilter={toggleFilter}
              t={t}
            />

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
            <FavoriteControls
              count={visible.length}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              loading={loading}
              t={t}
            />

            {visible.length === 0 && !loading ? (
              <FavoriteEmptyState
                noDataFound={noDataFound}
                navigate={navigate}
                t={t}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                {loading
                  ? Array.from({ length: 6 }).map((_, idx) => (
                      <Card
                        key={idx}
                        className="border-none bg-muted/10 rounded-[4rem] overflow-hidden shadow-none p-4"
                      >
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
                      <FavoriteCard
                        key={p.item_id}
                        product={p}
                        navigate={navigate}
                        requestRemoveFromFavorite={requestRemoveFromFavorite}
                        similarProducts={visible.filter(
                          (x) => x.category === p.category
                        )}
                        t={t}
                      />
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
            <DialogTitle className="text-center text-4xl font-black tracking-tighter uppercase">
              {t("removeTitle")}
            </DialogTitle>
            <DialogDescription className="text-center text-xl font-bold opacity-60 leading-relaxed px-4">
              {t("removePrompt")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-col gap-5 mt-12 pb-4">
            <Button
              variant="destructive"
              className="w-full h-20 rounded-3xl font-black text-2xl uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(244,63,94,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
              onClick={confirmRemove}
            >
              {t("yesRemove")}
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
