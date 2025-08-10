import React from 'react';
import aboutImage from '../assets/BNIA.jpg'; // Airport image

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={aboutImage} alt="Buffalo Airport" />
      </div>
      <div className="about-text">
        <h2>Your Trusted Partner for Airport Transportation</h2>
        <p>
          Welcome to BT Buffalo Airport Taxi, your reliable and professional transportation solution for travel between Buffalo Niagara International Airport (BUF), Niagara Falls, and across the Canadian border. We are a locally owned and operated company dedicated to providing safe, comfortable, and affordable taxi services to our valued customers.
        </p>
        <p>
          Our team of experienced and licensed drivers is committed to ensuring you have a seamless and stress-free journey. Whether you're a tourist visiting the majestic Niagara Falls, a business traveler heading to a meeting in Toronto, or a local resident in need of a dependable ride, we've got you covered.
        </p>
        <a href="#" className="btn-primary">Learn More</a>
      </div>
    </div>
  );
};

export default AboutSection; 
