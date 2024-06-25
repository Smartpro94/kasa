import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import FicheLogement from './ficheLogement/ficheLogement';
import ErrorPage from './errorPage/errorPage';
import About from './about/about';
import Layout from './layout/layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />{' '}
          {/* Route par défaut en cas de chemin inconnu */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
