import React from "react";
import { ShieldCheck, Zap, Brain } from "lucide-react";
import BlurReveal from "../animations/BlurReveal";

export default function FeaturesSection({ t }) {
  const features = [
    { icon: <ShieldCheck />, title: t("features.secureSearch"), desc: t("features.secureSearchDesc") },
    { icon: <Zap />, title: t("features.instantLookup"), desc: t("features.instantLookupDesc") },
    { icon: <Brain />, title: t("features.learnable"), desc: t("features.learnableDesc") }
  ];

  return (
    <div className="container relative z-10 -mt-12 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
      {features.map((f, i) => (
        <BlurReveal key={i} delay={i * 0.2}>
          <div className="flex flex-col items-center text-center p-8 sm:p-12 bg-background/40 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3.5rem] border-4 border-foreground/5 hover:bg-primary transition-all duration-700 group scale-95 hover:scale-100 shadow-2xl shadow-transparent hover:shadow-primary/20">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-white group-hover:rotate-12 transition-all duration-700">
              {React.cloneElement(f.icon, { size: 32, strokeWidth: 2.5 })}
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4 group-hover:text-white transition-colors duration-700">{f.title}</h3>
            <p className="font-bold opacity-30 group-hover:opacity-100 group-hover:text-white italic tracking-tight transition-all duration-700 leading-tight">
              {f.desc}
            </p>
          </div>
        </BlurReveal>
      ))}
    </div>
  );
}
