import LazyMount from "./LazyMount";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Recommendation({
  categoricalProducts = null,
  loading = false,
}) {
  const { t } = useTranslation(NAMESPACES.home);
  const navigate = useNavigate();

  return (
    <LazyMount unmountOnHide={false}>
      <div className="w-full flex flex-col gap-6 animate-in slide-in-from-right-10 duration-1000 p-4 md:p-8" aria-busy={loading}>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
          {t("recommendationsTitle")}
        </h2>
        
        {loading && (
          <span className="sr-only" role="status">
            {t("loadingRecommendations")}
          </span>
        )}

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max gap-6 pb-4">
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-[140px] md:w-[180px]">
                    <Skeleton className="w-full aspect-square rounded-2xl" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))
              : Object.entries(categoricalProducts || {}).map(([category, items]) => (
                  <button
                    key={category}
                    className="flex flex-col items-center gap-3 w-[140px] md:w-[180px] group transition-all"
                    onClick={() =>
                      navigate("/search-result", {
                        state: {
                          products: items,
                          searchingPeice: items[0].imageURL,
                        },
                      })
                    }
                  >
                    <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-md group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                      <img 
                        src={items[0].imageURL} 
                        alt={category} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm md:text-base font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
                      {category}
                    </span>
                  </button>
                ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden md:flex" />
        </ScrollArea>
      </div>
    </LazyMount>
  );
}
