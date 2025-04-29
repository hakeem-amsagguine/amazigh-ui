import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root element if it doesn't exist
document.body.innerHTML = document.body.innerHTML || '<div id="app"></div>';

// Create a title for the page
const title = document.createElement('title');
title.textContent = 'Nexa UI Playground';
document.head.appendChild(title);

// Apply minimal styling
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
document.head.appendChild(style);

// Mount React app
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);