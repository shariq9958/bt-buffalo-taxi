import React, { useState } from 'react';
import './FareEstimatorPage.css';

const FareEstimatorPage = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [vehicleType, setVehicleType] = useState('sedan');
    const [returnTrip, setReturnTrip] = useState(false);
    const [estimatedFare, setEstimatedFare] = useState(null);

    const fixedFares = [
        { from: 'Niagara Falls, ON', price: 90 },
        { from: 'Toronto Pearson (Niagara, New York)', price: 75 },
        { from: 'Downtown Buffalo - Niagara Falls NY', price: 55 },
        { from: 'Downtown Buffalo - ON', price: 75 },
        { from: 'Buffalo Airport - Toronto Pearson', price: 280 }
    ];

    const vehicleSurcharge = {
        sedan: 0,
        suv: 20, // example
        van: 40  // example
    };

    const calculateFare = () => {
        let fare = null;

        // 1️⃣ Check fixed fare routes
        const fixedMatch = fixedFares.find(
            route =>
                (pickup.toLowerCase().includes(route.from.toLowerCase()) ||
                 dropoff.toLowerCase().includes(route.from.toLowerCase()))
        );

        if (fixedMatch) {
            fare = fixedMatch.price;
        } else {
            // 2️⃣ Apply per-mile logic (placeholder distance)
            // In real app, replace with Google Maps API distance
            const assumedDistance = 10; // example distance in miles

            if (assumedDistance < 5) {
                fare = 20;
            } else {
                fare = 12 + (assumedDistance * 3);
            }
        }

        // 3️⃣ Vehicle surcharge
        fare += vehicleSurcharge[vehicleType] || 0;

        // 4️⃣ Return trip multiplier
        if (returnTrip) {
            fare *= 2;
        }

        setEstimatedFare(fare.toFixed(2));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateFare();
    };

    return (
        <div className="fare-estimator-container">
            <div className="fare-estimator-content">
                <h2>Buffalo Taxi Fare Estimator</h2>
                <p>Enter your pickup and drop-off details to get an approximate fare estimate.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Pick-Up Location</label>
                            <input
                                type="text"
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                placeholder="Enter pickup address"
                            />
                            {pickup && (
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pickup)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on Google Maps
                                </a>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Drop-Off Location</label>
                            <input
                                type="text"
                                value={dropoff}
                                onChange={(e) => setDropoff(e.target.value)}
                                placeholder="Enter drop-off address"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Vehicle Type</label>
                        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                            <option value="sedan">Sedan (up to 4 passengers)</option>
                            <option value="suv">Spacious SUV (up to 5 passengers)</option>
                            <option value="van">Van (up to 7 passengers)</option>
                        </select>
                    </div>

                    <div className="form-check-group">
                        <input
                            type="checkbox"
                            id="returnTrip"
                            checked={returnTrip}
                            onChange={(e) => setReturnTrip(e.target.checked)}
                        />
                        <label htmlFor="returnTrip">Add Return Pickup</label>
                    </div>

                    <button type="submit">Estimate Fare</button>
                </form>

                {estimatedFare && (
                    <div className="estimated-fare-result">
                        <h3>Estimated Fare:</h3>
                        <p>${estimatedFare}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FareEstimatorPage;
