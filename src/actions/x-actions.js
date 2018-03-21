import superagent from 'superagent';

export const xGet = xs => ({
  type: 'X_GET',
  payload: xs,
});

export const xCreate = x => {
  console.log('apiurl:', __API_URL__);
  superagent.post(`${__API_URL__}/customer`)
    .send(x)
    .then(response => {
      console.log('response.body', response.body);
      console.log('response.body.id', response.body._id);
    })
    .catch(console.error);
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


// export const xFetchRequest = () => dispatch => {
//   return superagent.get(`${__API_URL__}/customer`)
//     .then(res => dispatch(xGet(res.body)))
//     .catch(console.error);
// };

// export const createActionRequest = (x) => (dispatch) => {
//   console.log('apiurl:', __API_URL__);
//   return superagent.post(`http://localhost:3000/customer`)
//     .send(x)
//     .then(response => {
//       return dispatch(xCreate(response.body));
//     })
//     .catch(console.error);
// };