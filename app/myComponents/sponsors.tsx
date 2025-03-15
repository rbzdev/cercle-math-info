// Libs
import Image from "next/image";
import { sponsors } from "@/lib/sponsors";

// Components
import Marquee from "@/components/ui/marquee";
import BecomeSponsor from "./becomeSponsor";

export default function Sponsors() {
  return (
    <section className="w-full overflow:hidden flex flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-3xl"> Nos sponsores </h2>

        <BecomeSponsor />
      </div>
      <div>
        <Marquee>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="mr-2 md:mr-12">
              <div className="flex flex-col items-center justify-center gap-2 max-w-36">
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  width={100}
                  height={100}
                  className="rounded-xl bg-white shadow-sm border h-24 w-24 md:w-40 md:h-36 object-contain hover:scale-110 transition-all duration-300"
                />
                <span className="text-xs md:text-sm w-full text-center line-clamp-2">
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
