import React, { useState, useEffect, useRef } from 'react';
import userImage from '../assets/react.svg'; // Import user image
import modelImage from '../assets/react.svg'; // Import model image
import "./ChatApp.css"
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatAreaRef = useRef(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
    // Scroll to the bottom of the chat area when messages change
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
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-area" ref={chatAreaRef}>
        {messages.map((message, index) => (
          <div key={index} className="message-container">
            {message.fromUser ? (
              <>
                <img src={userImage} alt="User" className="user-image" />
                <p>user</p>
                <div className="user-message">{message.text}</div>
              </>
            ) : (
              <>
                <img src={modelImage} alt="Model" className="model-image" />
                <p>chatGPT</p>
                <div className="model-message">{message.text}</div>
              </>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;
