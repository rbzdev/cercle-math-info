// import Image from "next/image";

import NavBar from "./myComponents/navBar";
import HomeHeader from "./myComponents/homeHeader";
import CodeSection from "./myComponents/codeSection";
import WhyUs from "./myComponents/whyUs";
import Cards from "./myComponents/cards";
import Members from "./myComponents/members";
import Sponsors from "./myComponents/sponsors";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-2 md:p-4 space-y-6 md:space-y-20 overflow-hidden">
        <HomeHeader />
        <CodeSection />
        <WhyUs />
        <Cards />
        <Members />
        <Sponsors />
      </main>
    </div>
  );
}
