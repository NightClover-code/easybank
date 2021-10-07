//importing types
import { CSSProperties } from 'react';
import { FeatureInterface } from '../../../interfaces';

export interface CardProps {
  feature: FeatureInterface;
  styles?: CSSProperties;
}

const Card: React.FC<CardProps> = ({
  feature: {
    title,
    description,
    image: { alt, url },
  },
  styles: { color, backgroundColor, marginLeft, boxShadow },
}) => {
  return (
    <div className="features__card" style={{ boxShadow }}>
      <div className="icon__container" style={{ backgroundColor }}>
        <img src={url} alt={alt} style={{ marginLeft }} />
      </div>
      <h2 style={{ color }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
