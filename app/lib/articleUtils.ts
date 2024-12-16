import articles from '@/app/data/articles.json'
import { Article } from '../types/article'

export function getArticleById(id: number): Article {
    return articles.articles.find(article => article.id === id) as Article
}

export function getAllArticles() {
    return articles.articles
}