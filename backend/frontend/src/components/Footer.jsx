import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="new-site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* About Section */}
                    <div className="footer-widget">
                        <h4 className="widget-title">About Us</h4>
                        <p>Your trusted partner for reliable and professional taxi services in Buffalo and beyond. We are committed to providing safe, comfortable, and timely transportation.</p>
                        <div className="footer-social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-widget">
                        <h4 className="widget-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/border-news">Border News</Link></li>
                            <li><Link to="/booking-ports">Booking Ports</Link></li>
                        </ul>
                    </div>

                    {/* Contact Form Section */}
                    <div className="footer-widget">
                        <h4 className="widget-title">Get in Touch</h4>
                        <form className="footer-contact-form">
                            <input type="email" placeholder="Your email address" />
                            <textarea placeholder="Your message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BT Buffalo Airport Taxi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 