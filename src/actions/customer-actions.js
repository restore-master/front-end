import superagent from 'superagent';

export const customerGet = customers => ({
  type: 'CUSTOMER_GET',
  payload: customers,
});

const customerPassIdAction = id => ({
  type: 'CUSTOMER_ID_CREATE',
  payload: id,
});

export const customerGetAll = customers => dispatch => {
  console.log('apiurl:', __API_URL__);
  return superagent.get(`${__API_URL__}/customer`)
    .send(customers)
    .then(response => {
      // console.log(response.body[0].name);
      // console.log(response);
      return dispatch(customerGet(response.body));
    })
    .catch(console.error);
};

export const customerCreate = customer => dispatch => {
  console.log('apiurl:', __API_URL__);
  return superagent.post(`${__API_URL__}/customer`)
    .send(customer)
    .then(response => {
      return dispatch(customerPassIdAction(response.body));
      // console.log(response);
    })
    // .then(response => {
    //   console.log('response.body', response.body);
    //   console.log('response.body.id', response.body._id);
    //   return response;
    // })
    .catch(console.error);
  // return {
  //   type: 'CUSTOMER_CREATE',
  //   payload: x,
  // };
};

// export const signupRequest = user => dispatch => {
//   return superagent.post(`${__API_URL__}/signup`)
//     .send(user)
//     .then(res => {
//       dispatch(tokenSet(res.text))
//       try {
//         localStorage.setItem('token', res.text)
//       } catch (e) {
//         console.log(e)
//         throw e
//       }
//     })
// }

export const customerUpdate = customer => ({
  type: 'CUSTOMER_UPDATE',
  payload: customer,
});

export const customerDelete = customer => ({
  type: 'CUSTOMER_DELETE',
  payload: customer,
});

export const customerReset = () => ({type: 'CUSTOMER_RESET'});


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