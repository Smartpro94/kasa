import { useState } from 'react';

const useCarousel = (length: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  return { currentImageIndex, nextImage, prevImage };
};

export default useCarousel;
