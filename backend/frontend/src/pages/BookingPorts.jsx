import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPorts.css';

const BookingPorts = () => {
    const ports = [
        {
            title: 'Buffalo Niagara Int\'l Airport (BUF)',
            description: 'The premier gateway to Western New York. We provide timely and reliable pickups and drop-offs, ensuring you never miss a flight. Our drivers track your flight status to adjust for any delays.',
            image: 'https://placehold.co/600x400/EFEFEF/333333?text=Buffalo+Airport',
            link: '/booking'
        },
        {
            title: 'Niagara Falls, NY (USA)',
            description: 'Explore the American side of the falls. We offer tours and direct transportation to all major attractions, including Maid of the Mist, Cave of the Winds, and Niagara Falls State Park.',
            image: 'https://placehold.co/600x400/EFEFEF/333333?text=Niagara+Falls+NY',
            link: '/booking'
        },
        {
            title: 'Niagara Falls, ON (Canada)',
            description: 'Cross the border with ease. Our certified drivers handle all the details for a smooth trip to the Canadian side, including Clifton Hill, the Skylon Tower, and Fallsview Casino.',
            image: 'https://placehold.co/600x400/EFEFEF/333333?text=Niagara+Falls+ON',
            link: '/booking'
        },
        {
            title: 'Cross-Border to Toronto & GTA',
            description: 'Travel comfortably to Toronto, Mississauga, and the Greater Toronto Area. Our spacious vehicles are perfect for long-distance trips, providing a cost-effective and stress-free alternative to flying.',
            image: 'https://placehold.co/600x400/EFEFEF/333333?text=Toronto+&+GTA',
            link: '/booking'
        },
    ];

    return (
        <div className="booking-ports-page">
            <div className="page-header">
                <h1>Our Service Areas & Booking Ports</h1>
                <p>Reliable Transportation Where You Need It Most</p>
            </div>
            <div className="ports-container">
                {ports.map((port, index) => (
                    <div className="port-card" key={index}>
                        <img src={port.image} alt={port.title} className="port-image" />
                        <div className="port-content">
                            <h3>{port.title}</h3>
                            <p>{port.description}</p>
                            <Link to={port.link} className="btn-book-port">Book Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingPorts; 