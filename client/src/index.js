import React from 'react';
import ReactDOM from 'react-dom';
//import Bacground from './Bacground.png'
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';

//function window() {
//   console.log(screen.height)
//}
//window()

ReactDOM.render(
   <BrowserRouter>
      <React.StrictMode>
         <div className="Index">
            <App />
         </div>
      </React.StrictMode>
   </BrowserRouter>
   ,
  document.getElementById('root')
);
