//importing components
import { NavContext } from '../../context';
import { useContext } from 'react';
import NavBar from '../NavBar';

const Header = () => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <header className={isNavOpen ? 'overlay' : ''}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
