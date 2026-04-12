import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDevice } from "../providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Info } from "lucide-react";
import Logo from "../components/common/Logo";

// Sub-components
import SearchSourcePreview from "../components/search/components/SearchSourcePreview";
import SearchFilters from "../components/search/components/SearchFilters";
import SearchProductCard from "../components/search/components/SearchProductCard";
import SearchEmptyState from "../components/search/components/SearchEmptyState";
import SearchSkeleton from "../components/search/components/SearchSkeleton";

import SearchPagination from "../components/search/components/SearchPagination";

export default function SearchResultPage() {
    const { device } = useDevice();
    const { t } = useTranslation(NAMESPACES.search);
    const { t: tCommon } = useTranslation(NAMESPACES.common);

    const [categories, setCategories] = useState([]);
    const [stores, setStores] = useState([]);
    const [sortOrder, setSortOrder] = useState("similarity");
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(device !== "mobile");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const location = useLocation();
    const navigate = useNavigate();
    const searchingPeice = location.state?.searchingPeice || null;

    const [filters, setFilters] = useState({
        category: new Set(),
        store: new Set(),
    });

    // Reset page on filter/sort change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortOrder]);

    // Always scroll to top on navigation/mount or page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname, currentPage]);

    useEffect(() => {
        setShowFilters(device !== "mobile");
    }, [device]);

    useEffect(() => {
        const productsFromState = location.state?.products || [];
        setLoading(true);

        // Simulation delay for cinematic effect
        const timer = setTimeout(() => {
            const productsCopy = JSON.parse(JSON.stringify(productsFromState));
            processProductsData(productsCopy);
            setProducts(productsCopy);
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [location.state?.products]);

    const getWebsiteName = (url) => {
        try {
            const { hostname } = new URL(url);
            return hostname.replace(/^www\./, "").split(".")[0].replace(/-/g, " ");
        } catch {
            return "store";
        }
    };

    const processProductsData = (prods) => {
        prods.forEach((p) => {
            p.seller = getWebsiteName(p.itemWebURL);
        });

        const extractedCats = [...new Set(prods.map(p => p.category).filter(Boolean))];
        const extractedStores = [...new Set(prods.map(p => p.seller).filter(Boolean))];

        setCategories(extractedCats);
        setStores(extractedStores);
    };

    const toggleFilter = (group, value) => {
        setFilters((prev) => {
            const next = { ...prev, [group]: new Set(prev[group]) };
            next[group].has(value) ? next[group].delete(value) : next[group].add(value);
            return next;
        });
    };

    const clearFilters = () => {
        setFilters({ category: new Set(), store: new Set() });
    };

    const visibleProducts = products
        .filter((p) => {
            if (filters.store.size && !filters.store.has(p.seller)) return false;
            if (filters.category.size && !filters.category.has(p.category)) return false;
            return true;
        })
        .sort((a, b) => {
            if (sortOrder === "lowest_price") return a.price - b.price;
            if (sortOrder === "highest_price") return b.price - a.price;
            return 0;
        });

    const totalPages = Math.ceil(visibleProducts.length / itemsPerPage);
    const paginatedProducts = visibleProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="min-h-screen bg-background pt-24 pb-24 selection:bg-primary selection:text-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    <aside className="lg:col-span-3 space-y-16 animate-in slide-in-from-left-20 duration-1000">
                        <SearchSourcePreview searchingPeice={searchingPeice} visibleCount={visibleProducts.length} />

                        <SearchFilters
                            categories={categories}
                            stores={stores}
                            filters={filters}
                            toggleFilter={toggleFilter}
                            showFilters={showFilters}
                            setShowFilters={setShowFilters}
                            clearFilters={clearFilters}
                        />
                    </aside>

                    <main className="lg:col-span-9 space-y-16 animate-in slide-in-from-right-20 duration-1000">
                        {loading ? (
                            <SearchSkeleton />
                        ) : visibleProducts.length === 0 ? (
                            <SearchEmptyState clearFilters={clearFilters} />
                        ) : (
                            <div className="space-y-24">
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 pt-4">
                                    {paginatedProducts.map((p, idx) => (
                                        <SearchProductCard
                                            key={p.item_id}
                                            product={p}
                                            idx={idx}
                                            onClick={() =>
                                                navigate(`/product/${p.item_id}`, {
                                                    state: {
                                                        product: p,
                                                        similarProducts: visibleProducts.filter((x) => x.category === p.category),
                                                    },
                                                })
                                            }
                                        />
                                    ))}
                                </div>

                                <SearchPagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
