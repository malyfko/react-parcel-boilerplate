import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import ajax from 'utils/ajax';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ajax,
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ),
);

epicMiddleware.run(rootEpic);

export default store;
