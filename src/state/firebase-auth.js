import firebaseAuth from './firebase';
import history from './history';

export const loginWithToken = token => (
  firebaseAuth.signInWithCustomToken(token).catch((error) => {
    console.log('error.code', error.code);
    console.log('error.message', error.message);
  })
);

export const signOut = () => firebaseAuth.signOut().then(() => {
  history.push('/getStarted');
}).catch((error) => {
  console.log('error.code', error.code);
  console.log('error.message', error.message);
});

export default firebaseAuth;
