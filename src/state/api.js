import { createAPIMiddleware, defaultTransformers, composeAdapters } from 'redux-api-call';

const apiMiddleware = createAPIMiddleware(composeAdapters(...defaultTransformers));

export default apiMiddleware;
