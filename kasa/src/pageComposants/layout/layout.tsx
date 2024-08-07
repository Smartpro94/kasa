import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo_footer from '../../assets/images/logo_footer.png';
import Logo_header from '../../assets/images/logo_header.png';
import './layout.scss';

interface LayoutProps {
  children: ReactNode; // Définit children comme étant de type ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //Link remplace la balise <a> d'html
  const location = useLocation();
  return (
    <div className="layout">
      <header className="header">
        <div className="header__logo">
          <img src={Logo_header} alt="Logo du site" />
        </div>
        <nav className="header__nav">
          <Link
            to="/"
            className={`header__nav__link ${location.pathname === '/' ? 'active' : ''}`} //Si pathname vaut /, ajouter la classe "active", sinon ne pas ajouter
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={`header__nav__link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            A Propos
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <img src={Logo_footer} alt="Logo du site" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
