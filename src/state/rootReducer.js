import { always } from 'lodash/fp';
import { reducers as apiCalls } from 'redux-api-call';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import version from '../../GIT_COMMIT.json';
import introduction from '../components/Introduction/introduction.state';
import currentUser from '../components/SignUp/currentUser.state';
import currentSelection from '../components/Selection/currentSelection.state';
import selectStatus from '../components/Selection/selectStatus.state';
import cart from '../components/Cart/cart.state';
import firebase from '../firebase/state';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  version: always(version),
  session: (x = {}) => x,
  ...apiCalls,
  ...introduction,
  ...currentUser,
  ...currentSelection,
  ...selectStatus,
  ...cart,
  ...firebase,
});
