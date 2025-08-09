import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Fleet from '../components/Fleet';
import Testimonials from '../components/Testimonials';
import NiagaraFalls from '../components/NiagaraFalls';
import Confidence from '../components/Confidence';
import ContactMapSection from '../components/ContactMapSection';

const HomePage = () => {
    return (
        <div className="homepage">
            <Hero />
            <AboutSection />
            <OurServices />
            <WhyChooseUs />
            <Fleet />
            <ContactMapSection />
            <Testimonials />
            <NiagaraFalls />
            <Confidence />
        </div>
    );
};

export default HomePage; 