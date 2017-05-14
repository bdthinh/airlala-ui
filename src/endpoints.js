// eslint-disable-next-line no-console
console.info('using backend: %s', process.env.REACT_APP_BACKEND);

const BASE_URL = process.env.REACT_APP_BACKEND || 'https://us-central1-airlala-7b1b2.cloudfunctions.net';

export const CREATE_USER_ENDPOINT = `${BASE_URL}/createUser`;
export const LOGIN_USER_ENDPOINT = `${BASE_URL}/loginUser`;
export const REQUEST_GIFTS_ENDPOINT = `${BASE_URL}/requestGifts`;
export const REQUEST_IMAGE_LABEL_ENDPOINT = `${BASE_URL}/requestImageLabel`;
export const REQUEST_OTP_ENDPOINT = `${BASE_URL}/requestOneTimePassword`;
export const REQUEST_UPDATE_ACCOUNT_ENDPOINT = `${BASE_URL}/requestUpdateAccount`;
export const VERIFY_OTP_ENDPOINT = `${BASE_URL}/verifyOneTimePassword`;
