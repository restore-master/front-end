import report from './report';
import customer from './customer';
import {combineReducers} from 'redux';

export default combineReducers({
  customer,
  report,
});
