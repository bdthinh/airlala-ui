/* eslint-disable no-underscore-dangle*/
import React from 'react';

const getState = jest.fn();
const dispatch = jest.fn();

const defaultMergeProps = (a = {}, b = {}, c = {}) => ({ ...a, ...b, ...c });
const normalizeMapDispatchToProps = (fn) => {
  if (!fn) {
    return x => ({ dispatch: x });
  }

  if (typeof fn === 'function') {
    return fn;
  }

  return actualDispatch => Object.keys(fn).reduce((current, fnName) => ({
    ...current,
    [fnName]: (...params) => actualDispatch(fn[fnName](...params)),
  }), {});
};

export const connect = (
  mapStateToProps,
  mapDispatchToProps,
  mergeProps = defaultMergeProps
) => Component =>
    props => (
      <Component
        {...mergeProps(
          mapStateToProps(getState()),
          normalizeMapDispatchToProps(mapDispatchToProps)(dispatch, props),
          props
        )}
      />
    );

export { dispatch };

export const __setState = state => getState.mockReturnValue(state);
export const __resetState = () => { __setState({}); };

export const Provider = ({ children }) => children;
