import Navbar from "@/app/myComponents/navBar";
import UpComingMeets from "./components/upComing";
import AllMeets from "./components/allMeets";

export default function Meet() {
  return (
    <div>
      <Navbar />
      <div className="p-2 md:p-4  mx-auto ">
        <h2 className="text-3xl my-6 font-semibold text-indigo-500">
          Meets & Événements
        </h2>
        <div className="space-y-8">
          <UpComingMeets />
          <AllMeets />
        </div>
      </div>
    </div>
  );
}
