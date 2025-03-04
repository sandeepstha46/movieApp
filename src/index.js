import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SidebarComponent from "./components/commonComponents/SidebarComponent";
import {BrowserRouter} from "react-router-dom";
import UpcomingLists from "./components/commonComponents/UpcomingLists";
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <BrowserRouter>
          <div className='main-wrapper-div'>
              <div className="page-wrapper">
                  <SidebarComponent />
                  <section className="wrapper-items">
                      <div className="items">
                          <div className="container-fluid">
                              <div className="row">
                                  <div className="col-lg-8 items__list">
                                    <App />
                                  </div>
                                  <UpcomingLists />
                              </div>
                          </div>
                      </div>
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
