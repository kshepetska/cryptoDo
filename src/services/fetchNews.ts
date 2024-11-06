import {NewsArticle} from '../types/news';

export const fetchCryptoNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch(
    'https://newsapi.org/v2/everything?q=crypto&apiKey=cd2325af855b4231aeabbf10129f1bee'
  );

  if (!response.ok) {
    throw new Error('Error fetching news');
  }

  const data: {articles: NewsArticle[]} = await response.json();
  return data.articles;
};
