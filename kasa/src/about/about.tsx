import React, { useState } from 'react';
import './about.scss';
import background from '../assets/about-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Ajouter l'icône à la bibliothèque
library.add(faChevronUp, faChevronDown);

const About: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]); // Tableau d'indices des dropdowns ouverts

  const toggleDropdown = (index: number) => {
    if (openDropdowns.includes(index)) {
      // Dropdown déjà ouvert, le fermer
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      // Dropdown fermé, l'ouvrir
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  const dropdowns = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="about">
      <div className="about__div-one">
        <img src={background} alt="image de fond" />
      </div>

      <div className="about__collapse">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="dropdown">
            <div className="dropdown-header">
              <p>{dropdown.title}</p>
              <FontAwesomeIcon
                icon={
                  openDropdowns.includes(index) ? 'chevron-down' : 'chevron-up'
                }
                className="icon"
                onClick={() => toggleDropdown(index)}
              />
            </div>
            {openDropdowns.includes(index) && (
              <div className="dropdown-content">{dropdown.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
