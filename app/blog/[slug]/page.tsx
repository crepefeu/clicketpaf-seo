import { Section } from "@/app/types/article";
import { getArticleBySlug } from "@/app/lib/articleUtils";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { Metadata } from "next";
import { JsonLd } from "@/app/components/JsonLd";
import Link from "next/link";

export async function generateMetadata({
  params: paramsPromise, // Rename to indicate it's a promise
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await paramsPromise; // Await and destructure
    const article = await getArticleBySlug(slug);

    if (!article) {
      return {
        title: "Article not found",
        description: "The requested article could not be found",
      };
    }

    return {
      title: article.title,
      description: article.description,
      alternates: {
        canonical: `/blog/${article.slug}`,
      },
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.date,
        authors: [article.author],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred",
    };
  }
}

const SectionRenderer = ({ section }: { section: Section }) => {
  switch (section.type) {
    case "heading":
      const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className="text-green-600 font-semibold text-[28px]">
          {section.content}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p
          className={`mt-4
          ${
            section.style === "lead" ? "text-green-600 font-medium text-lg" : ""
          }
          ${section.emphasis ? "text-green-500 font-medium" : ""}`}
        >
          {section.content}
        </p>
      );

    case "list":
      return (
        <ul className={`text-black mt-4`}>
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
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
              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await paramsPromise;
    const article = await getArticleBySlug(slug);

    if (!article) {
      return <div className="text-center py-10">Article not found</div>;
    }

    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      author: {
        "@type": "Person",
        name: article.author,
      },
      datePublished: article.date,
    };

    return (
      <article className="max-w-3xl mx-auto px-4">
        <JsonLd data={articleStructuredData} />
        <Breadcrumbs
          items={[
            { label: "Accueil", path: "/" },
            { label: "Articles", path: "/blog" },
            { label: article.title, path: `/blog/${article.slug}` },
          ]}
        />
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <time>{new Date(article.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{article.author}</span>
          </div>
        </header>
        <div className="prose prose-green max-w-none">
          {article.sections.map((section, index) => (
            <SectionRenderer key={index} section={section} />
          ))}
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading article:", error);
    return (
      <div>
        <div className="text-center py-10">
          Nous avons rencontré une erreur en essayant de charger l'article
        </div>
        <Link href="/blog">Retour à la liste des articles</Link>
      </div>
    );
  }
}
