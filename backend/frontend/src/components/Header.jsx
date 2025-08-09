import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/", text: "Home" },
        { to: "/fare-estimator", text: "Fare Estimator Tool" },
        { to: "/booking-ports", text: "Booking Ports" },
        { to: "/faq", text: "FAQs" },
        { to: "/our-team", text: "Our Team" },
        { to: "/border-news", text: "Border News" },
        { to: "/about", text: "About" }
    ];

    const canadaFlagUrl = 'https://buffalo-airporttaxi.com/wp-content/uploads/2023/06/canada-309_128.gif';
    const usaFlagUrl = 'https://buffalo-airporttaxi.com/wp-content/uploads/2023/06/united-states-729_128.gif';

    return (
        <header className="new-site-header">
            {/* Desktop Header */}
            <div className="desktop-header">
                {/* Tier 1: Top Bar */}
                <div className="header-top-bar">
                    <div className="container">
                        <span>Working Time: 24 hours</span>
                        <div className="header-top-right">
                            <div className="social-links">
                                <span>Follow us:</span>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tier 2: Contact Bar */}
                <div className="header-contact-bar">
                    <div className="container">
                        <div className="contact-item">
                            <i className="fas fa-fax"></i>
                            <div><h4>Fax</h4><p>+1 (716) 951-6256</p></div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div><h4>Email</h4><p>btbuffallotaxi@gmail.com</p></div>
                        </div>
                        <Link to="/" className="main-logo-in-contact-bar">
                           <img src={logoUrl} alt="Buffalo Airport Taxi Logo" />
                        </Link>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <div><h4>Hot Line Phone</h4><p>+1 (716) 951-6256</p></div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div><h4>Location</h4><p>Buffalo Airport</p></div>
                        </div>
                    </div>
                </div>

                {/* Tier 3: Main Navigation Bar */}
                <div className="header-main-nav">
                    <div className="container">
                        <div className="main-nav-left">
                            <img src={canadaFlagUrl} alt="Canada Flag" className="flag-icon" />
                            <img src={usaFlagUrl} alt="USA Flag" className="flag-icon" />
                        </div>
                        <nav className="main-nav-links">
                            <ul>
                                {navLinks.map(link => (
                                    <li key={link.text}><Link to={link.to}><i className="fas fa-check"></i> {link.text}</Link></li>
                                ))}
                            </ul>
                        </nav>
                        <div className="main-nav-right">
                            <Link to="/booking" className="book-online-btn">BOOK ONLINE</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="mobile-header">
                 <div className="container">
                    <Link to="/" className="mobile-logo">
                        <img src={logoUrl} alt="Buffalo Airport Taxi Logo" />
                    </Link>
                    <button className="hamburger-btn" onClick={toggleMenu}>
                        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <nav className={`mobile-nav-container ${isMenuOpen ? 'open' : ''}`}>
                 <ul>
                    {navLinks.map(link => (
                        <li key={link.text}><Link to={link.to} onClick={toggleMenu}><i className="fas fa-check"></i> {link.text}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 