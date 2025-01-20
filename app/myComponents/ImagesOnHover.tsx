"use client";

// Libs
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { avatars } from "@/lib/avatars";

export default function ImagesOnHover() {
  const [isHovered, setIsHovered] = useState(true);

  // Positions prédéfinies autour du div parent
  const positions = [
    { x: -100, y: -100 },
    { x: 100, y: -100 },
    { x: -100, y: 100 },
    { x: 100, y: 100 },
    { x: 0, y: -150 },
    { x: 0, y: 150 },
    { x: -150, y: 0 },
    { x: 150, y: 0 },
  ];

  return (
    <div
      className="relative flex items-center justify-start h-[60vh] w-full gap-4 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {avatars.map((avatar, index) => {
        const { x, y } = positions[index % positions.length];
        return (
          <motion.div
            key={index}
            style={{
              left: `calc(40% + ${x}px)`,
              top: `calc(0% + ${y}px)`,
              opacity: isHovered ? 1 : 0,
              transform: `translate(-50%, -50%)`,
            }}
            initial={{ scale: 0, y: 100, x: 100 }}
            animate={{ scale: isHovered ? 1 : 0, y: 0, x: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute odd:bg-white z-20 -rotate-12 rounded-lg"
          >
            <Image
              src={avatar.imageUrl}
              alt="code"
              width={100}
              height={100}
              className="rounded-xl h-36 w-36 rotate-12 border-4"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
