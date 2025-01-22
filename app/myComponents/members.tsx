"use client";

// Libs
import Image from "next/image";
import { members } from "@/lib/members";

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Reveal from "@/lib/useHook/reveal";

// Icons
import { PiUser } from "react-icons/pi";
import { HiBadgeCheck } from "react-icons/hi";
import Link from "next/link";

export default function Members() {
  return (
    <div className=" w-full ">
      <h2 className="text-3xl md:text-7xl font-bold text-right">
        <Reveal
          delay={500}
          className="text-indigo-500 dark:text-indigo-400 mb-4"
        >
          Les membres
        </Reveal>
      </h2>

      <Reveal className="w-full  p-0 flex justify-center items-center">
        <Carousel
          className="w-full h-fit"
          opts={{
            // align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {members.map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 p-2"
              >
                {/* Cards */}
                <div className=" flex flex-col items-center justify-center p-2 border rounded-2xl space-y-2 md:space-y-4 shadow-sm">
                  <div className="h-32 md:h-64 w-full flex items-center justify-center border rounded-xl overflow-hidden">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt="code"
                        width={100}
                        height={100}
                        className=" h-full w-full object-cover dark:saturate-50 hover:saturate-0  hover:scale-105 transition-all duration-300"
                      />
                    ) : (
                      <PiUser className=" text-indigo-400 dark:text-indigo-300 h-full w-full p-8 rounded-xl bg-indigo-100 dark:bg-transparent" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-col border rounded-xl w-full p-2 space-y-2">
                    <h4 className="text-sm md:text-lg md:font-semibold line-clamp-1">
                      {member.name}
                    </h4>
                    <p className="text-xs flex items-center gap-1 w-full ">
                      {member.isVerifyed && (
                        <HiBadgeCheck className="text-xl text-indigo-500 rounded-full" />
                      )}
                      <span className="line-clamp-1 w-full">
                        {member.title}
                      </span>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 z-10 flex items-center justify-center" />
          <CarouselNext className="absolute top-1/2 right-0 z-10 flex items-center justify-center " />
        </Carousel>
      </Reveal>

      <Reveal
        delay={1000}
        className="mt-4 flex justify-self-end gap-2 md:gap-4"
      >
        <Link
          href="Members"
          className="px-4 py-1 border rounded-full hover:scale-95 transition-all duration-300"
        >
          {" "}
          Voir tous les membres{" "}
        </Link>

        <Link
          href="/Join"
          className="px-4 py-1 border rounded-full hover:scale-95 transition-all duration-300 text-indigo-700 border-indigo-500 dark:text-indigo-300  hover:bg-indigo-500 hover:text-white"
        >
          Réjoindre
        </Link>
      </Reveal>
    </div>
  );
}
