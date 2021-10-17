//importing hooks
import { useEffect, useRef } from 'react';
import { useCounter, useResponsiveNum } from '../../hooks';
//importing types & utils
import { v4 as uuidv4 } from 'uuid';
import { useStaticQuery, graphql } from 'gatsby';
import { dataToTestimonials } from '../../utils';
//importing components
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
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

  const gridRef = useRef<HTMLDivElement | null>(null);

  const [counter, setCounter] = useCounter();

  const onArrowRightClickHandler = () => {
    if (counter < 0) setCounter(counter + 1);
  };

  const onArrowLeftClickHandler = () => {
    if (counter > -2) setCounter(counter - 1);
  };

  return (
    <section className="testimonials__section">
      <div className="testimonials__head">
        <h1>
          What our <span>happy client</span> say
        </h1>
        <p>Nothing is more rewarding than hearing from our customers.</p>
      </div>
      <div className="testimonials__grid" ref={gridRef}>
        {testimonials.map((testimonial, i) => (
          <Card testimonial={testimonial} key={uuidv4()} order={i} />
        ))}
      </div>
      <div className="toggler__container">
        <div className="toggle__circle" onClick={onArrowLeftClickHandler}>
          <ChevronLeftIcon />
        </div>
        <div className="toggle__circle" onClick={onArrowRightClickHandler}>
          <ChevronRightIcon />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
