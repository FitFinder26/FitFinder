import { ArrowLeft, ArrowRight, Share2, Heart } from "lucide-react";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function ProductNavigation({ liked, onBack, onShare, onFavorite }) {
    const { t, i18n } = useTranslation(NAMESPACES.product);

    return (
        <div className="flex items-center justify-between mb-8 animate-in fade-in duration-700">
            <Button
                variant="ghost"
                className="h-14 rounded-2xl gap-4 hover:translate-x-[-8px] transition-all font-black uppercase tracking-widest text-[10px] bg-muted/20 px-8"
                onClick={onBack}
            >
                {i18n.language === "ar" ? <ArrowRight size={18} strokeWidth={3} /> : <ArrowLeft size={18} strokeWidth={3} />}
                {t("back")}
            </Button>
            <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="w-14 h-14 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-all font-bold" onClick={onShare}>
                    <Share2 size={22} />
                </Button>
                <Button variant="ghost" size="icon" className={cn("w-14 h-14 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-all text-rose-500", liked && "bg-rose-500 text-white")} onClick={onFavorite}>
                    {liked ? <AiFillHeart size={26} /> : <Heart size={26} strokeWidth={2.5} />}
                </Button>
            </div>
        </div>
    );
}
