import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SidebarComponent from "./components/commonComponents/sidebarComponent";
import {BrowserRouter} from "react-router-dom";
import AuthComponent from "./components/authComponent";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <div className='main-wrapper-div'>
              <AuthComponent />
              <div className="page-wrapper">
                  <SidebarComponent />
                  <section className="wrapper-items">
                      <App />
                  </section>
              </div>
          </div>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
