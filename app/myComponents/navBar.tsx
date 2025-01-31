"use client";

// Libs
import { useState } from "react";
import Link from "next/link";
import { avatars } from "@/lib/avatars";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import AvatarCircles from "@/components/ui/avatar-circles";
import ThemeToggle from "./themeToggle";

// Icons
import { PiUser } from "react-icons/pi";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scrool state
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <>
      {/* Desktop version */}
      <nav
        className={`hidden md:flex sticky z-30 top-0 items-center justify-between px-4  w-full transition-all duration-300 backdrop-blur-sm ${
          isScrolledDown
            ? "py-1 bg-white dark:bg-gray-950/70"
            : "py-2 bg-transparent"
        }`}
      >
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEwdzuXWGe55A/company-logo_200_200/company-logo_200_200/0/1656015392633/cercle_scientifique_math_info_logo?e=1745452800&v=beta&t=8j9aUvwTe8Z-EmaeEfpW-TiU1QkJ2dTnETE3DTJTrCM"
              alt="Logo"
              width={40}
              height={40}
              className={`h-12 w-12 object-cover border rounded-full transition-all duration-300 ${
                isScrolledDown ? "h-8 w-8" : "h-12 w-12"
              }`}
            />
          </Link>
        </div>
        <div
          className={`flex items-center gap-6 ${
            isScrolledDown ? "text-gray-500" : ""
          }`}
        >
          <Link href="About" className="">
            A propos
          </Link>
          <Link href="/Formations">Formations</Link>
          <Link href="/Meet">Meet</Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <div className="border p-1 rounded-full">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
          </div>
          <Link href="Login">
            <PiUser className="text-4xl p-1 rounded-full bg-indigo-200 dark:bg-indigo-900" />
          </Link>
        </div>
      </nav>

      {/* Mobile version */}
      <nav
        className={`md:hidden flex sticky z-30 px-2 top-0 items-center justify-between w-full transition-all duration-300 backdrop-blur-sm ${
          isScrolledDown
            ? "py-1 bg-white dark:bg-gray-950/70"
            : "py-2 bg-transparent"
        }`}
      >
        <div className="">
          <Link href="/">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEwdzuXWGe55A/company-logo_200_200/company-logo_200_200/0/1656015392633/cercle_scientifique_math_info_logo?e=1745452800&v=beta&t=8j9aUvwTe8Z-EmaeEfpW-TiU1QkJ2dTnETE3DTJTrCM"
              alt="Logo"
              width={40}
              height={40}
              className={`h-9 w-9 object-cover border rounded-full transition-all duration-100 ${
                isScrolledDown ? "h-6 w-6" : "h-12 w-12"
              }`}
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="Login">
            <PiUser className="text-4xl p-1 rounded-full bg-indigo-200 dark:bg-indigo-500/20" />
          </Link>

          {/* Toggle burger menu */}
          <div
            className="flex w-8 flex-col items-center justify-center gap-2 md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-full h-[2px] rounded-full  transition-transform duration-300 ${
                isMenuOpen
                  ? "rotate-45 translate-y-[4px] bg-slate-400"
                  : " bg-gray-700 dark:bg-white"
              }`}
            ></div>
            <div
              className={`w-full h-[2px] rounded-full transition-transform duration-300 ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-[6px] bg-slate-400"
                  : "bg-gray-700 dark:bg-white"
              }`}
            ></div>
          </div>
        </div>
      </nav>

      {/* Links && Options with animation delay On Mobile */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 h-screen bg-white/50 dark:bg-black/50 backdrop-blur-sm w-5/6 flex flex-col justify-center gap-6 p-6 shadow-lg md:hidden ${
          isMenuOpen ? "z-30" : "-z-10"
        }`}
      >
        {/* Links avec animation décalée */}
        {["A propos", "Formations", "Meet"].map((text, index) => (
          <motion.div
            key={text}
            initial={{ x: -30, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: isMenuOpen ? index * 0.15 : 0,
            }}
          >
            <Link
              href={text === "A propos" ? "/About" : text}
              className="text-2xl hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              {text}
            </Link>
          </motion.div>
        ))}

        {/* Toggle Theme avec délai aussi */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isMenuOpen ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: isMenuOpen ? 0.5 : 0,
          }}
        >
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </>
  );
}
