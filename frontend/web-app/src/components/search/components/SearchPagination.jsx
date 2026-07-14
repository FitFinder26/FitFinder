import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";
import { cn } from "@/lib/utils";

export default function SearchPagination({ currentPage, totalPages, onPageChange }) {
    const { t, i18n } = useTranslation(NAMESPACES.search);
    const isRtl = i18n.dir() === "rtl";

    if (totalPages <= 1) return null;

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            // Show first, last, and pages around current
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                pages.push(
                    <Button
                        key={i}
                        variant={currentPage === i ? "default" : "outline"}
                        onClick={() => onPageChange(i)}
                        className={cn(
                            "w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl font-black text-xs md:text-sm transition-all duration-500",
                            currentPage === i 
                                ? "bg-primary text-white shadow-[0_20px_40px_rgba(var(--primary),0.3)] scale-110" 
                                : "bg-muted/10 border-border/5 hover:bg-muted/20 hover:border-primary/20 opacity-40 hover:opacity-100"
                        )}
                    >
                        {i.toString().padStart(2, '0')}
                    </Button>
                );
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                pages.push(
                    <span key={i} className="text-muted-foreground opacity-20 font-black tracking-widest px-2">...</span>
                );
            }
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-4 md:gap-8 pt-20 border-t-2 border-border/5 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button
                variant="ghost"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-muted/5 hover:bg-muted/20 disabled:opacity-5 transition-all"
            >
                {isRtl ? <ChevronRight size={24} strokeWidth={3} /> : <ChevronLeft size={24} strokeWidth={3} />}
            </Button>

            <div className="flex items-center gap-2 md:gap-4">
                {renderPageNumbers()}
            </div>

            <Button
                variant="ghost"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-muted/5 hover:bg-muted/20 disabled:opacity-5 transition-all"
            >
                {isRtl ? <ChevronLeft size={24} strokeWidth={3} /> : <ChevronRight size={24} strokeWidth={3} />}
            </Button>
        </div>
    );
}
