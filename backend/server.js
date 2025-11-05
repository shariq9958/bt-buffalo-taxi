const express = require('express');
const cors = require('cors');
const path = require('path');
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

// Booking form submission - EMAIL ONLY (NO DATABASE)
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, phone, email, pickup, destination, date, time, message } = req.body;

    if (!name || !phone || !email || !pickup || !destination || !date || !time) {
      return res.status(400).json({ 
        error: 'Please fill out all required fields.' 
      });
    }

    // Send Email Notification
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
Message: ${message || "N/A"}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      status: 'success',
      message: 'Booking submitted successfully! We will contact you soon.' 
    });

  } catch (err) {
    console.error('EMAIL ERROR:', err.message);
    res.status(500).json({ 
      error: 'An error occurred while processing your booking.' 
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
