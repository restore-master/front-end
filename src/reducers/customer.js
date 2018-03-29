import superagent from 'superagent';

let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CUSTOMER_GET':
    console.log('CUSTOMER_GET HAS BEEN CALLED');
    return payload;
  case 'CUSTOMER_ID_CREATE': return [...state, payload];
  case 'CUSTOMER_CREATE':
    console.log('CUSTOMER_CREATE REDUCER BEING CALLED');
    return [...state, payload];
  case 'CUSTOMER_UPDATE': {
    return state.map(customer => customer.id === payload.id ? payload : customer);
  };
  case 'CUSTOMER_DELETE': return state.filter(customer => customer.id !== payload.id);
  case 'CUSTOMER_RESET': return initialState;
  default: return state;
  }
};
