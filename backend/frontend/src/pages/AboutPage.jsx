import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <h1>About Buffalo Taxi</h1>
                <p>Your Premier Transportation Partner in the Buffalo-Niagara Region</p>
            </div>

            <div className="about-page-content">
                <div className="mission-section">
                    <h2>Our Mission & Vision</h2>
                    <p>
                        Our mission is to provide safe, reliable, and comfortable transportation services for locals and tourists alike. We strive to be the most trusted taxi service in the Buffalo-Niagara area, known for our professionalism, punctuality, and exceptional customer care. Whether you're heading to the airport, crossing the border to Canada, or exploring the beauty of Niagara Falls, our vision is to make your journey seamless and enjoyable from start to finish.
                    </p>
                </div>

                <AboutSection />

                <div className="history-section">
                    <h2>Our Journey</h2>
                    <p>
                        Founded with a passion for service, Buffalo Taxi started as a small fleet with a big goal: to offer a better travel experience. Over the years, we have grown into a leading transportation provider, specializing in airport transfers and cross-border travel. We have built our reputation on a deep understanding of our customers' needs and a commitment to meeting them. Our team of experienced, professional drivers are local experts who are dedicated to your safety and comfort.
                    </p>
                </div>

                <WhyChooseUs />
            </div>
        </div>
    );
};

export default AboutPage; 