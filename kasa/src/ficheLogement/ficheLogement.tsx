import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data.json';
import './ficheLogement.scss';
import useDropdowns from '../assets/composants/useDropdowns';
import useCarousel from '../assets/composants/useCarousel';

type FicheLogementParams = {
  id: string;
};

const FicheLogement: React.FC = () => {
  const { id } = useParams<FicheLogementParams>(); // Extrait l'ID du logement cliqué
  const logement = data.find((logement) => logement.id === id); // Trouve dans le fichier data l'objet qui a le même id que l'id extrait

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  // Utilisation du hook personnalisé pour le carousel
  const { currentImageIndex, nextImage, prevImage } = useCarousel(
    logement.pictures.length
  );

  // Utilisation du hook personnalisé pour le dropdown
  const { openDropdowns, toggleDropdown } = useDropdowns();

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
        <div id="dropdown">
          <div className="dropdown" id="0">
            <div className="dropdown-header">
              <p>Description</p>
              <FontAwesomeIcon
                icon="chevron-up"
                className={`icon ${openDropdowns.includes(0) ? 'open' : 'closed'}`}
                onClick={() => toggleDropdown(0)}
              />
            </div>
            {openDropdowns.includes(0) && ( // Si l'index en question est dans le tableau openDropdown, ajouter cette div
              <div className="dropdown-content">{logement.description}</div>
            )}
          </div>

          <div className="dropdown" id="1">
            <div className="dropdown-header">
              <p>Equipements</p>
              <FontAwesomeIcon
                icon="chevron-up"
                className={`icon ${openDropdowns.includes(1) ? 'open' : 'closed'}`}
                onClick={() => toggleDropdown(1)}
              />
            </div>
            {openDropdowns.includes(1) && ( // Si l'index en question est dans le tableau openDropdown, ajouter cette div
              <div className="dropdown-content">
                {logement.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
