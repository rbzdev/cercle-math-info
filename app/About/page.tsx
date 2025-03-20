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
          <p>
            Du département des mathématiques et informatique, faculté des
            sciences, Université de Lubumbashi/RDC.
          </p>
          <p className="text-sm md:text-lg text-shadow">
            Le Cercle Scientifique est une communauté dédiée aux technologies et
            au développement informatique, fondée en 2016 par Vander Otis, Yves
            Ndonj et Séraphin Salabin. Son objectif est de favoriser
            l&apos;apprentissage, le réseautage et l&apos;innovation pour
            résoudre des défis socio-économiques. Parmi les figures clés ayant
            occupé le rôle de Coordonnateurs, on retrouve Elvin Kyungu, Oscar
            Kanangila, Jacques Milenge, et actuellement Djochrist Kuma-Kuma, qui
            contribuent à la coordination et au développement des activités de
            la communauté.
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
            <AccordionContent className="space-y-2">
              <p>
                La vision du Cercle Scientifique est de fédérer une communauté
                estudiantine engagée et passionnée, mobilisée pour répondre aux
                enjeux socio économiques contemporains. Nous aspirons à devenir
                des acteurs clés dans la résolution de problématiques complexes,
                en proposant des solutions innovantes et rigoureuses. Convaincus
                que la science est un levier puissant pour le bien commun, nous
                œuvrons pour un avenir plus équitable et durable, où la
                connaissance et l’innovation soutiennent un progrès inclusif et
                responsable.
              </p>
              <p className="text-sm text-gray-500">
                Nous croyons fermement que la science et la technologie sont des
                outils essentiels pour créer des solutions innovantes et
                durables aux défis contemporains. Notre objectif est d’inspirer
                et de former la prochaine génération de penseurs et de
                créateurs.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start">
              Avantages de la communauté Cercle Scientifique Math et Info
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal list-inside">
                <li>
                  <p>Connexion </p>
                  <span>
                    Intégrez une communauté pluridisciplinaire de passionnés de
                    programmation, d’informatique et de technologies émergentes.
                    Que vous soyez étudiant, professionnel ou chercheur, peu
                    importe votre niveau d’expérience ou votre domaine
                    d’activité, vous trouverez un espace d’échange et de
                    collaboration unique.{" "}
                  </span>
                </li>
                <li>
                  <p>Partage et innovation </p>
                  <span>
                    {" "}
                    Partagez vos connaissances et découvrez de nouvelles
                    technologies grâce à des échanges enrichissants avec des
                    experts et des passionnés. Cette synergie vous permet
                    d’élargir vos horizons, d’explorer des approches innovantes
                    et d’acquérir des compétences clés pour résoudre des
                    problèmes complexes.{" "}
                  </span>{" "}
                </li>

                <li>
                  <p>Support technique et expertise </p>
                  <span>
                    Bénéficiez d’un réseau solidaire pour surmonter les défis
                    techniques. Que ce soit pour débugger un code, optimiser un
                    algorithme ou valider une approche, la communauté vous offre
                    un accès à des conseils avisés et des solutions éprouvées.
                  </span>
                </li>

                <li>
                  <p>Opportunités professionnelles </p>
                  <span>
                    Construisez un réseau professionnel influent dans le domaine
                    de l’informatique et des mathématiques appliquées. Grâce à
                    nos événements et collaborations, découvrez des opportunités
                    de stages, de contrats ou d’emplois, et accélérez votre
                    carrière dans un secteur en pleine expansion.
                  </span>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Pourquoi nous rejoindre ?</AccordionTrigger>
            <AccordionContent>
              En rejoignant notre cercle, vous accéderez à un réseau dynamique,
              à des formations enrichissantes, et à des opportunités uniques
              d&apos;échange avec des experts et des professionnels du secteur
              technologique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Qui sont nos membres ?</AccordionTrigger>
            <AccordionContent>
              Nos membres sont des étudiants, enseignants, chercheurs et
              passionnés de sciences et technologies, partageant tous une vision
              commune d’innovation et de développement à travers le numérique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Nos partenaires et sponsors</AccordionTrigger>
            <AccordionContent>
              Nous collaborons avec des institutions académiques, des
              entreprises technologiques et des organisations qui partagent
              notre vision et soutiennent nos initiatives à travers des
              financements, des formations et des événements collaboratifs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Nos événements</AccordionTrigger>
            <AccordionContent>
              Nous organisons régulièrement des conférences, hackathons,
              ateliers et formations pour permettre à nos membres d’acquérir de
              nouvelles compétences et d’échanger avec des experts du domaine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Nos DevFest</AccordionTrigger>
            <AccordionContent>
              Nos DevFest sont des événements majeurs rassemblant des passionnés
              de technologie, offrant des conférences de haut niveau, des
              sessions pratiques et des opportunités de networking avec des
              experts du secteur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-">
            <AccordionTrigger>Objectifs</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-semi-bold">
                Le Cercle Scientifique Math et Info aspire à devenir le
                catalyseur d’idées et de projets innovants, capables de répondre
                aux défis sociétaux grâce aux technologies informatiques. Notre
                mission est de mobiliser les jeunes talents, de stimuler
                l’innovation et de créer un écosystème dynamique où la
                technologie devient un levier de transformation.{" "}
              </h3>
              <p>Pour y parvenir, nous nous fixons les objectifs suivants : </p>

              <ol className="list-decimal list-inside">
                <li>
                  {" "}
                  <p>Sensibiliser et former</p>{" "}
                  <span>
                    Encourager les jeunes à maîtriser les outils numériques et à
                    exploiter leur potentiel pour résoudre des problèmes
                    concrets.{" "}
                  </span>{" "}
                </li>

                <li>
                  <p>Connecter et innover </p>
                  <span>
                    Fédérer les développeurs et informaticiens de l’Université
                    de Lubumbashi et de la région, tout en les connectant à un
                    réseau international pour favoriser l’émergence d’idées
                    novatrices.{" "}
                  </span>
                </li>

                <li>
                  {" "}
                  <p> Inspirer et motiver </p>
                  <span>
                    Organiser des hackathons, concours et conférences pour
                    susciter l’engouement des jeunes pour l’informatique et la
                    création de solutions technologiques.{" "}
                  </span>
                </li>
                <li>
                  <p>Valoriser les talents</p>
                  <span>
                    Offrir une plateforme d’exposition pour les projets et
                    solutions développés par nos membres, mettant en lumière
                    leur créativité et leur expertise.
                  </span>
                </li>

                <li>
                  <p>Apprendre et évoluer </p>
                  <span>
                    Faciliter l’accès à de nouvelles technologies et
                    méthodologies, en encourageant une culture d’apprentissage
                    continu et d’adaptation aux tendances mondiales.
                  </span>
                </li>
                <li>
                  <p>Se challenger </p>
                  <span>
                    Stimuler l’excellence technique en confrontant nos
                    compétences à des standards internationaux, afin de rester
                    compétitifs et innovants.
                  </span>
                </li>

                <li>
                  <p> Promouvoir les profils </p>
                  <span>
                    {" "}
                    Mettre en avant les jeunes talents de la communauté, en leur
                    offrant une visibilité locale et internationale pour
                    accélérer leur développement professionnel.{" "}
                  </span>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-3 text-sm md:text-base">
          <h3 className="text-indigo-500 text-xl font-semibold">
            {" "}
            Mot de fin{" "}
          </h3>
          <p>
            {" "}
            Les mardis nous nous retrouvons pour le Club des Développeurs, un
            moment privilégié pour partager nos connaissances, collaborer sur
            des projets et progresser ensemble, tous les jeudis, nous nous
            retrouvons pour le Club des Développeurs, un moment privilégié pour
            partager nos connaissances, collaborer sur des projets et progresser
            ensemble.{" "}
          </p>
          <p>
            Chaque samedi, un Meet en ligne (via Google Meet) est organisé pour
            discuter d&apos;informatique, explorer de nouvelles technologies et
            renforcer nos compétences. Ces rencontres sont l&apos;occasion de
            poser des questions, de résoudre des problèmes ensemble et de rester
            à la pointe de l&apos;innovation.{" "}
          </p>
          <p>
            Comme le disait Steve Jobs :{" "}
            <span className="italic">
              {" "}
              &quot;La seule façon de faire du bon travail est d&apos;aimer ce
              que vous faites.&quot;{" "}
            </span>{" "}
            Rejoignez-nous pour faire partie de cette aventure innovante,
            inspirante et surtout, passionnante !{" "}
          </p>
        </div>

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
