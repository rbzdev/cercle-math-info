"use client";

// Libs
import Link from "next/link";
import { avatars } from "@/lib/avatars";
import Image from "next/image";

// Components
import AvatarCircles from "@/components/ui/avatar-circles";
import ThemeToggle from "./themeToggle";

// Icons
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";

export default function NavBar() {
  return (
    <>
      {/* Desktop version */}
      <nav className="hidden md:flex sticky z-30 top-0 items-center justify-between w-full px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEwdzuXWGe55A/company-logo_200_200/company-logo_200_200/0/1656015392633/cercle_scientifique_math_info_logo?e=1745452800&v=beta&t=8j9aUvwTe8Z-EmaeEfpW-TiU1QkJ2dTnETE3DTJTrCM"
              alt="Logo"
              width={40}
              height={40}
              className="h-12 w-12 object-cover border rounded-full "
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="">
            A propos
          </Link>
          <Link href="/Formations">Formations</Link>
          <Link href="#">Conférences</Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <div className="border p-1 rounded-full">
            <AvatarCircles numPeople={8} avatarUrls={avatars} />
          </div>
          {/* <IoChatbubbleEllipsesOutline className="text-4xl p-1 border rounded-full" /> */}

          <Link href="Login">
            <PiUser className="text-4xl p-1 rounded-full bg-indigo-200 dark:bg-indigo-900" />
          </Link>
        </div>
      </nav>

      {/* Mobile version */}
      <nav className="md:hidden flex sticky z-30 top-0 items-center justify-between w-full p-2 backdrop-blur-sm">
        <div className="">
          <Link href="/">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEwdzuXWGe55A/company-logo_200_200/company-logo_200_200/0/1656015392633/cercle_scientifique_math_info_logo?e=1745452800&v=beta&t=8j9aUvwTe8Z-EmaeEfpW-TiU1QkJ2dTnETE3DTJTrCM"
              alt="Logo"
              width={40}
              height={40}
              className="h-9 w-9 object-cover border rounded-full "
            />
          </Link>
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
