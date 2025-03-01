import Link from "next/link";

// icons
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuBicepsFlexed } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 mt-16 p-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-t">
      {/* Liens de navigation */}
      <div className="grid grid-cols-2 gap-8 md:flex md:justify-between items-start w-full">
        {/* Liens utiles */}
        <div className="flex flex-col justify-center gap-4 text-sm">
          <Link
            href="/About"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            A propos
          </Link>

          <Link
            href="#Privacy"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            <span className="block md:hidden">Pol. de Confid.</span>
            <span className="hidden md:block">
              Politique de confidentialité
            </span>
          </Link>
          <Link
            href="#Terms"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            Termes et conditions
          </Link>
        </div>

        {/* Espace Maths */}
        <div className="flex flex-col justify-center gap-4 text-sm">
          <Link
            href="/Meet"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            {" "}
            Conférences{" "}
          </Link>
          <Link
            href="/Profil"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            {" "}
            Événements{" "}
          </Link>
          <Link
            href="#Blog"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            {" "}
            Blog{" "}
          </Link>
        </div>

        {/* Reseaux Sociaux */}
        <div className="flex flex-col gap-2">
          <h4> Nos réseaux </h4>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/cercle-scientifique-math-info/posts/?feedView=all"
              target="_blank"
            >
              {" "}
              <TbBrandLinkedinFilled className="text-xl md:text-4xl hover:text-blue-400" />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570028531958"
              target="_blank"
            >
              {" "}
              <FaFacebook className="text-xl md:text-4xl hover:text-blue-600" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/company/cercle-scientifique-math-info/posts/?feedView=all"
              target="_blank"
            >
              <FaXTwitter className="text-xl md:text-4xl hover:text-black hover:bg-white rounded-md" />
            </a>
            <a
              href="https://chat.whatsapp.com/Jt1SDlpq7Ot34Po6hGemya"
              target="_blank"
            >
              <FaWhatsapp className="hover:text-green-500 text-xl md:text-4xl" />{" "}
            </a>
          </div>
        </div>
      </div>

      {/* Lignes de séparation */}
      <hr className="w-full border-t border-slate-300 dark:border-slate-700" />

      {/* Crédits et droits réservés */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs md:text-sm gap-2">
        <p className="text-slate-300 dark:text-slate-600 flex items-center flex-nowrap gap-1">
          {/* Made with ❤️ by{" "} */}
          <span className="flex items-center flex-nowrap gap-1">
            Made with <LuBicepsFlexed className="text-lg text-orange-600" /> by
          </span>
          <a
            href="https://www.linkedin.com/in/olivier-rubuz-576322246"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Olivier Rubuz
          </a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Cercle Math Info | All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
