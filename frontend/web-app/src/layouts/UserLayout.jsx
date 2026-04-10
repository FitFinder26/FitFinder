import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../providers/AuthProvider";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function UserLayout() {
  const [navigationBlocked, setNavigationBlocked] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { isAuthenticated } = useAuthContext();
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col min-h-screen min-h-[100dvh] overflow-x-hidden bg-background text-foreground transition-colors duration-500">
      <a 
        href="#main-content" 
        className="absolute -left-[999px] top-auto w-1 h-1 overflow-hidden z-[9999] bg-background text-foreground p-2 focus:left-4 focus:top-4 focus:w-auto focus:h-auto focus:outline-none focus:ring-2 focus:ring-primary rounded-md shadow-lg"
      >
        {t("skipToMainContent")}
      </a>
      
      <header className="w-full z-40 fixed top-0" role="banner">
        <Navbar
          navigationBlocked={navigationBlocked}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </header>

      {isAuthenticated() && (
        <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
      )}

      <main 
        id="main-content" 
        className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar pt-[4.5rem]" 
        tabIndex={-1} 
        role="main"
      >
        <div className="flex-1">
          <Outlet context={{ setNavigationBlocked }} />
        </div>
        <Footer navigationBlocked={navigationBlocked} />
      </main>
    </div>
  );
}