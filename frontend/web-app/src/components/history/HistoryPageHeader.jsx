import React from "react";

const HistoryPageHeader = ({ t }) => {
  return (
    <div className="px-4 space-y-2">
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 leading-[0.8]">
        {t("title")}
      </h1>
      <div className="h-1.5 w-20 bg-primary rounded-full mb-4" />
      <p className="text-muted-foreground font-black tracking-[0.4em] uppercase text-[9px] opacity-40">
        {t("styleJourney")}
      </p>
    </div>
  );
};

export default HistoryPageHeader;
