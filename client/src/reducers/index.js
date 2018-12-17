import { combineReducers } from 'redux';
import authReducer from './reducer-auth';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './reducer-posts';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postsReducer
});
