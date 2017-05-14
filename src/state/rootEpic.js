import { combineEpics } from 'redux-observable';
import signUpEpic from '../components/SignUp/signup.epic';

export default combineEpics(
  signUpEpic,
);
