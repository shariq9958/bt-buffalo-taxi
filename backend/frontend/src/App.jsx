import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import OurTeamPage from './pages/OurTeamPage';
import BorderNews from './pages/BorderNews';
import BookingPorts from './pages/BookingPorts';
import FaqPage from './pages/FaqPage';
import BookingPage from './pages/BookingPage';
import FareEstimatorPage from './pages/FareEstimatorPage';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="our-team" element={<OurTeamPage />} />
        <Route path="border-news" element={<BorderNews />} />
        <Route path="booking-ports" element={<BookingPorts />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="fare-estimator" element={<FareEstimatorPage />} />
        <Route path="admin" element={<AdminPage />} />
        {/* Redirect for the Vite dev server issue */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
