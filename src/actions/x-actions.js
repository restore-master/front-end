import uuid from 'uuid/v4';

export const xCreate = x => {
  x.id = uuid();
  x.timestamp = new Date();
  return {
    type: 'X_CREATE',
    payload: x,
  };
};

export const xUpdate = x => ({
  type: 'X_UPDATE',
  payload: x,
});

export const xDelete = x => ({
  type: 'X_DELETE',
  payload: x,
});

export const xReset = () => ({type: 'X_RESET'});