import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useDevice } from "../providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";

export default function Footer({ navigationBlocked }) {
  const { t } = useTranslation(NAMESPACES.footer);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const { device } = useDevice();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="w-full mt-auto bg-background/50 backdrop-blur-xl border-t border-border/10 py-12 px-6 md:px-12 animate-in slide-in-from-bottom-10 duration-1000">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border/10">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo
                fontSize={device === "mobile" ? 50 : 70}
                scale={0.3}
                variant={2}
              />
            </div>
            <p className="text-muted-foreground text-lg font-medium max-w-md mx-auto md:mx-0">
              {t("tagline") || "Redefining fashion scanning with AI."}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4 text-center md:text-left">
            <h3 className="text-foreground font-bold text-xl">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors text-lg" onClick={() => handleNavigation("/")} disabled={navigationBlocked}>
                  {t("home")}
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors text-lg" onClick={() => handleNavigation("/about-us")} disabled={navigationBlocked}>
                  {t("about")}
                </Button>
              </li>
              <li>
                <a 
                  href={`mailto:fitfindercsed@gmail.com?subject=${encodeURIComponent(t("contactSubject", { appName: tCommon("appName") }))}&body=${encodeURIComponent(t("contactBody"))}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium inline-block"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="space-y-4 text-center md:text-left">
            <h3 className="text-foreground font-bold text-xl">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors text-lg" onClick={() => handleNavigation("/privacy-policy")} disabled={navigationBlocked}>
                  {t("privacy")}
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors text-lg" onClick={() => handleNavigation("/terms-of-service")} disabled={navigationBlocked}>
                  {t("terms")}
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-center">
          <p className="text-muted-foreground text-sm font-bold opacity-60 uppercase tracking-widest">
            {t("copyright", {
              year: new Date().getFullYear(),
              appName: tCommon("appName"),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
