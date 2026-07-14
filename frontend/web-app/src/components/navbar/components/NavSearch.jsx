import React from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useOnboarding, ONBOARDING_STEPS } from "../../../providers/OnboardingProvider";
import { useDevice } from "../../../providers/DeviceProvider";

export default function NavSearch({ 
  scrolled, 
  onSearchClick, 
  t
}) {
  const handleSearchClick = (e) => {
    e.preventDefault();
    onSearchClick();
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <Button 
        id="navbar-search-button"
        variant="outline" 
        onClick={handleSearchClick}
        type="button"
        className={cn(
            "group relative border-2 font-black uppercase tracking-widest text-[10px] transition-all duration-700 italic flex items-center justify-center overflow-hidden",
            scrolled 
              ? "h-12 w-12 rounded-full bg-primary text-white border-primary shadow-[0_0_30px_rgba(var(--primary),0.3)] p-0" 
              : "h-14 rounded-2xl bg-white/10 backdrop-blur-md border-white/20 hover:border-primary text-foreground px-10 gap-4"
        )}
      >
        <Camera size={scrolled ? 22 : 18} className="shrink-0 transition-transform duration-500 group-hover:scale-110" />
        {!scrolled && <span className="hidden sm:inline">{t("searchWithImage")}</span>}
        
        {/* Premium Glow Effect */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -inset-1 bg-primary/10 rounded-full animate-pulse-slow opacity-0 group-hover:opacity-100" />
      </Button>
    </div>
  );
}
