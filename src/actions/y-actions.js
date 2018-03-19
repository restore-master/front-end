import uuid from 'uuid/v4';

export const yCreate = y => {
  y.id = uuid();
  y.timestamp = new Date();
  return {
    type: 'Y_CREATE',
    payload: y,
  };
};

export const yUpdate = y => ({
  type: 'Y_UPDATE',
  payload: y,
});

export const yDelete = y => ({
  type: 'Y_DELETE',
  payload: y,
});

export const yReset = () => ({type: 'Y_RESET'});