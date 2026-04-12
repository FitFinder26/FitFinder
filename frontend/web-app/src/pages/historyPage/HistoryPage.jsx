import { useEffect, useState } from "react";
import { useAuthContext } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useDevice } from "@/providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

// Components
import HistoryPageHeader from "../../components/history/HistoryPageHeader";
import HistoryFilters from "../../components/history/HistoryFilters";
import HistoryControls from "../../components/history/HistoryControls";
import HistoryCard from "../../components/history/HistoryCard";

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const formatInputDate = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export default function HistoryPage() {
  const { device } = useDevice();
  const { t } = useTranslation(NAMESPACES.history);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const [sortOrder, setSortOrder] = useState("most_recent");
  const [filters, setFilters] = useState({
    date: new Set(),
    specificDate: "",
  });
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [showFilters, setShowFilters] = useState(device !== "mobile");

  useEffect(() => {
    if (!isAuthenticated())
      navigate("/registration", { state: { form: "signup" } });
  }, [isAuthenticated, navigate]);

  const products = [
    {
      imageURL: "https://picsum.photos/seed/hist1/600/600",
      prompt: "Red t-shirt with vertical black stripes.",
      date: "20/12/2025",
      numOfLikes: "5",
      id: "1",
    },
    {
      imageURL: "https://picsum.photos/seed/hist2/600/600",
      prompt: "Minimal hoodie design.",
      date: "18/12/2025",
      numOfLikes: "12",
      id: "2",
    },
    {
      imageURL: "https://picsum.photos/seed/hist3/600/600",
      prompt: "Cyberpunk jacket concept.",
      date: "10/12/2025",
      numOfLikes: "7",
      id: "3",
    },
  ];

  useEffect(() => {
    setShowFilters(device !== "mobile");
  }, [device]);

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      next[group].has(value) ? next[group].delete(value) : next[group].add(value);
      return next;
    });
  };

  const filteredProducts = products
    .filter((p) => {
      const productDate = parseDate(p.date);
      const now = new Date();
      let presetMatch = false;
      let specificMatch = false;

      if (filters.date.size > 0) {
        presetMatch = [...filters.date].some((rule) => {
          const diff = (now - productDate) / (1000 * 60 * 60 * 24);
          if (rule === "today") return productDate.toDateString() === now.toDateString();
          if (rule === "last_7") return diff <= 7;
          if (rule === "last_30") return diff <= 30;
          return false;
        });
      }

      if (filters.specificDate) {
        specificMatch = p.date === formatInputDate(filters.specificDate);
      }

      if (filters.date.size === 0 && !filters.specificDate) return true;
      return presetMatch || specificMatch;
    })
    .sort((a, b) => {
      const da = parseDate(a.date);
      const db = parseDate(b.date);
      return sortOrder === "most_recent" ? db - da : da - db;
    });

  return (
    <div className="min-h-screen bg-background pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-10 animate-in slide-in-from-left-10 duration-700">
            <HistoryPageHeader t={t} />

            <HistoryFilters
              filters={filters}
              setFilters={setFilters}
              toggleFilter={toggleFilter}
              t={t}
            />

            <div className="lg:hidden px-4">
              <Button
                variant="outline"
                className="w-full h-16 rounded-2xl gap-3 font-black text-xl shadow-2xl border-2 uppercase tracking-tighter"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={24} />
                {showFilters ? tCommon("hide") : tCommon("show")} {t("filters")}
              </Button>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-12 animate-in slide-in-from-right-10 duration-700">
            <HistoryControls
              count={filteredProducts.length}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              t={t}
            />

            <div className="grid grid-cols-1 gap-14">
              {filteredProducts.map((p) => (
                <HistoryCard key={p.id} product={p} navigate={navigate} t={t} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
