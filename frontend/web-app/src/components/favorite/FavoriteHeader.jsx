import React from "react";

const FavoriteHeader = ({ t }) => {
  return (
    <div className="px-4 space-y-2">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-2">
        {t("title")}
      </h1>
      <div className="h-1.5 w-24 bg-primary rounded-full mb-4" />
      <p className="text-muted-foreground font-black tracking-[0.2em] uppercase text-[10px] opacity-40">
        {t("curatedSelection")}
      </p>
    </div>
  );
};

export default FavoriteHeader;
