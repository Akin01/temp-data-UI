import Title from './dash-title';
import Layout from './layout';
import WinSwiper from './win-swiper';

const Dashboard = () => {
  return (
    <Layout>
      <Title title={'Temperature Data Monitoring'} />
      <WinSwiper />
    </Layout>
  );
};

export default Dashboard;
