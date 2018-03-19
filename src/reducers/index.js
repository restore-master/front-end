import yReducer from './y';
import xReducer from './x';
import {combineReducers} from 'redux';
import x from './x';

export default combineReducers({
  ys: yReducer,
  categories: xReducer,
});