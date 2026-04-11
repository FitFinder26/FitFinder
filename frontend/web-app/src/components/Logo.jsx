import React from "react";
import { cn } from "@/lib/utils";

/**
 * FitFinder Master Logo
 * A high-end, brutalist-inspired logo using premium typography and geometric accents.
 */
export default function Logo({ 
    fontSize = 32, 
    className, 
    showDot = true,
    variant = "default" 
}) {
  return (
    <div 
        className={cn(
            "flex items-center gap-0 select-none group",
            className
        )}
        style={{ fontSize: `${fontSize}px` }}
    >
      <div className="relative flex items-center">
        {/* The Text Body */}
        <span className={cn(
            "font-black tracking-[-0.08em] uppercase italic leading-none transition-all duration-700",
            variant === "light" ? "text-white" : "text-foreground",
            "group-hover:text-primary"
        )}>
          FitFinder
        </span>

        {/* The Geometric 'Neural' Dot */}
        {showDot && (
            <div className="relative ml-1 overflow-visible">
                {/* Dot Base */}
                <div className={cn(
                    "w-2 h-2 rounded-full",
                    variant === "light" ? "bg-white" : "bg-primary",
                    "transition-transform duration-700 group-hover:scale-150 rotate-45"
                )} />
                
                {/* Dot Glow/Pulse (Hidden by default, active on hover) */}
                <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
            </div>
        )}

        {/* Subtle Bottom Accent - Only visible at larger scales */}
        {fontSize > 50 && (
            <div className="absolute -bottom-4 left-0 w-1/3 h-1.5 bg-primary/20 rounded-full group-hover:w-full transition-all duration-1000" />
        )}
      </div>
    </div>
  );
}
