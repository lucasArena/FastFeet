import { all, put, takeLatest, call, delay } from 'redux-saga/effects';

import * as Actions from './actions';

import api from '~/services/api';

function* signInRequest({ payload }) {
  const { id } = payload;
  const response = yield call(api.get, `/deliveryguys/${id}`);
  yield put(Actions.signInSuccess(response));
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signInRequest)]);
