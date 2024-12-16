import { MetadataRoute } from 'next'
import { getAllArticles } from '@/app/lib/articleUtils'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  const baseUrl = 'https://clicketpaf.fr'

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  ]

  // Article routes
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...articleRoutes]
}