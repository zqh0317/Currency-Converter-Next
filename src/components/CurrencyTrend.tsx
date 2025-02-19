import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from '@/styles/CurrencyTrend.module.scss';

// 定义 Props 类型
type CurrencyTrendProps = {
  fromCurrency: string;
  toCurrency: string;
};

// 定义数据类型
type TrendData = {
  date: string;
  value: number;
};

type DataCache = {
  [key: string]: TrendData[];
};

const CurrencyTrend: React.FC<CurrencyTrendProps> = ({ fromCurrency, toCurrency }) => {
  const [data, setData] = useState<TrendData[]>([]); // 数据类型为 TrendData 数组
  const [timeRange, setTimeRange] = useState<string>('1M'); 
  const [loading, setLoading] = useState<boolean>(false);
  const [dataCache, setDataCache] = useState<DataCache>({});

  // 兑换率波动范围
  const timeRanges: Record<string, number> = {
    '1W': 7,
    '1M': 30,
    '3M': 90,
    '6M': 180,
    '1Y': 365,
  };

  // 计算开始日期和结束日期
  const calculateStartDate = (days: number): { start: string; end: string } => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);
    return {
      start: startDate.toISOString().split('T')[0],
      end: endDate.toISOString().split('T')[0],
    };
  };

  // 请求汇率数据并生成趋势图
  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `${fromCurrency}-${toCurrency}-${timeRange}`;
      if (dataCache[cacheKey]) {
        setData(dataCache[cacheKey]);
        return;
      }

      setLoading(true);
      const { start, end } = calculateStartDate(timeRanges[timeRange]);

      try {
        const res = await fetch(
          `https://api.exchangerate.host/timeframe?access_key=${process.env.NEXT_PUBLIC_API_KEY}&source=${fromCurrency}&currencies=${toCurrency}&start_date=${start}&end_date=${end}`
        );

        const result = await res.json();

        if (result.success && result.quotes) {
          const formattedData: TrendData[] = Object.entries(result.quotes).map(([date, rate]) => ({
            date,
            value: (rate as Record<string, number>)[`${fromCurrency}${toCurrency}`] || 0,
          }));

          setData(formattedData);

          // 更新缓存
          setDataCache((prevCache) => ({
            ...prevCache,
            [cacheKey]: formattedData,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency, timeRange, dataCache]);

  return (
    <div className={styles.container}>
      <h2>Exchange Rate Trend: {fromCurrency} to {toCurrency}</h2>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className={styles.timeRangeButtons}>
        {Object.keys(timeRanges).map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`${styles.button} ${timeRange === range ? styles.active : ''}`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyTrend;