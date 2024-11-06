import {Chart} from '../CoinChart';

interface CoinChartProps {
  coinId: string;
  color: string;
}

export const CoinChart: React.FC<CoinChartProps> = ({coinId, color}) => {
  return <Chart coin={coinId} color={color} />;
};
