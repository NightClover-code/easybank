//importing styles & utils
import '../styles/default.scss';
//importing components
import Hero from '../components/Hero';
import Features from '../components/Features';
import MainLayout from '../layouts/MainLayout';
import Advantages from '../components/Advantages';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
        <Features />
        <Advantages />
      </div>
    </MainLayout>
  );
};

export default HomePage;
