import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const FavoriteControls = ({ count, sortOrder, setSortOrder, loading, t }) => {
  const { i18n } = useTranslation();
  const { t: tCommon } = useTranslation("common");

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 border-b border-border/10 pb-10">
      <div className="space-y-2">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase leading-none italic">
          {loading ? tCommon("loading") : `${count} ${t("pieces")}`}
        </h2>
        <p className="text-muted-foreground font-black tracking-widest uppercase text-xs opacity-50 ml-1">
          {t("tagline")}
        </p>
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Select dir={i18n.dir()} value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="w-full sm:w-[240px] h-14 rounded-2xl bg-muted/20 border-2 font-black uppercase tracking-tight shadow-sm">
            <SelectValue placeholder={t("sortSimilarity")} />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-border/50 p-2 shadow-2xl">
            <SelectItem value="similarity" className="font-bold py-3 uppercase text-xs">
              {t("sortSimilarity")}
            </SelectItem>
            <SelectItem value="lowest_price" className="font-bold py-3 uppercase text-xs">
              {t("sortLowest")}
            </SelectItem>
            <SelectItem value="highest_price" className="font-bold py-3 uppercase text-xs">
              {t("sortHighest")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FavoriteControls;
