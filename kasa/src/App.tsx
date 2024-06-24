import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compenants/home'; 
import FicheLogement from './compenants/ficheLogement'; 
import ErrorPage from './compenants/errorPage'; 
import About from './compenants/about'; 
import Layout from './compenants/layout'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fiche-logement" element={<FicheLogement />} />
            <Route path="*" element={<ErrorPage />} /> {/* Route par défaut en cas de chemin inconnu */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
