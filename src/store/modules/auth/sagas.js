import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    // request for session
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    // get data from response
    const { token, user } = response.data;

    // put token in api header for authentication request
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // call actions success
    yield put(signInSuccess(token, user));

    // redirect to cart page
    history.push('/cart');
  } catch (err) {
    // show erro message
    toast.error('Authentication failed check your data');

    // call actions fail
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error('Registration failed check your data');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  // check payload
  if (!payload) return;

  // get token in payload
  const { token } = payload.auth;

  // check token
  if (token) {
    // put token in api header for authentication request
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

// redirect user to root after log out
export function signOut() {
  history.push('/');
}
// export all saga
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
