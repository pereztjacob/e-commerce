import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/components/app/App';
import { Provider } from 'react-redux';
import store from './frontend/store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);