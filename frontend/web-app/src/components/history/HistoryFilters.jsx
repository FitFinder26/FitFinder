import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Filter, Calendar as CalendarIcon, LucideCalendar } from "lucide-react";
import { format, parseISO, isValid } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HistoryFilters = ({ filters, setFilters, toggleFilter, t }) => {
  return (
    <div className="hidden lg:block space-y-12 px-4 shadow-2xl border border-border/10 p-7 rounded-[2.5rem] bg-muted/5 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border/10 pb-6">
        <h3 className="text-xl font-black tracking-tighter uppercase">{t("filters")}</h3>
        <Filter size={20} className="opacity-20" />
      </div>

      <div className="space-y-12">
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
            {t("timeframe")}
          </h4>
          <div className="space-y-6">
            {[
              { label: t("today"), value: "today" },
              { label: t("last7"), value: "last_7" },
              { label: t("last30"), value: "last_30" },
            ].map((opt) => (
              <div
                key={opt.value}
                className="flex items-center space-x-4 group cursor-pointer"
                onClick={() => toggleFilter("date", opt.value)}
              >
                <Checkbox
                  checked={filters.date.has(opt.value)}
                  className="w-5 h-5 rounded-lg border-2"
                />
                <span className="text-base font-black group-hover:text-primary transition-all uppercase tracking-tight italic">
                  {opt.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
            {t("specificDate")}
          </h4>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-black h-12 rounded-xl border-2 border-border/10 px-4 pt-2 group hover:border-primary/50 transition-all",
                  !filters.specificDate && "text-muted-foreground"
                )}
              >
                <LucideCalendar className="mr-2 h-4 w-4 opacity-50 group-hover:text-primary transition-colors" />
                <span className="text-sm">
                  {filters.specificDate && isValid(parseISO(filters.specificDate))
                    ? format(parseISO(filters.specificDate), "PPP")
                    : t("specificDate")}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 rounded-2xl border-border/50 shadow-2xl bg-background/95 backdrop-blur-xl" align="start">
              <Calendar
                mode="single"
                selected={filters.specificDate ? parseISO(filters.specificDate) : undefined}
                onSelect={(date) =>
                  setFilters((p) => ({
                    ...p,
                    specificDate: date && isValid(date) ? format(date, "yyyy-MM-dd") : ""
                  }))
                }
                initialFocus
                className="rounded-2xl border-none p-4"
                style={{ "--cell-size": "2.6rem" }}
                classNames={{
                   day: "p-0.5",
                   week: "flex w-full mt-2 gap-1",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HistoryFilters;
