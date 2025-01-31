"use client";

import Link from "next/link";

// Icons
import { IoLogOut } from "react-icons/io5";
import { PiUserSwitchFill } from "react-icons/pi";

export default function Header() {
  const handleSwitch = () => {
    window.location.reload();
  };
  return (
    <header className="flex items-center justify-end w-full gap-4 p-2 md:p-4 ">
      <button
        className="border p-1 rounded-full text-indigo-500 bg-indigo-200 hover:bg-indigo-400 transition-all duration-300 flex items-center gap-2"
        onClick={() => handleSwitch()}
      >
        <PiUserSwitchFill className="text-xl" />
        <span> Switch profil </span>
      </button>
      <Link
        href="/"
        className="border p-1 rounded-full text-indigo-500 bg-indigo-200 hover:bg-indigo-400 transition-all duration-300 flex items-center gap-2"
      >
        <span> Déconnexion</span>
        <IoLogOut className="text-xl" />
      </Link>
    </header>
  );
}
