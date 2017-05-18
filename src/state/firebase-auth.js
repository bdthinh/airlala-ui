import { firebaseAuth } from './firebase';
import history from './history';

export const loginWithToken = (token) => {
  firebaseAuth.signInWithCustomToken(token).catch((error) => {
    console.log('error.code', error.code);
    console.log('error.message', error.message);
  });

  return ({
    type: 'SIGN_IN_WITH_TOKEN',
    payload: token,
  });
};

export const signOut = () => firebaseAuth.signOut().then(() => {
  history.push('/getStarted');
}).catch((error) => {
  console.log('error.code', error.code);
  console.log('error.message', error.message);
});

export const updateCurrentUserProfile = ({ firstName, lastName, email }) => {
  const currentUser = firebaseAuth.currentUser;
  currentUser.updateProfile({
    firstName,
    lastName,
    email,
  }).then(
    () => ({ status: 200 }),
    error => ({ status: 422, error })
  );
  console.log('Updated profile');
};

export default firebaseAuth;
