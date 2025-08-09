import React from 'react';

import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import OurServices from '../components/OurServices';
import Destinations from '../components/Destinations';
import NiagaraSection from '../components/NiagaraSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FleetSection from '../components/FleetSection';
import OurTeam from '../components/OurTeam';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BookingConfidence from '../components/BookingConfidence';
import BlogSection from '../components/BlogSection';
// import ContactLocation from '../components/ContactLocation';
import CallToActionSection from '../components/CallToActionSection';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <OurServices />
            <Destinations />
            <NiagaraSection />
            <WhyChooseUs />
            <FleetSection />
            <OurTeam />
            <Testimonials />
            <FAQ />
            <BookingConfidence />
            <BlogSection />
            {/* <ContactLocation /> */}
            <CallToActionSection />
        </>
    );
};

export default Home; 