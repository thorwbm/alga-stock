import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import http from './Utils/http'

http.get('/posts')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
