import {
  FetchChartDataResult,
  ChartDataResponse,
  CoinInfoResponse,
} from '../types/charts';

export const fetchChartData = async (
  coin: string
): Promise<FetchChartDataResult> => {
  if (!coin) {
    return {prices: [], marketCap: 0, priceChangePercentage24h: 0, image: ''};
  }

  const corsProxy = 'https://thingproxy.freeboard.io/fetch/';

  const fetchWithRetry = async (
    url: string,
    retries = 3
  ): Promise<ChartDataResponse | CoinInfoResponse> => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return (await response.json()) as
            | ChartDataResponse
            | CoinInfoResponse;
        }
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    }
    throw new Error('Failed to fetch data after multiple attempts');
  };

  try {
    const [chartData, coinInfo] = (await Promise.all([
      fetchWithRetry(
        `${corsProxy}https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=365`
      ),
      fetchWithRetry(
        `${corsProxy}https://api.coingecko.com/api/v3/coins/${coin}`
      ),
    ])) as [ChartDataResponse, CoinInfoResponse];

    if (!Array.isArray(chartData.prices)) {
      throw new Error('Invalid chart data format');
    }

    const prices = chartData.prices.map((entry: number[]) => entry[1]) || [];
    const marketCap = coinInfo.market_data?.market_cap?.usd || 0;
    const priceChangePercentage24h =
      coinInfo.market_data?.price_change_percentage_24h || 0;
    const image = coinInfo.image?.small || '';

    return {prices, marketCap, priceChangePercentage24h, image};
  } catch (error) {
    console.error('Error in fetchChartData:', error);
    return {prices: [], marketCap: 0, priceChangePercentage24h: 0, image: ''};
  }
};
