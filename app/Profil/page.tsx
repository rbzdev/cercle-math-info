import ProfilInfos from "./components/profilInfos";
import Events from "./components/events";
import Formations from "./components/formations";
import Header from "./components/header";

export default function Page() {
  return (
    <div className="flex flex-col items-center  mx-auto">
      <Header />
      <div className="flex flex-col md:flex-row gap-4  p-2 md:p-4">
        <ProfilInfos />
        <Events />
        <Formations />
      </div>
    </div>
  );
}
