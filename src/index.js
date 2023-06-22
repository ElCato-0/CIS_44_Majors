import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home';
import BaseInfo from './BaseInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='CIS_44_Majors'>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cs" element={
            <BaseInfo
              image1='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%20%D8%A7%D9%84%D8%A2%D9%84%D9%8A.jpg'
              image2='https://drive.uqu.edu.sa/_/cis/images/New%20programs/%D8%AE%D8%B7%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%20%D8%A7%D9%84%D8%A2%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D8%AF%D8%AB.jpg'
              data={[
                ['name', 'des'],
              ]}
            />}
          />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
