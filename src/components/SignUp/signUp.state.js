import { always } from 'lodash/fp';
import { makeFetchAction } from 'redux-api-call';
import { createSelector } from 'reselect';

import {
  CREATE_USER_ENDPOINT,
  REQUEST_OTP_ENDPOINT,
} from '../../endpoints';

import { currentUserUidSelector } from './currentUser.state';

const {
  actionCreator: signUpNewUser,
  dataSelector: uidUserSelector,
} = makeFetchAction(
  'SIGN_UP',
  ({ phone }) => ({
    endpoint: CREATE_USER_ENDPOINT,
    method: 'POST',
    body: JSON.stringify({ phone }),
  })
);

export {
  signUpNewUser,
  uidUserSelector,
};

const currentUserBodySelector = createSelector(
  currentUserUidSelector,
  uid => JSON.stringify({ phone: uid })
);

const {
  actionCreator: requestOTP,
  dataSelector: OTPStatusResponseSelector,
} = makeFetchAction(
  'REQUEST_OTP',
  always({
    endpoint: REQUEST_OTP_ENDPOINT,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: currentUserBodySelector,
  })
);

export { requestOTP, OTPStatusResponseSelector };
