import posts from '../apis/posts';
import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_POST, FETCH_POSTS, FETCH_POST, EDIT_POST, DELETE_POST } from './types';

//replace posts from line 1 with something more descript - favs introduced

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createPost = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await posts.post('/posts', {...formValues, userId });

  dispatch({ type: CREATE_POST, payload: response.data });
  history.push('/');
}

export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/posts');

  dispatch({ type: FETCH_POSTS, payload: response.data });
}

export const fetchPost = (id) => async dispatch => {
  const response = await posts.get(`/posts/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data })
}

export const editPost = (id, formValues) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);

  dispatch({ type: EDIT_POST, payload: response.data });
  history.push('/');
}

export const deletePost = (id) => async dispatch => {
  await posts.delete(`/posts/${id}`);

  dispatch({ type: DELETE_POST, payload: id});
  history.push('/');
}
