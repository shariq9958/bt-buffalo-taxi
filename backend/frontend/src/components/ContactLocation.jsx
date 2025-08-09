import React from 'react';

const ContactLocation = () => {
    return (
        <div className="contact-location-section">
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.81454378135!2d-78.73471808452585!3d42.9405099791522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d374a58b5f3a1d%3A0x4a47de06e395421!2sBuffalo%20Niagara%20International%20Airport%20(BUF)!5e0!3m2!1sen!2sus!4v1616096542189!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps Location of Buffalo Niagara International Airport"
                ></iframe>
            </div>
            <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>We are here for you 24/7. Reach out to us via phone, email, or visit us at our office.</p>
                <ul>
                    <li><i className="fas fa-phone-alt"></i> (716) 123-4567</li>
                    <li><i className="fas fa-envelope"></i> contact@buffalotaxi.com</li>
                    <li><i className="fas fa-map-marker-alt"></i> 123 Airport Dr, Buffalo, NY 14225</li>
                </ul>
            </div>
        </div>
    );
};

export default ContactLocation; 