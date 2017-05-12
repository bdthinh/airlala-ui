export default (func) => {
  let isRunning = false;

  return (...args) => {
    if (isRunning) {
      return;
    }

    isRunning = true;
    requestAnimationFrame(() => {
      try {
        func(...args);
      } catch (e) {
        throw e;
      } finally {
        isRunning = false;
      }
    });
  };
};
