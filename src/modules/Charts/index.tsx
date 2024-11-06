import {useEffect, useState} from 'react';
import {LayoutDashboardView} from '../../layouts/LayoutDashboardView';
import {CoinChart} from './components/Chart';
import {fetchChartData} from '../../services/fetchChartData';
import {FetchChartDataResult} from '../../types/charts';

const coins = [
  {id: 'bitcoin', name: 'BTC', color: '#f7931a'},
  {id: 'ethereum', name: 'ETH', color: '#627eea'},
  {id: 'dogecoin', name: 'DOGE', color: '#c2a639'},
  {id: 'solana', name: 'SOL', color: '#800080'},
  {id: 'pepe', name: 'PEPE', color: '#3cb371'},
  {id: 'sui', name: 'SUI', color: '#4a90e2'},
  {id: 'litecoin', name: 'LTC', color: '#b9b9b9'},
  {id: 'tron', name: 'TRX', color: '#e81c4d'},
  {id: 'shiba-inu', name: 'SHIB', color: '#ff5c00'},
  {id: 'matic-network', name: 'MATIC', color: '#8247e5'},
];

export const ChartsData = () => {
  const [coinData, setCoinData] = useState<{
    [key: string]: {image: string; prices: number[]};
  }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: {[key: string]: FetchChartDataResult} = {};

      for (const coin of coins) {
        try {
          const result = await fetchChartData(coin.id);
          data[coin.id] = {
            image: result.image,
            prices: result.prices,
            marketCap: result.marketCap,
            priceChangePercentage24h: result.priceChangePercentage24h,
          };
        } catch (error) {
          console.error(`Failed to fetch data for ${coin.id}:`, error);
        }
      }

      setCoinData(data);
      setLoading(false);
    };

    void fetchData();
  }, []);

  return (
    <LayoutDashboardView>
      <div className="flex flex-col gap-6 px-4">
        {coins.map(coin => (
          <div key={coin.id} className="shadow-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              {loading ? (
                <div className="animate-pulse w-8 h-8 bg-[#004DF4] bg-opacity-20 rounded-full"></div>
              ) : (
                <img
                  src={coinData[coin.id]?.image}
                  alt={coin.name}
                  className="w-8 h-8"
                />
              )}
              <span className="ml-2 font-semibold text-lg">{coin.name}</span>
            </div>
            <CoinChart coinId={coin.id} color={coin.color} />
          </div>
        ))}
      </div>
    </LayoutDashboardView>
  );
};
