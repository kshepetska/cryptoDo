import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {LayoutDashboardView} from '../../layouts/LayoutDashboardView';
import {fetchChartData} from '../../services/fetchChartData';
import {fetchCryptoNews} from '../../services/fetchNews';
import {fetchNFTs} from '../../services/fetchNfts';
import {FetchChartDataResult} from '../../types/charts';
import {NewsArticle} from '../../types/news';
import {NFT} from '../../types/nfts';
import {useSidebar} from '../../services/sidebarContext';
import {LandingBlocks} from './components/LandingBlocks';

const DashboardView: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [charts, setCharts] = useState<{[key: string]: FetchChartDataResult}>(
    {}
  );
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const {sidebarWidth} = useSidebar();

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

  const motionVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
  };

  return (
    <LayoutDashboardView>
      <div className="flex flex-col w-full justify-center gap-10 p-6">
        <div className="py-20 flex w-full justify-center items-center">
          <div className="max-w-[60vw] md:pt-0 justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={motionVariants}
            >
              <LandingBlocks />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={motionVariants}
          >
            <div className="flex justify-start gap-2 items-center mb-4">
              <Link to={'/news'} className="text-lg font-semibold text-white">
                Explore the Latest Crypto News
              </Link>
            </div>
            <div
              style={{
                width: `calc(95vw - ${sidebarWidth}px)`,
              }}
              className="overflow-x-auto invisible-scrollbar flex gap-6"
            >
              {news.map(article => (
                <motion.div
                  key={article.source.id}
                  className="p-4 shadow-md rounded-lg bg-[#286497] bg-opacity-20 w-72 flex-none"
                  variants={motionVariants}
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h3 className="text-xl font-bold text-white mt-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white text-sm mt-1 line-clamp-3">
                    {article.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={motionVariants}
          >
            <div className="flex justify-start gap-2 items-center mb-4">
              <Link to={'/charts'} className="text-lg font-semibold text-white">
                Dive Into Market Insights
              </Link>
            </div>
            <div
              style={{
                width: `calc(95vw - ${sidebarWidth}px)`,
              }}
              className="overflow-x-auto invisible-scrollbar flex gap-6"
            >
              {Object.entries(charts).map(([id, data]) => (
                <motion.div
                  key={id}
                  className="p-4 shadow-md rounded-lg bg-[#286497] bg-opacity-20 w-72 flex-none"
                >
                  <img src={data.image} alt={id} className="w-10 h-10 mb-2" />
                  <h3 className="text-xl font-bold text-white">
                    {id.toUpperCase()}
                  </h3>
                  <p className="text-white text-sm">
                    Market Cap: {data.marketCap}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={motionVariants}
          >
            <div className="flex justify-start gap-2 items-center mb-4">
              <Link to={'/nfts'} className="text-lg font-semibold text-white">
                Discover Top NFTs
              </Link>
            </div>
            <div
              style={{
                width: `calc(95vw - ${sidebarWidth}px)`,
              }}
              className="overflow-x-auto invisible-scrollbar flex gap-6"
            >
              {nfts.map(nft => (
                <motion.div
                  key={nft.id.tokenId}
                  className="p-4 shadow-md rounded-lg bg-[#286497] bg-opacity-20 w-72 flex-none"
                >
                  <img
                    src={nft.media[0]?.gateway}
                    alt={nft.title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h3 className="text-xl font-bold text-white mt-2 line-clamp-2">
                    {nft.title}
                  </h3>
                  <p className="text-white text-sm mt-1 line-clamp-3">
                    {nft.description || 'No description available.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </LayoutDashboardView>
  );
};

export default DashboardView;
