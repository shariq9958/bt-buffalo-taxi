import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you offer flat rates for airport transfers?',
      answer: 'Yes! We offer competitive flat-rate pricing for all airport transfers to and from Buffalo Niagara International Airport (BUF). The price you are quoted is the price you pay, with no hidden fees.'
    },
    {
      question: 'Is your service available 24/7?',
      answer: 'Absolutely. Our services are available 24 hours a day, 7 days a week. We recommend booking in advance for late-night or early-morning pickups to ensure availability.'
    },
    {
      question: 'Can I book a taxi to Canada?',
      answer: 'Yes, we are cross-border specialists. We provide seamless transportation to Niagara Falls (Canada), Toronto, Mississauga, and many other destinations across the border.'
    },
    {
      question: 'What types of vehicles do you have?',
      answer: 'Our fleet includes comfortable sedans, spacious SUVs for families and groups, and large vans for those with extensive luggage. We have the right vehicle for your needs.'
    }
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${activeIndex === index ? 'open' : ''}`} key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 