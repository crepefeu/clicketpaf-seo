import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://clicketpaf.fr'
  
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
      ]
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}