import { members } from "@/lib/members";
import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";
import { PiUser } from "react-icons/pi";
import Link from "next/link";
import { TbMessage2 } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";

export default function ProfilInfos() {
  // Sélectionner un membre aléatoire
  const randomMember = members[Math.floor(Math.random() * members.length)];
  return (
    <div className="border p-2 bg-white dark:bg-gray-800 rounded-2xl h-fit">
      {/* Photo de profil et informations */}
      <div className="flex flex-col items-center gap-4 ">
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border overflow-hidden">
          {randomMember.imageUrl ? (
            <Image
              src={randomMember.imageUrl}
              alt={`${randomMember.name || "Membre"} image`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700">
              <PiUser size={80} className="text-indigo-500/50" />
            </div>
          )}
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
            <span className="line-clamp-1">{randomMember.name}</span>
            {randomMember.isVerifyed && (
              <HiBadgeCheck className="text-indigo-500 text-2xl" />
            )}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {randomMember.title || "une date inconnue"}
          </p>
        </div>
      </div>

      {/* Boutons d'actions */}
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/edit-profile"
          className="px-4 py-1 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
        >
          Modifier
        </Link>
        <button className="p-2 border rounded-full text-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <TbMessage2 className="text-2xl" />
        </button>
        <Link
          href="/"
          className="p-2 border rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-800 transition"
        >
          <RxDiscordLogo className="text-2xl" />
        </Link>
      </div>

      <Link
        href="/"
        className="w-full py-2 mt-2 flex items-center justify-center gap-2 border rounded-xl hover:bg-red-200 transition-all duration-300 hover:text-gray-800"
      >
        <IoLogOut />
        <p>Déconnexion</p>
      </Link>
    </div>
  );
}
