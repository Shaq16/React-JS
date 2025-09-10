import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Add the opening tag here */}
      <App />
    </BrowserRouter> {/* <-- The closing tag is now correct */}
  </React.StrictMode>
);