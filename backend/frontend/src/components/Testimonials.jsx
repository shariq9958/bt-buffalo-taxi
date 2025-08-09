import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Claudia P.',
      quote: 'BT Buffalo Airport Taxi was amazing! The driver waited even though our flight was late and got us safely to Niagara Falls.'
    },
    {
      name: 'Michael T.',
      quote: 'We saved money and got top-notch service. Toronto drop-off was perfect. Highly recommended.'
    },
    {
      name: 'Jessica L.',
      quote: 'The booking process was simple, and the ride was comfortable. I will definitely use their service again for my cross-border travels.'
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="container">
        <h2>What Our Riders Say</h2>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">"{review.quote}"</p>
              <p className="testimonial-author">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 