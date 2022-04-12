//importing components
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../Icons';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="footer__head">
            <Logo />
            <p>The next generation of digital banking</p>
            <div className="socials">
              <div className="social__box">
                <FacebookIcon />
              </div>
              <div className="social__box">
                <TwitterIcon />
              </div>
              <div className="social__box">
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="footer__lists">
            <div className="first__group list__group">
              <ul>
                <li className="title">Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it works</li>
              </ul>
              <ul>
                <li className="title">Features</li>
                <li>Screen Sharing</li>
                <li>iOS & Android Apps</li>
                <li>File Sharing</li>
                <li>User Management</li>
              </ul>
            </div>
            <div className="second__group list__group">
              <ul>
                <li className="title">Support</li>
                <li>FAQ</li>
                <li>Live Chat</li>
                <li>Customer Service</li>
              </ul>
              <ul>
                <li className="title">Contact</li>
                <li>info@easybank.com</li>
                <li>1-898-615-123</li>
                <li>3500 Sunset BLC, Creek Rd, CA </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="footer__bottom">
          <div className="copyright">&copy; Copyright 2022, Easybank Inc.</div>
          <p>Created by Achraf Elmouhib</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
