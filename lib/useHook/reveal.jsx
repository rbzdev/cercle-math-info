"use client";

// Ceci est une fonctionnalité qui permet de révéler un élément lorsqu'il est dans la vue
// Elle utilise Framer Motion pour animer l'élément

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "./useInView";

const Reveal = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            className={`${className} inline-block`} // Permet de passer des classes personnalisées
            initial={{ opacity: 0, y: 50 }} // Animation de départ
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animation visible ou cachée
            transition={{
                duration: delay / 1000 || 300 / 1000, // Utiliser `delay` comme durée (converti en secondes)
                ease: "easeOut", // Courbe d'animation
            }}

        >
            {children}
        </motion.div>
    );
};

export default Reveal;
