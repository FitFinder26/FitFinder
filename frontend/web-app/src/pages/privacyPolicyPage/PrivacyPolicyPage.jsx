import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import { Button } from "@/components/ui/button";
import { Info, Database, Settings, Lock, Share2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const PrivacyPolicyPage = () => {
    const { t } = useTranslation(NAMESPACES.privacy);
    const { i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState("introduction");

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => scrollToSection("introduction"), []);

    // Track active section on scroll
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { id: "introduction", label: t("navIntroduction"), icon: <Info size={18} /> },
        { id: "information", label: t("navInformation"), icon: <Database size={18} /> },
        { id: "information-usage", label: t("navInformationUsage"), icon: <Settings size={18} /> },
        { id: "storage", label: t("navStorage"), icon: <Lock size={18} /> },
        { id: "third-party", label: t("navThirdParty"), icon: <Share2 size={18} /> },
        { id: "choices", label: t("navChoices"), icon: <Eye size={18} /> },
    ];

    return (
        <div className="flex lg:flex-row flex-col bg-background text-foreground min-h-screen pt-24 animate-in fade-in duration-1000 font-sans">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block sticky top-28 self-start w-72 p-8 border-r border-border/10">
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            className={cn(
                                "justify-start gap-4 h-12 rounded-xl group transition-all px-4 border-l-2",
                                activeSection === item.id
                                    ? "bg-primary/10 text-primary border-primary"
                                    : "hover:bg-muted/50 border-transparent"
                            )}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className={cn(
                                "transition-all",
                                activeSection === item.id ? "opacity-100 text-primary" : "opacity-20 group-hover:opacity-100 group-hover:text-primary"
                            )}>
                                {item.icon}
                            </span>
                            <span className="font-black tracking-tighter uppercase text-[10px]">{item.label}</span>
                        </Button>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 md:px-12 lg:px-24 py-12">
                <section className="mb-24 space-y-8 max-w-4xl px-6 md:px-0">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85]">
                        {t("heroTitle") || "Privacy Policy"}
                    </h1>
                    <p className="text-xl font-bold opacity-40 italic tracking-tight underline decoration-primary/20 decoration-4 underline-offset-8">
                        {t("heroSubtitle") || "Your digital privacy is our foundation."}
                    </p>
                </section>

                <div className="space-y-32 max-w-4xl pb-40 px-6 md:px-0">
                    {navItems.map((item) => (
                        <section key={item.id} id={item.id} className="space-y-8 animate-in slide-in-from-bottom-10 duration-700">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-primary group transition-all hover:bg-primary hover:text-white">
                                    {item.icon}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic whitespace-nowrap">
                                    {item.label}
                                </h2>
                                <div className="h-px bg-border/20 flex-1" />
                            </div>

                            <div className="text-lg md:text-xl font-bold leading-relaxed opacity-70 italic tracking-tight pl-12 border-l-4 border-muted">
                                {item.id === "information" || item.id === "information-usage" ? (
                                    <ul className="space-y-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <li key={i} className="flex gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-4 shrink-0" />
                                                {t(item.id === 'information' ? `infoItem${i}` : `usageItem${i}`)}
                                            </li>
                                        ))}
                                    </ul>
                                ) : item.id === "storage" ? (
                                    <p>
                                        {t("storageText1")} <strong>{t("storageStrong")}</strong> {t("storageText2")}
                                    </p>
                                ) : (
                                    <p>{t(item.id === 'introduction' ? 'introText' : `${item.id === 'third-party' ? 'thirdPartyText' : 'choicesText'}`)}</p>
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;
