//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import Logo from '../Logo';
import { ChevronDownIcon, CloseIcon, MenuIcon } from '../Icons';

const NavBar = () => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  return (
    <nav>
      <Logo />
      <div className={isNavOpen ? 'mobile__nav' : 'desktop__nav'}>
        <div className="nav__list">
          <ul>
            <li className="prices">Prices</li>
            <li>Learn</li>
            <li className="resources">
              Resources <ChevronDownIcon />
            </li>
            <li>Blog</li>
            <li>Sign In</li>
          </ul>
          <button className="primary__button">Free Trial</button>
        </div>
        <div
          className="menu__icon__container"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
