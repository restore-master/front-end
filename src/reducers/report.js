let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CUSTOMER_CREATE': return {...state, [payload._id]: []};
  case 'CUSTOMER_DELETE':
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState;

  case 'REPORT_ID_CREATE': return [...state, payload];
  case 'REPORT_CREATE':
    return [...state, payload];

  case 'REPORT_GET': return payload;
  case 'REPORT_UPDATE':
    let customerStateUpdate = state[payload.customer].map(
      report => report._id === payload._id ? payload : report);
    return {...state, [payload.customer]: customerStateUpdate};
  case 'REPORT_DELETE':
    let customerStateDelete = state[payload.customer].filter(
      report => report._id !== payload._id);
    return {...state, [payload.customer]: customerStateDelete};
  case 'REPORT_RESET': return initialState;
  default: return state;
  }
};
