import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { always, path } from 'lodash/fp';

const mergePayload = (state, { payload }) => {
  if (typeof payload === 'object') {
    return ({ ...state, ...payload });
  }
  return ({ ...state, payload });
};

const SET_CURRENT_SELECTION = 'selection/actions/SET_CURRENT_SELECTION';
export const currentSelectionSelector = path('selection.current');

export const selectProperty = property => ({
  type: SET_CURRENT_SELECTION,
  payload: property,
});

export const clearSelection = always({
  type: SET_CURRENT_SELECTION,
  payload: null,
});

const current = handleAction(
  SET_CURRENT_SELECTION,
  mergePayload,
  null,
);

const reducer = combineReducers({
  current,
});

export default { selection: reducer };
