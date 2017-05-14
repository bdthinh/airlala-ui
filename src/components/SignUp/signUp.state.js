import { makeFetchAction } from 'redux-api-call';
import { CREATE_USER_ENDPOINT } from '../../endpoints';

const {
  actionCreator: signUpNewUser,
  dataSelector: validationCodeSelector,
} = makeFetchAction(
  'SIGN_UP',
  ({ phone }) => ({
    endpoint: CREATE_USER_ENDPOINT,
    method: 'POST',
    body: {
      phone,
    },
  })
);

export {
  signUpNewUser,
  validationCodeSelector,
};
