import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-green-100 text-white p-10 px-48 pb-20 text-center">
      <div className="w-full h-fit">
        <p className="text-green-700 text-2xl font-bold w-fit mr-auto">
          Clicketpaf
        </p>
      </div>
      <div className="flex gap-24">
        <div className="flex flex-col gap-4 w-fit mt-10">
          <h2 className="text-xl font-bold text-green-700">Informations</h2>
          <ul className="text-left font-bold">
            <li>
              <Link
                href="/a-propos"
                className="text-green-700 hover:text-green-800"
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-fit mt-10">
          <h2 className="text-xl font-bold text-green-700">Actualité</h2>
          <ul className="text-left font-bold">
            <li>
              <Link
                href="/blog"
                className="text-green-700 hover:text-green-800"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-col gap-4 w-fit mt-10">
          <h2 className="text-xl font-bold text-green-700">Réseaux sociaux</h2>
          <ul className="text-left font-bold">
            <li>
              <Link
                href=""
                className="text-green-700 hover:text-green-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}
