import { always, path } from 'lodash/fp';
import { handleAction } from 'redux-actions';

const takePayload = (state, { payload }) => payload;

export const seenIntroductionSelector = path('seenIntroduction');

const SEEN_INTRODUCTION = 'introduction/actions/SEEN';

export const skipOrDoneIntroduction = always({
  type: SEEN_INTRODUCTION,
  payload: true,
});

const seenIntroduction = handleAction(
  SEEN_INTRODUCTION,
  takePayload,
  false,
);

export default { seenIntroduction };
