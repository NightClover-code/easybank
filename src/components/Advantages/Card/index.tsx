//importing types & components
import { AdvantageInterface } from '../../../interfaces';
import { isEven } from '../../../utils';
import Content from '../../Content';

interface CardProps {
  advantage: AdvantageInterface;
  order: number;
}

const Card: React.FC<CardProps> = ({
  advantage: { title, description, topic, image },
  order,
}) => {
  const { url, alt } = image;
  const content = { title, description, topic };

  const cardBody = [
    <div className="img__container">
      <img src={url} alt={alt} />
    </div>,
    <Content {...content} />,
  ];

  return (
    <div
      className="advantages__card"
      style={order === 0 ? { marginRight: 100 } : {}}
    >
      {isEven(order) ? cardBody : cardBody.reverse()}
    </div>
  );
};

export default Card;
