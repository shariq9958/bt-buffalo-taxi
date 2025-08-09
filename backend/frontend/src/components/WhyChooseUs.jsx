import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-dollar-sign',
      title: 'Flat-Rate Pricing',
      description: 'No hidden fees, no surge pricing. The price you see is the price you pay.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Licensed & Insured',
      description: 'Our professional drivers are fully licensed, insured, and dedicated to your safety.'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Availability',
      description: 'We are available around the clock to meet your travel needs, day or night.'
    },
    {
      icon: 'fas fa-globe-americas',
      title: 'Cross-Border Experts',
      description: 'We specialize in smooth and hassle-free transportation across the US-Canada border.'
    }
  ];

  return (
    <div className="why-choose-us-section">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 