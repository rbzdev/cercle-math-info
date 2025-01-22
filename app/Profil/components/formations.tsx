import { formations } from "@/lib/formations";
import { PiFilePdfLight } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import Link from "next/link";

export default function Formations() {
  return (
    <div className="flex flex-col items-center p-1 space-y-8 h-fit mx-auto border rounded-xl  ">
      {/* Dernieres formtaions terminées */}
      <div className="w-full space-y-2 p-2 flex flex-col">
        <h2 className="text-md md:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Dernières formations terminées
        </h2>
        <ul className="space-y-4">
          {formations.slice(0, 5).map((formation, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-1"
            >
              <div className="text-4xl p-2 bg-gray-300 text-gray-700 rounded-lg">
                {formation.type === "video" ? <GoVideo /> : <PiFilePdfLight />}
              </div>

              <div className="">
                <h3 className="text-sm line-clamp-1 ">{formation.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formation.date}
                </p>
              </div>
              {/* <p className="text-gray-700 dark:text-gray-300 mt-2">
                {formation.description}
              </p> */}
            </li>
          ))}
        </ul>

        <Link
          href="/Formations"
          className="py-1 w-fit px-2 text-sm border rounded-full text-indigo-500 hover:scale-105 dark:hover:bg-gray-700 transition"
        >
          Voir toutes les formations
        </Link>
      </div>
    </div>
  );
}
