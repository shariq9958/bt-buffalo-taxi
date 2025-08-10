import React, { useState } from "react";
import "./FareEstimatorPage.css";

const FareEstimatorPage = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("sedan");
  const [returnPickup, setReturnPickup] = useState(false);
  const [estimatedFare, setEstimatedFare] = useState(null);

  const handleEstimateFare = (e) => {
    e.preventDefault();

    // Simple fare calculation (replace with your backend API later if needed)
    let fare = 12; // starting fare
    const distance = Math.floor(Math.random() * 20) + 1; // random distance for example

    if (distance < 5) {
      fare = 20;
    } else {
      fare += distance * 3;
    }

    if (returnPickup) {
      fare *= 2; // double for return trip
    }

    setEstimatedFare(fare.toFixed(2));
  };

  return (
    <div className="fare-estimator-container">
      <h2>Buffalo Taxi Fare Estimator</h2>
      <p>
        Enter your pickup and drop-off details to get an approximate fare estimate.
      </p>

      <form onSubmit={handleEstimateFare} className="fare-form">
        {/* Pickup Location */}
        <div className="form-group">
          <label>Pickup Location</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
            required
          />
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Drop-off Location */}
        <div className="form-group">
          <label>Drop-off Location</label>
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Enter drop-off location"
            required
          />
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Vehicle Type */}
        <div className="form-group">
          <label>Vehicle Type</label>
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
            <option value="sedan">Sedan (up to 4)</option>
            <option value="suv">Spacious SUV (up to 5)</option>
            <option value="van">Van (up to 7)</option>
          </select>
        </div>

        {/* Return Pickup Option */}
        <div className="form-check">
          <input
            type="checkbox"
            checked={returnPickup}
            onChange={(e) => setReturnPickup(e.target.checked)}
          />
          <label>Add Return Pickup</label>
        </div>

        {/* Estimate Button */}
        <button type="submit" className="estimate-btn">
          Estimate Fare
        </button>
      </form>

      {/* Estimated Fare */}
      {estimatedFare && (
        <div className="fare-result">
          <h3>Estimated Fare:</h3>
          <p>${estimatedFare}</p>
        </div>
      )}
    </div>
  );
};

export default FareEstimatorPage;
