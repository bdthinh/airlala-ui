import { handleAction } from 'redux-actions';
import { negate, flow, path } from 'lodash/fp';

const SAVE_CURRENT_USER = 'currentUser/actions/saveCurrentUserToken';

export const currentUserSelector = path('currentUser');
export const currentUserUidSelector = flow(currentUserSelector, path('uid'));
export const currentUserPhoneSelector = flow(currentUserSelector, path('phone'));
export const currentUserTokenSelector = flow(currentUserSelector, path('token'));

export const currentUserEmailSelector = flow(currentUserSelector, path('email'));
export const currentUserFirstNameSelector = flow(currentUserSelector, path('firstName'));
export const currentUserLastNameSelector = flow(currentUserSelector, path('lastName'));
export const currentUserLocationSelector = flow(currentUserSelector, path('location'));
export const currentUserAddressSelector = flow(currentUserSelector, path('address'));
export const isCurrentUserBuyerSelector = flow(currentUserSelector, path('isSeller'), negate);

export const saveCurrentUserWith = userParams => ({
  type: SAVE_CURRENT_USER,
  payload: userParams,
});

const currentUser = handleAction(
  SAVE_CURRENT_USER,
  (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  null,
);

export default { currentUser };
