import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("Root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>

);
