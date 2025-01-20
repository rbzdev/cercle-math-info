"use client";

import { Meteors } from "@/components/ui/meteors";
import { TextAnimate } from "@/components/ui/text-animate";

export default function WhyUs() {
  return (
    <div className="relative px-4 py-8 flex w-full flex-col items-center justify-center overflow-hidden ">
      <Meteors number={30} />
      <h2 className="text-2xl md:text-7xl font-bold text-right">
        <TextAnimate animation="slideLeft" by="character" className="">
          Le cercle est un espace d&apos;echange et de partage de connaissances
        </TextAnimate>
      </h2>

      {/* Why Footer */}
      <div className="w-full flex items-start justify-between gap-4 mt-8 md:mt-16">
        {/* <p className=" text-xs md:text-lg text-gray-500 font-thin w-3/4 md:w-4/5"> */}
        <TextAnimate
          animation="slideUp"
          by="word"
          className=" text-xs md:text-lg text-gray-500 font-thin w-3/4 md:w-4/5"
        >
          Au cercle scientifique, nous croyons qu&apos;il faut cultiver la
          prochaine génération d&apos;innovateurs férus de technologie dès
          maintenant.
        </TextAnimate>
        {/* </p> */}

        <button className="py-1 px-4 border rounded-full font-semibold hover:scale-105 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all duration-300">
          Réjoindre
        </button>
      </div>
    </div>
  );
}
