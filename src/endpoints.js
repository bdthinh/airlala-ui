// eslint-disable-next-line no-console
console.info('using backend: %s', process.env.REACT_APP_BACKEND);

export default process.env.REACT_APP_BACKEND || 'https://backend-api.com';
