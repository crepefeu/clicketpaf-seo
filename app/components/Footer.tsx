"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex flex-col bg-green-100 text-white p-4 sm:p-6 md:p-8 md:px-12 lg:px-48 pb-10 text-center"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="w-full h-fit">
        <h1 className="text-green-700 text-xl sm:text-2xl font-bold w-fit mr-auto">
          Clicketpaf - Le paiement en ligne{" "}
          <span className="underline">simplifié</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        <nav className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16" aria-label="Footer navigation">
          <div className="flex flex-col gap-4 w-fit mt-5 md:mt-10">
            <h2 className="text-xl font-bold text-green-700">Informations</h2>
            <ul className="text-left font-bold" role="menu">
              <li role="menuitem">
                <Link
                  href="/a-propos"
                  className="text-green-700 hover:text-green-800"
                  title="En savoir plus sur Clicketpaf"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-fit mt-5 md:mt-10">
            <h2 className="text-xl font-bold text-green-700">Actualité</h2>
            <ul className="text-left font-bold" role="menu">
              <li role="menuitem">
                <Link
                  href="/blog"
                  className="text-green-700 hover:text-green-800"
                  title="Accéder au blog Clicketpaf"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-fit mt-5 md:mt-10">
            <h2 className="text-xl font-bold text-green-700">
              Réseaux sociaux
            </h2>
            <ul
              className="flex text-left font-bold items-center gap-3"
              role="menu"
            >
              <li role="menuitem">
                <Link
                  href="https://x.com/click_et_paf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800"
                  aria-label="Suivez-nous sur Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                    role="img"
                    aria-labelledby="twitter-icon"
                  >
                    <title id="twitter-icon">Twitter</title>
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </li>
              <li role="menuitem">
                <Link
                  href="https://www.instagram.com/click_et_paf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    role="img"
                    aria-labelledby="instagram-icon"
                    className="lucide lucide-instagram"
                  >
                    <title id="instagram-icon">Instagram</title>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section
          className="flex flex-col text-left gap-2"
          aria-label="Newsletter subscription"
        >
          <div>
            <h2 className="text-xl text-green-700 font-bold">
              S&apos;abonner à la newsletter
            </h2>
            <p className="text-green-700">
              Recevez les dernières actualités et mises à jour
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse email pour la newsletter
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Votre adresse email"
              className="text-black rounded-md border border-gray-300 focus:border-green-700 focus:outline-none px-3 py-1 transition-all"
              aria-label="Inscription à la newsletter"
            />
          </form>
        </section>
      </div>
      <div className="w-full h-[1px] bg-green-600 mt-8 md:mt-12"></div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 mt-6">
        <p className="text-center sm:text-left text-green-700 w-full sm:w-fit text-sm">
          &copy; 2024 Clicketpaf. Tous droits réservés.
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center sm:ml-auto text-sm">
          <Link
            href="/mentions-legales"
            className="text-green-700 hover:text-green-800"
            title="Accéder aux mentions légales"
          >
            Mentions légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="text-green-700 hover:text-green-800"
            title="Accéder à la politique de confidentialité"
          >
            Confidentialité
          </Link>
          <Link
            href="/conditions-generales-utilisation"
            className="text-green-700 hover:text-green-800"
            title="Accéder à la politique de confidentialité"
          >
            CGU
          </Link>
        </div>
      </div>
    </footer>
  );
}
