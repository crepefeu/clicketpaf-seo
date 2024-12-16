import { Section } from "@/app/types/article";
import { getArticleBySlug } from "@/app/lib/articleUtils";
import Breadcrumbs from "@/app/components/Breadcrumbs";

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
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = getArticleBySlug(slug);

  if (!article) return <h1>Article not found</h1>;

  return (
    <article className="">
      <Breadcrumbs
        items={[
          { label: "Accueil", path: "/" },
          { label: "Articles", path: "/blog" },
          { label: article.title, path: `/blog/${article.slug}` },
        ]}
      />
      <header className="">
        <h1 className="text-green-700 text-[40px] font-bold">
          {article.title}
        </h1>
        <div className="flex items-center gap-3 text-gray-500 text-sm font-bold h-6">
          <time>Publié le {new Date(article.date).toLocaleDateString()}</time>
          <div className="w-[2px] h-full bg-green-600"></div>
          <span>Auteur : {article.author}</span>
          <div className="w-[2px] h-full bg-green-600"></div>
          <span>Temps de lecture : {article.metadata.readingTime}</span>
        </div>
      </header>

      <div className="mt-8">
        {article.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </div>
    </article>
  );
}
