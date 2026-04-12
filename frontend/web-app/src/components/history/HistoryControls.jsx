import React from "react";
import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const HistoryControls = ({ count, sortOrder, setSortOrder, t }) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b-2 border-border/5 pb-8">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Select dir={i18n.dir()} value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="w-full sm:w-[220px] h-12 rounded-xl bg-muted/10 border-2 font-black uppercase tracking-widest shadow-xl text-[10px]">
            <SelectValue placeholder={t("mostRecent")} />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-border/50 p-2 shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-background/95 backdrop-blur-xl">
            <SelectItem value="most_recent" className="font-black py-2 uppercase text-[10px] tracking-widest">
              {t("mostRecent")}
            </SelectItem>
            <SelectItem value="least_recent" className="font-black py-2 uppercase text-[10px] tracking-widest">
              {t("leastRecent")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HistoryControls;
