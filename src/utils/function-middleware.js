export default () => next => (action) => {
  if (typeof action === 'function') {
    console.log('You have just dispatched a function. Double check, please');
    return;
  }

  next(action);
};
