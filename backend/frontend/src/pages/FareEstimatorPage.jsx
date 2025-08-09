import React, { useState } from 'react';
import './FareEstimatorPage.css';

const FareEstimatorPage = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [vehicleType, setVehicleType] = useState('standard');
    const [passengers, setPassengers] = useState(1);
    const [luggage, setLuggage] = useState(0);
    const [hasPets, setHasPets] = useState('No');
    const [childSeats, setChildSeats] = useState(0);
    const [waitingTime, setWaitingTime] = useState(0);
    const [estimatedFare, setEstimatedFare] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- Fare Calculation Logic ---
        let fare = 2.50; // Base fare
        
        // Vehicle type
        if (vehicleType === 'luxury') fare += 20;

        // Simplified distance calculation (for demonstration)
        // In a real app, you would use a service like Google Maps API
        const distance = (pickup && dropoff) ? 25 : 0; // Assume 25 miles if locations are entered
        fare += distance * 2.25; // Per-mile charge

        // Passengers & Luggage (example logic)
        if (passengers > 4) fare += (passengers - 4) * 5; // Extra charge for more passengers
        if (luggage > 2) fare += (luggage - 2) * 2; // Extra charge for more luggage

        // Special Needs
        if (hasPets === 'Yes') fare += 10; // Pet fee
        fare += childSeats * 5; // Child seat fee

        // Waiting Time
        fare += waitingTime * 0.50 * 60; // Assuming $30/hr, so $0.50/min

        setEstimatedFare(fare.toFixed(2));
    };

    return (
        <div className="fare-estimator-container">
            <div className="fare-estimator-content">
                <h2>Buffalo Airport Taxi Fare Estimator</h2>
                <p>Enter your pickup and drop-off details to get an approximate fare estimate.</p>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>LOCATION DETAILS</legend>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Pick-Up Location</label>
                                <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Buffalo Airport or your address" />
                            </div>
                            <div className="form-group">
                                <label>Drop-Off Location</label>
                                <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Niagara Falls, Toronto..." />
                            </div>
                        </div>
                        <div className="form-check-group">
                            <input type="checkbox" id="useAirportPickup" />
                            <label htmlFor="useAirportPickup">Use This For BUF Airport PickUp: 4200 Genesee St, Buffalo, NY 14225</label>
                        </div>
                        <div className="form-check-group">
                            <input type="checkbox" id="useAirportDropoff" />
                            <label htmlFor="useAirportDropoff">Use This For BUF Airport DropOff: 4200 Genesee St, Buffalo, NY 14225</label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>VEHICLE & PASSENGERS</legend>
                        <div className="form-row">
                             <div className="form-group">
                                <label>Vehicle Type</label>
                                <div className="radio-group">
                                    <input type="radio" id="standard" name="vehicleType" value="standard" checked={vehicleType === 'standard'} onChange={(e) => setVehicleType(e.target.value)} />
                                    <label htmlFor="standard">Standard</label>
                                    <input type="radio" id="luxury" name="vehicleType" value="luxury" checked={vehicleType === 'luxury'} onChange={(e) => setVehicleType(e.target.value)} />
                                    <label htmlFor="luxury">Luxury (+$20)</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Passengers</label>
                                <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
                            </div>
                        </div>
                         <div className="form-row">
                            <div className="form-group">
                                <label>Luggage</label>
                                <input type="number" min="0" value={luggage} onChange={(e) => setLuggage(e.target.value)} />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>SPECIAL NEEDS</legend>
                         <div className="form-row">
                            <div className="form-group">
                                <label>Traveling with pets?</label>
                                 <div className="radio-group">
                                    <input type="radio" id="petsYes" name="pets" value="Yes" checked={hasPets === 'Yes'} onChange={(e) => setHasPets(e.target.value)} />
                                    <label htmlFor="petsYes">Yes</label>
                                    <input type="radio" id="petsNo" name="pets" value="No" checked={hasPets === 'No'} onChange={(e) => setHasPets(e.target.value)} />
                                    <label htmlFor="petsNo">No</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Child Seats</label>
                                <input type="number" min="0" value={childSeats} onChange={(e) => setChildSeats(e.target.value)} />
                            </div>
                        </div>
                    </fieldset>

                     <fieldset>
                        <legend>WAITING TIME</legend>
                         <div className="form-row">
                            <div className="form-group">
                                <label>Waiting Time Location</label>
                                 <div className="radio-group">
                                    <input type="radio" id="waitNone" name="waitLocation" value="None" defaultChecked />
                                    <label htmlFor="waitNone">None</label>
                                    <input type="radio" id="waitBorder" name="waitLocation" value="Border" />
                                    <label htmlFor="waitBorder">Canadian Border</label>
                                    <input type="radio" id="waitAirport" name="waitLocation" value="Airport" />
                                    <label htmlFor="waitAirport">Airport</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Waiting Hours (if any)</label>
                                <input type="number" min="0" value={waitingTime} onChange={(e) => setWaitingTime(e.target.value)} />
                            </div>
                        </div>
                    </fieldset>
                    
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