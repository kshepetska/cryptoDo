import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {LayoutDashboardView} from '../../layouts/LayoutDashboardView';
import {fetchChartData} from '../../services/fetchChartData';
import {fetchCryptoNews} from '../../services/fetchNews';
import {fetchNFTs} from '../../services/fetchNfts';
import {FetchChartDataResult} from '../../types/charts';
import {NewsArticle} from '../../types/news';
import {NFT} from '../../types/nfts';
import Crystal from '../../assets/crystal.png';
import {NextArrow} from '../../assets/svgComponents/NextArrow';
import {useSidebar} from '../../services/sidebarContext';

export const DashboardView: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [charts, setCharts] = useState<{[key: string]: FetchChartDataResult}>(
    {}
  );
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const {sidebarWidth, collapsed} = useSidebar();
  useEffect(() => {
    console.log('Sidebar width:', sidebarWidth);
  }, [collapsed, sidebarWidth]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsData, nftsData] = await Promise.all([
          fetchCryptoNews(),
          fetchNFTs('0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c'),
        ]);

        setNews(newsData.slice(0, 5));
        setNfts(nftsData.slice(0, 5));

        const chartData: {[key: string]: FetchChartDataResult} = {};
        const coins = ['bitcoin', 'ethereum', 'dogecoin', 'solana', 'litecoin'];

        await Promise.all(
          coins.map(async coin => {
            const data = await fetchChartData(coin);
            chartData[coin] = data;
          })
        );
        setCharts(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <LayoutDashboardView>
      <div className="flex flex-col w-full gap-10 p-6">
        <div className="flex flex-row w-full justify-center items-center gap-6">
          <div className="flex flex-col max-w-[722px] my-6">
            <div className="pt-[60px] md:pt-0 justify-center">
              <p className="text-[#525355] text-[42px] lg:text-[56px] leading-[120%] tracking-[-0.96px] font-bold font-inter">
                Join the Future of
                <span>
                  <br />
                  Innovative
                </span>
                <br />
                <span className="text-[#286497] font-bold font-inter">
                  Web3
                </span>
                <span className="text-white font-bold font-inter">
                  <br />
                  Powered by CryptoDo.
                </span>
              </p>
            </div>
          </div>
          <img src={Crystal} alt="Crystal" />
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-start gap-2 items-center mb-4">
            <h2 className="text-xl font-bold">Crypto News</h2>
            <Link to={'/news'} className="cursor-pointer">
              <NextArrow />
            </Link>
          </div>
          <div
            style={{
              width: `calc(95vw - ${sidebarWidth}px)`,
            }}
            className="overflow-x-auto invisible-scrollbar flex gap-6"
          >
            {news.map(article => (
              <div
                key={article.source.id}
                className="cursor-pointer p-4 shadow-md rounded-lg w-72 flex-none"
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2 overflow-hidden text-ellipsis line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 overflow-hidden text-ellipsis line-clamp-3">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-start gap-2 items-center mb-4">
            <h2 className="text-xl font-bold">Market Charts</h2>
            <Link to={'/charts'} className="cursor-pointer">
              <NextArrow />
            </Link>
          </div>
          <div
            style={{
              width: `calc(95vw - ${sidebarWidth}px)`,
            }}
            className="overflow-x-auto invisible-scrollbar flex gap-6"
          >
            {Object.entries(charts).map(([id, data]) => (
              <div
                key={id}
                className="cursor-pointer p-4 shadow-md rounded-lg w-72 flex-none"
              >
                <img src={data.image} alt={id} className="w-10 h-10 mb-2" />
                <h3 className="text-lg font-semibold">{id.toUpperCase()}</h3>
                <p className="text-gray-600 text-sm">
                  Market Cap: {data.marketCap}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-start gap-2 items-center mb-4">
            <h2 className="text-xl font-bold">NFTs</h2>
            <Link to={'/nfts'} className="cursor-pointer">
              <NextArrow />
            </Link>
          </div>
          <div
            style={{
              width: `calc(95vw - ${sidebarWidth}px)`,
            }}
            className="overflow-x-auto invisible-scrollbar flex gap-6"
          >
            {nfts.map(nft => (
              <div
                key={nft.id.tokenId}
                className="cursor-pointer p-4 shadow-md rounded-lg w-72 flex-none"
              >
                <img
                  src={nft.media[0]?.gateway}
                  alt={nft.title}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2 text-ellipsis line-clamp-2">
                  {nft.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 overflow-hidden text-ellipsis line-clamp-3">
                  {nft.description || 'No description available.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutDashboardView>
  );
};
