import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../assets/img1.jpeg';
import slide2 from '../assets/img2.jpeg';
import slide3 from '../assets/img3.jpeg';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
    };

    const slides = [
        { image: slide1, alt: "Niagara Falls" },
        { image: slide2, alt: "Airport terminal" },
        { image: slide3, alt: "Downtown Buffalo" }
    ];

    return (
        <div className="hero-section">
            <Slider {...settings} className="hero-slider">
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="slide-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                    </div>
                ))}
            </Slider>
            <div className="hero-content">
                <div className="container">
                     <h1> BT BUFFALO AIRPORT TAXI</h1>
                    <h3>Your Premier Taxi Service for Buffalo & Beyond</h3>
                    <p>Reliable, professional, and always on time. Book your ride to the airport, Niagara Falls, or across the border today!</p>
                    
<Link to="/booking" className="btn-primary hero-book-btn">Book Now</Link>
<div style={{ height: "15px", background: "transparent" }}></div>
<a href="tel:+17169516256" className="btn-primary hero-call-btn">📞 Call Now</a>

                    
                </div>
            </div>
        </div>
    );
};

export default Hero; 
