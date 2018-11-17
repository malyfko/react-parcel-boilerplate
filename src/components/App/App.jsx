import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const NoMatch = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route component={NoMatch} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export { App };
