import { combineEpics } from 'redux-observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/filter';
import { ACTIONS } from 'redux-api-call';
import { path, flow, eq } from 'lodash/fp';

import { loginWithToken } from '../../state/firebase-auth';
import { navigateTo } from '../../utils/location-middleware';
import { saveCurrentUserWith } from '../SignUp/currentUser.state';

const saveToken = (action) => {
  const token = path('payload.json.token', action);
  return saveCurrentUserWith({ token });
};

const loginAfterVerifyWithToken = (action) => {
  const token = path('payload.json.token', action);
  return loginWithToken(token);
};

const isACompleteAction = flow(path('type'), eq(ACTIONS.COMPLETE));

const isVerificationAction = flow(
  path('payload.name'),
  eq('VERIFY_OTP'),
);

const navigateProfilePage = navigateTo('/profile/edit');

const saveTokenIfVerificationSuccess = action$ =>
  action$
    .filter(isVerificationAction)
    .filter(isACompleteAction)
    .map(saveToken);

const loginWithTokenIfVerificationSucces = action$ =>
  action$
    .filter(isVerificationAction)
    .filter(isACompleteAction)
    .map(loginAfterVerifyWithToken);

export default combineEpics(
  loginWithTokenIfVerificationSucces,
  saveTokenIfVerificationSuccess,
);
