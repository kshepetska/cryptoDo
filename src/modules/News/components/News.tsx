import React, {useEffect, useState} from 'react';
import {fetchCryptoNews} from '../../../services/fetchNews';
import {NewsArticle} from '../../../types/news';

export const CryptoNews: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCryptoNews = async () => {
      try {
        const articles = await fetchCryptoNews();
        setArticles(articles);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    void getCryptoNews();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul className="w-full flex flex-wrap gap-6 p-8 justify-center">
        {articles.map(article => (
          <a
            href={article.url}
            key={article.source.id}
            className="cursor-pointer rounded-[20px] min-w-[220px] w-full lg:max-w-[500px] p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-6 hover:scale-102 flex-grow"
          >
            <div className="relative rounded-xl shadow-lg transition transform">
              <img
                src={article.urlToImage}
                alt={article.source.id}
                className="w-full h-[200px] object-cover rounded-md shadow-inner"
              />
              <h3 className="text-xl font-semibold mt-4 text-white">
                {article.title}
              </h3>
              <p className="text-gray-300 overflow-y-auto thin-scrollbar mt-2 overflow-hidden text-ellipsis whitespace-pre-line">
                {article.description || 'No description available.'}
              </p>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};
