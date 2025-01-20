"use client";

import Globe from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div className="relative flex items-center justify-start md:justify-end h-[60vh] w-full gap-4 ">
      <div className="absolute left-0 md:left-4 top-0 ">
        <Globe className="h-96 w-96" />
      </div>

      {/* Content */}
      <div className="z-20 w-full md:w-3/5 flex flex-col space-y-4 ">
        <h1 className="text-3xl md:text-5xl font-bold text-shadow ">
          Cercle Math Info
        </h1>
        <p className="text-sm md:text-lg text-shadow">
          Le Cercle Scientifique est une communauté d’étudiants passionnés par
          les technologies, les mathématiques, l’informatique et le
          développement.
        </p>
        <div className="flex w-full justify-evenly md:justify-normal md:gap-4 items-center ">
          <Button className="border hover:scale-95 transition-all duration-300">
            {" "}
            <Link href="/Join">Réjoindre</Link>
          </Button>
          <Button
            variant="ghost"
            className="dark:text-indigo-500 md:dark:text-gray-200 hover:scale-95 transition-all duration-300"
          >
            {" "}
            <span> En savoir plus </span> <BsArrowRight />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
