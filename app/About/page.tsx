"use client";

import NavBar from "@/app/myComponents/navBar";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <div className="flex flex-col items-center mx-auto">
      <NavBar />
      <header className="flex flex-col items-center gap-4 mt-6 space-y-4 w-full p-2 md:p-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-shadow">À propos</h1>
          <p className="text-sm md:text-lg text-shadow">
            Le Cercle Scientifique Math-Info est une communauté de passionnés de
            technologies, de mathématiques, d’informatique et de développement.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Qui sommes-nous ?</AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Nous sommes une communauté d&apos;étudiants et de professionnels
              unis par la passion des sciences et de l&apos;innovation. Nous
              avons pour mission d&apos;apprendre, réseauter et innover ensemble
              afin de relever les défis socio-économiques de notre époque.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Notre Vision</AccordionTrigger>
            <AccordionContent>
              Nous croyons fermement que la science et la technologie sont des
              outils essentiels pour créer des solutions innovantes et durables
              aux défis contemporains. Notre objectif est d’inspirer et de
              former la prochaine génération de penseurs et de créateurs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Pourquoi nous rejoindre ?</AccordionTrigger>
            <AccordionContent>
              En rejoignant notre cercle, vous accéderez à un réseau dynamique,
              à des formations enrichissantes, et à des opportunités uniques
              d&apos;échange avec des experts et des professionnels du secteur
              technologique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Qui sont nos membres ?</AccordionTrigger>
            <AccordionContent>
              Nos membres sont des étudiants, enseignants, chercheurs et
              passionnés de sciences et technologies, partageant tous une vision
              commune d’innovation et de développement à travers le numérique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Nos partenaires et sponsors</AccordionTrigger>
            <AccordionContent>
              Nous collaborons avec des institutions académiques, des
              entreprises technologiques et des organisations qui partagent
              notre vision et soutiennent nos initiatives à travers des
              financements, des formations et des événements collaboratifs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Nos événements</AccordionTrigger>
            <AccordionContent>
              Nous organisons régulièrement des conférences, hackathons,
              ateliers et formations pour permettre à nos membres d’acquérir de
              nouvelles compétences et d’échanger avec des experts du domaine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Nos DevFest</AccordionTrigger>
            <AccordionContent>
              Nos DevFest sont des événements majeurs rassemblant des passionnés
              de technologie, offrant des conférences de haut niveau, des
              sessions pratiques et des opportunités de networking avec des
              experts du secteur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-xl font-bold text-shadow">Adresse</h1>
          <ul className="flex flex-col gap-2 text-sm md:text-lg text-shadow">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-500 text-3xl border rounded-full p-1" />
              <span>Rte Kassapa, Arrêt Géo, Lubumbashi — RDC</span>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineAlternateEmail className="text-indigo-500 text-3xl border rounded-full p-1" />{" "}
              <a
                href="mailto:cerclescientifiquemathinfo@gmail.com"
                className="text-blue-500 hover:underline"
              >
                cerclescientifiquemathinfo@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
