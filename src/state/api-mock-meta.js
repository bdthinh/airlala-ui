const mockMeta = (meta = {}) => next => async (req) => {
  const { payload, ...others } = await next(req);

  const payloadWithMeta = {
    ...payload,
    meta: {
      ...payload.meta || {},
      ...meta,
    },
  };

  return { payload: payloadWithMeta, ...others };
};

export default mockMeta;
