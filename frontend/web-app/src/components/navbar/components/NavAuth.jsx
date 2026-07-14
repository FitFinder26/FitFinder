import { UserPlus, Languages, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { getLanguageDisplayName } from "../../../locales/languageHelper";

export default function NavAuth({
  user,
  isLoggedIn,
  scrolled,
  currentLang,
  onLanguageToggle,
  navigationBlocked,
  onProfileClick,
  onLoginClick,
  onSignupClick,
  t
}) {
  return (
    <div className="flex justify-end items-center gap-2 sm:gap-4">
      {/* Language Toggle */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onLanguageToggle}
        className={cn(
          "flex gap-3 rounded-xl hover:bg-muted/50 group border border-transparent hover:border-border/10",
          scrolled ? "h-8 px-2" : "h-10 px-4"
        )}
      >
        <Languages size={14} className="group-hover:rotate-180 transition-transform duration-700" />
        {!scrolled && <span className="hidden md:inline font-black text-[10px] uppercase tracking-widest">{getLanguageDisplayName(currentLang)}</span>}
      </Button>

      {isLoggedIn ? (
        <div className="flex items-center gap-6">
          <Avatar
            className={cn(
              "cursor-pointer hover:rotate-12 transition-all duration-700 border-2 hover:border-primary shadow-2xl",
              scrolled ? "w-8 h-8 border-primary/20" : "w-12 h-12 border-primary/20"
            )}
            onClick={onProfileClick}
          >
            <AvatarImage src={user?.profileImageURL} alt={user?.userName} />
            <AvatarFallback className="bg-muted font-black uppercase text-[10px]">{user?.userName?.slice(0, 2) || "FF"}</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            onClick={onLoginClick}
            disabled={navigationBlocked}
            className={cn(
              "font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-muted/50 transition-all",
              scrolled ? "h-8 w-8 p-0 sm:h-8 sm:px-4" : "h-10 w-10 p-0 sm:h-10 sm:px-6"
            )}
          >
            <span className="hidden sm:inline">{t("login")}</span>
            <LogIn size={16} className="sm:hidden" />
          </Button>
          {!scrolled && (
            <Button
              onClick={onSignupClick}
              disabled={navigationBlocked}
              className="h-12 px-8 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs italic shadow-[0_15px_40px_rgba(250,88,126,0.25)] hover:scale-105 active:scale-95 transition-all gap-4 hidden sm:flex border-none"
            >
              <UserPlus size={16} />
              {t("join")}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
