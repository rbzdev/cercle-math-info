"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formations } from "@/lib/formations";

// components
import NavBar from "../myComponents/navBar";
import AllFormations from "./components/allFormations";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Passe automatiquement à la formation suivante toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === formations.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   const prevSlide = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? formations.length - 1 : prevIndex - 1
  //     );
  //   };

  return (
    <div className="flex flex-col items-center mx-auto">
      <NavBar />
      <header className="flex flex-col items-center gap-4 p-2 md:p-4 w-full">
        {/* Section de la carte animée */}
        <div className="relative w-full overflow-hidden border rounded-2xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5 }}
              className=" flex justify-center gap-2 md:gap-4 p-2 md:p-4"
            >
              <div className="flex flex-col justify-evenly w-1/2 ">
                <h2 className="text-md md:text-lg font-semibold line-clamp-2">
                  {formations[currentIndex].title || "Pas de titre"}
                </h2>
                <p className="text-xs md:text-base text-gray-600 dark:text-gray-300 line-clamp-3 md:line-clamp-4">
                  {formations[currentIndex].description}
                </p>
                <span className="mt-4 text-indigo-500 text-sm">
                  Durée : {formations[currentIndex].duration}
                </span>
              </div>
              <div className="flex items-center justify-center bg-gray-400 h-36 md:h-80 w-1/2 border rounded-xl overflow-hidden ">
                <Image
                  src={
                    formations[currentIndex].image ||
                    "https://picsum.photos/200"
                  }
                  alt="poster"
                  height={200}
                  width={300}
                  className="object-cover h-full w-full hover:scale-105 transition-all duration-300"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation par dots */}
        <div className="flex gap-2 mt-2">
          {formations.map((_, index) => (
            <button
              key={index}
              className={` rounded-full ${
                index === currentIndex
                  ? "bg-indigo-500 w-10 h-3"
                  : "bg-gray-300 dark:bg-gray-600 w-3 h-3"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </header>
      <AllFormations />
    </div>
  );
}
