import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './core/store/configureStore';

const store = configureStore();

render(
  <App store={store}/>,
  document.getElementById('app')
);
