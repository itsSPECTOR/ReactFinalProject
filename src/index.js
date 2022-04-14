import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// import components and styles
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// render app redux + router
ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);


reportWebVitals();
