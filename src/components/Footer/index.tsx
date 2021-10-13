import { LogoIcon } from '../Icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__head">
          <div className="logo__container">
            <LogoIcon />
          </div>
          <p>The next generation of digital banking</p>
          <div className="socials"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
