import { useState } from 'react';

const useDropdowns = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    if (openDropdowns.includes(index)) {
      // Si l'index en question est dans le tableau openDropdown, retirer cet index, sinon l'ajouter
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  return { openDropdowns, toggleDropdown };
};

export default useDropdowns;
