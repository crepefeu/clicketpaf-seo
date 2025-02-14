// types/article.ts
export type Section = {
  type: "heading" | "paragraph" | "list" | "blockquote" | "image";
  content?: string;
  level?: number;
  style?: string;
  items?: string[];
  emphasis?: boolean;
  author?: string;
  authorMsg?: string;
  url?: string;
  alt?: string;
  caption?: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  sections: Section[];
  metadata: {
    keywords: string[];
    readingTime: string;
    category: string;
  };
  images?: {
    url: string;
    alt: string;
    caption: string;
  }[];
  featuredImage?: string;
};
