import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const resolvedTheme =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    document.documentElement.setAttribute("data-theme", resolvedTheme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
