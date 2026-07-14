import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Check, Sparkles, X, User, ShieldCheck } from "lucide-react";

export default function PreferenceSurvey({ onClose }) {
    const { t } = useTranslation(NAMESPACES.survey);
    const [step, setStep] = useState(0);
    const [open, setOpen] = useState(true);

    const styles = [
        { id: 1, key: "streetwear", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop" },
        { id: 2, key: "formal", img: "https://images.unsplash.com/photo-1594932224010-3866164ae15a?q=80&w=600&auto=format&fit=crop" },
        { id: 3, key: "boho", img: "https://images.unsplash.com/photo-1581067723713-35a5d1b7ae99?q=80&w=600&auto=format&fit=crop" },
        { id: 4, key: "athleisure", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=600&auto=format&fit=crop" },
    ];

    const handleAnswer = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            setStep(3);
            setTimeout(() => {
                setOpen(false);
                onClose?.();
            }, 2500);
        }
    };

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-2xl p-0 overflow-hidden border-none rounded-[2.5rem] sm:rounded-[4rem] bg-background/60 backdrop-blur-3xl shadow-[0_60px_120px_rgba(0,0,0,0.4)] md:min-h-[700px] flex flex-col justify-center">
                <div className="relative p-8 sm:p-12 md:p-20 space-y-10 sm:space-y-16">

                    {/* Close absolute */}
                    <Button variant="ghost" size="icon" className="absolute top-10 right-10 rounded-full hover:bg-muted w-12 h-12" onClick={handleClose}>
                        <X size={24} />
                    </Button>

                    {/* Header Area */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg backdrop-blur-md">
                                <Sparkles size={24} className="animate-pulse" />
                            </div>
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-30 italic leading-none">{t("heading")}</h3>
                        </div>
                        {step < 3 && (
                            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase italic leading-[0.8] animate-in slide-in-from-left-10 duration-700">
                                {step === 0 ? t("genderTitle") : step === 1 ? t("colorTitle") : t("styleTitle")}
                            </h2>
                        )}
                    </div>

                    {/* Body Area */}
                    <div className="min-h-[350px] flex flex-col justify-center relative">
                        {step === 0 && (
                            <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {[
                                    { label: t("genderMale"), icon: <User size={28} /> },
                                    { label: t("genderFemale"), icon: <User size={28} /> },
                                    { label: t("genderPreferNot"), icon: <ShieldCheck size={28} /> }
                                ].map((opt, i) => (
                                    <Button
                                        key={i}
                                        variant="outline"
                                        className="h-24 rounded-[2rem] border-2 group hover:border-primary hover:bg-primary/5 transition-all text-2xl font-black uppercase tracking-tighter gap-8 justify-start px-12 italic"
                                        onClick={handleAnswer}
                                    >
                                        <span className="opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">{opt.icon}</span>
                                        {opt.label}
                                    </Button>
                                ))}
                            </div>
                        )}

                        {step === 1 && (
                            <div className="grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-10 duration-700">
                                {["red", "blue", "black", "white"].map((colorKey) => (
                                    <Button
                                        key={colorKey}
                                        variant="outline"
                                        className="h-32 rounded-[2.5rem] border-2 group hover:scale-[1.05] transition-all duration-500 overflow-hidden flex-col gap-0 p-0 shadow-sm border-border/10"
                                        onClick={handleAnswer}
                                    >
                                        <div className={cn("w-full h-20 transition-all duration-700 group-hover:h-24",
                                            colorKey === 'red' ? 'bg-rose-500' :
                                                colorKey === 'blue' ? 'bg-blue-600' :
                                                    colorKey === 'black' ? 'bg-stone-900' : 'bg-white border-b'
                                        )} />
                                        <div className="w-full flex-1 flex items-center justify-center bg-background group-hover:bg-muted/50 transition-colors">
                                            <span className="font-black uppercase tracking-[0.3em] text-[10px] italic">{t(`colors.${colorKey}`)}</span>
                                        </div>
                                    </Button>
                                ))}
                            </div>
                        )}

                        {step === 2 && (
                            <div className="grid grid-cols-2 gap-8 animate-in fade-in zoom-in duration-700">
                                {styles.map(s => (
                                    <div
                                        key={s.id}
                                        className="group cursor-pointer space-y-4"
                                        onClick={handleAnswer}
                                    >
                                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-1000 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] bg-muted">
                                            <img src={s.img} alt={s.key} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                                        </div>
                                        <span className="block text-center font-black uppercase tracking-[0.2em] italic text-[10px] opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all underline decoration-1 underline-offset-8">{t(`styles.${s.key}`)}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col items-center justify-center text-center space-y-12 animate-in zoom-in duration-1000">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[60px] animate-pulse" />
                                    <div className="w-40 h-40 bg-primary text-white rounded-[4rem] flex items-center justify-center relative z-10 shadow-2xl">
                                        <Check size={100} strokeWidth={5} className="animate-in zoom-in spin-in-90 duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-4 max-w-sm">
                                    <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none">{t("thanksTitle")}</h2>
                                    <p className="text-2xl font-bold opacity-50 italic leading-tight tracking-tight">{t("thanksText")}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Area */}
                    {step < 3 && (
                        <div className="flex items-center justify-between pt-12 border-t-2 border-border/5">
                            <div className="flex gap-4">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className={cn("h-2 transition-all duration-700 rounded-full", step === i ? "w-16 bg-primary" : "w-4 bg-muted/50")} />
                                ))}
                            </div>
                            <Button variant="ghost" className="font-black uppercase tracking-[0.4em] text-[10px] opacity-30 hover:opacity-100 hover:bg-transparent decoration-2 underline-offset-8" onClick={handleClose}>
                                {t("skip")}
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
