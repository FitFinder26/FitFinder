import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function ProductImageReveal({ imageURL, title, id }) {
    const { t } = useTranslation(NAMESPACES.product);

    return (
        <div className="lg:col-span-7 flex flex-col gap-4 animate-in slide-in-from-left-20 duration-1000">
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[120px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000" />

                <div className="relative overflow-hidden rounded-[4rem] bg-background/50 backdrop-blur-3xl p-6 md:p-12 shadow-[0_80px_150px_rgba(0,0,0,0.15)] border-4 border-border/5 group-hover:scale-[1.01] transition-transform duration-1000 cursor-zoom-in">
                    <img
                        src={imageURL}
                        alt={title}
                        className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                    />

                    <Badge className="absolute top-12 left-12 px-6 py-2 rounded-full font-black uppercase tracking-widest text-[9px] italic bg-white/10 backdrop-blur-md text-foreground border-foreground/5 shadow-2xl">
                        {t("archivalItem", { id: id?.slice(-6).toUpperCase() })}
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square rounded-3xl bg-muted/20 border border-border/10 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                        <img src={imageURL} alt="Detail" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                    </div>
                ))}
            </div>
        </div>
    );
}
