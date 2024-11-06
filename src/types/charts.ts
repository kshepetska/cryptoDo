export interface ChartDataResponse {
  prices: number[][];
}

export interface CoinInfoResponse {
  market_data: {
    market_cap: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
  image: {
    small: string;
  };
}

export interface FetchChartDataResult {
  prices: number[];
  marketCap: number;
  priceChangePercentage24h: number;
  image: string;
}
