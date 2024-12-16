// types/article.ts
export type Section = {
  type: "heading" | "paragraph" | "list";
  content?: string;
  level?: number;
  style?: string;
  items?: string[];
  emphasis?: boolean;
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
};
