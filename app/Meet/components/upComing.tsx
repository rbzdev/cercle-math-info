"use client";

import meets from "@/lib/meets";
import Image from "next/image";

// Components
import { TextAnimate } from "@/components/ui/text-animate";

// Icons
import { HiBadgeCheck, HiUserGroup } from "react-icons/hi";
import { IoIosGlobe } from "react-icons/io";
import { IoLocationOutline, IoTicketOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

export default function UpComingMeets() {
  const upcomingMeets = meets.filter((meet) => meet.isUpcoming);

  return (
    <div className="flex flex-col items-center h-fit">
      {/* Derniers événements */}
      <div className="w-full space-y-2 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Événements à venir
        </h2>
        <ul className="space-y-4">
          {upcomingMeets.map((meet, index) => (
            <li
              key={index}
              className="relative flex flex-col md:flex-row gap-2 bg-white dark:bg-gray-800 shadow-sm rounded-2xl p-2"
            >
              <div className="relative flex w-full md:w-1/2 h-64 md:h-80 lg:h-96">
                <Image
                  src={meet.imageUrl}
                  alt={meet.title}
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-full object-cover border"
                />
              </div>

              <div className="text-2xl p-1 bg-gray-100 dark:bg-transparent rounded-xl w-full md:w-1/2 flex flex-col justify-between  space-y-4 md:space-y-0">
                <h3 className="flex items-center gap-1 font-medium line-clamp-1">
                  {meet.isVerifyed && (
                    <HiBadgeCheck className="text-2xl text-indigo-500" />
                  )}

                  <TextAnimate animation="blurInUp" by="character">
                    {meet.title}
                  </TextAnimate>
                </h3>

                <TextAnimate
                  animation="slideUp"
                  by="word"
                  className="text-sm line-clamp-5"
                >
                  {meet.description}
                </TextAnimate>

                <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
                  {/* Author */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    {meet.authorImageUrl ? (
                      <Image
                        src={meet.authorImageUrl}
                        alt={meet.author}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    ) : (
                      <HiUserGroup className="text-xl  border rounded-full" />
                    )}
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <span>{meet.author}</span>
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <IoTicketOutline className="text-xl" />
                    {meet.isFree ? (
                      <div className="flex items-center gap-1 text-xl text-gray-500 dark:text-gray-400">
                        <TextAnimate animation="scaleUp" by="text">
                          Gratuit
                        </TextAnimate>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-xl text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1 text-green-500">
                          {meet.price}
                          {meet.currency}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Event footer */}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex w-full md:w-fit items-center border rounded-xl gap-1 p-1 bg-white dark:bg-black">
                    <LuCalendarDays className=" p-1 text-3xl border rounded-md bg-gray-300 dark:bg-gray-600" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-col">
                      <span className="truncate">{meet.date}</span>
                      <span>{meet.time}</span>
                    </p>
                  </div>

                  <div className="flex md:justify-evenly w-full gap-2">
                    <div className="p-2 border rounded-xl flex items-center gap-1 flex-1">
                      {meet.location === "online" ? (
                        <div className=" flex items-center gap-1">
                          <IoIosGlobe className="text-xl" />
                          <span className="text-sm"> En ligne</span>
                        </div>
                      ) : (
                        <div className=" flex items-center gap-1">
                          <IoLocationOutline className="text-xl " />
                          <span className="text-sm line-clamp-1">
                            {" "}
                            {meet.location}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center p-2 bg-white text-gray-700 dark:text-gray-400 dark:bg-transparent border rounded-xl flex-1 gap-2">
                      {/* Conteneur du Ping */}
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping "></div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm"> À venir</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
