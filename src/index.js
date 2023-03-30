import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AllGamesContextProvider} from './Components/AllGameContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 <AllGamesContextProvider>

     <App />
  
 </AllGamesContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
