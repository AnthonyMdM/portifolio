import React from "react";

export const ThemeSwitch = () => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <label className="relative inline-block w-14 h-8 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={dark}
        onChange={() => setDark(!dark)}
      />

      {/* Trilho */}
      <div className="w-full h-full bg-gray-300 peer-checked:bg-purple-600 dark:bg-gray-600 rounded-full transition-colors duration-300"></div>

      {/* Bolinha com ícone */}
      <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[13px] transition-all duration-300 peer-checked:translate-x-6">
        {dark ? "🌙" : "☀️"}
      </div>
    </label>
  );
};
