"use client";

import { useState, useEffect } from "react";
import { BsMoonStars } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isAnimating, setIsAnimating] = useState(false); // Pour gérer l'animation

  // Applique le thème en fonction du choix de l'utilisateur ou du thème par défaut
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  // Change le thème lorsqu'il est mis à jour
  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimating(true); // Déclenche l'animation
    setTheme(theme === "light" ? "dark" : "light");

    // Stoppe l'animation après 500ms
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleTheme}
        className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition relative flex items-center justify-center"
      >
        <div
          className={` transition-transform duration-500 ${
            isAnimating ? "rotate-180 scale-75 opacity-0" : "opacity-100"
          }`}
        >
          {theme === "dark" ? (
            <LuSun className="text-yellow-400" size={24} />
          ) : (
            <BsMoonStars className="text-indigo-500" size={24} />
          )}
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
            isAnimating
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-180 scale-75 opacity-0"
          }`}
        >
          {theme === "light" ? (
            <LuSun className="text-yellow-400" size={24} />
          ) : (
            <BsMoonStars className="text-indigo-500" size={24} />
          )}
        </div>
      </button>
    </div>
  );
}
