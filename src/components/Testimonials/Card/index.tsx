import { TestimonialInterface } from '../../../interfaces';
import { StarsIcon, QuotesIcon } from '../../Icons';

interface CardProps {
  testimonial: TestimonialInterface;
  order: number;
}

const Card: React.FC<CardProps> = ({
  testimonial: { content, image, name },
  order,
}) => {
  return (
    <div
      className="testimonials__card"
      style={
        order === 1
          ? { boxShadow: '0px 20px 60px 5px rgba(0, 0, 0, 0.05)' }
          : {}
      }
    >
      <QuotesIcon />
      <div className="avatar__container">
        <img src={image.url} alt={image.alt} />
      </div>
      <StarsIcon />
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
