import React, { useState, useEffect } from 'react';
import './AdminPage.css';

const AdminPage = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkPassword = (e) => {
        e.preventDefault();
        // In a real application, this should be a secure backend check.
        // For this example, we'll use a simple hardcoded password.
        if (password === 'admin123') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchBookings = async () => {
            try {
                const response = await fetch('https://btbuffalotaxi.com/api/admin/bookings', {
                    headers: {
                        // In a real app, you'd send a token (e.g., JWT)
                        'Authorization': 'admin123' 
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchBookings();
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="admin-login-box">
                    <h2>Admin Login</h2>
                    <form onSubmit={checkPassword}>
                        <div className="admin-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                        {error && <p className="login-error">{error}</p>}
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-page-container">
            <h2>Admin Dashboard: All Bookings</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="bookings-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Pickup</th>
                            <th>Destination</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Message</th>
                            <th>Submitted At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 0 ? (
                            bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.pickup_address}</td>
                                    <td>{booking.destination_address}</td>
                                    <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
                                    <td>{booking.booking_time}</td>
                                    <td>{booking.message}</td>
                                    <td>{new Date(booking.created_at).toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10">No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage; 
