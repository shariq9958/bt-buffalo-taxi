<div className="fare-estimator-content">
  <h2>Buffalo Taxi Fare Estimator</h2>
  <p>Enter your pickup and drop-off details to get an approximate fare estimate.</p>

  <form onSubmit={handleEstimateFare}>
    <div className="form-row">
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
        >
          Open Google Maps
        </a>
      </div>

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
        >
          Open Google Maps
        </a>
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Vehicle Type</label>
        <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="van">Van</option>
        </select>
      </div>
    </div>

    <div className="form-check-group">
      <input
        type="checkbox"
        checked={returnPickup}
        onChange={(e) => setReturnPickup(e.target.checked)}
      />
      <label>Add Return Pickup</label>
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
