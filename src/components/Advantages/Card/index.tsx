//importing types & components
import { AdvantageInterface } from '../../../interfaces';
import Content from '../../Content';

interface CardProps {
  advantage: AdvantageInterface;
}

const Card: React.FC<CardProps> = ({ advantage }) => {
  const {
    title,
    description,
    topic,
    image: { url, alt },
  } = advantage;
  const content = { title, description, topic };

  return (
    <div className="advantages__card">
      <div className="img__container">
        <img src={url} alt={alt} />
      </div>
      <Content {...content} />
    </div>
  );
};

export default Card;
