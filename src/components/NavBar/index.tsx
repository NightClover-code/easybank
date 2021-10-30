//importing components
import { ChevronDownIcon, MenuIcon } from '../Icons';
import Logo from '../Logo';

const NavBar = () => {
  return (
    <nav>
      <Logo />
      <div className="nav__list">
        <ul>
          <li>Prices</li>
          <li>Learn</li>
          <li className="resources">
            Resources <ChevronDownIcon />
          </li>
          <li>Blog</li>
          <li>Sign In</li>
        </ul>
        <button className="primary__button">Free Trial</button>
      </div>
      <div className="menu__icon__container">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default NavBar;
