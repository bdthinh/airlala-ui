import { flow, path, negate } from 'lodash/fp';
import { makeFetchAction } from 'redux-api-call';
import { LOGIN_USER_ENDPOINT } from '../../endpoints';

type UserParamsType = {
  email: string,
  password: string,
};

const {
  actionCreator: signInCurrentUser,
  dataSelector: currentUserSelector,
} = makeFetchAction(
  'LOGIN',
  (data: UserParamsType) => ({
    endpoint: LOGIN_USER_ENDPOINT,
    body: data,
  })
);

export { signInCurrentUser, currentUserSelector };

export const currentUserPhoneSelector = flow(currentUserSelector, path('uid'));
export const currentUserEmailSelector = flow(currentUserSelector, path('email'));
export const currentUserFirstNameSelector = flow(currentUserSelector, path('firstName'));
export const currentUserLastNameSelector = flow(currentUserSelector, path('lastName'));
export const currentUserLocationSelector = flow(currentUserSelector, path('location'));
export const currentUserAddressSelector = flow(currentUserSelector, path('address'));
export const isCurrentUserBuyerSelector = flow(currentUserSelector, path('isSeller'), negate);
