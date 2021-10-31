//importing hooks & context
import { useEffect, useContext } from 'react';
import { NavContext } from '../context';
import { hideNav, disableScroll } from '../utils';
//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

//main layout
const MainLayout: React.FC = ({ children }) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  useEffect(() => {
    hideNav(setIsNavOpen);
  }, [setIsNavOpen]);

  useEffect(() => {
    disableScroll(isNavOpen);
  }, [isNavOpen]);

  return (
    <div className="app__container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
