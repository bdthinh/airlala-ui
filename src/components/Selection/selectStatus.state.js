import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { always, path } from 'lodash/fp';

const SHOW_RECEIVER_INPUT = 'selections/progress/SHOW_RECEIVER_INPUT';
const takePayload = (state, { payload }) => payload;
export const isShownReceiverSelectionSelector = path('selectStatus.isShownReceiverSelection');

export const showReceiverInput = always({
  type: SHOW_RECEIVER_INPUT,
  payload: true,
});

export const hideRecieverInput = always({
  type: SHOW_RECEIVER_INPUT,
  payload: false,
});

const isShownReceiverSelection = handleAction(
  SHOW_RECEIVER_INPUT,
  takePayload,
  false,
);

const reducer = combineReducers({
  isShownReceiverSelection,
});

export default { selectStatus: reducer };
