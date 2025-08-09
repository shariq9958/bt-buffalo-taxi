import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // To display success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const result = await response.json();
      console.log('Booking successful:', result);
      setStatus('Booking submitted successfully! We will contact you shortly.');
      // Reset form
      setFormData({
        name: '', phone: '', email: '', pickup: '', destination: '', date: '', time: '', message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="booking-page-container">
      <div className="booking-form-content">
        <h2>Book your cab now!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="pickup">Pickup Address</label>
            <input type="text" id="pickup" name="pickup" value={formData.pickup} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination Address</label>
            <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Optional: flight number, number of passengers, etc."></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit Booking</button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
    </div>
  );
};

export default BookingPage; 