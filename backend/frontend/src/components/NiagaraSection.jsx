import React from 'react';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';

const NiagaraSection = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="niagara-section">
      <div className="niagara-text">
        <h2>Experience the Wonder of Niagara Falls</h2>
        <p>
          Let us take you on an unforgettable journey to one of the world's most breathtaking natural wonders. Witness the raw power and stunning beauty of Niagara Falls from both the American and Canadian sides. Our reliable taxi service ensures you have a comfortable and scenic ride, allowing you to soak in the anticipation.
        </p>
        <p>
          Whether it's the thrilling Maid of the Mist boat tour, the mesmerizing Journey Behind the Falls, or simply enjoying the panoramic views from the Skylon Tower, your adventure awaits.
        </p>
        <a href="#" className="btn-primary">Book Your Niagara Trip</a>
      </div>
      <div className="niagara-gallery">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Niagara Falls view ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NiagaraSection; 