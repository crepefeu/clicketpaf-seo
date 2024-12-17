import Link from "next/link";
import { getAllArticles } from "@/app/lib/articleUtils";
import Breadcrumbs from "../components/Breadcrumbs";
import { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Découvrez nos articles sur le paiement en ligne et les innovations fintech",
  alternates: {
    canonical: "/blog",
  },
};

export default async function Page() {
  const articles = getAllArticles();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Clicketpaf",
    description: "Articles sur le paiement en ligne et les innovations fintech",
  };

  return (
    <div className="">
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { label: "Accueil", path: "/" },
          { label: "Articles", path: "/blog" },
        ]}
      />
      <h1 className="text-green-700 font-semibold text-2xl">Articles</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white hover:bg-green-100/25 border-[1.5px] border-green-500 p-4 rounded-lg transition-colors"
          >
            <Link href={`/blog/${article.slug}`}>
              <h2 className="text-xl text-green-700 font-semibold">
                {article.title}
              </h2>
              <p className="text-gray-900 mt-2">{article.description}</p>
              <div className="flex justify-between items-center mt-6 text-sm text-gray-500 font-semibold">
                <span className="flex gap-2 items-center">
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
                    className="lucide lucide-calendar-1"
                  >
                    <path d="M11 14h1v4" />
                    <path d="M16 2v4" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                  </svg>
                  <time>{new Date(article.date).toLocaleDateString()}</time>
                </span>

                <span className="flex gap-2 items-center">
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
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>{" "}
                  {article.author}
                </span>
                <span className="flex gap-2 items-center">
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
                    className="lucide lucide-book-open-text"
                  >
                    <path d="M12 7v14" />
                    <path d="M16 12h2" />
                    <path d="M16 8h2" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                    <path d="M6 12h2" />
                    <path d="M6 8h2" />
                  </svg>{" "}
                  {article.metadata?.readingTime}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
