"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-green-100 text-white p-8 px-48 pb-20 text-center" role="contentinfo" aria-label="Site footer">
      <div className="w-full h-fit">
        <h1 className="text-green-700 text-2xl font-bold w-fit mr-auto">
          Clicketpaf - Le paiement en ligne <span className="underline">simplifié</span>
        </h1>
      </div>
      <div className="flex justify-between">
        <nav className="flex gap-24" aria-label="Footer navigation">
          <div className="flex flex-col gap-4 w-fit mt-10">
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
          <div className="flex flex-col gap-4 w-fit mt-10">
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
          <div className="flex flex-col gap-4 w-fit mt-10">
            <h2 className="text-xl font-bold text-green-700">Réseaux sociaux</h2>
            <ul className="text-left font-bold" role="menu">
              <li role="menuitem">
                <Link
                  href="https://twitter.com/"
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
            </ul>
          </div>
        </nav>
        <section className="flex flex-col text-left gap-2" aria-label="Newsletter subscription">
          <div>
            <h2 className="text-xl text-green-700 font-bold">
              S&apos;abonner à la newsletter
            </h2>
            <p className="text-green-700 text-opacity-80">
              Recevez les dernières actualités et mises à jour
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} role="form">
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
    </footer>
  );
}
