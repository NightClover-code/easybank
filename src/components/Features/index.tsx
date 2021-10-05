//importing components
import Card from "./Card";
//importing types & utils
import { FeatureInterface } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

interface FeaturesProps {
  features: FeatureInterface[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="features__section">
      <div className="container">
        <div className="features__head">
          <h1>
            Why choose <span>Easybank</span>
          </h1>
          <p>
            We leverage open banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="features__grid">
          {features.map(feature => {
            return <Card feature={feature} key={uuidv4()} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
