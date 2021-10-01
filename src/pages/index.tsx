//importing styles & utils
import "../styles/default.scss";
import { featuresQuery } from "../graphql";
//importing components
import Hero from "../components/Hero";
import Features from "../components/Features";
import MainLayout from "../layouts/MainLayout";

const HomePage = ({ data }) => {
  const features = data.allContentfulFeature.edges.map(
    ({ node: { title, description, icon } }: any) => ({
      title,
      iconURL: icon.file.url,
      description: description.description,
    })
  );
  const apple = 2;
  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
        <Features features={features} />
      </div>
    </MainLayout>
  );
};

export const query = featuresQuery;

export default HomePage;
