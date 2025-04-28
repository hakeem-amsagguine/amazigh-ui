import React, { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

type Theme = typeof lightTheme;
type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  defaultTheme?: ThemeType;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme = "system",
  children,
}) => {
  const [themeType, setThemeType] = useState<ThemeType>(defaultTheme);
  const [theme, setTheme] = useState<Theme>(lightTheme);

  // Function to get system theme preference
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // Default to light if running on server or matchMedia not available
  };

  // Function to apply theme
  const applyTheme = (theme: Theme) => {
    Object.entries(theme).forEach(([category, values]) => {
      Object.entries(values).forEach(([key, value]) => {
        if (typeof value === "object") {
          Object.entries(value).forEach(([subKey, subValue]) => {
            document.documentElement.style.setProperty(
              `--nexa-${category}-${key}-${subKey}`,
              subValue as string
            );
          });
        } else {
          document.documentElement.style.setProperty(
            `--nexa-${category}-${key}`,
            value as string
          );
        }
      });
    });

    // Set special variables
    document.documentElement.style.setProperty(
      "--nexa-background",
      theme.colors.background as string
    );
    document.documentElement.style.setProperty(
      "--nexa-text",
      theme.colors.text as string
    );
    document.documentElement.style.setProperty(
      "--nexa-border",
      theme.colors.border as string
    );
  };

  // Effect to handle theme changes
  useEffect(() => {
    const calculateTheme = () => {
      if (themeType === "system") {
        return getSystemTheme() === "dark" ? darkTheme : lightTheme;
      }
      return themeType === "dark" ? darkTheme : lightTheme;
    };

    const newTheme = calculateTheme();
    setTheme(newTheme);
    applyTheme(newTheme);

    // Listen for system theme changes
    if (themeType === "system" && typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const handleChange = (e: MediaQueryListEvent) => {
        const newSystemTheme = e.matches ? darkTheme : lightTheme;
        setTheme(newSystemTheme);
        applyTheme(newSystemTheme);
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [themeType]);

  return (
    <ThemeContext.Provider value={{ theme, themeType, setThemeType }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
