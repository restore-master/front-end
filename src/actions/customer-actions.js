import superagent from 'superagent';

export const customerGet = customers => ({
  type: 'CUSTOMER_GET',
  payload: customers,
});

export const customerGetAll = customers => dispatch => {
  return superagent.get(`${__API_URL__}/customer`)
    .then(response => {
      return dispatch(customerGet(response.body));
    })
    .catch(console.error);
};

export const customerPassIdAction = id => ({
  type: 'CUSTOMER_ID_CREATE',
  payload: id,
});

export const customerCreate = customer => dispatch => {
  return superagent.post(`${__API_URL__}/customer`)
    .send(customer)
    .then(response => {
      return dispatch(customerPassIdAction(response.body));
    })
    .catch(console.error);
};

export const customerUpdate = customer => ({
  type: 'CUSTOMER_UPDATE',
  payload: customer,
});

export const customerDelete = customer => ({
  type: 'CUSTOMER_DELETE',
  payload: customer,
});

export const customerReset = () => ({type: 'CUSTOMER_RESET'});