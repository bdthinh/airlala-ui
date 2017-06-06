import { always } from 'lodash/fp';
import { reducers as apiCalls } from 'redux-api-call';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import version from '../../GIT_COMMIT.json';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  version: always(version),
  session: (x = {}) => x,
  ...apiCalls,
});
