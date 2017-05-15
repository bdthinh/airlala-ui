import { makeFetchAction } from 'redux-api-call';
import { createSelector } from 'reselect';

import { VERIFY_OTP_ENDPOINT } from '../../endpoints';
import { currentUserPhoneSelector } from '../SignUp/currentUser.state';

const verifyOTPBodySelectorCreator = code => createSelector(
  currentUserPhoneSelector,
  phone => ({
    phone,
    code,
  })
);

const {
  actionCreator: verifyOTP,
  dataSelector: tokenSelector,
} = makeFetchAction(
  'VERIFY_OTP',
  ({ code }) => ({
    endpoint: VERIFY_OTP_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
    },
    body: verifyOTPBodySelectorCreator(code),
  })
);

export { verifyOTP, tokenSelector };
