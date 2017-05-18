import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { flow, over, always, path } from 'lodash/fp';
import { makeFetchAction } from 'redux-api-call';
import { createSelector } from 'reselect';

import { REQUEST_GIFTS_ENDPOINT } from '../../endpoints';
import {
  currentUserPhoneSelector,
} from '../SignUp/currentUser.state';

const takePayload = (state, { payload }) => payload;

const SET_RECEIVER_NAME = 'selection/actions/SET_RECEIVER_NAME';
const SET_SEX = 'selection/actions/SET_SEX';
const SET_AGE_RANGE = 'selection/actions/SET_AGE_RANGE';
const SET_RELATIONSHIP = 'selection/actions/SET_RELATIONSHIP';
const SET_LOCATION = 'selection/actions/SET_LOCATION';
const SET_OCCASION = 'selection/actions/SET_OCCASION';
const SET_PRICE_RANGE = 'selection/actions/SET_PRICE_RANGE';
const SET_TAGS = 'selection/actions/SET_TAGS';
const SET_DETAILS = 'selection/actions/SET_DETAILS';

export const currentSelectionSelector = path('currentSelection');
export const csReceiverNameSelector = path('currentSelection.receiverName');
export const csSexSelector = path('currentSelection.sex');
export const csAgesSelector = path('currentSelection.ages');
export const csRelationshipSelector = path('currentSelection.relationship');
export const csLocationSelector = path('currentSelection.location');
export const csOccasionSelector = path('currentSelection.occasion');
export const csPriceRangeSelector = path('currentSelection.priceRange');
export const csTagsSelector = path('currentSelection.tags');
export const csDetailsSelector = path('currentSelection.details');

export const clearReceiverName = always({ type: SET_RECEIVER_NAME, payload: '' });
export const changeReceiverName = name => ({
  type: SET_RECEIVER_NAME,
  payload: name,
});


export const clearSex = always({ type: SET_SEX, payload: 'female' });
export const changeSex = sex => ({
  type: SET_SEX,
  payload: sex,
});

export const clearAges = always({ type: SET_AGE_RANGE, payload: null });
export const changeAges = ages => ({
  type: SET_AGE_RANGE,
  payload: ages,
});

export const clearRelationship = always({ type: SET_RELATIONSHIP, payload: null });
export const changeRelationship = relationship => ({
  type: SET_RELATIONSHIP,
  payload: relationship,
});

export const clearLocation = always({ type: SET_LOCATION, payload: null });
export const changeLocation = location => ({
  type: SET_LOCATION,
  payload: location,
});

export const clearOccasion = always({ type: SET_OCCASION, payload: null });

export const changeOccasion = occasion => ({
  type: SET_OCCASION,
  payload: occasion,
});

export const clearPriceRange = always({ type: SET_PRICE_RANGE, payload: '50,100' });
export const changePriceRange = range => ({
  type: SET_PRICE_RANGE,
  payload: range,
});

export const clearTags = always({ type: SET_TAGS, payload: [] });
export const chooseTag = tag => ({
  type: SET_TAGS,
  payload: tag,
});

export const clearDetails = always({ type: SET_DETAILS, payload: '' });
export const setDetails = details => ({
  type: SET_DETAILS,
  payload: details,
});

export const clearSelection = over([
  clearReceiverName,
  clearSex,
  clearAges,
  clearRelationship,
  clearLocation,
  clearOccasion,
  clearPriceRange,
  clearTags,
  clearDetails,
]);

export const clearReceiver = over([
  clearReceiverName,
  clearSex,
  clearAges,
  clearRelationship,
]);

const receiverName = handleAction(SET_RECEIVER_NAME, takePayload, '');
const sex = handleAction(SET_SEX, takePayload, 'female');
const ages = handleAction(SET_AGE_RANGE, takePayload, null);
const relationship = handleAction(SET_RELATIONSHIP, takePayload, null);
const location = handleAction(SET_LOCATION, takePayload, null);
const occasion = handleAction(SET_OCCASION, takePayload, null);
const priceRange = handleAction(SET_PRICE_RANGE, takePayload, '50,100');
const tags = handleAction(
  SET_TAGS,
  (state, { payload }) => {
    if (state.indexOf(payload) === -1) {
      return [...state, payload];
    }
    return state.filter(tag => tag !== payload);
  },
  [],
);

const details = handleAction(SET_DETAILS, takePayload, '');

const bodySelector = createSelector(
  currentSelectionSelector,
  currentUserPhoneSelector,
  (selection, phone) => JSON.stringify({
    ...selection,
    phone,
    receiverImage: '',
  }),
);

const {
  actionCreator: requestGifts,
  dataSelector: orderResponseSelector,
} = makeFetchAction(
  'REQUEST_GIFT',
  () => ({
    endpoint: REQUEST_GIFTS_ENDPOINT,
    method: 'POST',
    body: bodySelector,
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

export { requestGifts, orderResponseSelector };

export const orderKeySelector = flow(orderResponseSelector, path('orderKey'));

const reducer = combineReducers({
  receiverName,
  sex,
  ages,
  relationship,
  location,
  occasion,
  priceRange,
  tags,
  details,
});

export default { currentSelection: reducer };
