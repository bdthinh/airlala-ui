import history from '../state/history';

const LOCATION_NAVIGATION = 'location/navigation';

export const middleware = () => next => (action) => {
  if (action.type === LOCATION_NAVIGATION) {
    history.push(action.payload.href);
    return;
  }

  next(action);
};

export const navigatePage = href => ({
  type: LOCATION_NAVIGATION,
  payload: { href },
});
