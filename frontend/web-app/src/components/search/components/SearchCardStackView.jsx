import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ArrowLeft, X, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";

import { getEdgeColors } from "@/lib/imageUtils";
import { ratingService } from "@shared/services/ratingService";


export default function SearchCardStackView({ products, onClose, onSwitchToGrid, navigate, searchingPeice, loading }) {
    const { t, i18n } = useTranslation(NAMESPACES.search);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [ratings, setRatings] = useState({});
    const [ambientColors, setAmbientColors] = useState(null);
    const [hoverRating, setHoverRating] = useState(0);

    const currentProduct = products[currentIndex];

    useEffect(() => {
        setCurrentIndex(0);
    }, [products]);

    useEffect(() => {
        if (currentProduct?.imageURL) {
            getEdgeColors(currentProduct.imageURL).then(colors => {
                setAmbientColors(colors);
            });
        }
        setHoverRating(0); // Reset hover on product change
    }, [currentIndex, products]);

    const paginate = (newDirection) => {
        if (currentIndex + newDirection >= 0 && currentIndex + newDirection < products.length) {
            setDirection(newDirection);
            setCurrentIndex((prev) => prev + newDirection);
        }
    };

    const handleRate = (productId, rating) => {
        setRatings(prev => ({ ...prev, [productId]: rating }));
        
        // Find the current product to get its rank
        const product = products.find(p => p.item_id === productId);
        if (product) {
            ratingService.rateProduct(
                productId,
                product.originalRank,
                searchingPeice,
                rating
            ).catch(err => {
                console.error("Failed to submit rating:", err);
            });
        }
    };

    const isRTL = i18n.dir() === "rtl";

    const variants = {
        enter: (direction) => ({
            x: isRTL ? (direction > 0 ? -1000 : 1000) : (direction > 0 ? 1000 : -1000),
            opacity: 0,
            scale: 0.5,
            rotate: isRTL ? (direction > 0 ? -15 : 15) : (direction > 0 ? 15 : -15)
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0
        },
        exit: (direction) => ({
            zIndex: 0,
            x: isRTL ? (direction < 0 ? -1000 : 1000) : (direction < 0 ? 1000 : -1000),
            opacity: 0,
            scale: 0.5,
            rotate: isRTL ? (direction < 0 ? -15 : 15) : (direction < 0 ? 15 : -15)
        })
    };

    if (loading || !currentProduct) {
        return (
            <div
                className={cn(
                    "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background/60 backdrop-blur-3xl"
                )}
                dir={i18n.dir()}
            >
                <div className="relative w-full max-w-[500px] aspect-[3/4.5] px-6 md:px-0">
                    <div className="w-full h-full rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.5)] flex flex-col bg-white/5 animate-pulse">
                        <div className="flex-1 bg-muted/20" />
                        <div className="p-12 space-y-8 bg-black/20">
                            <div className="space-y-4">
                                <div className="h-12 w-3/4 bg-white/10 rounded-2xl" />
                                <div className="h-8 w-1/4 bg-white/10 rounded-xl" />
                            </div>
                            <div className="h-18 w-full bg-white/10 rounded-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-all duration-1000 bg-background/60 backdrop-blur-3xl"
            )}
            style={{
                backgroundImage: ambientColors?.gradient || undefined,
                backgroundBlendMode: "soft-light"
            }}
            dir={i18n.dir()}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full" />
            </div>

            {/* Top Toolbar */}
            <div className="absolute top-0 start-0 w-full p-8 md:p-12 flex justify-between items-center z-[110]">
                <div className="flex items-center gap-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="rounded-full w-14 h-14 bg-muted/20 hover:bg-muted/40 transition-all border border-white/5"
                    >
                        <X size={28} />
                    </Button>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">{t("discoveryTitle") || "FitFinder Discovery"}</span>
                        <span className="font-black text-xl italic">{currentIndex + 1} / {products.length}</span>
                    </div>
                </div>

                <Button
                    onClick={onSwitchToGrid}
                    className="h-14 px-8 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 font-black uppercase text-[10px] tracking-[0.3em] gap-4 transition-all"
                >
                    <LayoutGrid size={18} />
                    <span>{t("gridView") || "GRID VIEW"}</span>
                </Button>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden lg:flex absolute inset-x-12 top-1/2 -translate-y-1/2 justify-between z-[110] pointer-events-none">
                <Button
                    variant="ghost"
                    size="icon"
                    disabled={currentIndex === 0}
                    onClick={() => paginate(-1)}
                    className={cn(
                        "rounded-full w-20 h-20 bg-background/40 backdrop-blur-xl border-4 border-white/5 hover:bg-primary hover:text-white transition-all pointer-events-auto shadow-2xl",
                        currentIndex === 0 && "opacity-0"
                    )}
                >
                    {isRTL ? <ArrowRight size={36} strokeWidth={3} /> : <ArrowLeft size={36} strokeWidth={3} />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    disabled={currentIndex === products.length - 1}
                    onClick={() => paginate(1)}
                    className={cn(
                        "rounded-full w-20 h-20 bg-background/40 backdrop-blur-xl border-4 border-white/5 hover:bg-primary hover:text-white transition-all pointer-events-auto shadow-2xl",
                        currentIndex === products.length - 1 && "opacity-0"
                    )}
                >
                    {isRTL ? <ArrowLeft size={36} strokeWidth={3} /> : <ArrowRight size={36} strokeWidth={3} />}
                </Button>
            </div>

            {/* Card Stack Container */}
            <div className="relative w-full max-w-[500px] aspect-[3/4.5] px-6 md:px-0">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentProduct.item_id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = offset.x;
                            if (isRTL) {
                                if (swipe > 100) paginate(1);
                                else if (swipe < -100) paginate(-1);
                            } else {
                                if (swipe < -100) paginate(1);
                                else if (swipe > 100) paginate(-1);
                            }
                        }}
                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    >
                        <div
                            className="w-full h-full rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.5)] flex flex-col group transition-all duration-1000"
                            style={{
                                background: ambientColors ? `${ambientColors.center}` : 'rgba(255,255,255,0.02)',
                                backdropFilter: 'blur(20px)'
                            }}
                        >
                            {/* Image Section */}
                            <div className="relative flex-1 overflow-hidden">
                                <img
                                    src={currentProduct.imageURL}
                                    alt={currentProduct.title}
                                    className="w-full h-full object-cover select-none pointer-events-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* <Badge className={cn(
                                    "absolute top-8 bg-black/40 text-white backdrop-blur-md px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest italic border-none",
                                    isRTL ? "right-8" : "left-8"
                                )}>
                                    {t("rank", { rank: currentProduct.originalRank }) || `RANK #${currentProduct.originalRank}`}
                                </Badge> */}

                                {/* Info Overlay on Image */}
                                <div className="absolute bottom-0 inset-x-0 p-12 space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase leading-[0.8] tracking-tight">
                                        {currentProduct.title}
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <Badge variant="secondary" className="bg-primary text-white border-none px-4 py-2 rounded-xl font-black italic">
                                            ${currentProduct.price}
                                        </Badge>
                                        <span className="text-white/60 font-bold uppercase tracking-widest text-[10px] italic">
                                            {currentProduct.seller}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Ratings & Actions Section */}
                            <div
                                className="p-12 flex flex-col items-center gap-10 border-t border-white/5"
                                style={{
                                    background: 'rgba(0,0,0,0.1)',
                                    backdropFilter: 'blur(40px)'
                                }}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">
                                        {t("rateThisProduct") || "RATE THIS MATCH"}
                                    </span>
                                    <div className="flex gap-3" onMouseLeave={() => setHoverRating(0)}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onClick={() => handleRate(currentProduct.item_id, star)}
                                                onMouseEnter={() => setHoverRating(star)}
                                                className="group/star transition-all active:scale-90"
                                            >
                                                <Star
                                                    size={32}
                                                    className={cn(
                                                        "transition-all duration-300 drop-shadow-md",
                                                        (hoverRating >= star)
                                                            ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                                                            : (ratings[currentProduct.item_id] || 0) >= star
                                                                ? "fill-primary text-primary"
                                                                : "text-white/40 hover:text-yellow-400"
                                                    )}
                                                    fill={(hoverRating >= star || (ratings[currentProduct.item_id] || 0) >= star) ? "currentColor" : "none"}
                                                    strokeWidth={2.5}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-18 rounded-3xl bg-foreground text-background font-black uppercase tracking-widest text-xs italic hover:bg-primary hover:text-white transition-all gap-4"
                                    onClick={() => navigate(`/product/${currentProduct.item_id}`, {
                                        state: {
                                            product: currentProduct,
                                            similarProducts: products.filter(x => x.category === currentProduct.category && x.item_id !== currentProduct.item_id)
                                        }
                                    })}
                                >
                                    <span>{t("viewDetails") || "VIEW DETAILS"}</span>
                                    <ArrowRight className="rtl:rotate-180" size={18} strokeWidth={3} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 start-0 w-full h-2 bg-muted/20">
                <motion.div
                    className="h-full origin-inline-start transition-all duration-1000"
                    style={{
                        backgroundColor: ambientColors ? ambientColors.center.replace(/0\.\d+\)$/, '1)') : 'hsl(var(--primary))',
                        boxShadow: ambientColors ? `0 0 20px ${ambientColors.center.replace(/0\.\d+\)$/, '0.6)')}` : '0 0 20px hsla(var(--primary), 0.5)'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}
                />
            </div>
        </div>
    );
}
