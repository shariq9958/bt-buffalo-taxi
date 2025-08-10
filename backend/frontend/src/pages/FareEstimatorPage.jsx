import React, { useState } from "react";
import "./FareEstimatorPage.css";

/**
 * Fare rules implemented:
 * - Preset fixed fares (user-provided):
 *   Niagara Falls, ON -> $90
 *   Toronto Pearson (Niagara, New York) -> $75
 *   Downtown Buffalo -> Niagara Falls NY -> $55
 *   Downtown -> ON -> $75
 *   Buffalo Airport -> Toronto Pearson -> $280
 *
 * - If no preset:
 *   - If distance < 5 miles => $20
 *   - Else => $12 + $3 * distance
 *
 * - Vehicle surcharge:
 *   sedan: $0, suv: $20, van: $40
 *
 * - Other fees:
 *   return trip: multiply by 2
 *   child seat: $5 each
 *   pet fee: $10
 *   extra luggage (>2): $2 per extra bag
 *   extra passenger beyond capacity: $10 per extra passenger
 *   waiting time: $0.50 per minute
 *
 * Notes:
 * - You can either pick a PRESET route (fixed fare) or enter distance (miles).
 * - Pickup/Dropoff fields include a Google Maps search link.
 */

const PRESET_ROUTES = [
  { id: "none", label: "— No preset — (use custom distance) ", price: null },
  { id: "niagara_on", label: "Niagara Falls, ON", price: 90 },
  { id: "toronto_pearson", label: "Toronto Pearson (Niagara, New York)", price: 75 },
  { id: "downtown_to_niagara_ny", label: "Downtown Buffalo → Niagara Falls, NY", price: 55 },
  { id: "downtown_to_on", label: "Downtown Buffalo → Niagara Falls, ON", price: 75 },
  { id: "buf_airport_to_toronto", label: "Buffalo Airport → Toronto Pearson", price: 280 }
];

const VEHICLE_INFO = {
  sedan: { label: "Sedan (up to 4)", cap: 4, surcharge: 0 },
  suv:   { label: "Spacious SUV (up to 5)", cap: 5, surcharge: 20 },
  van:   { label: "Van (up to 7)", cap: 7, surcharge: 40 }
};

export default function FareEstimatorPage() {
  const [preset, setPreset] = useState("none");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(""); // user-entered miles (optional)
  const [vehicle, setVehicle] = useState("sedan");
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [childSeats, setChildSeats] = useState(0);
  const [hasPets, setHasPets] = useState(false);
  const [waitingMinutes, setWaitingMinutes] = useState(0);
  const [returnTrip, setReturnTrip] = useState(false);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function parseNumber(val, fallback = 0) {
    const n = parseFloat(val);
    return Number.isFinite(n) ? n : fallback;
  }

  const handleEstimate = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    // Use preset if chosen
    let baseFare = null;
    const chosenPreset = PRESET_ROUTES.find(r => r.id === preset);
    if (chosenPreset && chosenPreset.price != null) {
      baseFare = chosenPreset.price;
    } else {
      // Custom distance-based
      const miles = parseNumber(distance, null);
      if (miles === null) {
        setError("Please select a preset route or enter the trip distance (miles).");
        return;
      }
      if (miles < 0) {
        setError("Distance must be a non-negative number.");
        return;
      }

      if (miles < 5) baseFare = 20;
      else baseFare = 12 + 3 * miles; // starting 12 + $3 per mile (as requested)
    }

    // Vehicle surcharge & capacity
    const veh = VEHICLE_INFO[vehicle] || VEHICLE_INFO.sedan;
    let vehicleSurcharge = veh.surcharge;

    // Passenger over-capacity surcharge
    const pass = Math.max(0, parseNumber(passengers, 1));
    let passengerSurcharge = 0;
    if (pass > veh.cap) {
      passengerSurcharge = (pass - veh.cap) * 10; // $10 per extra passenger
    }

    // Luggage surcharge: >2 bags
    const bags = Math.max(0, Math.floor(parseNumber(luggage, 0)));
    const luggageSurcharge = bags > 2 ? (bags - 2) * 2 : 0;

    // Child seats
    const cs = Math.max(0, Math.floor(parseNumber(childSeats, 0)));
    const childSeatFee = cs * 5; // $5 per child seat

    // Pet fee
    const petFee = hasPets ? 10 : 0;

    // Waiting time fee ($0.50 per minute)
    const waitMins = Math.max(0, parseNumber(waitingMinutes, 0));
    const waitingFee = waitMins * 0.5;

    // Sum up
    let subtotal = baseFare + vehicleSurcharge + passengerSurcharge + luggageSurcharge + childSeatFee + petFee + waitingFee;

    // Return trip
    const returnMultiplier = returnTrip ? 2 : 1;
    let total = subtotal * returnMultiplier;

    // Round to 2 decimals
    total = Math.round(total * 100) / 100;
    subtotal = Math.round(subtotal * 100) / 100;

    // Prepare breakdown for display
    const breakdown = {
      baseFare: Number(baseFare.toFixed(2)),
      vehicleSurcharge,
      passengerSurcharge,
      luggageSurcharge,
      childSeatFee,
      petFee,
      waitingFee: Number(waitingFee.toFixed(2)),
      subtotal: Number(subtotal.toFixed(2)),
      returnMultiplier,
      total: Number(total.toFixed(2)),
      distanceUsed: chosenPreset && chosenPreset.price != null ? null : parseNumber(distance, null)
    };

    setResult(breakdown);
  };

  const handleBookNow = () => {
    // Open booking page or set up mailto with pre-filled content
    // For now, redirect to booking page if available
    window.location.href = "/booking";
  };

  return (
    <div className="fare-estimator-wrapper">
      <div className="fare-estimator-card">
        <h2>BT Buffalo Taxi — Fare Estimator</h2>
        <p className="muted">Choose a preset route or enter distance in miles. Add vehicle and extras to get an estimate.</p>

        <form className="fare-form" onSubmit={handleEstimate}>

          <label className="label">Preset Route</label>
          <select value={preset} onChange={(e) => setPreset(e.target.value)} className="input">
            {PRESET_ROUTES.map(r => <option key={r.id} value={r.id}>{r.label}{r.price ? ` — $${r.price}` : ''}</option>)}
          </select>

          <div className="two-col">
            <div>
              <label className="label">Pickup Address</label>
              <input className="input" type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="e.g., 4200 Genesee St, Buffalo, NY" />
              {pickup && (
                <a className="map-link" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pickup)}`}>Open pickup in Google Maps</a>
              )}
            </div>

            <div>
              <label className="label">Drop-off Address</label>
              <input className="input" type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="e.g., Niagara Falls, ON" />
              {dropoff && (
                <a className="map-link" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dropoff)}`}>Open drop-off in Google Maps</a>
              )}
            </div>
          </div>

          <label className="label">Distance (miles)</label>
          <input
            className="input"
            type="number"
            min="0"
            step="0.1"
            placeholder="If no preset selected, enter trip distance (miles)"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <small className="muted">Leave blank if using a preset route.</small>

          <div className="two-col">
            <div>
              <label className="label">Vehicle Type</label>
              <select className="input" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                {Object.entries(VEHICLE_INFO).map(([key, info]) => (
                  <option key={key} value={key}>{info.label}</option>
                ))}
              </select>
              <small className="muted">Capacity: {VEHICLE_INFO[vehicle].cap} passengers</small>
            </div>

            <div>
              <label className="label">Passengers</label>
              <input className="input" type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
            </div>
          </div>

          <div className="two-col">
            <div>
              <label className="label">Luggage (number of bags)</label>
              <input className="input" type="number" min="0" value={luggage} onChange={(e) => setLuggage(e.target.value)} />
              <small className="muted">First 2 bags free, extra $2 each</small>
            </div>
            <div>
              <label className="label">Child Seats</label>
              <input className="input" type="number" min="0" value={childSeats} onChange={(e) => setChildSeats(e.target.value)} />
              <small className="muted">$5 per child seat</small>
            </div>
          </div>

          <div className="two-col">
            <div>
              <label className="label">Pets?</label>
              <select className="input" value={hasPets ? "yes" : "no"} onChange={(e) => setHasPets(e.target.value === "yes")}>
                <option value="no">No</option>
                <option value="yes">Yes (+$10)</option>
              </select>
            </div>
            <div>
              <label className="label">Waiting Time (minutes)</label>
              <input className="input" type="number" min="0" value={waitingMinutes} onChange={(e) => setWaitingMinutes(e.target.value)} />
              <small className="muted">$0.50 per minute</small>
            </div>
          </div>

          <div className="inline-row">
            <label className="inline">
              <input type="checkbox" checked={returnTrip} onChange={(e) => setReturnTrip(e.target.checked)} />
              <span>Add return pickup (double fare)</span>
            </label>
          </div>

          <div style={{ marginTop: 12 }}>
            <button type="submit" className="primary-btn">Estimate Fare</button>
            <button type="button" className="secondary-btn" onClick={() => {
              // Reset
              setPreset("none");
              setPickup("");
              setDropoff("");
              setDistance("");
              setVehicle("sedan");
              setPassengers(1);
              setLuggage(0);
              setChildSeats(0);
              setHasPets(false);
              setWaitingMinutes(0);
              setReturnTrip(false);
              setResult(null);
              setError("");
            }}>Reset</button>
          </div>

        </form>

        {error && <div className="error-box">{error}</div>}

        {result && (
          <div className="result-box">
            <h3>Estimated Fare</h3>
            <ul className="breakdown">
              <li>Base fare: ${result.baseFare.toFixed(2)}</li>
              <li>Vehicle surcharge: ${result.vehicleSurcharge.toFixed(2)}</li>
              <li>Passenger surcharge: ${result.passengerSurcharge.toFixed(2)}</li>
              <li>Luggage surcharge: ${result.luggageSurcharge.toFixed(2)}</li>
              <li>Child seat fee: ${result.childSeatFee.toFixed(2)}</li>
              <li>Pet fee: ${result.petFee.toFixed(2)}</li>
              <li>Waiting fee: ${result.waitingFee.toFixed(2)}</li>
              <li>Subtotal: <strong>${result.subtotal.toFixed(2)}</strong></li>
              {result.returnMultiplier > 1 && <li>Return trip x{result.returnMultiplier}</li>}
              <li className="total">Total estimate: <strong>${result.total.toFixed(2)}</strong></li>
            </ul>
            <div className="actions">
              <button className="primary-btn" onClick={handleBookNow}>Book Now</button>
              <a className="muted-link" href={`mailto:btbuffallotaxi@gmail.com?subject=Booking inquiry&body=I want to book a ride from ${encodeURIComponent(pickup || 'N/A')} to ${encodeURIComponent(dropoff || 'N/A')}. Estimated fare: $${result.total.toFixed(2)}`}>Email booking</a>
            </div>
          </div>
        )}

        <p className="small-muted">Note: This is an estimate. Final fare may vary by traffic, border wait times, and exact pickup/dropoff locations.</p>
      </div>
    </div>
  );
}
