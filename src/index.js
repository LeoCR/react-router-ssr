import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('main_content'));