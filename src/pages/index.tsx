//importing styles & utils
import '../styles/default.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
//importing components
import Hero from '../components/Hero';
import Features from '../components/Features';
import MainLayout from '../layouts/MainLayout';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
        <Features />
        <Advantages />
        <Testimonials />
        <Newsletter />
      </div>
    </MainLayout>
  );
};

export default HomePage;
