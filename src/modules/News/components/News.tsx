import React, {useEffect, useState} from 'react';
import {fetchCryptoNews} from '../../../services/fetchNews';
import {NewsArticle} from '../../../types/news';
import {Button} from '../../../components/Button';

const ITEMS_PER_LOAD = 6;

export const CryptoNews: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayedArticles, setDisplayedArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const getCryptoNews = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await fetchCryptoNews();
        setArticles(fetchedArticles);
        setDisplayedArticles(fetchedArticles.slice(0, ITEMS_PER_LOAD));
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    void getCryptoNews();
  }, []);

  const handleLoadMore = () => {
    const nextIndex = displayedArticles.length;
    const nextArticles = articles.slice(nextIndex, nextIndex + ITEMS_PER_LOAD);
    setDisplayedArticles(prevArticles => [...prevArticles, ...nextArticles]);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul className="w-full flex flex-wrap gap-6 p-8 justify-center">
        {loading
          ? Array(ITEMS_PER_LOAD)
              .fill(0)
              .map((_, index) => <SkeletonNews key={index} />)
          : displayedArticles.map(article => (
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

      {displayedArticles.length < articles.length && (
        <div className="text-center mt-6">
          <Button
            text={'Load more'}
            onClick={handleLoadMore}
            className="px-4 mb-2"
          />
        </div>
      )}
    </div>
  );
};

const SkeletonNews: React.FC = () => (
  <div className="rounded-[20px] min-w-[220px] max-w-[320px] w-full p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-6">
    <div className="w-full h-[200px] bg-[#004DF4] bg-opacity-20 animate-pulse rounded-md"></div>
    <div className="w-3/4 h-6 bg-[#004DF4] bg-opacity-20 animate-pulse rounded mt-4"></div>
    <div className="w-full h-[180px] bg-[#004DF4] bg-opacity-20 animate-pulse rounded mt-2"></div>
  </div>
);
