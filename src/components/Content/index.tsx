import { ArrowRightIcon } from '../Icons';

export interface ContentProps {
  title: string;
  description: string;
  topic: string;
}

const Content: React.FC<ContentProps> = ({ topic, description, title }) => {
  return (
    <div className="content">
      <h4>{topic}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="learn__more">
        <p>
          Learn more about {topic}
          <ArrowRightIcon />
        </p>
      </div>
    </div>
  );
};

export default Content;
