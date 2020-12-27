import { all } from 'redux-saga/effects';
import { Effect } from '@redux-saga/core/effects';

import { authSagas } from './auth/sagas';
import { usersSagas } from './users/sagas';

const sagas: Array<Effect> = [];

export default function* rootSaga() {
  yield all(sagas.concat(authSagas, usersSagas));
}
