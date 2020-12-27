import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getUsers, getUsersSuccess, getUsersError } from './slice';

export function* getDCSaga(action: PayloadAction<string>) {
  try {
    const response = yield call(() =>
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => data),
    );

    yield put(getUsersSuccess(response.results));
  } catch (e) {
    yield put(getUsersError());
  }
}

export const usersSagas = [takeEvery(getUsers.type, getDCSaga)];
