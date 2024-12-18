import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Découvrez comment Clicketpaf révolutionne le paiement en ligne",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:pt-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text px-2">
            Révolutionnez vos paiements en ligne avec une simplicité{" "}
            <span className="relative text-green-700 underline">inégalée</span>
          </span>
        </h1>
        <p className="text-lg mb-8"></p>
        <button className="group flex mx-auto gap-2 items-center bg-green-50/20 hover:bg-green-100 transition-colors border border-green-400 text-green-700 px-6 py-2 rounded-full">
          Commencez maintenant{" "}
          <span>
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
              className="lucide lucide-arrow-up-right group-hover:-translate-y-[2px] transition-transform group-hover:translate-x-[2px]"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 text-center items-center bg-green-100/50 border border-green-400 px-6 py-8 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mouse-pointer-click stroke-green-500"
          >
            <path d="M14 4.1 12 6" />
            <path d="m5.1 8-2.9-.8" />
            <path d="m6 12-1.9 2" />
            <path d="M7.2 2.2 8 5.1" />
            <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
          </svg>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text px-2">
                Paiement en un clic
              </span>
            </h2>
            <p>
              Simplifiez vos transactions avec notre technologie de paiement en
              un clic.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center items-center bg-green-100/50 border border-green-400 px-6 py-8 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-lock stroke-green-500"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <rect width="8" height="6" x="8" y="12" rx="1" />
            <path d="M10 12v-2a2 2 0 1 1 4 0v2" />
          </svg>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text px-2">
                Sécurité maximale
              </span>
            </h2>
            <p>
              Vos données et celles de vos utilisateurs sont protégées avec les
              normes de sécurité les plus élevées.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center items-center bg-green-100/50 border border-green-400 px-6 py-8 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-headset stroke-green-500"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text px-2">
                Support 24/7
              </span>
            </h2>
            <p>Notre équipe est disponible à tout moment pour vous aider.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col items-center gap-4 bg-green-100/50 border border-green-400 px-6 py-8 rounded-lg">
          <h1 className="text-2xl text-green-700 font-bold">
            Comment fonctionne Clicketpaf ?
          </h1>
          <p className="text-justify">
            Clicketpaf, c’est la simplicité à l’état pur. Voici comment ça
            marche : Téléchargez l’application Clicketpaf sur votre smartphone
            (disponible sur iOS et Android). <br /> Associez votre compte
            bancaire ou portefeuille numérique en quelques clics, pour une
            configuration rapide et intuitive. Choisissez votre méthode :
            utilisez l’application Clicketpaf ou connectez-vous à l’un de nos
            boîtiers Clicketpaf pour une utilisation encore plus fluide. <br />{" "}
            Cliquez et écoutez le PAF ! Votre transaction est validée
            instantanément, accompagnée de notre fameux son ludique et
            rassurant. Avec Clicketpaf, chaque étape est pensée pour vous
            simplifier la vie, sans compromis sur la sécurité ou la performance.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text px-2">
            Prêt à simplifier vos paiements ?
          </span>
        </h2>
        <button className="group flex items-center gap-3 mx-auto bg-green-50/20 hover:bg-green-100 transition-colors border border-green-400 text-green-700 px-6 py-2 rounded-full">
          Contactez-nous maintenant{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
        </button>
      </section>
    </div>
  );
}
