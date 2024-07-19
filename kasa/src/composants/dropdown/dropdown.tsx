import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../composants/fontAwesome';
import './dropdown.scss';

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <p>{title}</p>
        <FontAwesomeIcon
          icon="chevron-up"
          className={`icon ${isOpen ? 'open' : 'closed'}`}
        />
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
