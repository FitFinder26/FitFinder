import React from "react";
import { Languages, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoSrc from "../../../assets/logo.png";
import { getLanguageDisplayName } from "../../../locales/languageHelper";

export default function NavBranding({ 
  scrolled, 
  device, 
  currentLang, 
  onLanguageToggle, 
  theme, 
  onThemeToggle, 
  navigate 
}) {
  return (
    <div className="flex items-center gap-4 relative z-30">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => navigate("/", { state: { cameFrom: "navbar" } })}
      >
        <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            <img 
                src={logoSrc} 
                alt="FitFinder" 
                className={cn(
                    "transition-all duration-700 group-hover:rotate-12 group-hover:scale-110",
                    scrolled ? "w-8 h-8" : "w-14 h-14"
                )} 
            />
        </div>
        {!scrolled && (
            <div className="hidden lg:flex flex-col animate-in fade-in slide-in-from-left-4 duration-1000">
                <span className="font-black text-xs uppercase tracking-[0.5em] italic leading-none opacity-40">AI PLATFORM</span>
                <span className="font-black text-xl uppercase italic tracking-tighter leading-none pt-1">FITFINDER</span>
            </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onLanguageToggle}
          className={cn(
            "hidden md:flex gap-3 rounded-xl hover:bg-muted/50 group border border-transparent hover:border-border/10",
            scrolled ? "h-8 px-2" : "h-10 px-4"
          )}
        >
          <Languages size={14} className="group-hover:rotate-180 transition-transform duration-700" />
          {!scrolled && <span className="font-black text-[10px] uppercase tracking-widest">{getLanguageDisplayName(currentLang)}</span>}
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onThemeToggle}
          className={cn(
            "flex items-center justify-center rounded-xl hover:bg-muted/50 group border border-transparent hover:border-border/10 transition-all duration-700",
            scrolled ? "h-8 w-8" : "h-10 w-10 px-2"
          )}
        >
          {theme === "dark" ? (
            <Sun size={16} className="text-yellow-400 animate-in zoom-in-50 duration-500" />
          ) : (
            <Moon size={16} className="text-secondary animate-in zoom-in-50 duration-500" />
          )}
        </Button>
      </div>
    </div>
  );
}
