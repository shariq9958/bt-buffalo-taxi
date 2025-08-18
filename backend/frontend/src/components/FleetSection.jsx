import React from 'react';

import sedanImg from '../assets/car22.jpg'; // Using airport image as placeholder
import suvImg from '../assets/car33.jpeg'; // Using airport image as placeholder
import vanImg from '../assets/car11.jpg'; // Using airport image as placeholder

const FleetSection = () => {
  const fleet = [
    {
      name: 'Standard Sedan',
      description: 'Comfortable and stylish, perfect for up to 3 passengers and luggage.',
      image: sedanImg
    },
    {
      name: 'Spacious SUV',
      description: 'Ideal for families or groups with extra luggage, seating up to 5 passengers.',
      image: suvImg
    },
    {
      name: 'Large Van',
      description: 'The best option for large groups(upto 7) or extensive luggage requirements.',
      image: vanImg
    }
  ];

  return (
    <div className="fleet-section">
      <div className="container">
        <h2>Our Fleet</h2>
        <p className="fleet-subtitle">We offer a diverse range of vehicles to meet your specific needs.</p>
        <div className="fleet-grid">
          {fleet.map((vehicle, index) => (
            <div className="fleet-card" key={index}>
              <img src={vehicle.image} alt={vehicle.name} className="fleet-img" />
              <div className="fleet-info">
                <h3>{vehicle.name}</h3>
                <p>{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetSection; 
