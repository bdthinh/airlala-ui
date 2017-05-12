// eslint-disable-next-line no-console
console.info('using backend: %s', process.env.REACT_APP_BACKEND);

const BASE_URL = process.env.REACT_APP_BACKEND || 'https://catalogue.marketoi.com/index.php/api';

export const ORDER_ENDPOINT = `${BASE_URL}/Front/order`;
export const APP_SETTINGS_ENDPOINT = `${BASE_URL}/Front/settings`;
export const AREAS_ENDPOINT = `${BASE_URL}/Front/areas`;
export const PRODUCTS_ENDPOINT = `${BASE_URL}/Front/products`;
export const SELECTIONS_ENDPOINT = `${BASE_URL}/Front/selection`;
export const USER_ENDPOINT = `${BASE_URL}/Account/user`;

export const ADDRESSES_URI_ENDPOINT = `${BASE_URL}/Account/details`;
export const POST_NEW_ADDRESS_ENDPOINT = `${BASE_URL}/Account/address`;
export const REMOVE_ADDRESS_ENDPOINT = `${BASE_URL}/Account/addressdel`;
export const UPDATE_ACCOUNT_DETAILS = ADDRESSES_URI_ENDPOINT;
