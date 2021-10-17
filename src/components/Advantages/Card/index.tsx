//importing types
import { CSSProperties } from 'react';
import { AdvantageInterface } from '../../../interfaces';
import { isEven } from '../../../utils';
//importing components
import Content from '../../Content';

interface CardProps {
  advantage: AdvantageInterface;
  order: number;
  style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({
  advantage: { title, description, topic, image },
  order,
  style,
}) => {
  const { url, alt } = image;
  const content = { title, description, topic };

  const cardBody = [
    <div className="img__container">
      <img src={url} alt={alt} />
    </div>,
    <Content {...content} style={style} />,
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
