import React from 'react';
import './errorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="header__nav__link link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
