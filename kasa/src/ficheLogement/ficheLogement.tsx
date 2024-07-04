import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as solidStar,
  faStar as regularStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import data from '../data.json';
import './ficheLogement.scss';

type FicheLogementParams = {
  id: string;
};

const FicheLogement: React.FC = () => {
  const { id } = useParams<FicheLogementParams>(); // Extrait l'ID du logement cliqué
  const logement = data.find((logement) => logement.id === id); // Trouve dans le fichier data l'objet qui a le même id que l'id extrait

  // État local pour suivre l'index de l'image courante
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % logement.pictures.length
    );
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  // Fonction pour générer les étoiles en fonction du rating
  const renderStars = (rating: string) => {
    const stars = parseInt(rating);
    const totalStars = 5;
    const solidStars = stars;
    const regularStars = totalStars - solidStars;

    const starIcons = [];

    // Ajoute les étoiles solides
    for (let i = 0; i < solidStars; i++) {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={solidStar} className="star-icon solid" />
      );
    }

    // Ajoute les étoiles régulières
    for (let i = 0; i < regularStars; i++) {
      starIcons.push(
        <FontAwesomeIcon
          key={solidStars + i}
          icon={farStar}
          className="star-icon regular"
        />
      );
    }

    return starIcons;
  };

  return (
    <div className="fiche-logement">
      <div className="carousel">
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="carousel__image"
        />

        {logement.pictures.length > 1 && (
          <>
            <button
              className="carousel__button carousel__button--prev"
              onClick={prevImage}
            >
              <FontAwesomeIcon icon="chevron-left" className="icon" />
            </button>
            <button
              className="carousel__button carousel__button--next"
              onClick={nextImage}
            >
              <FontAwesomeIcon icon="chevron-right" className="icon" />
            </button>
            <div className="carousel__counter">
              {currentImageIndex + 1} / {logement.pictures.length}
            </div>
          </>
        )}
      </div>

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
        <div></div>
      </div>
    </div>
  );
};

export default FicheLogement;
