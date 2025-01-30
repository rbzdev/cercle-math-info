"use client";

// Libs
import Link from "next/link";
import Reveal from "@/lib/useHook/reveal";

// icons
import { BsCodeSlash } from "react-icons/bs";
import { TbMathIntegralX } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SiOpenai } from "react-icons/si";
import { avatars } from "@/lib/avatars";

// Components
import AvatarCircles from "@/components/ui/avatar-circles";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Cards() {
  const courses = [
    { id: 1, title: "Programmation", badge: "01", icon: <BsCodeSlash /> },
    { id: 2, title: "Mathématiques", badge: "02", icon: <TbMathIntegralX /> },
    {
      id: 3,
      title: "Creative Coding",
      badge: "03",
      icon: <HiOutlineLightBulb />,
    },
    {
      id: 4,
      title: "Intelligence Artificielle",
      badge: "04",
      icon: <SiOpenai />,
    },
  ];

  return (
    <section className=" px-0  relative w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link
            href="/Members"
            className="bg-indigo-200 text-black px-4 py-2 border rounded-full hover:bg-indigo-400 transition-all duration-300"
          >
            Explore
          </Link>
          <span className="ml-4 inline-flex gap-2">
            <button className="bg-indigo-200 w-8 h-8 border rounded-full"></button>
            <button className="bg-indigo-200 w-8 h-8 border rounded-full"></button>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <AvatarCircles numPeople={0} avatarUrls={avatars} />
          <span className="dark:text-slate-300 text-xs md:text-sm">
            +17k membres depuis 2015
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="relative mt-10 h-80 w-full">
        {/* Cards section 1 */}
        <div className="absolute w-full h-1/2 md:w-1/2 md:h-3/4 p-1 left-0 top-0 grid grid-cols-2 gap-2 items-end">
          {/* Card 1 */}
          <Reveal
            delay={400}
            className="h-3/4 border rounded-xl p-2 md:p-4 bg-white dark:bg-slate-600 dark:text-white flex flex-col justify-between shadow-sm"
          >
            <div className="text-2xl md:text-4xl">{courses[0].icon}</div>
            <h1 className="font-bold text-sm md:text-lg line-clamp-2">
              {courses[0].title}
            </h1>
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              {courses[0].badge}
            </span>
          </Reveal>

          {/* Card 2 */}
          <Reveal
            delay={600}
            className="h-full border rounded-xl p-2 md:p-4 bg-white dark:bg-slate-800 dark:text-white flex flex-col justify-between shadow-sm"
          >
            <div className="text-2xl md:text-4xl text-indigo-500 dark:text-indigo-400">
              {courses[1].icon}
            </div>
            <h1 className="font-bold text-sm md:text-lg line-clamp-2">
              {courses[1].title}
            </h1>
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              {courses[1].badge}
            </span>
          </Reveal>
        </div>

        {/* Cards section 2 */}
        <div className="absolute w-full h-1/2 md:w-1/2 md:h-3/4 p-1 right-0 bottom-0 grid grid-cols-2 gap-2 ">
          {/* Card 3 */}
          <Reveal
            delay={800}
            className="h-full border rounded-xl p-2 md:p-4 bg-white dark:bg-slate-600 dark:text-white flex flex-col justify-between shadow-sm"
          >
            <div className="text-2xl md:text-4xl text-yellow-500 dark:text-yellow-300">
              {courses[2].icon}
            </div>
            <h1 className="font-bold text-sm md:text-lg line-clamp-2">
              {courses[2].title}
            </h1>
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              {courses[2].badge}
            </span>
          </Reveal>

          {/* Card 4 */}
          <Reveal
            delay={1000}
            className="h-3/4 border rounded-xl p-2 md:p-4 bg-white dark:bg-slate-800 dark:text-white flex flex-col justify-between shadow-sm"
          >
            <div className="text-2xl md:text-4xl dark:text-green-600">
              {courses[3].icon}
            </div>
            <h1 className="font-bold text-sm md:text-lg line-clamp-2">
              {courses[3].title}
            </h1>
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              {courses[3].badge}
            </span>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16  text-sm">
        <p className="text-slate-500  text-xs">
          <TextAnimate animation="blurIn" as="span">
            &lt;&lt; Grandissez, apprenez, codez, challengez : style de vie !
            &gt;&gt;
          </TextAnimate>
        </p>

        <h2 className="text-3xl font-bold mt-4  w-fit">
          <TextAnimate animation="blurInUp" by="character">
            Explorez, apprenez, inspirez, créez !
          </TextAnimate>
        </h2>
      </div>
    </section>
  );
}
