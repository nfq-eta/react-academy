// @flow

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import App from '../App';
import AllPages from '../AllPages';

interface IRootProps {
  history: History;
  store: any;
}
const Root = ({store, history}: IRootProps) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" component={AllPages} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;
