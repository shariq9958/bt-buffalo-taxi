import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';
import FloatingChatbotIcon from './FloatingChatbotIcon';
import ChatbotWindow from './ChatbotWindow';

const Layout = () => {
    const [isChatbotOpen, setChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setChatbotOpen(!isChatbotOpen);
    };

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <FloatingActionButton />
            <FloatingChatbotIcon onClick={toggleChatbot} />
            <ChatbotWindow isOpen={isChatbotOpen} onClose={toggleChatbot} />
        </>
    );
};

export default Layout; 