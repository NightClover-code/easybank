//importing components
import { Link } from 'gatsby';
import { LogoIcon } from '../Icons';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo__container">
        <LogoIcon />
      </div>
    </Link>
  );
};

export default Logo;
