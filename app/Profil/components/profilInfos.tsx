"use client";

import { useEffect, useState } from "react";
import { members } from "@/lib/members";
import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";
import { PiUser } from "react-icons/pi";
import Link from "next/link";
import { TbMessage2 } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";

// Définition du type pour un membre
interface Member {
  name: string;
  imageUrl?: string;
  title?: string;
  isVerifyed?: boolean;
}

export default function ProfilInfos() {
  const [randomMember, setRandomMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setRandomMember(members[Math.floor(Math.random() * members.length)]);
    setLoading(false);
  }, []);

  if (!randomMember) return null;

  return (
    <div className="border p-2 bg-white dark:bg-gray-800 rounded-2xl h-fit">
      {/* Skeleton loader */}
      {loading ? (
        <div className="border-2 p-2 bg-white dark:bg-gray-800 rounded-lg h-fit">
          <div className="flex flex-col  gap-4">
            {/* Skeleton pour l'image */}
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>

            {/* Skeleton pour le nom */}
            <div className="w-32 h-6 bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>

            {/* Skeleton pour le titre/ la profession */}
            <div className="w-4/5 h-2 bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>

            {/* Skeleton pour les boutons*/}
            <div className="flex items-center justify-between w-full h-8">
              <div className="w-1/2 h-full bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
              <div className="w-8 h-full bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
              <div className="w-8 h-full bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Photo de profil et informations */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border overflow-hidden">
              {randomMember.imageUrl ? (
                <Image
                  src={randomMember.imageUrl}
                  alt={`${randomMember.name || "Membre"} image`}
                  height={200}
                  width={200}
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
        </>
      )}
    </div>
  );
}
