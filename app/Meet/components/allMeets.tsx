"use client";

import meets from "@/lib/meets";
import Image from "next/image";

// Components
import { TextAnimate } from "@/components/ui/text-animate";
import Reveal from "@/lib/useHook/reveal";

// Icons
import { IoIosGlobe } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

export default function AllMeets() {
  //   const upcomingMeets = meets.filter((meet) => meet.isUpcoming);

  return (
    <div className="flex flex-col items-center h-fit">
      {/* Derniers événements */}
      <div className="w-full space-y-2 flex flex-col">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Tous les événements
        </h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 ">
          {meets.map((meet, index) => (
            <Reveal
              key={index}
              className="relative flex flex-col gap-2  shadow-sm rounded-2xl bg-gray-100 dark:bg-gray-700 p-1 border  overflow-hidden"
            >
              <div className="absolute z-10 left-2 top-2">
                {meet.isUpcoming ? (
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-4 h-4 bg-white rounded-full animate-ping "></div>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                ) : (
                  <div className="relative bg-red-500 text-white py-0 px-1 rounded-lg flex items-center justify-center">
                    {/* <div className="w-4 h-4 bg-red-500 rounded-full"></div> */}
                    <p>Terminé</p>
                  </div>
                )}
              </div>
              <div className="relative flex w-full h-64">
                <Image
                  src={meet.imageUrl}
                  alt={meet.title}
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-full object-cover border"
                />
              </div>

              <div className="text-2xl p-1 bg-gray-100 dark:bg-transparent rounded-xl w-full flex flex-col justify-between  space-y-2">
                <h3 className="text-sm md:text-md font-medium line-clamp-1">
                  <TextAnimate animation="blurInUp" by="character">
                    {meet.title}
                  </TextAnimate>
                </h3>

                <p className="text-xs text-gray-700 dark:text-gray-400 line-clamp-2">
                  {meet.description}
                </p>

                {/* Event footer */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
                  {/* Date et heure */}
                  <div className="flex w-full h-fit items-center border rounded-xl gap-1 p-1 pr-2 bg-white dark:bg-black flex-1">
                    <LuCalendarDays className="p-[2px] text-3xl border rounded-md bg-gray-300 dark:bg-gray-600" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-col">
                      <span className="truncate text-[11px] ">{meet.date}</span>
                      <span className=" whitespace-nowrap">{meet.time}</span>
                    </p>
                  </div>

                  {/* Lieu */}
                  <div className="flex w-full gap-1 flex-1 p-2 border rounded-xl items-center justify-center">
                    {/* <div className=""> */}
                    {meet.location === "online" ? (
                      <div className=" flex items-center gap-1">
                        <IoIosGlobe className="text-xl" />
                        <span className="text-sm"> En ligne</span>
                      </div>
                    ) : (
                      <div className="flex gap-1 w-fit">
                        <IoLocationOutline className="text-xl " />
                        <span className="text-sm whitespace-nowrap trunecate">
                          {" "}
                          {meet.location}
                        </span>
                      </div>
                    )}
                    {/* </div> */}

                    {/* <div className="flex items-center justify-center p-2 bg-white text-gray-700 dark:bg-transparent border rounded-xl flex-1 gap-2">
                      
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping "></div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm"> À venir</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
