"use client";

import { motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className=" w-fit border p-1 rounded-full cursor-pointer"
    >
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" flex items-center justify-center"
      >
        {resolvedTheme === "dark" ? (
          <LuSun className="text-4xl md:text-2xl" />
        ) : (
          <LuMoon className="text-4xl md:text-2xl" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
