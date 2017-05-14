import { combineEpics } from 'redux-observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/filter';
import { ACTIONS } from 'redux-api-call';
import { path, flow, eq } from 'lodash/fp';
import { navigateTo } from '../../utils/location-middleware';

const isACompleteAction = flow(path('type'), eq(ACTIONS.COMPLETE));

const isSignUpAction = flow(
  path('payload.name'),
  eq('SIGN_UP'),
);

const navigateVerificationPage = navigateTo('/verfication');

const navigateToVerificationPageIfSignUpSuccess = action$ =>
  action$
    .filter(isSignUpAction)
    .filter(isACompleteAction)
    .mapTo(navigateVerificationPage);

export default combineEpics(
  navigateToVerificationPageIfSignUpSuccess,
);
