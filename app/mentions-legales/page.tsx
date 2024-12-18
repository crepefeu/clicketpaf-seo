import Breadcrumbs from "../components/Breadcrumbs";
import { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Informations juridiques | Clicketpaf",
  description: "Mentions légales de Clicketpaf : informations sur l'entreprise, conditions d'utilisation et responsabilités légales",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales | Clicketpaf",
    description: "Consultez les mentions légales et informations juridiques de Clicketpaf",
    url: "https://clicketpaf.com/mentions-legales",
    type: "website",
  },
  keywords: [
    "click et paf",
    "click & paf",
    "click",
    "paf",
    "ClicketPaf",
    "mentions légales",
    "informations juridiques",
    "entreprise",
    "responsabilité",
  ],
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mentions légales Clicketpaf",
    description: "Mentions légales et informations juridiques de Clicketpaf",
    publisher: {
      "@type": "Organization",
      name: "Clicketpaf",
      url: "https://clicketpaf.com"
    },
    dateModified: "2024-12-18",
  };

  return (
    <main className="max-w-4xl mx-auto" role="main">
      <JsonLd data={schemaData} />
      <Breadcrumbs
        items={[
          { label: "Accueil", path: "/" },
          { label: "Mentions légales", path: "/mentions-legales" },
        ]}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <h1 className="text-3xl font-bold text-green-700 mb-8" itemProp="headline">
          Mentions légales
        </h1>

        <div className="space-y-8" itemProp="mainContentOfPage">
          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">1. Informations légales</h2>
            <p className="text-gray-700">
              Le site Clicketpaf est édité par la société Clicketpaf SAS, au capital social de 50 000€,
              immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.
            </p>
            <p className="text-gray-700 mt-4">
              Siège social : 123 Avenue des Startups, 75001 Paris, France<br />
              N° TVA intracommunautaire : FR12345678900<br />
              Téléphone : +33 (0)1 23 45 67 89<br />
              Email : contact@clicketpaf.com
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">2. Direction de la publication</h2>
            <p className="text-gray-700">
              Directeur de la publication : Julien Martin, en qualité de Président<br />
              Responsable de la rédaction : Emma Dupont
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">3. Hébergement</h2>
            <p className="text-gray-700">
              Le site Clicketpaf est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L&apos;ensemble du contenu de ce site (structure, textes, logos, images, vidéos, etc.) est 
              la propriété exclusive de Clicketpaf SAS. Toute reproduction, représentation, modification 
              ou exploitation totale ou partielle du site ou de son contenu, par quelque procédé que ce 
              soit, sans l&apos;autorisation expresse et préalable de Clicketpaf SAS, est strictement interdite 
              et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">5. Protection des données</h2>
            <p className="text-gray-700">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement 
              Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de 
              rectification et de suppression des données vous concernant. Pour exercer ces droits, 
              veuillez consulter notre{" "}
              <Link href="/politique-de-confidentialite" className="text-green-600 hover:underline">
                politique de confidentialité
              </Link>
              {" "}ou nous contacter à privacy@clicketpaf.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">6. Cookies</h2>
            <p className="text-gray-700">
              Le site utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour en savoir plus 
              sur l&apos;utilisation des cookies, veuillez consulter notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">7. Responsabilité</h2>
            <p className="text-gray-700">
              Clicketpaf s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées 
              sur ce site. Toutefois, Clicketpaf ne peut garantir l&apos;exactitude, la précision ou 
              l&apos;exhaustivité des informations mises à disposition sur ce site. En conséquence, 
              Clicketpaf décline toute responsabilité pour les éventuelles erreurs ou omissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-green-700 font-semibold mb-4">8. Droit applicable</h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, 
              les tribunaux français seront compétents.
            </p>
          </section>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <p>Dernière mise à jour : <time dateTime="2024-01-15">18 décembre 2024</time></p>
        </footer>
      </article>
    </main>
  );
}
