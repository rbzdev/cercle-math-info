import ProfilInfos from "./components/profilInfos";
import Events from "./components/events";
import Formations from "./components/formations";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-2 md:p-4  mx-auto">
      <header className="flex flex-col md:flex-row gap-4">
        <ProfilInfos />
        <Events />
        <Formations />
      </header>
    </div>
  );
}
