import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Logo from "../components/Logo";
import { PlayCircle, Users, Sparkles, BookOpen, Layers, ShieldCheck, ChevronRight } from "lucide-react";

const AboutUsPage = () => {
  const { t } = useTranslation(NAMESPACES.about);
  const { i18n } = useTranslation();
  const location = useLocation();
  const { toSection } = location.state || {};

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (toSection) scrollToSection(toSection);
    else scrollToSection("hero");
  }, [toSection]);

  const navItems = [
    { id: "hero", label: t("navAbout"), icon: <Sparkles size={18} /> },
    { id: "introduction", label: t("navIntroduction"), icon: <BookOpen size={18} /> },
    { id: "how-it-works", label: t("navHowItWorks"), icon: <PlayCircle size={18} /> },
    { id: "access", label: t("navUserAccess"), icon: <Layers size={18} /> },
    { id: "features", label: t("navFeatures"), icon: <Sparkles size={18} /> },
    { id: "personalization", label: t("navPersonalization"), icon: <Sparkles size={18} /> },
    { id: "academic", label: t("navAcademic"), icon: <BookOpen size={18} /> },
    { id: "contributors", label: t("navContributors"), icon: <Users size={18} /> },
  ];

  return (
    <div className="flex bg-background text-foreground animate-in fade-in duration-1000">
      {/* Sticky Sidebar */}
      <aside className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)] w-72 p-8 border-r border-border/10">
        <nav className="flex flex-col gap-2">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] opacity-30 mb-8 ml-4 italic">Directory</h3>
            {navItems.map((item) => (
                <Button 
                    key={item.id}
                    variant="ghost" 
                    className="justify-start gap-4 h-12 rounded-xl group transition-all hover:bg-muted/50 border-l-2 border-transparent hover:border-primary px-4"
                    onClick={() => scrollToSection(item.id)}
                >
                    <span className="opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all">
                        {item.icon}
                    </span>
                    <span className="font-black tracking-tighter uppercase text-[10px]">{item.label}</span>
                </Button>
            ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-x-hidden">
        {/* Section: Hero */}
        <section id="hero" className="relative min-h-[60vh] flex flex-col items-center justify-center p-12 text-center md:text-left md:items-start lg:p-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="max-w-4xl space-y-10 animate-in slide-in-from-bottom-10 duration-1000 z-10">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-6 py-2 rounded-full font-black uppercase tracking-[0.2em] mb-4 text-xs italic">
                    Innovation Lab 2024
                </Badge>
                <h1 className="text-6xl md:text-9xl font-black tracking-[-0.05em] uppercase italic leading-[0.8]">
                    {t("heroTitle")}
                </h1>
                <p className="text-2xl md:text-4xl font-bold text-muted-foreground max-w-2xl leading-[1.1] tracking-tight">
                    {t("heroSubtitle")}
                </p>
            </div>
            {/* Visual element */}
            <div className="absolute top-24 right-24 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 animate-bounce opacity-20">
                <ChevronRight size={40} className="rotate-90" />
            </div>
        </section>

        {/* Section: Introduction */}
        <section id="introduction" className="py-32 px-12 lg:px-24 bg-muted/10 relative">
            <div className="max-w-5xl space-y-16">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                        {t("introTitle")}
                    </h2>
                    <div className="h-2.5 w-32 bg-primary rounded-full" />
                </div>
                <div className="space-y-8 text-2xl md:text-3xl font-bold leading-tight opacity-70 italic border-l-8 border-border pl-12 py-4">
                    <p className="tracking-tighter">{t("introText1")}</p>
                    <p className="tracking-tighter text-muted-foreground">{t("introText2")}</p>
                </div>
            </div>
        </section>

        {/* Section: How It Works */}
        <section id="how-it-works" className="py-32 px-12 lg:px-24">
            <div className="max-w-5xl space-y-20">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                        {t("howItWorksTitle")}
                    </h2>
                </div>
                
                <div className="aspect-video w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] bg-black border-8 border-muted/5 relative group transition-all duration-700 hover:scale-[1.02]">
                    <video 
                        className="w-full h-full object-cover"
                        controls 
                        src="https://www.dropbox.com/scl/fi/wtzwj2trdhnd611o44mg5/How-to-use.mp4?rlkey=n6xa1fwtukjud63ujsg3g6ob1&st=h8i4vpfb&raw=1"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                        <div key={step} className="flex flex-col gap-4 group">
                            <span className="text-7xl font-black opacity-5 group-hover:opacity-100 group-hover:text-primary transition-all duration-700 italic leading-none">
                                {step.toString().padStart(2, '0')}
                            </span>
                            <div className="h-px w-full bg-border/20 group-hover:bg-primary/50 transition-all" />
                            <p className="text-xl font-black leading-none uppercase tracking-tighter pt-2">
                                {t(`step${step}`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section: Access */}
        <section id="access" className="py-32 px-12 lg:px-24 bg-primary/5">
            <div className="max-w-5xl space-y-16">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                    {t("accessTitle")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-background p-12 rounded-[3.5rem] shadow-2xl space-y-8 border border-border/10 group transition-all hover:-translate-y-4">
                        <div className="w-20 h-20 bg-muted/50 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Users size={40} />
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-3xl font-black uppercase tracking-tight italic">{t("guestUsers")}</h4>
                            <p className="text-xl font-bold opacity-60 leading-relaxed italic">{t("guestDesc")}</p>
                        </div>
                    </div>
                    <div className="bg-primary text-white p-12 rounded-[3.5rem] shadow-[0_30px_70px_rgba(250,88,126,0.4)] space-y-8 group transition-all hover:-translate-y-4">
                        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                            <ShieldCheck size={40} />
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-3xl font-black uppercase tracking-tight italic">{t("loggedInUsers")}</h4>
                            <p className="text-xl font-bold opacity-90 leading-relaxed italic">{t("loggedInDesc")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section: Features */}
        <section id="features" className="py-32 px-12 lg:px-24">
             <div className="max-w-5xl space-y-20">
                <div className="flex items-center gap-10">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic whitespace-nowrap">
                        {t("featuresTitle")}
                    </h2>
                    <div className="h-1 bg-border/20 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1,2,3,4,5,6,7].map(f => (
                        <Card key={f} className="bg-muted/10 border-none p-10 rounded-[3rem] group hover:bg-black hover:text-white transition-all duration-700 cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary">
                                <span className="font-black italic text-primary group-hover:text-white">{f}</span>
                            </div>
                            <span className="font-black text-2xl uppercase tracking-tighter leading-none italic block">{t(`feature${f}`)}</span>
                        </Card>
                    ))}
                </div>
             </div>
        </section>

        {/* Sections: Contributors & Credits */}
        <section id="contributors" className="py-32 px-12 lg:px-24 bg-muted/5">
            <div className="max-w-5xl space-y-20">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                        {t("contributorsTitle")}
                    </h2>
                </div>
                <div className="space-y-10">
                     {[1,2,3,4,5].map(c => (
                         <div key={c} className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-12 bg-background p-12 rounded-[3.5rem] border border-border/10 hover:border-primary/50 transition-all shadow-sm hover:shadow-2xl">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20">CONTRIBUTOR {c}</span>
                                <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">{t(`contributor${c}Name`)}</h3>
                            </div>
                            <div className="h-px flex-1 bg-border/10 mb-5 hidden md:block" />
                            <Badge variant="outline" className="w-fit px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[12px] opacity-40 border-2 italic">
                                {t(`contributor${c}Role`)}
                            </Badge>
                         </div>
                     ))}
                </div>
            </div>
        </section>

        <footer className="py-24 px-12 lg:px-24 border-t border-border/10 text-center bg-muted/2">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex justify-center">
                    <Logo fontSize={60} />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.8em] opacity-20 max-w-sm leading-relaxed">
                        © {new Date().getFullYear()} {t("footerText")} <br />
                        COMPUTER SCIENCE DEPT | CSED 2026
                    </p>
                    <div className="h-8 w-px bg-primary/20" />
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-10">ALEXANDRIA UNIVERSITY | DESIGNED BY AI</p>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutUsPage;
