import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';

import { login, loginSuccess, loginError, logOut, logOutSuccess } from './slice';
import { UserCredentials } from './types';

export function* loginSaga(action: PayloadAction<UserCredentials>) {
  try {
    const response = yield call(() =>
      fetch('path_to_api', {
        method: 'POST',
        body: JSON.stringify(action.payload),
      }).then((res) => res.json()),
    );

    localStorage.setItem('accessToken', response.access_token);

    yield put(loginSuccess(response.access_token));
  } catch (e) {
    yield put(loginError());
  }
}

export function* logOutSaga() {
  try {
    localStorage.removeItem('accessToken');

    yield put(logOutSuccess());
  } catch (e) {
    console.error(e);
  }
}

export const authSagas = [takeEvery(login.type, loginSaga), takeEvery(logOut.type, logOutSaga)];
