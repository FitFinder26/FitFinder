import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Camera, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "../animations/SplitText";

export default function HeroSection({
  t,
  device,
  isLoggedIn,
  handleSearchWithImageClick,
  navigate
}) {
  const { i18n } = useTranslation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -150]);

  return (
    <section
      ref={containerRef}
      dir={i18n.dir()}
      className="relative w-full min-h-[120vh] flex flex-col items-center justify-start pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 box-border overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[80%] bg-primary/10 rounded-full blur-[180px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[70%] bg-secondary/10 rounded-full blur-[180px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:invert" />
      </motion.div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container relative z-10 flex flex-col items-center justify-center gap-16"
      >
        {/* Centered Messaging */}
        <div className="max-w-4xl space-y-12 text-center perspective-2000">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <Badge variant="outline" className="flex items-center gap-2 px-6 py-2 border-primary/20 bg-primary/5 text-primary border-none backdrop-blur-md rounded-full">
                <Zap size={14} className="fill-current text-foreground" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] leading-none ps-2">{t("hero.aiPowered")}</span>
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-[-0.05em] leading-[0.8] text-foreground">
              <SplitText delay={0.4} className="block text-primary/10">{t("hero.welcomeTo")}</SplitText>
              <div className="block overflow-hidden py-4">
                <motion.span
                  initial={{ y: "100%", rotate: 5 }}
                  whileInView={{ y: 0, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  FIT<span className="text-secondary drop-shadow-[0_10px_30px_rgba(107,203,119,0.3)]"> FINDER</span>
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 1.2 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl md:text-3xl font-bold italic tracking-tight leading-tight"
            >
              {t("hero.description")}
            </motion.p>
          </div>

          {/* Main Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto"
          >
            {(device === "desktop" || isLoggedIn) ? (
              <Button
                onClick={handleSearchWithImageClick}
                className="group relative h-20 sm:h-28 px-8 sm:px-16 rounded-[2rem] sm:rounded-[3rem] bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-700 overflow-hidden font-black text-lg sm:text-2xl uppercase tracking-tighter w-full sm:w-auto shadow-2xl shadow-black/10 hover:shadow-primary/30"
              >
                <Camera className="w-6 h-6 sm:w-9 sm:h-9 me-4 sm:me-6 transition-all duration-700 group-hover:rotate-12 group-hover:scale-125 group-hover:text-white" strokeWidth={2.5} />
                <span>{t("hero.searchWithImage")}</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/registration", { state: { form: "signup" } })}
                className="h-20 sm:h-28 px-10 sm:px-20 rounded-[2rem] sm:rounded-[3rem] bg-secondary text-white hover:bg-primary transition-all duration-700 font-black text-xl sm:text-3xl uppercase tracking-tighter w-full sm:w-auto shadow-2xl shadow-secondary/20 hover:shadow-primary/30"
              >
                {t("hero.join")}
              </Button>
            )}

            <Button
              variant="outline"
              onClick={() => navigate("/about-us", { state: { toSection: "how-it-works" } })}
              className="h-20 sm:h-28 px-8 sm:px-16 rounded-[2rem] sm:rounded-[3rem] bg-transparent border-4 border-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-700 font-black text-lg sm:text-2xl uppercase tracking-tighter w-full sm:w-auto group"
            >
              {t("hero.demo")}
              <ChevronRight className="ms-2 sm:ms-4 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:-scale-x-100 w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
