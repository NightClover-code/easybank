import { CSSProperties } from 'react';
import { ArrowRightIcon } from '../Icons';

export interface ContentProps {
  title: string;
  description: string;
  topic: string;
  style?: CSSProperties;
}

const Content: React.FC<ContentProps> = ({
  topic,
  description,
  title,
  style: { color },
}) => {
  return (
    <div className="content">
      <h4 style={{ color }}>{topic}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="learn__more">
        <p style={{ color }}>
          Learn more about {topic}
          <ArrowRightIcon style={{ color }} />
        </p>
      </div>
    </div>
  );
};

export default Content;
