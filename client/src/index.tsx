import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
