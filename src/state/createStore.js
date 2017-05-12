import { applyMiddleware, createStore, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import compact from 'lodash/fp/compact';

import rootEpic from './rootEpic';
import history from './history';
import rootReducer from './rootReducer';
import getInitialState from './getInitialState';
import { middleware as locationNavigationMiddleware } from '../utils/location-middleware';
import arrayMiddleware from '../utils/array-middleware';
import apiMiddleware from './api';

const epicMiddleware = createEpicMiddleware(rootEpic);

if (module.hot) {
  module.hot.accept('./rootEpic', () => {
    // eslint-disable-next-line global-require
    const nextRootEpic = require('./rootEpic').default;

    epicMiddleware.replaceEpic(nextRootEpic);
  });
}

const enhancers = compact([
  applyMiddleware(
    arrayMiddleware,
    locationNavigationMiddleware,
    thunk,
    apiMiddleware,
    epicMiddleware,
    routerMiddleware(history),
  ),
  autoRehydrate(),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
]);

export default () => {
  const initialState = getInitialState();
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
