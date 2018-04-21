import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomePage from './components/homepage';
import store from './store';
import './index.css';



ReactDOM.render(
  <Provider store={store}>
      <HomePage />
  </Provider>, 
  document.getElementById('root')
);
