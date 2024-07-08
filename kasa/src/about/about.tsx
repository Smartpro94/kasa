import './about.scss';
import background from '../assets/images/about-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDropdowns from '../assets/composants/useDropdowns';
import '../assets/composants/fontAwesome';

const About: React.FC = () => {
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

  const { openDropdowns, toggleDropdown } = useDropdowns(); // Utilisation du hook personnalisé

  return (
    <div className="about">
      <div className="about__div-one">
        <img src={background} alt="image de fond" />
      </div>

      <div className="about__collapse">
        {dropdowns.map((dropdown, id) => (
          <div key={id} className="dropdown">
            <div className="dropdown-header">
              <p>{dropdown.title}</p>
              <FontAwesomeIcon
                icon="chevron-up"
                className={`icon ${openDropdowns.includes(id) ? 'open' : 'closed'}`}
                onClick={() => toggleDropdown(id)}
              />
            </div>
            {openDropdowns.includes(id) && ( // Si l'index en question est dans le tableau openDropdown, ajouter cette div
              <div className="dropdown-content">{dropdown.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
