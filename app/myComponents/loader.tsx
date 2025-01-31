"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Détecte un écran de moins de 768px (taille mobile)
    };

    checkScreenSize(); // Vérifie au montage
    window.addEventListener("resize", checkScreenSize); // Met à jour quand on redimensionne l'écran
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    // Div Principale pour la disparition
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 2, display: "none" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 6,
      }}
      className="fixed left-0 top-0 w-full z-50 h-screen bg-white text-gray-700 dark:bg-black dark:text-white flex items-center justify-center"
    >
      {/* Div pour le second Scale -inférieur */}
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, scale: { delay: 2.5 } }}
        className=""
      >
        {/* Apparition principale */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            duration: 0.3,
            rotate: {
              delay: 1.3, // Début des rotations après la première animation
              duration: 1, // Durée totale des deux rotations
              ease: "easeInOut",
            },
          }}
          className="grid grid-cols-2 gap-2"
        >
          {/* Les blocs de chargement */}
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ scale: 1.5, opacity: 0, x: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                ...(index === 2 && {
                  rotate: 45, // Inclinaison du 2ème bloc
                }),
                x:
                  index === 1 || index === 3
                    ? isSmallScreen
                      ? -100
                      : -200
                    : index === 2 || index === 4
                    ? isSmallScreen
                      ? 100
                      : 200
                    : 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Décalage d'animation pour chaque bloc
                ...(index === 2 && { delay: 4 * 0.2 + 0.5 }), // Attendre que tous les blocs s'affichent
                ease: "easeInOut",
                rotate: {
                  delay: 2, // Délai avant de lancer la rotation
                  ease: "easeInOut",
                },
                x: {
                  delay: 2.7, // Délai avant de lancer la séparation des blocs
                  repeat: 1, // Une seule répétition (aller-retour)
                  repeatDelay: 2, // Temps avant le retour
                  repeatType: "reverse", // Revient en arrière
                  ease: "easeInOut",
                },
              }}
              className="w-10 h-10 md:w-12 md:h-12 bg-indigo-500 rounded-xl"
            />
          ))}

          {/* Charger le texte  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.2,
              delay: 3,
              ease: "easeInOut",
              repeat: 1,
              repeatType: "reverse",
              repeatDelay: 1.8,
            }}
            className="absolute inset-0 flex items-center justify-center text-xl md:text-4xl font-semibold whitespace-nowrap"
          >
            Bienvenu au Cercle
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: [1.5, 1], opacity: 1 }}
        transition={{
          duration: 1.5, // Durée totale de l'animation
          times: [0, 0.67], // Moments des changements (67% du temps pour 0.8 → 0.5, puis le reste pour 0.5 → 0.2)
          delay: 3, // Démarrage à 3s
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 0.5, // Délai avant de revenir en arrière
        }}
        className="absolute left-0 bottom-32 w-full text-center md:whitespace-nowrap flex flex-col items-center justify-center"
      >
        <p> Faculté des sciences </p>
        <h2 className="text-md md:text-lg font-bold text-gray-500">
          {" "}
          Université de Lubumbashi{" "}
        </h2>
      </motion.div>
    </motion.div>
  );
}
