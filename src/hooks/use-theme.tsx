import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Проверяем сохраненную тему в localStorage
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      return storedTheme;
    }
    // Если нет сохраненной темы, используем системную
    return "system";
  });

  // Применяем тему к документу
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    // Сохраняем тему в localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
