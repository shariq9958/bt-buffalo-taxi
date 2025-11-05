const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const { handleChat } = require('./chat-controller');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS  // App password from Google
  }
});

/* ===========================
   API ROUTES
   =========================== */

// Booking form submission
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, phone, email, pickup, destination, date, time, message } = req.body;

    if (!name || !phone || !email || !pickup || !destination || !date || !time) {
      return res.status(400).json({ error: 'Please fill out all required fields.' });
    }

    // 1️⃣ Save to Database
    const newBooking = await db.query(
      `INSERT INTO bookings 
        (name, phone, email, pickup_address, destination_address, booking_date, booking_time, message) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [name, phone, email, pickup, destination, date, time, message]
    );

    // 2️⃣ Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: '📅 New Booking Received',
      text: `New booking details:

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Pickup: ${pickup}
        Destination: ${destination}
        Date: ${date}
        Time: ${time}
        Message: ${message || "N/A"}
      `};

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      status: 'success',
      data: { booking: newBooking.rows[0] },
      message: 'Booking saved and email sent successfully!'
    });

  } catch (err) {
    console.error('ERROR:', err.message);
    res.status(500).json({ error: 'An error occurred while processing your booking.' });
  }
});

// Admin authentication middleware
const checkAdminAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'admin123') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized: Access is denied.' });
  }
};

// Admin route to get bookings
app.get('/api/admin/bookings', checkAdminAuth, async (req, res) => {
  try {
    const allBookings = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
    res.status(200).json({
      status: 'success',
      results: allBookings.rows.length,
      data: allBookings.rows,
    });
  } catch (err) {
    console.error('DATABASE ERROR (Admin):', err);
    res.status(500).json({ 
      error: 'An error occurred while fetching bookings.',
      details: err.message
    });
  }
});

// Chatbot endpoint
app.post('/api/chat', handleChat);

// SPA Fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
