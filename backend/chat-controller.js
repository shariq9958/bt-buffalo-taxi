const { GoogleGenerativeAI } = require('@google/generative-ai');

// backend/controllers/chatController.js

// Simple keyword-based chatbot for BT Buffalo Airport Taxi

const knowledgeBase = [
  // Greetings & polite responses
  { keywords: ['hi', 'hello', 'hey'], reply: 'Hello! 👋 Welcome to BT Buffalo Airport Taxi. How can I help you today?' },
  { keywords: ['good morning', 'good afternoon', 'good evening'], reply: 'Hello! How can I assist you with your taxi needs today?' },
  { keywords: ['thanks', 'thank you'], reply: 'You’re very welcome! 😊' },
  { keywords: ['sorry'], reply: 'No problem at all. How can I assist you now?' },

  // Contact details
  { keywords: ['phone', 'call', 'contact', 'number'], reply: '📞 Hotline: +1 (716) 951-6256\n📧 Email: btbuffallotaxi@gmail.com\n📍 Location: Buffalo Airport\nOpen 24/7' },
  { keywords: ['email'], reply: 'Our email is btbuffallotaxi@gmail.com' },

  // Services & fares
  { keywords: ['niagara falls on'], reply: 'Niagara Falls, ON – $90 flat rate.' },
  { keywords: ['toronto pearson niagara new york'], reply: 'Toronto Pearson (Niagara, New York) – $75 flat rate.' },
  { keywords: ['downtown buffalo niagara falls ny'], reply: 'Downtown Buffalo → Niagara Falls NY – $55 flat rate.' },
  { keywords: ['downtown on'], reply: 'Downtown → Niagara Falls, ON – $75 flat rate.' },
  { keywords: ['buffalo airport toronto pearson'], reply: 'Buffalo Airport → Toronto Pearson – $280 flat rate.' },

  // Vehicles
  { keywords: ['sedan'], reply: '🚗 Sedan – up to 4 passengers.' },
  { keywords: ['suv'], reply: '🚙 Spacious SUV – up to 5 passengers.' },
  { keywords: ['van'], reply: '🚐 Van – up to 7 passengers.' },

  // Pricing rules
  { keywords: ['fare', 'price', 'per mile'], reply: 'Per mile: $4\nUnder 5 miles: $20\nStarting: $12 + $3 per mile' },

  // Availability
  { keywords: ['open', 'hours', '24/7', 'working time'], reply: 'We operate 24 hours a day, 7 days a week! 🚖' },

  // Cross-border
  { keywords: ['canada', 'border', 'toronto', 'mississauga'], reply: 'We provide cross-border taxi service to Toronto, Mississauga, and other Canadian destinations. Passport required.' },

  // Booking
  { keywords: ['book', 'booking', 'reserve'], reply: 'You can book online or call our hotline at +1 (716) 951-6256. 🚕' }
];

// Main chatbot function
function chatBotReply(req, res) {
  const userMessage = (req.body.message || '').toLowerCase();

  // Try to find a matching reply
  for (let entry of knowledgeBase) {
    if (entry.keywords.some(keyword => userMessage.includes(keyword))) {
      return res.json({ reply: entry.reply });
    }
  }

  // Default reply if no match
  return res.json({ reply: 'I’m here to help! You can ask about fares, booking, contact info, or destinations.' });
}

module.exports = { chatBotReply };
