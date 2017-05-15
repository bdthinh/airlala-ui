import { combineEpics } from 'redux-observable';
import signUpEpic from '../components/SignUp/signUp.epic';
import verificationEpic from '../components/Verification/verification.epic';

export default combineEpics(
  signUpEpic,
  verificationEpic,
);
