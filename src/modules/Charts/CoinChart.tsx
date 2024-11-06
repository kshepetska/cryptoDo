import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {ApexOptions} from 'apexcharts';
import {fetchChartData} from '../../services/fetchChartData';

interface ChartProps {
  coin: string;
  color: string;
}

const Loading = () => (
  <div className="animate-pulse w-full h-[350px] bg-[#004DF4] bg-opacity-20 rounded-md"></div>
);

const ErrorMessage: React.FC<{message: string}> = ({message}) => (
  <div className="text-center text-red-600">{message}</div>
);

export const Chart: React.FC<ChartProps> = ({coin, color}) => {
  const [coinData, setCoinData] = useState<{
    prices: number[];
    marketCap: number;
    priceChangePercentage24h: number;
  }>({
    prices: [],
    marketCap: 0,
    priceChangePercentage24h: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadChart = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchChartData(coin.toLowerCase());
        if (isMounted) {
          setCoinData(data);
        }
      } catch {
        if (isMounted) {
          setError('Failed to fetch data');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadChart();
    return () => {
      isMounted = false;
    };
  }, [coin]);

  const {prices} = coinData;
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const currentDate = new Date();
  const dates = prices.map((_, index: number) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - (prices.length - index - 1));
    return date.getTime();
  });

  const chartOptions: ApexOptions = {
    series: [{name: 'Price', data: prices}],
    chart: {
      height: 350,
      background: 'transparent',
      type: 'area',
      toolbar: {
        tools: {pan: false, reset: false},
      },
    },
    dataLabels: {enabled: false},
    stroke: {curve: 'smooth'},
    xaxis: {
      type: 'datetime',
      categories: dates,
      labels: {format: 'MMM yyyy'},
      tickAmount: 12,
    },
    grid: {borderColor: '#e4e4e4', strokeDashArray: 3},
    yaxis: {
      min: minPrice * 0.5,
      max: maxPrice * 1.5,
      labels: {formatter: value => value.toFixed(2)},
    },
    tooltip: {x: {format: 'dd/MM/yy'}},
    theme: {
      mode: 'dark',
    },
    colors: [color],
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartOptions.series}
      type="area"
      height={350}
    />
  );
};
