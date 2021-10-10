import { Rectangle } from '../Icons';

const Newsletter = () => {
  return (
    <section className="newsletter__section">
      <div className="container">
        <div className="separator"></div>
        <div className="newsletter__subscribe">
          <div className="rectangle__container">
            <Rectangle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
