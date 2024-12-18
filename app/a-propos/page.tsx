import Breadcrumbs from "../components/Breadcrumbs";
import Blockquote from "../components/Blockquote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l’histoire et la mission de ClicketPaf, une entreprise innovante qui révolutionne les paiements en ligne avec simplicité, sécurité et efficacité. Apprenez-en plus sur nos valeurs, nos réussites et notre vision pour transformer l’expérience des transactions numériques.",
  alternates: {
    canonical: "/a-propos",
  },
  keywords: [
    "click et paf",
    "click & paf",
    "click",
    "paf",
    "ClicketPaf",
    "à propos",
    "about",
    "histoire",
    "entreprise",
    "paiement en ligne",
    "paiement",
  ],
};

export default async function Page() {
  return (
    <div className="">
      <Breadcrumbs
        items={[
          { label: "Accueil", path: "/" },
          { label: "À propos", path: "/a-propos" },
        ]}
      />
      <h1 className="text-green-700 font-semibold text-2xl">
        À propos de ClickEtPaf
      </h1>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          ClicketPaf : une vision audacieuse, une révolution du paiement
        </h2>
        <p className="text-gray-900 mt-2">
          Fondée en 2020, ClicketPaf est née d&apos;une idée simple, mais
          ambitieuse : réinventer la manière dont nous effectuons nos paiements
          au quotidien. Dans un monde de plus en plus digitalisé, où la rapidité
          et la sécurité sont devenues essentielles, ClicketPaf s&apos;est donné
          pour mission de créer une solution accessible et innovante qui
          simplifie la vie des utilisateurs, tout en répondant aux exigences des
          commerçants.
        </p>
        <Blockquote
          quote="Nous voulions offrir une expérience de paiement qui ne soit pas seulement fonctionnelle, mais aussi fluide et agréable"
          authorMsg="Explique Emma Dupont, notre co-fondatrice et directrice technique"
          author="Emma Dupont"
        />
        <p className="text-gray-900 mt-2">
          En à peine quelques années, ClicketPaf s’est imposée comme une
          référence dans l’univers des paiements mobiles, avec déjà plus de 500
          000 téléchargements de son application à travers l’Europe. Notre
          parcours est marqué par une croissance rapide et un engagement
          constant envers nos utilisateurs.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          2020 : La naissance d’une idée
        </h2>
        <p className="text-gray-900 mt-2">
          L’histoire de ClicketPaf commence dans un petit bureau à Paris,
          lorsque Emma Dupont et Julien Martin, passionnés de fintech et
          d’innovation, décident de répondre à une frustration qu’ils
          rencontrent souvent dans leur vie quotidienne : des paiements trop
          longs ou peu fiables.
        </p>
        <Blockquote
          quote="Tout le monde a déjà connu une file d’attente interminable ou un
          terminal de paiement en panne. Nous voulions éliminer ces irritants et
          offrir une solution intuitive et universelle."
          author="Julien Martin"
          authorMsg="Julien Martin, co-fondateur et PDG de ClicketPaf"
        />
        <p className="text-gray-900 mt-2">
          En juillet 2020, après plusieurs mois de recherches et de
          brainstorming, les deux entrepreneurs lancent officiellement
          ClicketPaf avec une idée maîtresse : utiliser les smartphones comme
          outil central pour effectuer des paiements{" "}
          <b className="text-green-600 font-medium">rapides</b>,{" "}
          <b className="text-green-600 font-medium">sans contact</b> et
          <b className="text-green-600 font-medium">hautement sécurisés</b>.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          Une technologie de pointe au service de tous
        </h2>
        <p className="text-gray-900 mt-2">
          Le cœur de l’application ClicketPaf repose sur une technologie de
          paiement innovante, combinant{" "}
          <b className="text-green-600 font-medium">cryptage de pointe</b> et{" "}
          <b className="text-green-600 font-medium">
            intelligence artificielle
          </b>
          . Grâce à ces avancées, l’application garantit à la fois :
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-600 font-medium">
                Une sécurité maximale
              </b>
              , protégeant les données personnelles et bancaires des
              utilisateurs.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-600 font-medium">Une vitesse inégalée</b>
              , permettant de finaliser un paiement en moins de 5 secondes.
            </span>
          </li>
        </p>
        <p className="text-gray-900 mt-2">
          À sa sortie en novembre 2020, ClicketPaf comptait déjà 10 000
          utilisateurs actifs, séduits par sa simplicité et ses fonctionnalités
          pratiques, comme la possibilité d’effectuer des paiements en ligne et
          en magasin via un simple QR code ou en approchant son téléphone d’un
          terminal compatible.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          Des chiffres qui parlent
        </h2>
        <p className="text-gray-900 mt-2">
          En seulement trois ans, ClicketPaf a connu une ascension fulgurante :
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-600 font-medium">500 000 utilisateurs</b>
              , enregistrés en 2023, dont 65 % déclarent utiliser l’application
              quotidiennement.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-600 font-medium">
                25 000 commerçants partenaires{" "}
              </b>
              à travers l’Europe, séduits par une solution qui réduit les frais
              de transaction et simplifie leur gestion.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot stroke-green-600"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b className="text-green-600 font-medium">
                Un taux de satisfaction client de 98%{" "}
              </b>
              selon une enquête interne menée en mai 2023.
            </span>
          </li>
        </p>
        <p className="text-gray-900 mt-2">
          Ces chiffres témoignent du succès de l’application, mais aussi de
          l’engouement général pour des solutions de paiement innovantes.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          Une équipe soudée, une mission partagée
        </h2>
        <p className="text-gray-900 mt-2">
          Derrière le succès de ClicketPaf, il y a une équipe passionnée de 35
          employés qui travaillent chaque jour pour perfectionner l’application
          et répondre aux besoins de ses utilisateurs.{" "}
        </p>
        <Blockquote
          quote="Nous sommes avant tout une famille. Chaque membre de l’équipe partage
          une vision commune : transformer le paiement en une expérience
          positive pour tous."
          authorMsg="Affirme Laura Perez, responsable du service client"
          author="Laura Perez"
        />
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          2022 : L’année des grandes évolutions
        </h2>
        <p className="text-gray-900 mt-2">
          En 2022, ClicketPaf franchit une étape importante en intégrant le
          paiement en plusieurs fois sans frais, une fonctionnalité qui attire
          immédiatement l’attention des jeunes consommateurs et des familles.
        </p>
        <p className="text-gray-900 mt-2">
          Selon une étude menée par l’entreprise cette année-là, 75 % des
          utilisateurs âgés de 25 à 40 ans préfèrent utiliser ClicketPaf pour
          des achats supérieurs à 500 €, grâce à cette nouvelle option.{" "}
        </p>
        <p className="text-gray-900 mt-2">
          En parallèle, l’application s’ouvre à de nouveaux marchés en dehors de
          la France, notamment en{" "}
          <b className="text-green-600 font-medium">Belgique</b>,{" "}
          <b className="text-green-600 font-medium">Espagne</b> et{" "}
          <b className="text-green-600 font-medium">Italie</b>, où elle connaît
          un succès immédiat.{" "}
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          ClicketPaf : Une application, plusieurs usages
        </h2>
        <p className="text-gray-900 mt-2">
          Aujourd’hui, ClicketPaf se distingue par sa polyvalence. Voici
          quelques-uns des usages les plus populaires :
        </p>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-600 font-medium">
              Paiements en magasin :{" "}
            </b>
            Rapides et sans contact grâce à la technologie NFC.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-600 font-medium">Paiements en ligne : </b>
            En scannant un QR code ou en cliquant sur un lien sécurisé.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-600 font-medium">
              Transferts entre particuliers :{" "}
            </b>
            Parfait pour partager une addition ou rembourser un ami en un clic.
          </span>
        </li>
        <p className="text-gray-900 mt-2">
          En 2023, ClicketPaf introduit également des fonctionnalités
          éco-responsables, comme l’option de compenser l’impact carbone de ses
          achats directement depuis l’application.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl text-green-700 font-semibold">
          L’avenir de ClicketPaf
        </h2>
        <p className="text-gray-900 mt-2">
          Le voyage ne s’arrête pas là pour ClicketPaf. L’entreprise prévoit de
          lancer de nouvelles fonctionnalités majeures en 2024, notamment :
        </p>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-600 font-medium">
              Une carte virtuelle intégrée{" "}
            </b>
            pour les achats en ligne sur des sites non partenaires.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <span>
            <b className="text-green-600 font-medium">
              Un programme de fidélité universel{" "}
            </b>
            permettant aux utilisateurs de cumuler des points chez les
            commerçants participants.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot stroke-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <b className="text-green-600 font-medium">
            Une expansion dans de nouveaux marchés
          </b>
          en Europe de l’Est et en Scandinavie.
        </li>
        <Blockquote
          quote="Nous avons pour ambition de devenir l’application de paiement préférée
          en Europe d’ici 2030"
          authorMsg="Déclare Julien Martin avec enthousiasme."
          author="Julien Martin"
        />
      </section>
    </div>
  );
}
