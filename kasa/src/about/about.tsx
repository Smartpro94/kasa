import React from 'react';
import './about.scss';
import background from '../assets/about-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Ajouter l'icône à la bibliothèque
library.add(faChevronUp, faChevronDown);

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__div-one">
        <img src={background} alt="image de fond" />
      </div>

      <div className="about__collapse">
        <div className="dropdown">
          <p>Fiabilité</p>
          <FontAwesomeIcon icon="chevron-up" className="icon" />
        </div>
        <div className="dropdown">
          <p>Respect</p>
          <FontAwesomeIcon icon="chevron-up" className="icon" />
        </div>
        <div className="dropdown">
          <p>Service</p>
          <FontAwesomeIcon icon="chevron-up" className="icon" />
        </div>
        <div className="dropdown">
          <p>Sécurité</p>
          <FontAwesomeIcon icon="chevron-up" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
