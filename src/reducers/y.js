let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'X_CREATE': return {...state, [payload.id]: []};
  case 'X_DELETE':
    let changedState = {...state};
    delete changedState[payload.id];
    return changedState;

  case 'Y_CREATE':
    if(payload.name === '' || payload.cost == '') return new Error('submit a name and cost');
    // state[payload.xId] = state[payload.xId].concat([payload]);
    return {...state};
  case 'Y_UPDATE':
    // if(payload.name === '' || payload.cost == '') return new Error('submit a name and cost');
    let xStateUpdate = state[payload.xId].map(
      y => y.id === payload.id ? payload : y);
    return {...state, [payload.xId]: xStateUpdate};
  case 'Y_DELETE': 
    let xStateDelete = state[payload.xId].filter(
      y => y.id !== payload.id);
    return {...state, [payload.xId]: xStateDelete};
  case 'Y_RESET': return initialState;
  default: return state;
  }
};