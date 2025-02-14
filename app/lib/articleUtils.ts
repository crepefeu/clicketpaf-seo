import articles from '@/app/data/articles.json'
import { Article } from '../types/article'

export function getArticleBySlug(slug: string): Article {
    return articles.articles.find(article => article.slug === slug) as Article
}

export function getAllArticles() {
    return articles.articles as Article[]
}