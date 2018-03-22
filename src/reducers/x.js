import superagent from 'superagent';

let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'X_GET':
    console.log('X_GET HAS BEEN CALLED');
    return payload;
  case 'X_ID_CREATE': return [...state, payload];
  case 'X_CREATE':
    // if(payload.title === '') return new Error('submit a x title');
    console.log('X_CREATE REDUCER BEING CALLED');
    return [...state, payload];
  case 'X_UPDATE': {
    // if(payload.title === '') return new Error('submit a x title');
    return state.map(x => x.id === payload.id ? payload : x);
  };
  case 'X_DELETE': return state.filter(x => x.id !== payload.id);
  case 'X_RESET': return initialState;
  default: return state;
  }
};
