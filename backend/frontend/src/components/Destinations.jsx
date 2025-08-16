import React from 'react';

import niagaraImg from '../assets/img1.jpeg';
import torontoImg from '../assets/img2.jpeg';
import downtownImg from '../assets/img3.jpeg';

const Destinations = () => {
    const destinations = [
        {
            name: 'Buffalo Airport to Niagara Falls, ON',
            price: '$90',
            image: niagaraImg
        },
        {
            name: 'Buffalo Airport to  Niagara falls, NY',
            price: '$75',
            image: torontoImg
        },
        {
            name: 'Downtown Buffalo to Niagara falls NY ',
            price: '$60',
            image: downtownImg
        },
        {
            name: 'Buffalo Downtown to Niagara falls ON ',
            price: '$75',
            image: downtownImg
        }
        ,
        {
            name: 'Buffalo Airport to Toronto Pearson ',
            price: '$280',
            image: downtownImg
        }
    ];

    return (
        <div className="destinations-section">
            <div className="container">
                <h2>Flat-Rate Destinations</h2>
                <div className="destinations-grid">
                    {destinations.map((dest, index) => (
                        <div className="destination-card" key={index}>
                            <img src={dest.image} alt={dest.name} />
                            <div className="destination-overlay">
                                <h3>{dest.name}</h3>
                                <p>From {dest.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations; 
