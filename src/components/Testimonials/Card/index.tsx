import { TestimonialInterface } from '../../../interfaces';
import { StarsIcon } from '../../Icons';

interface CardProps {
  testimonial: TestimonialInterface;
}

const Card: React.FC<CardProps> = ({
  testimonial: { content, image, name },
}) => {
  return (
    <div className="testimonials__card">
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
