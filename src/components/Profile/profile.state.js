import { makeFetchAction } from 'redux-api-call';
import { REQUEST_UPDATE_ACCOUNT_ENDPOINT } from '../../endpoints';

type UserProfileParamsType = {
  firstName: string,
  lastName: string,
  email: string,
};

const {
  actionCreator: updateCurrentUser,
  updater: updateCurrentUserResponse,
} = makeFetchAction(
  'UPDATE_CURRENT_USER',
  (data: UserProfileParamsType) => ({
    endpoint: REQUEST_UPDATE_ACCOUNT_ENDPOINT,
    method: 'PUT',
    body: data,
  })
);

export { updateCurrentUser, updateCurrentUserResponse };
