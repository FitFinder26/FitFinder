import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../locales/namespaces";
import { useTheme } from "../../providers/ThemeProvider";
import { cn } from "@/lib/utils";

// Assets
import asosDark from "../../assets/stores/asos-logo.svg";
import asosLight from "../../assets/stores/asos-logo-white.svg";
import ebayDark from "../../assets/stores/ebay-dark-logo.png";
import ebayLight from "../../assets/stores/ebay-light-logo.png";
import shopifyDark from "../../assets/stores/shopify-logo-color-dark-bg.svg";
import shopifyLight from "../../assets/stores/shopify-logo-color-white-bg.svg";

export default function StoresSection() {
  const { t } = useTranslation(NAMESPACES.home);
  const { theme } = useTheme();
  
  // Resolve theme for rendering
  const [isDark, setIsDark] = React.useState(false);
  
  React.useEffect(() => {
    const checkDark = () => {
      const resolved = theme === "system" 
        ? window.matchMedia("(prefers-color-scheme: dark)").matches 
        : theme === "dark";
      setIsDark(resolved);
    };
    checkDark();
  }, [theme]);

  const shopifyLogo = isDark ? shopifyDark : shopifyLight;
  const ebayLogo = isDark ? ebayDark : ebayLight;
  const asosLogo = isDark ? asosLight : asosDark;

  const stores = [
    { name: "ASOS", logo: asosLogo },
    { name: "eBay", logo: ebayLogo },
    { name: "Shopify", logo: shopifyLogo },
    // Repeat for infinite effect
    { name: "ASOS", logo: asosLogo },
    { name: "eBay", logo: ebayLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "ASOS", logo: asosLogo },
    { name: "eBay", logo: ebayLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "ASOS", logo: asosLogo },
    { name: "eBay", logo: ebayLogo },
    { name: "Shopify", logo: shopifyLogo },
  ];

  return (
    <section className="w-full py-32 relative overflow-hidden bg-foreground/5 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 animate-in fade-in duration-1000">
                {t("stores.subtitle") || "OUR NETWORK"}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter opacity-60 text-foreground">
                {t("stores.title") || "GLOBAL COLLABORATORS"}
            </h2>
      </div>

      <div className="flex w-[200%] gap-12">
        <motion.div 
            className="flex items-center gap-12 md:gap-32 px-12"
            animate={{ x: [0, -1035] }}
            transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
            }}
        >
          {stores.map((store, i) => (
            <div 
                key={i} 
                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-32 md:w-48 shrink-0"
            >
              <img 
                src={store.logo} 
                alt={store.name} 
                className={cn(
                  "h-10 md:h-14 w-auto object-contain transition-all duration-700",
                  store.invert && "dark:invert"
                )}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate for seamless looping */}
        <motion.div 
            className="flex items-center gap-12 md:gap-32 px-12"
            animate={{ x: [0, -1035] }}
            transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
            }}
        >
          {stores.map((store, i) => (
            <div 
                key={i} 
                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-32 md:w-48 shrink-0"
            >
              <img 
                src={store.logo} 
                alt={store.name} 
                className="h-10 md:h-14 w-auto object-contain transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
