export default store => next => action => {
  try {
    return next(action);
  } catch(exception) {
    throw exception;
  }
};