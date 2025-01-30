"use client";

// Libs
import Image from "next/image";

// Components
import Reveal from "@/lib/useHook/reveal";

// Icons
import { BiSupport } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { GoBell, GoPlus } from "react-icons/go";

export default function CodeSection() {
  return (
    <div className="flex flex-col gap-4 justify-center w-full">
      <div className=" text-gray-900 dark:text-gray-100">
        <h3 className="text-md md:text-2xl">
          {" "}
          Où naissent les petits <span className="font-bold">codes</span>,
        </h3>
        <h2 className="text-lg md:text-3xl">
          {" "}
          grandissent les grands <span className="font-bold">rêves</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-end justify-between h-auto md:h-96 w-full">
        {/* Card 1 */}
        <Reveal className="h-52 md:h-4/6 w-full flex flex-col justify-between bg-indigo-100 dark:bg-gray-900 p-2 border rounded-2xl shadow-md">
          <div className="w-full flex justify-evenly items-center">
            <div className="w-fit flex items-center justify-between p-1 bg-white dark:bg-gray-800 text-black dark:text-gray-100 border dark:border-gray-700 rounded-full space-x-1">
              <Image
                src="https://media.licdn.com/dms/image/v2/C4D03AQE5WsIDln3x1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660916805076?e=1742428800&v=beta&t=4BEo_dDKsDjqi9ET31HuYGw35Zyw4Vv20cFyyzvkplc"
                alt="code"
                width={20}
                height={20}
                className="rounded-full h-8 w-8"
              />
              <p className="text-sm line-clamp-1">
                Le formateur de l&apos;année
              </p>
              <BsArrowRight className="text-2xl" />
            </div>

            <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-100 border dark:border-gray-700 rounded-full p-2">
              <GoBell />
            </div>
          </div>

          {/* Card footer */}
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <h3 className="text-sm font-semibold">
              Un enseignant exceptionnel contribue au succès de chaque codeCub
            </h3>
            <p className="text-xs">
              Les meilleurs mentors sont dédiés à nourrir l&apos;éclat de chaque
              apprenti.
            </p>
          </div>
        </Reveal>

        {/* Card 2 */}
        <Reveal
          delay={600}
          className="h-80 md:h-full w-full rounded-2xl border bg-white dark:bg-gray-800 text-black dark:text-gray-100 overflow-hidden"
        >
          <div className="h-[40%] p-2 md:p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between w-full">
              <button className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-all duration-300">
                En savoir plus
              </button>
              <BiSupport className="text-3xl p-1 border dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer" />
            </div>

            <div className="flex w-full items-center justify-between">
              <h3 className="text-sm">
                Libérer le potentiel des jeunes grâce à un code ludique.
              </h3>
              <div className="flex gap-2 items-center">
                <span className="border dark:border-gray-600 p-1 rounded-full">
                  Populaire
                </span>
                <BsArrowRight className="text-3xl border dark:border-gray-600 p-2 rounded-full" />
              </div>
            </div>
          </div>
          <Image
            src="https://media.licdn.com/dms/image/v2/D5622AQF5cmdOBxs4_w/feedshare-shrink_1280/B56ZRXHuZLGQAk-/0/1736628441564?e=1740009600&v=beta&t=uNkv1kealPmakwMllZVOz0ZLCDGxv-XIwJRszt03hQA"
            alt="code"
            width={400}
            height={400}
            priority={false}
            className="h-[60%] w-full object-cover hover:scale-105 transition-all duration-300"
          />
        </Reveal>

        {/* Card 3 */}
        <Reveal className="h-52 md:h-1/2 w-full flex flex-col items-end rounded-3xl space-y-2">
          <div className="flex items-center space-x-2 text-indigo-800 dark:text-indigo-100">
            <GoPlus className="text-3xl bg-indigo-300 dark:bg-indigo-800 rounded-full" />
            <h3 className="text-xs p-2 bg-indigo-300 dark:bg-indigo-800 rounded-full">
              Explorer l&apos;opportunité
            </h3>
          </div>
          <div className="h-full w-full rounded-xl overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/users/1732368/screenshots/16278100/media/800ffe4c674f793c42c0f5397bc0285a.gif"
              unoptimized={true}
              alt="gif codeCamp"
              height={100}
              width={100}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
