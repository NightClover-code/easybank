//importing types & components
import { AdvantageInterface } from '../../../interfaces';
import { isEven } from '../../../utils';
import Content from '../../Content';

interface CardProps {
  advantage: AdvantageInterface;
  order: number;
}

const Card: React.FC<CardProps> = ({ advantage, order }) => {
  const {
    title,
    description,
    topic,
    image: { url, alt },
  } = advantage;
  const content = { title, description, topic };

  return isEven(order) ? (
    <div className="advantages__card">
      <div className="img__container">
        <img src={url} alt={alt} />
      </div>
      <Content {...content} />
    </div>
  ) : (
    <div className="advantages__card">
      <Content {...content} />
      <div className="img__container">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default Card;
