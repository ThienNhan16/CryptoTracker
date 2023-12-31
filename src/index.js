import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoContext from './CryptoContext';
import "react-alice-carousel/lib/react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import 'firebase/app';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
        <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);

