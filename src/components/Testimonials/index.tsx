import { useStaticQuery, graphql } from 'gatsby';
import { dataToTestimonials } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allContentfulTestimonial {
        edges {
          node {
            image {
              icon {
                file {
                  url
                }
              }
              alt
            }
            name
            createdAt
            content {
              content
            }
          }
        }
      }
    }
  `);

  const testimonials = dataToTestimonials(data);

  return (
    <section className="testimonials__section">
      <div className="testimonials__head">
        <h1>
          What our <span>happy client</span> say
        </h1>
        <p>Nothing is more rewarding than hearing from our customers.</p>
      </div>
      <div className="testimonials__grid">
        {testimonials.map(testimonial => (
          <Card testimonial={testimonial} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
