import React from 'react';
import './ContactMapSection.css';

const ContactMapSection = () => {
    return (
        <div className="contact-map-section">
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.433256972295!2d-78.7303358845258!3d42.940524979152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3744ee7d7c62b%3A0x29b2c65f9a656502!2sBuffalo%20Niagara%20International%20Airport!5e0!3m2!1sen!2sus!4v1684349173824!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Buffalo Niagara International Airport"
                ></iframe>
            </div>
            <div className="contact-info-wrapper">
                <div className="contact-text">
                    <h2>Get In Touch</h2>
                    <p>We are here for you 24/7. Reach out to us via phone, email, or visit us at our office.</p>
                    <ul className="contact-details">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span>(716) 123-4567</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>contact@buffalotaxi.com</span>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>123 Airport Dr, Buffalo, NY 14225</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactMapSection; 