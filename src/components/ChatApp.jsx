import React, { useState, useEffect, useRef } from 'react';
import userImage from '../assets/user.png';
import modelImage from '../assets/gpt.png';
import {  useToast} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 
import "./ChatApp.css"

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatAreaRef = useRef(null);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = { text: inputText, fromUser: true };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputText('');

      setTimeout(() => {
        const replyMessage = { text: "Hello! How can I help you today?", fromUser: false };
        setMessages([...updatedMessages, replyMessage]);
      }, 1000 );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    toast({
      title: 'Logout successful!',
      position: 'top-right',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    navigate('/login');
  };

  return (
    <div className="chat-container">
      <div className='topnav'>
        <p>ChatGPT 3.5</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button> 
      </div>
      <div className="chat-outer">
        <div className="chat-area" ref={chatAreaRef}>
          {messages.map((message, index) => (
            <div key={index} className="message-container">
              {message.fromUser ? (
                <>
                  <div className='user-info'>
                    <div className='user-text'>
                      <div className='img'>
                        <img src={userImage} alt="User" className="user-image" />
                      </div>
                      <p>user</p>
                    </div>
                    <div className="user-message">{message.text}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className='model-info'>
                    <div className='model-text'>
                      <div className='img'>
                        <img src={modelImage} alt="Model" className="model-image" />
                      </div>
                      <p>ChatGPT</p>
                    </div>
                    <div className="model-message">{message.text}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='inputarea'>
        <input
          type="text"
          value={inputText}
          placeholder='Message ChatGPT...'
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
