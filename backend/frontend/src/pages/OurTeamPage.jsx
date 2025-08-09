import React from 'react';
import OurTeam from '../components/OurTeam';
import './OurTeamPage.css';

const OurTeamPage = () => {
    return (
        <div className="our-team-page">
            <div className="page-header">
                <h1>Meet Our Professionals</h1>
                <p>The Driving Force Behind Your Comfortable Journey</p>
            </div>

            <div className="team-intro-section">
                <h2>Committed to Excellence, Dedicated to You</h2>
                <p>
                    Our team is the heart of Buffalo Taxi. We are a group of experienced, professional, and courteous drivers who share a common goal: to provide you with the best transportation experience possible. Each member of our team is hand-picked, thoroughly vetted, and trained to uphold the highest standards of safety and customer service. We are not just drivers; we are your local guides, your travel assistants, and your trusted partners on the road.
                </p>
            </div>

            <OurTeam />
        </div>
    );
};

export default OurTeamPage; 