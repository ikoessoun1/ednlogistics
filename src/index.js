import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the entire application with createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
