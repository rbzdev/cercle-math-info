"use client";

// Libs
import Link from "next/link";
import { avatars } from "@/lib/avatars";

// Components
import { Button } from "@/components/ui/button";
import AvatarCircles from "@/components/ui/avatar-circles";
import ThemeToggle from "./themeToggle";
import Chatbot from "./chatBot";

// Icons
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";

export default function NavBar() {
  return (
    <>
      {/* Desktop version */}
      <nav className="hidden md:flex sticky z-30 top-0 items-center justify-between w-full px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Button variant="link" className="text-xl font-bold">
            Logo
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="">
            A propos
          </Link>
          <Link href="#">Formations</Link>
          <Link href="#">Avis</Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <div className="border p-1 rounded-full">
            <AvatarCircles numPeople={8} avatarUrls={avatars} />
          </div>
          {/* <IoChatbubbleEllipsesOutline className="text-4xl p-1 border rounded-full" /> */}
          <Chatbot />
          <PiUser className="text-4xl p-1 rounded-full bg-indigo-200 dark:bg-indigo-900" />
        </div>
      </nav>

      {/* Mobile version */}
      <nav className="md:hidden flex sticky z-30 top-0 items-center justify-between w-full p-2 backdrop-blur-sm">
        <div className="">
          <Button variant="link" className="text-xl font-bold">
            Logo
          </Button>
        </div>

        {/* Toggle burger menu */}

        <div className="flex items-center gap-6">
          <ThemeToggle />

          <IoChatbubbleEllipsesOutline className="text-4xl p-1 border rounded-full" />
          <PiUser className="text-4xl p-1 rounded-full bg-indigo-200 dark:bg-indigo-900" />
        </div>

        <div className="hidden flex-col items-center gap-6">
          <Link href="#" className="">
            A propos
          </Link>
          <Link href="#">Formations</Link>
          <Link href="#">Avis</Link>
        </div>
      </nav>
    </>
  );
}
