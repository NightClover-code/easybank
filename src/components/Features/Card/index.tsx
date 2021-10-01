import { FeatureInterface } from "../../../interfaces";

export interface CardProps {
  feature: FeatureInterface;
}

const Card: React.FC<CardProps> = ({
  feature: { title, description, iconURL },
}) => {
  return (
    <div className="features__card">
      <div className="icon__container">
        <img src={iconURL} alt="alicb" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
