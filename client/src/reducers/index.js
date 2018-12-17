import { combineReducers } from 'redux';
import authReducer from './reducer-auth';

export default combineReducers({
  auth: authReducer
});
