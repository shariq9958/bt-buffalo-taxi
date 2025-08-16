import React from 'react';
import { Link } from 'react-router-dom';
import confidenceImage from '../assets/img5.jpeg'; // Using one of the Niagara images as a placeholder

const BookingConfidence = () => {
  return (
    <div className="confidence-section">
      <div className="container">
        <div className="confidence-image">
          <img src={confidenceImage} alt="Man holding an award" />
        </div>
        <div className="confidence-text">
          <h2>Book With Confidence</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> No upfront payment required</li>
            <li><i className="fas fa-check-circle"></i> Flat-rate pricing — no hidden fees</li>
            <li><i className="fas fa-check-circle"></i> 24/7 availability</li>
            <li><i className="fas fa-check-circle"></i> Trusted by thousands of travelers each month</li>
          </ul>
          <hr />
          <h3>Recognized. Respected. Ready to Serve.</h3>
          <p>
            If you're looking for the most trusted Buffalo Airport Taxi service, you've just found it.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default BookingConfidence; 
