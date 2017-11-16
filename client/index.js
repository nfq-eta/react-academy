import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './core/store/configureStore';
import '../resources/assets/scss/main.scss';

const store = configureStore();

render(
  <App store={store}/>,
  document.getElementById('app')
);
