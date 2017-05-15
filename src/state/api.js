import { createAPIMiddleware, defaultTransformers, composeAdapters } from 'redux-api-call';

const addNoCors = next => req => next({
  ...req,
  mode: 'no-cors',
  headers: {
    'content-type': 'application/json',
  },
});

const apiMiddleware = createAPIMiddleware(composeAdapters(addNoCors, ...defaultTransformers));

export default apiMiddleware;
