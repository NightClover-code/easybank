//importing types
import { FeatureInterface, FeatureStylesInterface } from '../../../interfaces';

export interface CardProps {
  feature: FeatureInterface;
  styles?: FeatureStylesInterface;
}

const Card: React.FC<CardProps> = ({
  feature: {
    title,
    description,
    image: { alt, url },
  },
  styles: { color, backgroundColor },
}) => {
  return (
    <div className="features__card">
      <div className="icon__container" style={{ backgroundColor }}>
        <img src={url} alt={alt} />
      </div>
      <h2 style={{ color }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
