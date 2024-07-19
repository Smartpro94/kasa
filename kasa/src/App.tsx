import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pageComposants/home/home';
import FicheLogement from './pageComposants/ficheLogement/ficheLogement';
import ErrorPage from './pageComposants/errorPage/errorPage';
import About from './pageComposants/about/about';
import Layout from './pageComposants/layout/layout';

//npm create vite@latest my-react-app --template react-ts

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />
          {/* Route par défaut en cas de chemin inconnu */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
