import { seenIntroductionSelector } from '../Introduction/introduction.state';

import history from '../../state/history';

export const enterHomePage = () => (dispatch, getState) => {
  const state = getState();
  const seenIntroduction = seenIntroductionSelector(state);

  if (seenIntroduction) {
    history.push('/signup');
  }
};

export default { layout: {} };
