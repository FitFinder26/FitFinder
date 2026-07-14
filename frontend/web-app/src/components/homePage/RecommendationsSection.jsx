import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../locales/namespaces";

// Shadcn UI
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sub-components
import RecommendationHeader from "./RecommendationHeader";
import RecommendationCard from "./RecommendationCard";
import RecommendationSkeleton from "./RecommendationSkeleton";

export default function RecommendationsSection({
  categoricalProducts = null,
  loading = false,
}) {
  const { t } = useTranslation(NAMESPACES.home);
  const navigate = useNavigate();

  const collectionCount = Object.keys(categoricalProducts || {}).length;

  return (
    <section 
      className="w-full flex flex-col gap-12 animate-in slide-in-from-right-20 duration-1000 p-12 md:p-24" 
      aria-busy={loading}
    >
      <RecommendationHeader 
        t={t} 
        collectionCount={collectionCount} 
        loading={loading} 
      />

      {loading && (
        <span className="sr-only" role="status">
          {t("recommendations.loading")}
        </span>
      )}

      <ScrollArea className="w-full whitespace-nowrap overflow-visible">
        <div className="flex w-max gap-12 md:gap-20 py-10 px-4">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <RecommendationSkeleton key={i} delay={`${i * 0.1}s`} />
              ))
            : Object.entries(categoricalProducts || {}).map(([category, items], idx) => (
                <RecommendationCard
                  key={category}
                  category={category}
                  items={items}
                  t={t}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() =>
                    navigate("/search-result", {
                      state: {
                        products: items,
                        searchingPeice: items[0].imageURL,
                      },
                    })
                  }
                />
              ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-3" />
      </ScrollArea>
    </section>
  );
}
