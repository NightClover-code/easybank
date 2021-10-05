//importing components
import Card from "./Card";
//importing types & utils
import { FeatureInterface } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const Features: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AllFeaturesQuery {
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
          }
        }
      }
    }
  `);

  const features = data.allContentfulFeature.edges.map(
    ({ node: { title, description, icon } }: any) => ({
      title,
      iconURL: icon.file.url,
      description: description.description,
    })
  );

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
          {features.map((feature: FeatureInterface) => {
            return <Card feature={feature} key={uuidv4()} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
