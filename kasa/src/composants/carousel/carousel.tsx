import React, { useState } from 'react';
import './carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Logement {
  pictures: string[];
}

interface CarouselProps {
  logement: Logement;
}

const Carousel: React.FC<CarouselProps> = ({ logement }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const length = logement.pictures.length;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  return (
    <div className="carousel">
      <img
        src={logement.pictures[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="carousel__image"
      />
      {length > 1 && (
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
            {currentImageIndex + 1} / {length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
