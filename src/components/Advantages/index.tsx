//importing utils
import { useStaticQuery, graphql } from 'gatsby';
import { dataToAdvantages, sortByDate } from '../../utils';

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

  const advantages = sortByDate(dataToAdvantages(data));

  console.log(advantages);

  return (
    <section className="advantages__section">
      <div className="container">oibaduicb</div>
    </section>
  );
};

export default Advantages;
