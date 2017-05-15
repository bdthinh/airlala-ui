// @flow
import { combineReducers } from 'redux';
import { createAction, handleAction } from 'redux-actions';
import { path } from 'lodash/fp';

export const UPDATE_USER = 'FIREBASE/actions/UPDATE_USER';

export const updateUser = createAction(UPDATE_USER);

const anonymousUser = {
  displayName: 'Traveller',
};

const firebaseUser = handleAction(
  UPDATE_USER,
  (state, { payload }) => path('user', payload),
  anonymousUser,
);

const reducer = combineReducers({
  firebaseUser,
});

export default { firebase: reducer };
