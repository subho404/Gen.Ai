import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx'; 
import './index.css'; 
import ContextProvider from './context/Context.jsx';

const rootElement = document.getElementById('root'); 

if (rootElement) { 
  ReactDOM.createRoot(rootElement).render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
} else {
  
  console.error('Element with ID "root" not found in the DOM');
}
