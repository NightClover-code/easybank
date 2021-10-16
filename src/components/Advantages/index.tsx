//importing utils
import { useStaticQuery, graphql } from 'gatsby';
import { advatangesCardStyle, dataToAdvantages } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
//importing components
import Card from './Card';

const Advantages: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AdvantagesQuery {
      allContentfulAdvantage {
        edges {
          node {
            description {
              description
            }
            image {
              alt
              icon {
                file {
                  url
                }
              }
            }
            title
            topic
            createdAt
          }
        }
      }
    }
  `);

  const advantages = dataToAdvantages(data);

  return (
    <section className="advantages__section">
      <div className="container">
        {advantages.map((advantage, i) => (
          <Card
            advantage={advantage}
            key={uuidv4()}
            order={i}
            style={advatangesCardStyle(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
