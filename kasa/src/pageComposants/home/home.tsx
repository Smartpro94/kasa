import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import background from '../../assets/images/image_accueil.png';
import data from '../../data.json';

type CardData = {
  id: string;
  title: string;
  cover: string;
  description: string;
};

const Home: React.FC = () => {
  // Initialisation de l'état cards avec useState
  const [cards, setCards] = useState<CardData[]>([]);
  // useEffect pour mettre à jour l'état avec les données JSON après le montage du composant
  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div className="home">
      <div className="home__div-one">
        <img src={background} alt="image de fond" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="home__gallery">
        {cards.map((card) => (
          <Link
            to={`/fiche-logement/${card.id}`}
            key={card.id}
            className="link"
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${card.cover})` }}
            >
              <p>{card.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
