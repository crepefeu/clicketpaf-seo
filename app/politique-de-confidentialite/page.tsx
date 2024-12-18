import Breadcrumbs from "../components/Breadcrumbs";
import { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Protection des données | Clicketpaf",
  description:
    "Découvrez comment Clicketpaf protège vos données personnelles. Informations sur la collecte, l'utilisation et la sécurisation de vos données conformément au RGPD.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité | Clicketpaf",
    description:
      "Découvrez comment Clicketpaf protège vos données personnelles et respecte votre vie privée conformément au RGPD.",
    url: "https://clicketpaf.com/politique-de-confidentialite",
    type: "website",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Politique de confidentialité Clicketpaf",
    description:
      "Politique de confidentialité et protection des données personnelles de Clicketpaf",
    publisher: {
      "@type": "Organization",
      name: "Clicketpaf",
      url: "https://clicketpaf.com",
    },
    dateModified: "2024-12-18",
  };

  return (
    <main className="max-w-4xl mx-auto" role="main">
      <JsonLd data={schemaData} />
      <Breadcrumbs
        items={[
          { label: "Accueil", path: "/" },
          {
            label: "Politique de confidentialité",
            path: "/politique-de-confidentialite",
          },
        ]}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <h1
          className="text-3xl font-bold text-green-700 mb-8"
          itemProp="headline"
        >
          Politique de confidentialité et protection des données
        </h1>

        <div className="space-y-8" itemProp="mainContentOfPage">
          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700">
              Chez Clicketpaf, nous accordons une importance primordiale à la
              protection de vos données personnelles. Cette politique de
              confidentialité décrit comment nous collectons, utilisons et
              protégeons vos informations lorsque vous utilisez notre
              application et nos services de paiement.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              2. Collecte des données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Informations d&apos;identification (nom, prénom, date de
                naissance)
              </li>
              <li>Coordonnées (adresse email, numéro de téléphone)</li>
              <li>Informations de paiement (données bancaires cryptées)</li>
              <li>
                Données de transaction (historique des paiements, montants)
              </li>
              <li>
                Informations techniques (adresse IP, données de connexion)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              3. Utilisation des données
            </h2>
            <p className="text-gray-700 mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Traiter vos transactions et paiements</li>
              <li>Assurer la sécurité de votre compte</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Vous informer des mises à jour importantes</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              4. Protection des données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures de sécurité avancées pour
              protéger vos données :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cryptage de bout en bout des données sensibles</li>
              <li>Authentification forte à deux facteurs</li>
              <li>Surveillance continue des activités suspectes</li>
              <li>Mises à jour régulières de nos systèmes de sécurité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              5. Vos droits
            </h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>
                Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)
              </li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              6. Cookies et traceurs
            </h2>
            <p className="text-gray-700">
              Notre application utilise des cookies et des traceurs pour
              améliorer votre expérience. Vous pouvez gérer vos préférences
              concernant les cookies à tout moment dans les paramètres de
              l&apos;application.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              7. Contact
            </h2>
            <p className="text-gray-700">
              Pour toute question concernant notre politique de confidentialité
              ou pour exercer vos droits, vous pouvez nous contacter à :
              <a
                href="mailto:privacy@clicketpaf.com"
                className="text-green-600 hover:underline ml-1"
              >
                privacy@clicketpaf.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              8. Modifications
            </h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications entrent en
              vigueur dès leur publication sur notre site. Dernière mise à jour
              : janvier 2024.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              Engagement de Clicketpaf
            </h2>
            <p className="text-gray-700">
              Clicketpaf s&apos;engage à maintenir la confiance que vous nous
              accordez et à assurer la sécurité et la confidentialité de vos
              données personnelles. Nous mettons continuellement à jour nos
              pratiques de sécurité pour garantir la meilleure protection
              possible de vos informations.
            </p>
          </section>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            Dernière mise à jour :{" "}
            <time dateTime="2024-01-15">18 décembre 2024</time>
          </p>
        </footer>
      </article>
    </main>
  );
}
