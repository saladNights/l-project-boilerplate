import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Auth from '@routes/Auth';
import PageLayout from '@sharedComponents/PageLayout';

import { RootState } from '@state';

const App = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (isLoggedIn === undefined) return null;

  return <Router>{isLoggedIn === true ? <PageLayout /> : <Auth />}</Router>;
};

export default App;
