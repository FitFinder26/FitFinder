import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import SplitText from "../animations/SplitText";

export default function SocialSection({ t, instagramURL }) {
  return (
    <section className="w-full py-64 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-[150px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none">
            <SplitText>{t("social.title")}</SplitText>
          </h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-xl md:text-2xl font-bold italic max-w-2xl mx-auto"
          >
            {t("social.message")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-block"
          onClick={() => window.open(instagramURL)}
          dir="ltr"
        >
          <Button className="group relative h-32 px-16 rounded-[4rem] bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600 p-1 shadow-[0_30px_60px_rgba(238,42,123,0.3)] transition-transform hover:scale-110 duration-700 active:scale-95">
            <div className="h-full w-full bg-background rounded-[3.8rem] flex items-center justify-center gap-8 px-12 group-hover:bg-transparent transition-colors duration-1000">
              <Instagram className="text-foreground group-hover:text-white transition-colors duration-1000" size={56} strokeWidth={2.5} />
              <span className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-white transition-colors duration-1000">{t("social.instagramTag")}</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
