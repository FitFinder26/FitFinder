import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import SplitText from "../animations/SplitText";

export default function FeedbackSection({ t, feedbackFormLink }) {
  const { i18n } = useTranslation();

  const renderMessage = (text) => {
    const highlights = i18n.language === "ar" ? ["صوتك", "مستقبل"] : ["voice", "future"];
    const regex = new RegExp(`(${highlights.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const isHighlight = highlights.some(h => part.toLowerCase().includes(h.toLowerCase()));
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
          className={isHighlight ? "text-secondary drop-shadow-[0_0_20px_rgba(107,203,119,0.4)]" : "group-hover:text-transparent transition-colors duration-1000"}
        >
          {part}
        </motion.span>
      );
    });
  };

  return (
    <section className="w-full py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <Badge className="bg-secondary/10 text-secondary border-none px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest italic leading-none animate-pulse">
              {t("feedback.communityInsights")}
            </Badge>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none">
            <SplitText>{t("feedback.title")}</SplitText>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative group cursor-pointer overflow-hidden rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
          onClick={() => window.open(feedbackFormLink)}
        >
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 bg-background p-16 md:p-24 border-8 border-muted/10 group-hover:border-white/20 transition-all duration-1000">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-muted flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-1000 rotate-[-8deg] group-hover:rotate-0 shadow-2xl">
              <MessageCircle className="text-primary" size={60} strokeWidth={2.5} />
            </div>
            <div className="flex-1 space-y-6 text-center md:text-start">
              <p className="text-3xl text-start md:text-5xl font-black leading-[0.9] italic transition-colors duration-1000 tracking-tighter">
                {renderMessage(t("feedback.message"))}
              </p>
              <p className="text-3xl text-start md:text-5xl font-black transition-transform leading-[0.9] italic transition-colors duration-1000 tracking-tighter">
                FIT<span className="text-secondary drop-shadow-[0_10px_30px_rgba(107,203,119,0.3)]">FINDER</span>
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-primary transition-colors duration-1000">
                <span className="relative text-xl font-bold uppercase tracking-widest leading-none group/link py-1">
                  {t("feedback.submitReview")}
                  <span className="absolute bottom-0 start-0 w-0 h-1 bg-current transition-all duration-500 group-hover:w-full" />
                </span>
                {i18n.language === "en" ? (
                  <ArrowRight className="animate-in slide-in-from-left-2 transition-all group-hover:translate-x-4" strokeWidth={4} />
                ) : (
                  <ArrowLeft className="animate-in slide-in-from-right-2 transition-all group-hover:-translate-x-4" strokeWidth={4} />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
