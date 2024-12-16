import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root element using createRoot and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root using createRoot
root.render(
  <Router>
    <App />
  </Router>
);
