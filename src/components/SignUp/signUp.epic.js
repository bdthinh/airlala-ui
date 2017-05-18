import { combineEpics } from 'redux-observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/filter';
import { ACTIONS } from 'redux-api-call';
import { path, flow, eq } from 'lodash/fp';

import { navigateTo } from '../../utils/location-middleware';
import { requestOTP } from './signUp.state';
import { saveCurrentUserWith } from './currentUser.state';

const saveCurrentPhoneFromUid = (action) => {
  const uid = path('payload.json.uid', action);
  return saveCurrentUserWith({ uid, phone: uid });
};

const isACompleteAction = flow(path('type'), eq(ACTIONS.COMPLETE));

const isSignUpAction = flow(
  path('payload.name'),
  eq('SIGN_UP'),
);

const navigateVerificationPage = navigateTo('/verification');

const navigateToVerificationPageIfSignUpSuccess = action$ =>
  action$
    .filter(isSignUpAction)
    .filter(isACompleteAction)
    .mapTo(navigateVerificationPage);

const saveCurrentPhoneFromUidIfSignUpSuccess = action$ =>
  action$
    .filter(isSignUpAction)
    .filter(isACompleteAction)
    .map(saveCurrentPhoneFromUid);

const requestOTPIfSignUpSuccess = action$ =>
  action$
    .filter(isSignUpAction)
    .filter(isACompleteAction)
    .map(requestOTP);

export default combineEpics(
  navigateToVerificationPageIfSignUpSuccess,
  saveCurrentPhoneFromUidIfSignUpSuccess,
  requestOTPIfSignUpSuccess,
);
