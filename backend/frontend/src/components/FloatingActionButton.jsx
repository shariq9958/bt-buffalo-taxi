import React, { useState } from 'react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fab-container ${isOpen ? 'open' : ''}`}>
      <div className="fab-menu">
        <a href="https://wa.me/17169516256" className="fab-item" title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="sms:+17169516256" className="fab-item" title="SMS">
          <i className="fas fa-sms"></i>
        </a>
        <a href="tel:17162924425" className="fab-item" title="Call">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:info@bufairporttaxi.com" className="fab-item" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <button className="fab-button" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>
    </div>
  );
};

export default FloatingActionButton; 
