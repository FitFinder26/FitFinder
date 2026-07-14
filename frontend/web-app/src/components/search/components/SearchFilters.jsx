import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SearchFilters({ 
    categories, 
    stores, 
    filters, 
    toggleFilter, 
    showFilters, 
    setShowFilters, 
    clearFilters 
}) {
    const { t } = useTranslation(NAMESPACES.search);

    const FilterSection = ({ title, items, group }) => (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">{title}</h4>
                <div className="h-px bg-border/10 flex-1" />
            </div>
            <div className="space-y-6">
                {items.map((item) => (
                    <div 
                        key={item} 
                        className="flex items-center justify-between group cursor-pointer" 
                        onClick={() => toggleFilter(group, item)}
                    >
                        <div className="flex items-center space-x-5">
                            <Checkbox 
                                checked={filters[group].has(item)} 
                                className={cn(
                                    "w-6 h-6 rounded-xl border-2 transition-all",
                                    filters[group].has(item) ? (group === "category" ? "bg-primary border-primary" : "bg-secondary border-secondary") : "border-border/30"
                                )} 
                            />
                            <span className={cn(
                                "text-xl font-black uppercase italic tracking-tighter transition-all duration-500",
                                filters[group].has(item) ? (group === "category" ? "text-primary scale-110" : "text-secondary scale-110") : "opacity-40 hover:opacity-100"
                            )}>{item}</span>
                        </div>
                        <span className={cn(
                            "text-[9px] font-black uppercase tracking-widest transition-all",
                            filters[group].has(item) ? "opacity-40" : "opacity-5"
                        )}>{t("selected") || "SELECTED"}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-16">
            {/* Desktop Filters */}
            <div className="hidden lg:block space-y-16 px-4">
                <div className="space-y-12">
                    <FilterSection title={t("category")} items={categories} group="category" />
                    <FilterSection title={t("store")} items={stores} group="store" />
                </div>

                {(filters.category.size > 0 || filters.store.size > 0) && (
                    <Button 
                        variant="ghost" 
                        onClick={clearFilters}
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
                    <div className="mt-6 p-6 sm:p-12 bg-muted/10 rounded-[2.5rem] sm:rounded-[4rem] space-y-10 sm:space-y-16 border-4 border-border/5 animate-in slide-in-from-top-12 duration-1000 cubic-bezier(0.7, 0, 0.3, 1) shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
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
                                onClick={clearFilters}
                                className="w-full h-20 rounded-3xl font-black uppercase tracking-widest transition-all shadow-xl"
                            >
                                {t("clearFilters") || "PURGE ALL FILTERS"}
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
