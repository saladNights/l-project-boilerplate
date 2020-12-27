import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import auth from './auth/slice';
import users from './users/slice';

const rootReducer = combineReducers({
  auth,
  users,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false, immutableCheck: false }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
