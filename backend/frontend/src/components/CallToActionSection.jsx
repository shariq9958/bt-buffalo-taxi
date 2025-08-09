import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <h2>Ready for a Seamless Journey?</h2>
        <p>Book your ride with us today and experience the best taxi service in the Buffalo-Niagara region.</p>
        <Link to="/booking" className="btn-primary btn-cta">Book Now</Link>
      </div>
    </div>
  );
};

export default CallToActionSection; 