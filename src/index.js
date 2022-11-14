import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import Routers from './routers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div className="container">
        <Routers />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
