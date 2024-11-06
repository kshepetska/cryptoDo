export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
}
