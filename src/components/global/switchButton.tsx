"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Evita piscar entre temas (problema comum no Next SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sincroniza o estado local com o tema atual
  useEffect(() => {
    if (mounted) setDark(theme === "dark");
  }, [mounted, theme]);

  // Alterna o tema
  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    setTheme(newTheme);
  };

  if (!mounted) return null; // Evita renderizar antes da hidratação

  return (
    <label
      className="relative inline-block w-14 h-8 cursor-pointer"
      data-animate
      id="theme-switch"
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={dark}
        onChange={toggleTheme}
      />
      <div className="w-full h-full bg-gray-300 peer-checked:bg-purple-600 dark:bg-gray-600 rounded-full transition-colors duration-300"></div>
      <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[13px] transition-all duration-300 peer-checked:translate-x-6">
        {dark ? "🌙" : "☀️"}
      </div>
    </label>
  );
};
