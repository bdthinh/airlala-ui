import type {
  FirebaseAppType,
  FirebaseUserType,
} from './types';

export const authenticate = async (app: FirebaseAppType, token): FirebaseAppType => {
  const auth = app.auth();
  if (auth.currentUser) {
    return app;
  }

  try {
    const result = await auth.getRedirectResult();
    const user : FirebaseUserType = result.user;

    if (!user) {
      app.auth().signInWithCustomToken(token);
    }
  } catch (error) {
    const { code, message, credential, email } = error;
    console.error('Unauthenticated', { code, message, credential, email }); // eslint-disable-line
  }
  return app;
};

/* global firebase */

export default () : Promise<FirebaseAppType> => (
  new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(() => {
      resolve(firebase);
    });
  })
);
