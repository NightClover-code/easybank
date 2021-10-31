//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import { Link } from 'gatsby';
import { LogoIcon } from '../Icons';

const Logo = () => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <Link to="/">
      <div className="logo__container">
        <LogoIcon color={isNavOpen ? '#fff' : '#22211F'} />
      </div>
    </Link>
  );
};

export default Logo;
