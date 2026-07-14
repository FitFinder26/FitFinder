import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AIVisualizer({ t }) {
  return (
    <div className="hidden lg:block flex-1 animate-in slide-in-from-right-20 duration-1000 perspective-1000">
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 transition-transform duration-1000 ease-out">
        {/* Abstract Card Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[5rem] blur-[120px] opacity-20 pointer-events-none" />

        <div className="relative w-[500px] h-[600px] rounded-[4rem] bg-background/40 backdrop-blur-3xl border-4 border-foreground/5 overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.3)] group cursor-default">
          {/* Header Simulation */}
          <div className="absolute top-10 inset-inline-10 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-black text-[10px] tracking-[0.4em] uppercase opacity-40 italic">{t("hero.liveSegmentation")}</span>
            </div>
            <Badge className="bg-white/10 text-primary border-none text-[8px] font-black tracking-widest italic">{t("hero.neuralEngine")}</Badge>
          </div>

          {/* Visual Animation Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full p-20 flex items-center justify-center">
              <svg className="w-full h-full filter drop-shadow-[0_0_30px_rgba(250,88,126,0.3)] animate-float" viewBox="0 0 400 500">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="stop-color-primary" stopColor="var(--primary)" stopOpacity="0.4" />
                    <stop offset="100%" className="stop-color-secondary" stopColor="var(--secondary)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                <path className="fill-[url(#grad1)] stroke-primary stroke-[6] animate-pulse duration-[3000ms]"
                  d="M 120 100 Q 150 80 180 90 L 220 120 Q 200 160 180 200 Q 140 190 120 160 Z" />
                <path className="fill-[url(#grad1)] stroke-secondary stroke-[6] animate-pulse duration-[4000ms] delay-1000"
                  d="M 230 180 Q 280 160 320 200 L 330 300 Q 280 340 230 310 Z" />
                <path className="fill-[url(#grad1)] stroke-primary stroke-[6] animate-pulse duration-[5000ms] delay-2000"
                  d="M 100 280 Q 160 260 200 300 L 180 400 Q 120 420 80 380 Z" />

                <rect className="fill-primary/20 animate-scan" x="50" y="0" width="300" height="4" />

                {[
                  { cx: 150, cy: 140, d: 0.1 }, { cx: 260, cy: 230, d: 0.8 }, { cx: 140, cy: 350, d: 1.5 },
                  { cx: 200, cy: 110, d: 0.5 }, { cx: 290, cy: 200, d: 1.2 }, { cx: 120, cy: 320, d: 1.9 }
                ].map((p, i) => (
                  <g key={i} className="animate-in fade-in duration-1000" style={{ animationDelay: `${p.d}s` }}>
                    <circle cx={p.cx} cy={p.cy} r="12" className="fill-primary/10 stroke-primary/30 stroke-[2] animate-ping" />
                    <circle cx={p.cx} cy={p.cy} r="6" className="fill-primary" />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="absolute bottom-10 inset-inline-10 h-24 bg-background/80 backdrop-blur-3xl rounded-[2.5rem] border-2 border-primary/20 flex items-center justify-between px-10 group-hover:translate-y-0 translate-y-32 transition-transform duration-700">
            <div className="flex gap-4 items-center">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Sparkles size={24} />
              </div>
              <div className="space-y-1 text-start">
                <h4 className="font-black uppercase text-[10px] tracking-widest">{t("hero.smartExtract")}</h4>
                <p className="text-[9px] font-bold opacity-40 uppercase tracking-tighter">{t("hero.aiVisionEngine")}</p>
              </div>
            </div>
            <ArrowRight className="text-primary group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:-scale-x-100 transition-transform" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
