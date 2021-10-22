//importing components
import { ChevronRightIcon, Rectangle } from '../Icons';

const Newsletter = () => {
  return (
    <section className="newsletter__section" data-aos="fade-up">
      <div className="container">
        <div className="separator"></div>
        <div className="newsletter__subscribe">
          <div className="rectangle__container">
            <Rectangle />
          </div>
          <div className="newsletter__head">
            <h2>Subscribe to our newsletter</h2>
            <p>
              Receive weekly emails about online security and the future of
              digital banking.
            </p>
          </div>
          <form>
            <input type="email" placeholder="Type your email" />
            <button className="primary__button">
              Discover <ChevronRightIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
