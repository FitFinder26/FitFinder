import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";

const FavoriteFilters = ({ categories, stores, filters, toggleFilter, t }) => {
  return (
    <div className="hidden lg:block space-y-12 px-4 shadow-sm border border-border/10 p-8 rounded-[3rem] bg-muted/5">
      <div className="flex items-center justify-between border-b border-border/10 pb-6">
        <h3 className="text-3xl font-black tracking-tighter uppercase">{t("filters")}</h3>
        <Filter size={24} className="opacity-20" />
      </div>

      {/* Categories */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          {t("category")}
        </h4>
        <div className="space-y-4">
          {categories.map((c) => (
            <div
              key={c}
              className="flex items-center space-x-4 group cursor-pointer"
              onClick={() => toggleFilter("category", c)}
            >
              <Checkbox
                checked={filters.category.has(c)}
                className="w-6 h-6 rounded-lg border-2"
              />
              <span className="text-lg font-bold group-hover:text-primary transition-colors uppercase tracking-tight">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stores */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          {t("store")}
        </h4>
        <div className="space-y-4">
          {stores.map((s) => (
            <div
              key={s}
              className="flex items-center space-x-4 group cursor-pointer"
              onClick={() => toggleFilter("store", s)}
            >
              <Checkbox
                checked={filters.store.has(s)}
                className="w-6 h-6 rounded-lg border-2"
              />
              <span className="text-lg font-bold group-hover:text-primary transition-colors capitalize uppercase tracking-tight">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteFilters;
