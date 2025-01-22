import Image from "next/image";
import { formations } from "@/lib/formations";
import Reveal from "@/lib/useHook/reveal";

// components
import { TextAnimate } from "@/components/ui/text-animate";

// icons
import { GoVideo } from "react-icons/go";
import { PiArticleDuotone, PiFilePdfLight } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { FaRegCircleCheck } from "react-icons/fa6";
import { WiTime2 } from "react-icons/wi";
import { TbUserSquareRounded } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";

export default function AllFormations() {
  return (
    <div className="flex flex-col gap-8 p-2 md:p-4 w-full mx-auto mt-4">
      {/* Titre principal */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-indigo-900 dark:text-indigo-300">
        Toutes les formations
      </h1>

      {/* Grille des formations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {formations.map((formation, index) => (
          <Reveal
            key={index}
            className="flex flex-col gap-4 p-2 border  dark:border-gray-600 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            {/* Image et contenu principal */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="h-40 w-full md:w-40 border rounded-xl overflow-hidden">
                <Image
                  src={formation.image || "https://picsum.photos/200"}
                  alt="formation"
                  width={200}
                  height={200}
                  className=" object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-2">
                  {formation.title || "Pas de titre"}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                  {formation.description || "Aucune description disponible."}
                </p>

                {/* Price  */}
                <div className="mt-2 md:mt-0">
                  {formation.isFree ? (
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <TextAnimate animation="scaleUp" by="text">
                        Gratuit
                      </TextAnimate>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400">
                      <span className="text-green-500">
                        {formation.price}
                        {formation.currency}
                      </span>
                      <FaRegCircleCheck className="text-green-500" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Icônes et actions */}
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                {/* Auteur et durée */}
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <WiTime2 className="text-xl" />
                  {formation.duration || "Non spécifiée"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <TbUserSquareRounded className="text-xl" />{" "}
                  {formation.author || "Non spécifiée"}
                </span>

                <div className="flex items-center gap-2">
                  {formation.type === "video" && (
                    <div className="flex items-center gap-1">
                      <GoVideo className="text-indigo-500 text-xl" />
                      <span>Vidéo</span>
                    </div>
                  )}
                  {formation.type === "pdf" && (
                    <div className="flex items-center gap-1">
                      <PiFilePdfLight className="text-red-500 text-xl" />{" "}
                      <span>PDF</span>
                    </div>
                  )}
                  {formation.type === "article" && (
                    <div className="flex items-center gap-1">
                      <PiArticleDuotone className="text-green-500 text-xl" />{" "}
                      <span>Article</span>
                    </div>
                  )}

                  {formation.type === "workshop" && (
                    <div className="flex items-center gap-1">
                      <GrWorkshop className="text-red-500 text-xl" />
                      <span>Atelier</span>
                    </div>
                  )}
                </div>
              </div>
              {formation.isFree ? (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <a
                    href={`${formation.link}`}
                    target="_blank"
                    className="flex items-center gap-1 border px-3 py-1 rounded-full text-indigo-500 bg-indigo-200/50 dark:bg-transparent hover:bg-indigo-300 hover:scale-105 transition-transform duration-300"
                  >
                    {" "}
                    Démarrer <FiExternalLink className="text-xs" />
                  </a>
                </div>
              ) : (
                <div>
                  <button className="bg-indigo-500 text-white px-4 py-1 rounded-full">
                    {" "}
                    Obtenir
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
