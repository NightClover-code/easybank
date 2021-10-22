//importing components
import Card from './Card';
//importing types & utils
import { v4 as uuidv4 } from 'uuid';
import { dataToFeatures, featuresCardStyle } from '../../utils';
import { useStaticQuery, graphql } from 'gatsby';

const Features: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      allContentfulFeature {
        edges {
          node {
            aosDelay
            title
            description {
              description
            }
            createdAt
            image {
              alt
              icon {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const features = dataToFeatures(data);

  return (
    <section className="features__section">
      <div className="container">
        <div className="features__head" data-aos="fade-up">
          <h1>
            Why choose <span>Easybank</span>
          </h1>
          <p>
            We leverage open banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="features__grid">
          {features.map((feature, i) => (
            <Card
              feature={feature}
              styles={featuresCardStyle(i)}
              key={uuidv4()}
            />
          ))}
        </div>
        <button className="primary__button" data-aos="fade-up">
          Become a partner
        </button>
      </div>
    </section>
  );
};

export default Features;
