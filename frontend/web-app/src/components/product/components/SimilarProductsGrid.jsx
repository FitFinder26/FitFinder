import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SimilarProductsGrid({ similar, onProductClick }) {
    const { t, i18n } = useTranslation(NAMESPACES.product);
    const isRtl = i18n.dir() === "rtl";

    return (
        <div className="mt-24 space-y-8 animate-in slide-in-from-bottom-20 duration-1000">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-muted pb-6">
                <div className="space-y-4 text-left rtl:text-right">
                    <h3 className="text-4xl md:text-6xl font-black tracking-[-0.05em] uppercase italic leading-none text-foreground">
                        {t("similarProducts")}
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                {similar.map((p, i) => (
                    <Card
                        key={p.item_id}
                        className="group border-none bg-muted/5 hover:bg-background transition-all duration-700 rounded-[3.5rem] overflow-hidden cursor-pointer shadow-none hover:shadow-[0_60px_100px_rgba(0,0,0,0.15)] hover:-translate-y-6 border border-transparent hover:border-border/10"
                        onClick={() => onProductClick(p)}
                    >
                        <div className="relative aspect-[3.5/5] overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-1000" />
                            <img src={p.imageURL} alt={p.title} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-125 transition-all duration-1000" />

                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 translate-y-20 group-hover:translate-y-0">
                                <div className="space-y-4 backdrop-blur-3xl bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                                    <h4 className="font-black text-lg line-clamp-1 uppercase tracking-tighter italic leading-none">{p.title}</h4>
                                    <Button variant="secondary" className="w-full font-black text-[10px] h-12 rounded-xl shadow-xl uppercase tracking-widest bg-white text-black hover:bg-primary hover:text-white transition-all">
                                        {t("viewProduct")}
                                    </Button>
                                </div>
                            </div>

                            <div className="absolute top-8 left-8 rtl:left-auto rtl:right-8">
                                <Badge className="bg-black/50 text-white backdrop-blur-md rounded-xl font-black text-[9px] uppercase tracking-widest px-4 py-2 italic border-none">
                                    {t("matchPercent", { percent: 90 + i })}
                                </Badge>
                            </div>
                        </div>
                        <CardContent className="p-10 space-y-6 bg-muted/2 text-left rtl:text-right">
                            <h4 className="font-black text-2xl line-clamp-2 leading-none group-hover:text-primary transition-colors min-h-[4rem] uppercase italic tracking-tighter">
                                {p.title}
                            </h4>
                            <div className="flex justify-between items-end pt-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-20 leading-none mb-2 italic">
                                        {t("retailValue")}
                                    </span>
                                    <span className="text-4xl font-black text-secondary -tracking-widest flex items-start gap-1 leading-none">
                                        <span className="text-base mt-1">$</span>
                                        {p.price}
                                    </span>
                                </div>
                                <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest opacity-30 px-4 py-2 rounded-xl border-border/10 italic">
                                    {p.seller}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
