import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
<<<<<<< HEAD
import http from './utils/http';

http.get('/posts')
http.get('/posts/1')
http.get('https://viacep.com.br/ws/29140160/json/')
=======
import { Provider } from 'react-redux'
import store from './redux'
>>>>>>> 5eeade030132a658920a6f512a144e5739685089

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
