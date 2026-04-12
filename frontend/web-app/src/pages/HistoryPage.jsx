import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useAuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useDevice } from "../providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Calendar, Filter, Clock, SlidersHorizontal, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const formatInputDate = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

function CardImageWithLoader({ src, alt, t }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="relative w-full aspect-square md:w-64 overflow-hidden bg-muted group-hover:scale-105 transition-transform duration-1000">
      {status === "loading" && <Skeleton className="absolute inset-0 z-10" />}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground bg-muted/50 p-4 text-center">
          {t("imageUnavailable")}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 shadow-2xl",
          status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-110"
        )}
      />
    </div>
  );
}

export default function HistoryPage() {
  const { device } = useDevice();
  const { t } = useTranslation(NAMESPACES.history);
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
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          
          <aside className="lg:col-span-1 space-y-16 animate-in slide-in-from-left-10 duration-700">
            <div className="px-4 space-y-3">
               <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 leading-[0.8]">{t("title")}</h1>
               <div className="h-2 w-32 bg-primary rounded-full mb-6" />
               <p className="text-muted-foreground font-black tracking-[0.4em] uppercase text-[10px] opacity-40">{t("styleJourney") || "YOUR STYLE EVOLUTION"}</p>
            </div>

            <div className="hidden lg:block space-y-16 px-4 shadow-2xl border border-border/10 p-10 rounded-[4rem] bg-muted/5 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border/10 pb-8">
                    <h3 className="text-3xl font-black tracking-tighter uppercase">{t("filters")}</h3>
                    <Filter size={24} className="opacity-20" />
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{t("timeframe") || "TEMPORAL RANGE"}</h4>
                    <div className="space-y-6">
                        {[
                        { label: t("today"), value: "today" },
                        { label: t("last7"), value: "last_7" },
                        { label: t("last30"), value: "last_30" },
                        ].map((opt) => (
                        <div key={opt.value} className="flex items-center space-x-5 group cursor-pointer" onClick={() => toggleFilter("date", opt.value)}>
                            <Checkbox checked={filters.date.has(opt.value)} className="w-7 h-7 rounded-xl border-2" />
                            <span className="text-xl font-black group-hover:text-primary transition-all uppercase tracking-tight italic">{opt.label}</span>
                        </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{t("specificDate")}</h4>
                    <div className="relative">
                        <Input 
                            type="date" 
                            className="bg-background rounded-[1.5rem] h-16 font-black border-2 border-border/10 px-6 pt-4 text-lg focus-visible:ring-primary/20"
                            value={filters.specificDate}
                            onChange={(e) => setFilters(p => ({ ...p, specificDate: e.target.value }))}
                        />
                        <Calendar className="absolute top-5 right-6 text-muted-foreground opacity-30 pointer-events-none" size={24} />
                    </div>
                  </div>
                </div>
            </div>

            <div className="lg:hidden px-4">
                <Button 
                    variant="outline" 
                    className="w-full h-20 rounded-3xl gap-4 font-black text-2xl shadow-2xl border-2 uppercase tracking-tighter"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <SlidersHorizontal size={24} />
                    {showFilters ? tCommon("hide") : tCommon("show")} {t("filters")}
                </Button>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-20 animate-in slide-in-from-right-10 duration-700">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 border-b-2 border-border/5 pb-12">
               <div className="space-y-3">
                <h2 className="text-6xl md:text-8xl font-black tracking-[-0.08em] uppercase leading-none italic opacity-90">
                    {filteredProducts.length} ARCHIVES
                </h2>
                <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary animate-pulse" />
                    <p className="text-muted-foreground font-black tracking-[0.3em] uppercase text-xs opacity-50">DESIGNED ACROSS TIME</p>
                </div>
               </div>
               
               <div className="flex items-center gap-6 w-full sm:w-auto">
                 <Select value={sortOrder} onValueChange={setSortOrder}>
                   <SelectTrigger className="w-full sm:w-[280px] h-16 rounded-[1.5rem] bg-muted/10 border-2 font-black uppercase tracking-widest shadow-xl text-xs">
                     <SelectValue placeholder={t("mostRecent")} />
                   </SelectTrigger>
                   <SelectContent className="rounded-2xl border-border/50 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-background/95 backdrop-blur-xl">
                     <SelectItem value="most_recent" className="font-black py-4 uppercase text-xs tracking-widest">{t("mostRecent")}</SelectItem>
                     <SelectItem value="least_recent" className="font-black py-4 uppercase text-xs tracking-widest">{t("leastRecent")}</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-14">
                {filteredProducts.map((p) => (
                    <Card 
                        key={p.id}
                        className="group flex flex-col md:flex-row bg-muted/5 hover:bg-background transition-all duration-1000 rounded-[4rem] overflow-hidden border border-transparent hover:border-border/10 hover:shadow-[0_80px_120px_rgba(0,0,0,0.15)] cursor-pointer relative"
                        onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}
                    >
                        <CardImageWithLoader src={p.imageURL} alt={p.prompt} t={t} />
                        
                        <CardContent className="flex-1 p-10 md:p-14 flex flex-col justify-between space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <Badge variant="secondary" className="px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        ENTRY {p.id.padStart(3, '0')}
                                    </Badge>
                                    <div className="flex items-center gap-3 text-muted-foreground font-black text-xs tracking-widest opacity-30 group-hover:opacity-60 transition-opacity">
                                        <Calendar size={14} />
                                        <span>{p.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] group-hover:text-primary transition-all duration-700 italic">
                                    {p.prompt}
                                </h3>
                            </div>

                            <div className="flex items-end justify-between pt-10 border-t-2 border-border/5">
                                <div className="flex gap-6 items-center">
                                     <div className="relative">
                                        <Button size="icon" variant="ghost" className="w-16 h-16 rounded-[1.2rem] shadow-2xl bg-background group-hover:bg-primary group-hover:text-white transition-all duration-500 hover:rotate-12 border border-border/10">
                                            <Search size={28} />
                                        </Button>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 rounded-full border-4 border-background" />
                                     </div>
                                     <div className="flex flex-col">
                                         <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 mb-2">ENGAGEMENT</span>
                                         <div className="flex items-center gap-3 text-3xl font-black -tracking-tighter">
                                            <AiFillHeart className="text-rose-500 group-hover:scale-125 transition-transform" />
                                            {p.numOfLikes}
                                         </div>
                                     </div>
                                </div>
                                <Button variant="link" className="font-black uppercase tracking-[0.3em] text-xs hover:tracking-[0.5em] transition-all group-hover:text-primary p-0">
                                    {t("viewDetails") || "RE-ACTIVATE DESIGN"}
                                </Button>
                            </div>
                        </CardContent>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </Card>
                ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
