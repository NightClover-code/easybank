//importing utils
import { useStaticQuery, graphql } from 'gatsby';
import { dataToHero } from '../../utils';
//importing components
import { ArrowUpIcon } from '../Icons';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allContentfulHero {
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
          }
        }
      }
    }
  `);

  const { description, image } = dataToHero(data);

  return (
    <section className="hero__section">
      <div className="container">
        <div className="text__content">
          <h1>
            The Next Era of <span>Digital</span> Banking
          </h1>
          <p>{description}</p>
          <form>
            <input type="email" placeholder="Email address" />
            <button className="primary__button">
              <ArrowUpIcon />
            </button>
          </form>
        </div>
        <div className="illustration__container">
          <img src={image.url} alt={image.alt} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
