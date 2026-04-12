import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const BrandingPanel = ({ usedForm, toggleForm, t }) => {
    const { i18n } = useTranslation();

    return (
        <div className={cn(
            "md:w-[45%] bg-primary p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden transition-all duration-1000 ease-in-out",
            usedForm === 'login' ? "md:order-last" : "md:order-first"
        )}>
            <div className="z-10 space-y-6">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-[-0.05em] uppercase italic leading-[0.85]">
                        {usedForm === 'signup' ? t("joinWithUs") : t("welcomeBack")}
                    </h2>
                    <p className="text-white/70 font-bold max-w-xs text-sm leading-relaxed italic border-l-2 border-white/20 pl-4">
                        {usedForm === 'signup'
                            ? t("signupTagline")
                            : t("loginTagline")}
                    </p>
                </div>
            </div>

            <div className="z-10 flex flex-col gap-6">
                <Button
                    variant="ghost"
                    className="w-fit text-white font-black uppercase tracking-[0.2em] p-0 h-auto gap-4 group hover:bg-transparent"
                    onClick={toggleForm}
                >
                    <span className="group-hover:translate-x-2 transition-transform text-lg italic underline underline-offset-8 decoration-2">
                        {usedForm === 'signup' ? t("logIn") : t("signUp")}
                    </span>
                    {i18n.language === "en" ? <ChevronRight size={24} className="group-hover:translate-x-3 transition-transform text-white/50" /> : <ChevronLeft size={24} className="group-hover:translate-x-3 transition-transform text-white/50" />}
                </Button>
            </div>

            {/* Dynamic background aesthetics */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-secondary/30 rounded-full blur-2xl -translate-x-1/2" />
        </div>
    );
};

export default BrandingPanel;
