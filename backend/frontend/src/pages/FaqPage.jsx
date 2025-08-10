import React, { useState } from 'react';
import './FaqPage.css';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer:
        'We provide taxi and transportation services throughout the Buffalo-Niagara region, including Buffalo Niagara International Airport (BUF), Niagara Falls (USA & Canada), and cross-border trips to Toronto and the Greater Toronto Area.'
    },
    {
      question: 'Are your prices fixed?',
      answer:
        'Yes, we offer flat-rate pricing for most major destinations, including airport transfers and trips to Canada. This means the price we quote you is the price you pay, with no hidden fees or surge pricing.'
    },
    {
      question: 'How can I book a ride?',
      answer:
        'You can book a ride easily through the booking form on our website. Simply enter your pickup location, destination, date, and time, and we will confirm your booking.'
    },
    {
      question: 'Do you offer 24/7 service?',
      answer:
        'Yes, our services are available 24 hours a day, 7 days a week. We are always ready to serve you, no matter how early your flight or how late your arrival.'
    },
    {
      question: 'Are your vehicles equipped for cross-border travel?',
      answer:
        'Absolutely. Our drivers and vehicles are fully licensed and certified for commercial cross-border transportation between the USA and Canada. We ensure a smooth and hassle-free border crossing.'
    },
    {
      question: 'What types of vehicles do you have?',
      answer:
        'We have a diverse fleet of clean, modern, and comfortable vehicles, including sedans and minivans, to accommodate individuals, families, and small groups.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services.</p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={index}
          >
            <h3
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: 'pointer' }}
            >
              {faq.question}
            </h3>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
