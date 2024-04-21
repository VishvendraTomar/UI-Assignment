import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from './reportWebVitals'; // Import the reportWebVitals function
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals(); // Call the reportWebVitals function
