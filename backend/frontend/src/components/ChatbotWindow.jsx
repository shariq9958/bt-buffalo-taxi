import React, { useState } from 'react';
import './ChatbotWindow.css';

const ChatbotWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Welcome to Buffalo Airport Taxi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to get a response from the server.');
      }

      const data = await response.json();
      const aiMessage = { from: 'ai', text: data.reply };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = { from: 'ai', text: 'Sorry, I seem to be having trouble connecting. Please try again later.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <h4>AI Customer Assistant</h4>
        <button onClick={onClose} className="chatbot-close-btn">&times;</button>
      </div>
      <div className="chatbot-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="chat-bubble ai">
            <span className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        )}
      </div>
      <div className="chatbot-footer">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={isLoading}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotWindow; 