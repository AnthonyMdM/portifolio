import React from "react";
import useVisible from "../Hook/useVisible"; // Certifique-se de que este hook funciona com IntersectionObserver

export const ThemeSwitch = () => {
  const [dark, setDark] = React.useState(false);
  const ref = React.useRef(null);
  const isVisible = useVisible(ref);

  // Verifica tema sempre que o botão entra na tela
  React.useEffect(() => {
    if (isVisible) {
      const savedTheme = localStorage.getItem("theme");
      const isDark = document.documentElement.classList.contains("dark");
      setDark(isDark || savedTheme === "dark");
      document.documentElement.classList.toggle(
        "dark",
        isDark || savedTheme === "dark"
      );
    }
  }, [isVisible]);

  // Atualiza localStorage e tema quando dark muda
  React.useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <label ref={ref} className="relative inline-block w-14 h-8 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={dark}
        onChange={() => setDark(!dark)}
      />
      <div className="w-full h-full bg-gray-300 peer-checked:bg-purple-600 dark:bg-gray-600 rounded-full transition-colors duration-300"></div>
      <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[13px] transition-all duration-300 peer-checked:translate-x-6">
        {dark ? "🌙" : "☀️"}
      </div>
    </label>
  );
};
