"use client";

// Libs
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import Reveal from "@/lib/useHook/reveal";

// Components
import NavBar from "../myComponents/navBar";
import { members } from "@/lib/members";

// Icons
import { PiUser } from "react-icons/pi";
import { HiBadgeCheck } from "react-icons/hi";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <NavBar />
      <section className="p-2 md:p-4 space-y-4 flex flex-col">
        <TextAnimate className="text-3xl md:text-7xl font-bold my-6 text-indigo-500">
          Tous les membres
        </TextAnimate>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className=" space-y-2 border p-1 md:p-2 rounded-2xl shadow-sm dark:hover:bg-slate-800 hover:bg-white hover:scale-95 transition-all duration-300"
            >
              <div className=" h-32 md:h-64 rounded-xl border flex items-center justify-center overflow-hidden">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name || "Membre"} image`}
                    height={200}
                    width={200}
                    className="size-full object-cover hover:scale-125 transition-all duration-300 dark:saturate-50"
                  />
                ) : (
                  <div className="flex justify-center items-center h-full w-full rounded-xl bg-gray-200 dark:bg-gray-800">
                    <PiUser size={80} className="text-indigo-500/50 " />
                  </div>
                )}
              </div>
              <h4 className="text-xs font-normal md:text-md md:font-semibold flex items-center">
                {member.isVerifyed && (
                  <HiBadgeCheck className="text-xl text-indigo-500 rounded-full" />
                )}

                <TextAnimate animation="scaleUp" by="text">
                  {member.name}
                </TextAnimate>
              </h4>
            </div>
          ))}
        </div>
        <Reveal className="flex gap-2 flex-col md:flex-row">
          <Link
            href="/Join"
            className="py-1 px-4 border rounded-full w-fit text-gray-800 bg-indigo-300 hover:bg-indigo-400 hover:scale-105 transition-all duration-300"
          >
            {" "}
            Réjoindre{" "}
          </Link>

          <Link
            href="Profil"
            className="py-1 px-4 border rounded-full w-fit text-gray-800 bg-indigo-300 hover:bg-indigo-400 hover:scale-105  transition-all duration-300"
          >
            Déjà membre ? <span>Voir mon profil</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
