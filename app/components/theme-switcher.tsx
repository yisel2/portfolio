"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">(
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") as "dark" | "light") || "light"
      : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center bg-deepseek-light-gray shadow-md rounded-lg overflow-hidden">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 cursor-pointer ${
          theme === "light" && "bg-deepseek-blue"
        } hover:bg-deepseek-blue transition-colors`}
      >
        🌞
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 cursor-pointer ${
          theme === "dark" && "bg-deepseek-blue"
        } hover:bg-deepseek-blue transition-colors`}
      >
        🌜
      </button>
    </div>
  );
}
