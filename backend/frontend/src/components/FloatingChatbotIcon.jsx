import React from 'react';
import { FaRobot } from 'react-icons/fa';
import './FloatingChatbotIcon.css';

const FloatingChatbotIcon = ({ onClick }) => {
  return (
    <div className="floating-chatbot-icon" onClick={onClick}>
      <FaRobot size={30} />
    </div>
  );
};

export default FloatingChatbotIcon; 