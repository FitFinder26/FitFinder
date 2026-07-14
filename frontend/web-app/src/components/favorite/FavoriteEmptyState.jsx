import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FavoriteEmptyState = ({ noDataFound, navigate, t }) => {
  return (
    <div className="flex flex-col items-center justify-center py-40 text-center space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="relative">
        <img
          src={noDataFound}
          alt={t("noResultsAlt")}
          className="w-96 h-96 opacity-5 grayscale brightness-50"
        />
        <Heart
          size={100}
          className="absolute inset-0 m-auto text-rose-500 opacity-20 animate-pulse"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-5xl font-black uppercase tracking-tighter opacity-20">
          {t("emptyTitle")}
        </h3>
        <p className="text-muted-foreground font-bold max-w-sm mx-auto tracking-tight text-lg opacity-60">
          {t("emptyDesc")}
        </p>
      </div>
      <button
        className="rounded-[2.5rem] h-20 px-16 bg-primary text-white font-black border-none uppercase tracking-[0.2em] text-xl hover:scale-110 transition-all shadow-[0_20px_60px_rgba(250,88,126,0.4)] cursor-pointer"
        onClick={() => navigate("/")}
      >
        {t("browseNow")}
      </button>
    </div>
  );
};

export default FavoriteEmptyState;
