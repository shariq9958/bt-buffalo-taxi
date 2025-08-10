const { GoogleGenerativeAI } = require('@google/generative-ai');

// backend/controllers/chatController.js

// =======================
// Knowledge Base
// =======================
const knowledgeBase = [
  // 👋 Greetings & Casual
  { keywords: ["hi", "hello", "hey", "good morning", "good evening"], answer: "Hello! 👋 How can I assist you today?" },
  { keywords: ["how are you"], answer: "I’m great, thanks for asking! How can I help with your travel today?" },
  { keywords: ["sorry"], answer: "No worries at all! 😊 How can I help you now?" },
  { keywords: ["thank you", "thanks", "thx"], answer: "You’re welcome! 🚖" },

  // 📞 Contact Info
  { keywords: ["phone", "hotline", "call"], answer: "Hotline Phone: +1 (716) 951-6256" },
  { keywords: ["email", "mail"], answer: "Email us at btbuffallotaxi@gmail.com" },
  { keywords: ["fax"], answer: "Fax: +1 (716) 951-6256" },
  { keywords: ["location", "where are you", "address"], answer: "We are based at Buffalo Airport, NY." },

  // 🕒 Hours & Service Availability
  { keywords: ["hours", "working time", "open", "availability"], answer: "We operate 24/7 — day or night, we’ve got you covered." },

  // ✈️ Core Services
  { keywords: ["airport transfer", "airport pickup", "airport drop"], answer: "We offer reliable Buffalo Niagara International Airport (BUF) pickups and drop-offs." },
  { keywords: ["niagara falls tour", "tour"], answer: "We provide comfortable taxi tours to Niagara Falls — American and Canadian sides." },
  { keywords: ["canada", "cross border", "toronto", "mississauga"], answer: "We specialize in smooth cross-border transportation to Toronto, Mississauga, and more." },
  { keywords: ["corporate travel", "business"], answer: "We offer professional and discreet service for corporate and business travel." },

  // 💲 Flat-Rate Destinations
  { keywords: ["niagara falls on"], answer: "Niagara Falls, ON – $90" },
  { keywords: ["toronto pearson", "niagara new york"], answer: "Toronto Pearson (via Niagara, New York) – $75" },
  { keywords: ["downtown buffalo", "niagara falls ny"], answer: "Downtown Buffalo to Niagara Falls, NY – $55" },
  { keywords: ["downtown buffalo", "niagara falls on"], answer: "Downtown Buffalo to Niagara Falls, ON – $75" },
  { keywords: ["buffalo airport", "toronto pearson"], answer: "Buffalo Airport to Toronto Pearson – $280" },

  // 🚗 Vehicles
  { keywords: ["sedan"], answer: "Standard Sedan — up to 3 passengers and luggage." },
  { keywords: ["suv"], answer: "Spacious SUV — seats up to 6 passengers with extra luggage space." },
  { keywords: ["van"], answer: "Large Van — up to 7 passengers, perfect for groups." },

  // 📍 Booking & Pickup
  { keywords: ["pickup address"], answer: "You can share your pickup location here: https://maps.google.com/" },
  { keywords: ["return pickup"], answer: "We also offer a return pickup option — just provide date & time." },

  // 🧮 Fare Estimation
  { keywords: ["fare estimate", "estimate", "miles"], answer: "Provide your trip distance in miles, e.g., 'Estimate 10 miles'." },

  // 🏆 Company Intro
  { keywords: ["about", "who are you", "company"], answer: "BT Buffalo Airport Taxi — your trusted partner for airport transfers, Niagara Falls tours, and cross-border travel." }
];

// =======================
// Fare Calculation Logic
// =======================
const fareEstimator = (miles) => {
  if (miles < 5) return "$20 (under 5 miles)";
  return `$${12 + (miles * 3)} (starting $12 + $3 per mile)`;
};

// =======================
// Knowledge Base Search
// =======================
function searchKnowledgeBase(message) {
  const lowerMsg = message.toLowerCase();

  // Check for mileage estimates
  const milesMatch = lowerMsg.match(/(\d+)\s*miles?/);
  if (milesMatch) {
    const miles = parseInt(milesMatch[1]);
    return `Estimated fare for ${miles} miles: ${fareEstimator(miles)}`;
  }

  // Search KB
  for (const entry of knowledgeBase) {
    if (entry.keywords.some(keyword => lowerMsg.includes(keyword))) {
      return entry.answer;
    }
  }

  return "Hi! I’m your BT Buffalo Airport assistant. I can help with fares, bookings, pickup info, cross-border trips, and more.";
}

// =======================
// Controller Function
// =======================
exports.chatBotReply = (req, res) => {
  const userMessage = req.body.message || "";
  const reply = searchKnowledgeBase(userMessage);
  res.json({ reply });
};
