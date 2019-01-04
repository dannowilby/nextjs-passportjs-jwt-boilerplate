import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const SET_TOKEN = 'SET_TOKEN';
const SET_ERROR = 'SET_ERROR';

const initial_state = {
  token: '',
  register_error: '',
};

const reducer = (state = initial_state, action) => {

  switch(action.type) {

    case SET_TOKEN:
      return { ...state, token: action.token };
    case SET_ERROR:
      return { ...state, register_error: action.error };

    default: return state;
  }
};

const set_token = (token) => (
  {
    type: SET_TOKEN,
    token: token
  }
);

const set_error = (error) => ({
  type: SET_ERROR,
  error: error
});

const initializeStore = (is = initial_state) => {
  return createStore(reducer, is, applyMiddleware(thunkMiddleware));
}

export { initial_state, initializeStore, set_token, set_error };
