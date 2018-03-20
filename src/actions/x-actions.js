import uuid from 'uuid/v4';
const __API_URL__ = process.env.API_URL;

export const xGet = xs => ({
  type: 'X_GET',
  payload: xs,
});

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


export const xFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/customer`)
    .then(res => dispatch(xGet(res.body)))
    .catch(logError);
};

export const xCreateRequest = x => (dispatch, getState) => {
  console.log('apiurl:', __API_URL__);
  return superagent.post(`${__API_URL__}/customer`)
    .send(x)
    .then(res => dispatch(xCreate(res.body)))
    .catch(logError);
};