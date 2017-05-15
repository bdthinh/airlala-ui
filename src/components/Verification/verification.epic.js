import { combineEpics } from 'redux-observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/filter';
import { ACTIONS } from 'redux-api-call';
import { path, flow, eq } from 'lodash/fp';

import { navigateTo } from '../../utils/location-middleware';
import { saveCurrentUserWith } from '../SignUp/currentUser.state';

const saveToken = (action) => {
  const token = path(action, 'payload.json.token');
  return saveCurrentUserWith({ token });
};


const isACompleteAction = flow(path('type'), eq(ACTIONS.COMPLETE));

const isVerificationAction = flow(
  path('payload.name'),
  eq('VERIFY_OTP'),
);

const navigateProfilePage = navigateTo('/profile/edit');

const navigateToHomePageIfVerificationSuccess = action$ =>
  action$
    .filter(isVerificationAction)
    .filter(isACompleteAction)
    .mapTo(navigateProfilePage);

const saveTokenIfVerificationSuccess = action$ =>
  action$
    .filter(isVerificationAction)
    .filter(isACompleteAction)
    .map(saveToken);

export default combineEpics(
  navigateToHomePageIfVerificationSuccess,
  saveTokenIfVerificationSuccess
);
