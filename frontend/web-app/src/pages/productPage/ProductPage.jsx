import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { favoriteService } from "@shared/services/favoriteService";
import { Notifier } from "@/components/Notifier";
import { useAuthContext } from "@/providers/AuthProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";

import { parseDescription } from "@/lib/utils";

// Sub-components
import ProductNavigation from "@/components/product/components/ProductNavigation";
import ProductImageReveal from "@/components/product/components/ProductImageReveal";
import ProductDetails from "@/components/product/components/ProductDetails";
import SimilarProductsGrid from "@/components/product/components/SimilarProductsGrid";

export default function ProductPage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation(NAMESPACES.product);
    const { isAuthenticated } = useAuthContext();

    const productFromState = location.state?.product;
    const product = useMemo(() => {
        const base = productFromState || {
            favorite: false,
            item_id: id,
            title: t("productFallbackTitle", { id }),
            price: "0.00",
            seller: t("unknownSeller"),
            imageURL: `https://picsum.photos/seed/product-${id}/600/720`,
            description: t("fallbackDescription"),
        };

        return {
            ...base,
            title: base.title || t("productFallbackTitle", { id }),
            seller: base.seller || t("unknownSeller"),
            description: base.description || t("fallbackDescription"),
        };
    }, [productFromState, id, t]);

    const similar = location.state?.similarProducts || [];
    const [liked, setLiked] = useState(product.favorite);
    const [animating, setAnimating] = useState(false);

    const features = useMemo(() => parseDescription(product.description), [product.description]);
    const paragraphPart = null; // Description is now fully decomposed into features

    // Scroll to top on mount or ID change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        setLiked(product.favorite);
    }, [product.favorite]);

    const toggleFavorite = async (e) => {
        if (e) e.stopPropagation();
        if (!isAuthenticated()) {
            navigate("/registration", { state: { form: "signup" } });
            return;
        }

        try {
            const response = await favoriteService.toggleFavorite(product.item_id, !liked);
            if (!response.ok) throw new Error("Failed to toggle favorite");

            setLiked((prev) => !prev);
            setAnimating(true);
            setTimeout(() => setAnimating(false), 480);
        } catch (error) {
            console.error("Something went wrong in setting as favorite: ", error);
            Notifier.notifyError(t("favoriteError"));
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.title,
                text: product.description,
                url: window.location.href,
            }).catch(err => console.error('Error sharing:', err));
        } else {
            navigator.clipboard.writeText(window.location.href);
            Notifier.notifySuccess(t("linkCopied") || "Link copied to clipboard!");
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground animate-in slide-in-from-bottom-10 duration-1000 pb-40 selection:bg-primary selection:text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">

                <ProductNavigation
                    liked={liked}
                    onBack={() => navigate(-1)}
                    onShare={handleShare}
                    onFavorite={toggleFavorite}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <ProductImageReveal
                        imageURL={product.imageURL}
                        title={product.title}
                        id={id}
                    />

                    <ProductDetails
                        title={product.title}
                        price={product.price}
                        seller={product.seller}
                        features={features}
                        paragraphPart={paragraphPart}
                        itemWebURL={product.itemWebURL}
                    />
                </div>

                {similar.length > 0 && (
                    <SimilarProductsGrid
                        similar={similar}
                        onProductClick={(p) => navigate(`/product/${p.item_id}`, {
                            state: { product: p, similarProducts: similar },
                        })}
                    />
                )}
            </div>
        </div>
    );
}
