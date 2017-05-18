import firebaseAuth, { loginWithToken } from '../../state/firebase-auth';

import {
  currentUserTokenSelector,
} from '../SignUp/currentUser.state';

import history from '../../state/history';

export const enterHomePage = () => (dispatch, getState) => {
  const state = getState();
  const token = currentUserTokenSelector(state);
  if (token) {
    console.log('tokenInHomePage', token);
    console.log('firebaseAuth.currentUser.uid', firebaseAuth.currentUser.uid);
    if (!firebaseAuth.currentUser) {
      loginWithToken(token);
    }
  }
};

export default { layout: {} };
