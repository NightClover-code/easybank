//importing styles & utils
import "../styles/default.scss";
//importing components
import Hero from "../components/Hero";
import Features from "../components/Features";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
        <Features />
      </div>
    </MainLayout>
  );
};

export default HomePage;
