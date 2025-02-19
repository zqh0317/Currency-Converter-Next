import { GetServerSideProps } from 'next';
import styles from '@/styles/trend.module.scss';

type TrendProps = {
  trend: string;
};

const TrendPage: React.FC<TrendProps> = ({ trend }) => (
  <div className={styles.container}>
    <div className={styles.title}>Today's Currency Trend</div>
    <div className={styles.text}>{trend}</div>
  </div>
);

export default TrendPage;

export const getServerSideProps: GetServerSideProps<TrendProps> = async () => {
  const trends = ['Upward', 'Stable', 'Downward'];
  const trend = trends[Math.floor(Math.random() * trends.length)];

  return { props: { trend } };
};