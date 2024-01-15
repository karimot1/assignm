import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Study from './Study'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import Scict from './Scict';
import Third from './Third';
import Depart from './Depart';
import Course from './Course';
import Alumni from './Alumni';
import Tour from './Tour';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Study />
    <Scict />
    <Third />
    <Depart />
    <Course />
    <Alumni />
    <Tour />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
