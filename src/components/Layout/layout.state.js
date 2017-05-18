import { loginWithToken } from '../../state/firebase-auth';

import {
  currentUserTokenSelector,
} from '../SignUp/currentUser.state';

import history from '../../state/history';

export const enterHomePage = () => (dispatch, getState) => {
  const state = getState();
  const token = currentUserTokenSelector(state);
  if (token) {
    loginWithToken(token);
    if (history.location.pathname === '/') {
      history.push('/orders');
    }
  }
};

export default { layout: {} };
