// backend/chat-controller.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini with API key from Render env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- Knowledge Base ---
const knowledgeBase = [
  // Greetings
  { keywords: ['hi', 'hello', 'hey'], reply: 'Hello! 👋 Welcome to BT Buffalo Airport Taxi. How can I help you today?' },
  { keywords: ['good morning', 'good afternoon', 'good evening'], reply: 'Hello! How can I assist you with your taxi needs today?' },
  { keywords: ['thanks', 'thank you'], reply: 'You’re very welcome! 😊' },
  { keywords: ['sorry'], reply: 'No worries at all. How can I assist you now?' },

  // Contact info
  { keywords: ['phone', 'call', 'contact', 'number', 'hotline'], reply: '📞 Hotline: +1 (716) 951-6256\n📧 Email: btbuffallotaxi@gmail.com\n📍 Location: Buffalo Airport\n🕒 Open 24/7' },
  { keywords: ['email'], reply: 'Our email is: btbuffallotaxi@gmail.com' },
  { keywords: ['fax'], reply: '📠 Fax: +1 (716) 951-6256' },

  // Fares
  { keywords: ['buffalo airport niagara falls on'], reply: 'Buffalo Airport → Niagara Falls, ON – $90 flat rate.' },
  { keywords: ['buffalo airport niagara falls ny'], reply: 'Buffalo Airport → Niagara Falls, NY – $75 flat rate.' },
  { keywords: ['downtown buffalo niagara falls ny'], reply: 'Downtown Buffalo → Niagara Falls, NY – $60 flat rate.' },
  { keywords: ['buffalo downtown niagara falls on'], reply: 'Buffalo Downtown → Niagara Falls, ON – $75 flat rate.' },
  { keywords: ['buffalo airport toronto pearson'], reply: 'Buffalo Airport → Toronto Pearson – $280 flat rate.' },

  // Services
  { keywords: ['airport transfer'], reply: '✈️ We provide reliable airport transfers to and from Buffalo Niagara International Airport (BUF).' },
  { keywords: ['niagara falls tour'], reply: '🌊 Experience the wonder of Niagara Falls with our convenient taxi service.' },
  { keywords: ['canada', 'cross border', 'toronto', 'mississauga'], reply: '🇨🇦 We provide cross-border taxi service to Toronto, Mississauga, and other Canadian destinations. Passport required.' },
  { keywords: ['corporate', 'business'], reply: '👔 Professional and discreet service for business travelers.' },

  // Fleet
  { keywords: ['sedan'], reply: '🚗 Sedan – Comfortable for up to 3 passengers and luggage.' },
  { keywords: ['suv'], reply: '🚙 SUV – Spacious, ideal for families or groups (up to 5 passengers).' },
  { keywords: ['van'], reply: '🚐 Van – Best for large groups (up to 7 passengers).' },

  // Pricing rules
  { keywords: ['fare', 'price', 'per mile'], reply: '💲 Pricing: $4 per mile | Under 5 miles: $20 | Starting: $12 + $3 per mile.' },

  // Availability
  { keywords: ['open', 'hours', '24/7', 'working time'], reply: '🕒 We operate 24 hours a day, 7 days a week!' },

  // FAQs
  { keywords: ['flat rate', 'airport transfer fare'], reply: '✅ Yes, we offer flat-rate fares for airport transfers.' },
  { keywords: ['book', 'booking', 'reserve'], reply: '🚕 You can book online or call our hotline: +1 (716) 951-6256.' },
  { keywords: ['payment'], reply: '💳 No upfront payment required. Pay at the end of your ride.' },
  { keywords: ['safety'], reply: '🛡️ Our professional drivers are fully licensed, insured, and dedicated to your safety.' },
  { keywords: ['reviews', 'feedback'], reply: '🌟 Customers love us: “Reliable, affordable, and professional service!”' },

  // About
  { keywords: ['about', 'who are you'], reply: 'ℹ️ BT Buffalo Airport Taxi is your premier transportation service in Buffalo. We specialize in airport transfers, Niagara Falls tours, and cross-border trips. Safe, affordable, and always on time.' },
  { keywords: ['team'], reply: '👨‍👩‍👧‍👦 Our team of licensed drivers ensures you have a seamless and stress-free journey.' }
];

// --- Main handler ---
async function handleChat(req, res) {
  const userMessage = (req.body.message || '').toLowerCase();

  // Try keyword-based response first
  for (let entry of knowledgeBase) {
    if (entry.keywords.some(keyword => userMessage.includes(keyword))) {
      return res.json({ reply: entry.reply });
    }
  }

  // Fallback: use AI to interpret query
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `
    You are a helpful assistant for BT Buffalo Airport Taxi.
    The user asked: "${userMessage}".
    Match their query to the closest knowledge base entry.
    Knowledge base:
    ${JSON.stringify(knowledgeBase, null, 2)}

    If no match, reply: "I’m here to help! You can ask about fares, booking, contact info, or destinations."
    `;

    const result = await model.generateContent(prompt);
    const aiReply = result.response.text();

    return res.json({ reply: aiReply });
  } catch (err) {
    console.error("AI error:", err);
    res.json({ reply: 'I’m here to help! You can ask about fares, booking, contact info, or destinations.' });
  }
}

module.exports = { handleChat };
