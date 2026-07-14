import { Sparkles, Info, ShoppingBag, ChevronRight, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function ProductDetails({ title, price, seller, features, paragraphPart, itemWebURL }) {
    const { t, i18n } = useTranslation(NAMESPACES.product);

    return (
        <div className="lg:col-span-5 flex flex-col gap-8 animate-in slide-in-from-right-20 duration-1000">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black tracking-[-0.05em] leading-[0.85] uppercase italic text-foreground max-w-sm">
                        {title}
                    </h1>
                </div>

                <div className="flex items-end gap-8 pt-2">
                    <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-20">{t("retailValue")}</span>
                        <div className="text-5xl md:text-6xl font-black text-secondary -tracking-widest flex items-start gap-1">
                            <span className="text-3xl mt-2">$</span>
                            {price}
                        </div>
                    </div>
                    <Badge variant="outline" className="px-6 py-2.5 text-xs font-black rounded-2xl uppercase tracking-[0.2em] border-2 italic border-border/10 mb-2">
                        {seller}
                    </Badge>
                </div>
            </div>
            <div className="lg:hidden flex flex-col gap-6">
                <Button
                    className="h-20 rounded-[2.5rem] bg-foreground text-background hover:bg-primary hover:text-white font-black text-xl uppercase tracking-[0.1em] gap-6 shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-4 active:translate-y-0 group border-none"
                    onClick={() => window.open(itemWebURL, "_blank", "noopener,noreferrer")}
                >
                    <div className="relative">
                        <ShoppingBag size={28} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {t("goToStore")}
                    {i18n.language === "ar" ? <ChevronLeft size={24} strokeWidth={4} className="group-hover:translate-x-4 transition-transform duration-700" /> : <ChevronRight size={24} strokeWidth={4} className="group-hover:translate-x-4 transition-transform duration-700" />}
                </Button>
            </div>

            <div className="bg-muted/10 rounded-[4rem] p-8 md:p-10 border-4 border-border/5 space-y-8">
                <div className="flex items-center justify-between border-b border-border/10 pb-6">
                    <div className="space-y-1 text-left">
                        <p className="font-bold text-xs tracking-tight">{t("productDetails")}</p>
                    </div>
                    <Info size={24} className="opacity-10" />
                </div>

                <ul className="grid grid-cols-1 gap-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex gap-6 items-start group">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                            <p className="text-xl font-black leading-none uppercase tracking-tighter italic group-hover:text-primary transition-colors cursor-default">
                                {feature}
                            </p>
                        </li>
                    ))}
                </ul>

                {paragraphPart && (
                    <div className="relative group/text">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 group-hover/text:bg-primary transition-colors" />
                        <p className="text-muted-foreground leading-snug text-lg font-bold italic tracking-tight opacity-50 group-hover/text:opacity-90 transition-opacity pl-6">
                            "{paragraphPart}"
                        </p>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-6 pt-4">
                <Button
                    className="h-20 rounded-[2.5rem] bg-foreground text-background hover:bg-primary hover:text-white font-black text-xl uppercase tracking-[0.1em] gap-6 shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-4 active:translate-y-0 group border-none"
                    onClick={() => window.open(itemWebURL, "_blank", "noopener,noreferrer")}
                >
                    <div className="relative">
                        <ShoppingBag size={28} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {t("goToStore")}
                    {i18n.language === "ar" ? <ChevronLeft size={24} strokeWidth={4} className="group-hover:translate-x-4 transition-transform duration-700" /> : <ChevronRight size={24} strokeWidth={4} className="group-hover:translate-x-4 transition-transform duration-700" />}
                </Button>

                <div className="flex items-center justify-center gap-10 py-4 opacity-20 hover:opacity-40 transition-opacity">
                    <div className="h-px flex-1 bg-foreground/20" />
                    <span className="font-black text-[9px] uppercase tracking-[0.5em] italic">{t("safeCheckout")}</span>
                    <div className="h-px flex-1 bg-foreground/20" />
                </div>
            </div>
        </div>
    );
}
