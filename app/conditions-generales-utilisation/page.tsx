import Breadcrumbs from "../components/Breadcrumbs";
import { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | CGU | Clicketpaf",
  description:
    "Consultez les conditions générales d'utilisation de Clicketpaf. Découvrez les règles d'utilisation de nos services de paiement en ligne.",
  alternates: {
    canonical: "/conditions-generales-utilisation",
  },
  openGraph: {
    title: "Conditions Générales d'Utilisation | Clicketpaf",
    description:
      "Découvrez les conditions d'utilisation des services de paiement Clicketpaf",
    url: "https://clicketpaf.com/conditions-generales-utilisation",
    type: "website",
  },
  keywords: [
    "click et paf",
    "click & paf",
    "click",
    "paf",
    "ClicketPaf",
    "CGU",
    "conditions générales d'utilisation",
    "paiement en ligne",
  ],
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Conditions Générales d'Utilisation Clicketpaf",
    description: "Conditions générales d'utilisation des services Clicketpaf",
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
            label: "Conditions Générales d'Utilisation",
            path: "/conditions-generales-utilisation",
          },
        ]}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <h1
          className="text-3xl font-bold text-green-700 mb-8"
          itemProp="headline"
        >
          Conditions Générales d&apos;Utilisation
        </h1>

        <div className="space-y-8" itemProp="mainContentOfPage">
          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              1. Objet
            </h2>
            <p className="text-gray-700">
              Les présentes Conditions Générales d&apos;Utilisation (CGU)
              définissent les modalités et conditions d&apos;utilisation des
              services proposés par Clicketpaf SAS. En utilisant nos services,
              vous acceptez sans réserve l&apos;ensemble des présentes
              conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              2. Description des services
            </h2>
            <p className="text-gray-700">
              Clicketpaf propose une solution de paiement en ligne permettant :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Les paiements en ligne via l&apos;application mobile</li>
              <li>Les transferts d&apos;argent entre utilisateurs</li>
              <li>Le paiement chez les commerçants partenaires</li>
              <li>La gestion des transactions et le suivi des dépenses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              3. Conditions d&apos;accès
            </h2>
            <p className="text-gray-700 mb-4">
              Pour utiliser nos services, vous devez :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Être âgé d&apos;au moins 18 ans</li>
              <li>
                Disposer d&apos;un compte bancaire valide dans l&apos;Union
                Européenne
              </li>
              <li>Fournir des informations exactes et à jour</li>
              <li>Accepter notre politique de confidentialité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              4. Inscription et compte
            </h2>
            <p className="text-gray-700">
              L&apos;utilisation de Clicketpaf nécessite la création d&apos;un
              compte personnel. Vous êtes responsable de la confidentialité de
              vos identifiants et de toutes les activités effectuées depuis
              votre compte. Vous vous engagez à nous informer immédiatement de
              toute utilisation non autorisée de votre compte.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              5. Tarification
            </h2>
            <p className="text-gray-700">
              Les conditions tarifaires de nos services sont disponibles dans
              l&apos;application et sur notre site. Nous nous réservons le droit
              de modifier nos tarifs à tout moment, sous réserve d&apos;en
              informer les utilisateurs 30 jours à l&apos;avance.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              6. Sécurité et responsabilité
            </h2>
            <p className="text-gray-700">
              Bien que nous mettions en œuvre des mesures de sécurité avancées,
              nous ne pouvons garantir une sécurité absolue. Vous êtes
              responsable de la sécurité de votre appareil et de vos
              informations de connexion. Clicketpaf ne pourra être tenu
              responsable en cas de :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Utilisation frauduleuse de votre compte</li>
              <li>Perte de données due à une défaillance technique</li>
              <li>Interruption temporaire du service pour maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              7. Protection des données
            </h2>
            <p className="text-gray-700">
              Le traitement de vos données personnelles est soumis à notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-green-600 hover:underline"
              >
                politique de confidentialité
              </Link>
              , conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              8. Modification et résiliation
            </h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier ces CGU à tout moment.
              Les utilisateurs seront informés des modifications substantielles.
              Clicketpaf peut suspendre ou résilier votre compte en cas de
              violation des présentes conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              9. Droit applicable
            </h2>
            <p className="text-gray-700">
              Les présentes CGU sont régies par le droit français. Tout litige
              relatif à leur interprétation ou leur exécution relève des
              tribunaux français compétents.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-xl text-green-700 font-semibold mb-4">
              Contact
            </h2>
            <p className="text-gray-700">
              Pour toute question concernant ces CGU, contactez-nous à :{" "}
              <a
                href="mailto:support@clicketpaf.com"
                className="text-green-600 hover:underline"
              >
                support@clicketpaf.com
              </a>
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
