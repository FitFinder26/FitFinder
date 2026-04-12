import {
  DoorOpen,
  Heart,
  History,
  MessageCircleDashed,
  User as UserIcon,
  Edit2 as EditIcon,
  Sun,
  Moon,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useAuthContext } from "../../providers/AuthProvider";
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Notifier } from "../Notifier";
import { useTheme } from "../../providers/ThemeProvider";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../locales/namespaces";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function SideBar({ isOpen, setIsOpen }) {
  const { t } = useTranslation(NAMESPACES.sidebar);
  const { i18n } = useTranslation();
  const { logout, user, updateProfileImage } = useAuthContext();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  
  const feedbackFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";

  useEffect(() => {
    setImgError(false);
  }, [user?.profileImageURL]);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleProfilePicClick = (e) => {
    e.stopPropagation();
    if (!user) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await updateProfileImage(file);
      if (res?.ok) {
        Notifier.notifySuccess(t("profileImageSuccess"));
      } else {
        Notifier.notifyError(t("profileImageFailed"));
      }
    } catch {
      Notifier.notifyError(t("profileImageFailed"));
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        side={i18n.language === "ar" ? "left" : "right"} 
        className="w-[300px] sm:w-[350px] p-0 border-none bg-background/95 backdrop-blur-2xl shadow-2xl"
      >
        <ScrollArea className="h-full">
          <div className="flex flex-col h-full min-h-[100vh]">
            {/* User Header */}
            <div className="relative py-12 flex flex-col items-center bg-gradient-to-b from-primary/5 to-transparent border-b border-border/5">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="relative group">
                <Avatar 
                  className="w-28 h-28 border-4 border-background shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-3"
                  onClick={handleProfilePicClick}
                >
                  <AvatarImage src={user?.profileImageURL} alt={user?.userName} />
                  <AvatarFallback className="bg-muted text-muted-foreground text-3xl">
                    <UserIcon size={48} />
                  </AvatarFallback>
                </Avatar>
                {user && (
                    <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-1 right-1 rounded-full w-9 h-9 border-2 border-background shadow-xl hover:bg-primary hover:text-white transition-colors"
                        disabled={uploading}
                        onClick={handleProfilePicClick}
                    >
                        {uploading ? <div className="w-4 h-4 border-2 border-current border-t-transparent animate-spin rounded-full" /> : <EditIcon size={16} />}
                    </Button>
                )}
              </div>
              <div className="mt-6 text-center space-y-1">
                <h2 className="text-2xl font-black tracking-tight text-foreground">
                    {user?.userName || t("guest")}
                </h2>
                <p className="text-muted-foreground text-sm font-medium opacity-70">
                    {user ? t("memberSince") || "FitFinder Member" : t("welcomeGuest") || "Welcome to FitFinder"}
                </p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6 space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start gap-4 h-14 text-lg font-bold hover:bg-primary/10 hover:text-primary transition-all rounded-xl px-4"
                onClick={() => handleNavigation("/history")}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg group-hover:bg-primary/20">
                    <History size={22} />
                </div>
                {t("recentSearches")}
              </Button>

              <Button 
                variant="ghost" 
                className="w-full justify-start gap-4 h-14 text-lg font-bold hover:bg-primary/10 hover:text-primary transition-all rounded-xl px-4"
                onClick={() => handleNavigation("/favorite")}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                    <Heart size={22} />
                </div>
                {t("savedItems")}
              </Button>

              <Button 
                variant="ghost" 
                className="w-full justify-start gap-4 h-14 text-lg font-bold hover:bg-primary/10 hover:text-primary transition-all rounded-xl px-4"
                onClick={() => window.open(feedbackFormLink)}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                    <MessageCircleDashed size={22} />
                </div>
                {t("sendFeedback")}
              </Button>

              <div className="space-y-2">
                <Button 
                    variant="ghost" 
                    className="w-full justify-between gap-4 h-14 text-lg font-bold hover:bg-primary/10 hover:text-primary transition-all rounded-xl px-4"
                    onClick={() => setIsThemeOpen(!isThemeOpen)}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                            {theme === "light" ? <Sun size={22} /> : <Moon size={22} />}
                        </div>
                        {t("theme")}
                    </div>
                    <ChevronDown size={20} className={cn("transition-transform duration-300", isThemeOpen && "rotate-180")} />
                </Button>
                {isThemeOpen && (
                    <div className="ml-14 mr-4 p-2 bg-muted/30 rounded-xl space-y-1 animate-in fade-in slide-in-from-top-4 duration-300">
                        {["light", "dark", "system"].map((tMode) => (
                            <Button
                                key={tMode}
                                variant={theme === tMode ? "secondary" : "ghost"}
                                size="sm"
                                className="w-full justify-between h-10 font-bold px-4 rounded-lg capitalize"
                                onClick={() => setTheme(tMode)}
                            >
                                {t(tMode)}
                                {theme === tMode && <FaCheck size={14} className="text-primary" />}
                            </Button>
                        ))}
                    </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-border/10 space-y-3">
                <Button 
                    variant="ghost" 
                    className="w-full justify-start gap-4 h-12 text-base font-bold text-muted-foreground hover:text-foreground transition-all px-4"
                >
                    <CgPassword size={20} />
                    {t("changePassword")}
                </Button>
                
                <Button 
                    variant="ghost" 
                    className="w-full justify-start gap-4 h-12 text-base font-black text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 transition-all px-4"
                    onClick={handleLogout}
                >
                    <DoorOpen size={20} />
                    {t("signOut")}
                </Button>
              </div>
            </div>
            
            <div className="p-6 bg-muted/20">
                <Button 
                    variant="outline" 
                    className="w-full gap-2 rounded-2xl h-12 border-2 text-sm font-bold shadow-sm"
                    onClick={() => handleNavigation("/privacy-policy")}
                >
                    <ShieldCheck size={18} className="text-primary" />
                    {t("privacyPolicy") || "Privacy Policy"}
                </Button>
                <p className="mt-4 text-center text-[10px] text-muted-foreground font-medium uppercase tracking-widest opacity-50">
                    &copy; 2024 FitFinder AI
                </p>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
