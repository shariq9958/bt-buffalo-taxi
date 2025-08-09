const { GoogleGenerativeAI } = require('@google/generative-ai');

// --- Create a Knowledge Base ---
// I will populate this with information from your website.
// This context helps the AI answer questions based ONLY on your site's data.
const knowledgeBase = `
Buffalo Airport Taxi Service Information:

- **Services**: We provide taxi and transportation services to and from Buffalo Niagara International Airport (BUF). We specialize in cross-border trips to Niagara Falls, Canada, and Toronto. We offer flat-rate services. We also offer services for business travel, wine tours, and long-distance travel.
- **Booking**: Customers can book online through the website on the /booking page. They can also call the hot line at +1 (716) 951-6256.
- **Operating Hours**: We are open 24 hours a day, 7 days a week.
- **Contact**: The email is btbuffallotaxi@gmail.com. The fax number is +1 (716) 951-6256. The location is the Buffalo Airport.
- **Vehicles**: We offer 'Standard' and 'Luxury' vehicle types. Luxury vehicles cost an additional $20.
- **Special Needs**: We can accommodate child seats and pets for an additional fee.
- **FAQs**: 
  - Do you accept credit cards? Yes.
  - Can I get a flat rate? Yes, we offer flat rates. Use the Fare Estimator tool on our website.
  - Are your drivers licensed? Yes, all drivers are licensed and insured.
`;

// --- TEMPORARY API KEY CONFIGURATION ---
// IMPORTANT: Paste your actual Gemini API Key here.
const GEMINI_API_KEY = "AIzaSyCHOGu3KWF1VXaHXl7Cw6tFIAqAb-nS908";

// Initialize the Generative AI model
if (!GEMINI_API_KEY || GEMINI_API_KEY === "your_actual_api_key_goes_here") {
    throw new Error('FATAL ERROR: GEMINI_API_KEY is not set directly in backend/chat-controller.js. Please paste your key on line 25.');
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const handleChat = async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required.' });
        }

        const prompt = `
            You are an expert customer service agent for Buffalo Airport Taxi. 
            Your instructions are to ONLY use the information provided below in the "Knowledge Base" to answer the user's question. 
            Do not use any of your own general knowledge. 
            If the user's question cannot be answered using the Knowledge Base, you must politely respond with: "I'm sorry, I can only answer questions related to Buffalo Airport Taxi services. Please ask me about booking, fares, or our service areas."
            
            --- Knowledge Base ---
            ${knowledgeBase}
            --------------------

            User's Question: "${message}"
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ reply: text });

    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to get a response from the AI.' });
    }
};

module.exports = { handleChat }; 