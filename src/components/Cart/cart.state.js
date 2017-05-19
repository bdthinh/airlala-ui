import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { always, path } from 'lodash/fp';

export const isShownCartSelector = path('cart.isShown');
export const cartItemsSelector = path('cart.items');

const TOGGLE_CART = 'cart/actions/TOGGLE_CART';
const ADD_ITEM_TO_CART = 'cart/actions/ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'cart/actions/REMOVE_ITEM_FROM_CART';
const CLEAR_CART = 'cart/actions/CLEAR_CART';

export const toggleCart = always({ type: TOGGLE_CART });
export const addToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});
export const clearCart = always({ type: CLEAR_CART });

const EMPTY_LIST = [];

const isShown = handleAction(TOGGLE_CART, state => !state, false);
const items = (state = EMPTY_LIST, { type, payload }) => {
  if (type === ADD_ITEM_TO_CART) {
    return [...state, payload];
  }
  if (type === CLEAR_CART) {
    return EMPTY_LIST;
  }
  if (type === REMOVE_ITEM_FROM_CART) {
    return state.filter(item => item.key !== payload.key);
  }

  return state;
};

const reducer = combineReducers({
  isShown,
  items,
});

export default { cart: reducer };
