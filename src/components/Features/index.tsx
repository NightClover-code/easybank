//importing components
import Card from "./Card";
//importing types & utils
import { v4 as uuidv4 } from "uuid";
import { dataToFeatures, sortByDate } from "../../../utils";
import { useStaticQuery, graphql } from "gatsby";

const Features: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      allContentfulFeature {
        edges {
          node {
            title
            description {
              description
            }
            icon {
              file {
                url
              }
            }
            createdAt
          }
        }
      }
    }
  `);

  const features = sortByDate(dataToFeatures(data));
  console.log(features);

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
        <button className="primary__button">Become a partner</button>
      </div>
    </section>
  );
};

export default Features;
