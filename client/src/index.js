import React from 'react';
import ReactDOM from 'react-dom';
//import Bacground from './Bacground.png'
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';


ReactDOM.render(
   <div className="Index">
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </div>,
  document.getElementById('root')
);
