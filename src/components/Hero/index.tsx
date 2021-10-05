//importing components
import { ArrowUpIcon } from "../Icons";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="text__content">
          <h1>
            The Next Era of <span>Digital</span> Banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more. Get started for free.
          </p>
          <form>
            <input type="email" placeholder="Email address" />
            <button className="primary__button">
              <ArrowUpIcon />
            </button>
          </form>
        </div>
        <div className="illustration__container">
          <img src="../../images/app.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
