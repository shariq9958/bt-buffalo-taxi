import React from 'react';

const OurServices = () => {
  const services = [
    {
      icon: 'fas fa-plane-departure',
      title: 'Airport Transfers',
      description: 'Reliable and timely pickups and drop-offs at Buffalo Niagara International Airport (BUF).'
    },
    {
      icon: 'fas fa-water',
      title: 'Niagara Falls Tours',
      description: 'Experience the beauty of Niagara Falls with our convenient and comfortable taxi service.'
    },
    {
      icon: 'fab fa-canadian-maple-leaf',
      title: 'Cross-Border to Canada',
      description: 'Seamless and hassle-free transportation to Toronto, Mississauga, and other Canadian destinations.'
    },
     {
      icon: 'fas fa-briefcase',
      title: 'Corporate Travel',
      description: 'Professional and discreet service for business travelers attending meetings or events.'
    }
  ];

  return (
    <div className="services-section">
      <div className="container">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices; 