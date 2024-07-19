import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data.json';
import './ficheLogement.scss';
import Dropdown from '../../composants/dropdown/dropdown';
import Carousel from '../../composants/carousel/carousel';
import ErrorPage from '../errorPage/errorPage';

type FicheLogementParams = {
  id: string;
};

const FicheLogement: React.FC = () => {
  const { id } = useParams<FicheLogementParams>(); // Extrait l'ID du logement cliqué
  const logement = data.find((logement) => logement.id === id); // Trouve dans le fichier data l'objet qui a le même id que l'id extrait

  if (!logement) {
    return <ErrorPage />;
  }

  // Fonction pour générer les étoiles en fonction du rating
  const renderStars = (rating: string) => {
    const stars = parseInt(rating);
    const totalStars = 5;
    const solidStars = stars;
    const greyStars = totalStars - solidStars;

    const starIcons = [];

    // Ajoute les étoiles solides
    for (let i = 0; i < solidStars; i++) {
      starIcons.push(
        <FontAwesomeIcon key={i} icon="star" className="star-icon solid" />
      );
    }

    // Ajoute les étoiles régulières
    for (let i = 0; i < greyStars; i++) {
      starIcons.push(
        <FontAwesomeIcon
          key={solidStars + i}
          icon="star"
          className="star-icon regular"
        />
      );
    }

    return starIcons;
  };

  return (
    <div className="fiche-logement">
      <Carousel logement={logement} />
      <div className="logement-details">
        <div className="logement-host">
          <div className="info-left">
            <div>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="host-tag">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="info-right">
            <div>
              <p>{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>
            <div className="logement-rating">
              {renderStars(logement.rating)}
            </div>
          </div>
        </div>
        <div id="dropdown">
          <Dropdown title="Description">{logement.description}</Dropdown>
          <Dropdown title="Equipements">
            {logement.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
