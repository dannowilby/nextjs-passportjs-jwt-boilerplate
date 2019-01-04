import Router from 'next/router';
import axios from 'axios';
import { set_token, set_error } from '../state/store';

const login = (dispatch, user, pass) => {
  axios.post('/auth/login', {
    email: user,
    password: pass
  }).then(resp => {

    dispatch(set_token((resp.data.token)));
    Router.push('/');
  }).catch(err => {

    console.log(err);
  })
};

const register = (dispatch, user, pass1, pass2) => {

  axios.post('/auth/register', {
    email: user,
    password: pass1,
    password1: pass2
  }).then(resp => {

    if(resp.data.success)
      login(dispatch, user, pass1);
    else
      dispatch(set_error(resp.data.message));
  })
};

export { register, login };
