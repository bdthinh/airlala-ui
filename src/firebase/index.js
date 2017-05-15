import firebase from 'firebase';
import type {
  FirebaseConfigType,
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


export default (firebaseConfig: FirebaseConfigType) : Promise<FirebaseAppType> => {
  const app = firebase.initializeApp(firebaseConfig);
  return new Promise((resolve) => {
    app.auth().onAuthStateChanged(() => {
      resolve(app);
    });
  });
};
