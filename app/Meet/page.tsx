import Navbar from "@/app/myComponents/navBar";
import UpComingMeets from "./components/upComing";

export default function Meet() {
  return (
    <div>
      <Navbar />
      <div className="p-2 md:p-4  mx-auto space-y-4">
        <h2 className="text-2xl font-semibold ">Meet</h2>
        <UpComingMeets />
      </div>
    </div>
  );
}
