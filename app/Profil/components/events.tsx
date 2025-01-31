"use client";

import Link from "next/link";
import { MdOutlineEventNote } from "react-icons/md";
export default function Events() {
  // Générer des événements aléatoires
  const fakeEvents = [
    {
      title: "Bootcamp Git & GitHub pour Débutants",
      date: "25 Janvier 2025",
      description:
        "Apprenez à déployer vos sites Web efficacement✅ Théorie & Pratique pour maîtriser les bases.",
    },
    {
      title: "Webinaire : Superintelligence artificielle",
      date: "Samedi 18 janvie",
      description:
        "Découvrez ce qu’est vraiment l’IA, la différence entre IA faible et IA forte, et les enjeux de la superintelligence.Un échange ouvert pour poser vos questions et débattre sur l’avenir de l’IA et son impact sur l’humanité",
    },
    {
      title: "✨ Créez votre premier site web et relevez un défi stimulant",
      date: "Samedi 11 janvier 2025",
      description:
        "✨ Créez votre premier site web et relevez un défi stimulant ! 🚀",
    },
    {
      title: "Grande conférence annuelle",
      date: "31 août 2024",
      description:
        "Une journée sous le signe de la passion pour la technologie comme levier pour un avenir professionnel prometteur.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-2 h-fit  border rounded-2xl  ">
      {/* Derniers événements */}
      <div className="w-full space-y-2 p-2 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Derniers événements
        </h2>
        <ul className="space-y-4">
          {fakeEvents.map((event, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-2"
            >
              <div className="text-2xl p-2 bg-gray-300 dark:bg-gray-700 rounded-lg">
                <MdOutlineEventNote />
              </div>

              <div className="">
                <h3 className="text-sm font-medium line-clamp-1 ">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {event.date}
                </p>
              </div>
              {/* <p className="text-gray-700 dark:text-gray-300 mt-2">
                {event.description}
              </p> */}
            </li>
          ))}
        </ul>

        <Link
          href="/Meet"
          className="py-1 w-fit px-2 text-sm border rounded-full text-indigo-500 hover:scale-105 dark:hover:bg-gray-700 transition"
        >
          Prochains evenements
        </Link>
      </div>
    </div>
  );
}
