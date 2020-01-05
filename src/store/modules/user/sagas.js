import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './action';

export function* updateProfile({ payload }) {
  try {
    // get name email and the rest of other informations
    const { name, email, ...rest } = payload.data;

    // create profile object with name email and oldPasswod if exists
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    // send request to update profile
    const response = yield call(api.put, 'users', profile);

    // show success message
    toast.success('Perfil updated sucessfully!');

    // call action update perfil success
    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    // show error message
    toast.error('Update failed check your data');

    // call action update perfil failure
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
