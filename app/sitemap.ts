import { MetadataRoute } from "next";
import { getAllArticles } from "@/app/lib/articleUtils";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const baseUrl = "https://clicketpaf.fr";
  const currentDate = new Date();

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const, // Homepage should be checked daily for changes
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: articles.length > 0 
        ? new Date(articles[0].date) // Use latest article date
        : currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9, // Increased because it's main content hub
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const, // About page changes less frequently
      priority: 0.7,
    },
    // Legal pages - lower priority but still important
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const, // Legal pages rarely change
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/conditions-generales-utilisation`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Article routes
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date), // Use actual article date
    changeFrequency: new Date(article.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      ? "daily" as const // New articles (less than 30 days)
      : "monthly" as const, // Older articles
    priority: 0.8, // Individual articles are important content
  }));

  return [...routes, ...articleRoutes];
}
