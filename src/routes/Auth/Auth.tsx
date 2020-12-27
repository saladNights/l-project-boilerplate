import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login as loginRequest } from '@state/auth/slice';

import { RootState } from '@state';

import styles from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    dispatch(loginRequest({ login, password }));
  };

  if (isLoggedIn === undefined) {
    return null;
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.authPage}>
      <input type='text' name='login' onChange={(event) => setLogin(event.target.value)} />
      <input type='password' name='password' onChange={(event) => setPassword(event.target.value)} />
      <button type='submit' onClick={onSubmit}>
        Войти
      </button>
    </div>
  );
};

export default Auth;
