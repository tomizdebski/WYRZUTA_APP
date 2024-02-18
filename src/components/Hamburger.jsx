import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className="hamburger p-4 sm:hidden" onClick={toggleMenu}>
      <span className={`line ${isOpen ? 'open' : ''}`}></span>
      <span className={`line ${isOpen ? 'open' : ''}`}></span>
      <span className={`line ${isOpen ? 'open' : ''}`}></span>
    </button>
  );
};

export default Hamburger;
