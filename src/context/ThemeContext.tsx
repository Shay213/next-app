"use client";

import { createContext, useCallback, useContext, useState } from "react";

type Mode = "light" | "dark";

interface IThemeContext {
  mode: Mode;
  toggle: () => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggle = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
