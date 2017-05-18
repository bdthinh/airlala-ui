import { flow, path } from 'lodash/fp';
import { firebaseAuth, firebaseDatabase } from './firebase';
import history from './history';

export const loginWithToken = (token) => {
  firebaseAuth.signInWithCustomToken(token).catch((error) => {
    console.log('error.code', error.code);
    console.log('error.message', error.message);
  });

  history.push('/profile/edit');

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
  console.log('Update profile');

  const ref = firebaseDatabase.ref(`/users/${currentUser.uid}`);
  ref.update({
    firstName,
    lastName,
    email,
  });
  console.log('Update database');
  history.push('/orders');
};

const currentUserSelector = () => {
  const currentUser = firebaseAuth.currentUser;
  if (!currentUser) {
    return {};
  }

  const ref = firebaseDatabase.ref(`/users/${firebaseAuth.currentUser.uid}`);
  let user;
  ref.on('value', (snapshot) => {
    user = snapshot.val();
  });
  return user;
};

export const currentUserEmailSelector = flow(currentUserSelector, path('email'));
export const currentUserFirstNameSelector = flow(currentUserSelector, path('firstName'));
export const currentUserLastNameSelector = flow(currentUserSelector, path('lastName'));

export default firebaseAuth;
