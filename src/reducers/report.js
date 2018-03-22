let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CUSTOMER_CREATE': return {...state, [payload.id]: []};
  case 'CUSTOMER_DELETE':
    let changedState = {...state};
    delete changedState[payload.id];
    return changedState;

  case 'REPORT_ID_CREATE':return [...state, payload];

  case 'REPORT_CREATE':

    // if(payload.name === '' || payload.cost == '') return new Error('submit a name and cost');
    // state[payload.xId] = state[payload.xId].concat([payload]);
    return {...state};
  case 'REPORT_UPDATE':
    // if(payload.name === '' || payload.cost == '') return new Error('submit a name and cost');
    let customerStateUpdate = state[payload.customerId].map(
      report => report.id === payload.id ? payload : report);
    return {...state, [payload.customerId]: customerStateUpdate};
  case 'REPORT_DELETE':
    let customerStateDelete = state[payload.customerId].filter(
      report => report.id !== payload.id);
    return {...state, [payload.customerId]: customerStateDelete};
  case 'REPORT_RESET': return initialState;
  default: return state;
  }
};
