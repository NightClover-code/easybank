//importing utils
import { seoConfig } from '../utils';
import AOS from 'aos';
import { NavProvider } from '../context';
//importing hooks & styles
import { useEffect } from 'react';
import '../styles/default.scss';
import 'aos/dist/aos.css';
//importing components
import Hero from '../components/Hero';
import Features from '../components/Features';
import MainLayout from '../layouts/MainLayout';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <NavProvider>
      <MainLayout>
        <SEO {...seoConfig} />
        <div className="wrapper">
          <Hero />
          <Features />
          <Advantages />
          <Testimonials />
          <Newsletter />
        </div>
      </MainLayout>
    </NavProvider>
  );
};

export default HomePage;
