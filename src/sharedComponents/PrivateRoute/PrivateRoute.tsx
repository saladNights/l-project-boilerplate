import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

import { RootState } from '@state';

import { ROUTE_ROOT, ROUTE_AUTH } from '@constants';

interface Props extends RouteProps {
  adminOnly?: boolean;
}

const PrivateRoute = ({ adminOnly, ...props }: Props) => {
  const location = useLocation();
  const { isLoggedIn, isAdmin } = useSelector((state: RootState) => state.auth);

  if (isLoggedIn) {
    if (adminOnly && !isAdmin) {
      return <Redirect to={ROUTE_ROOT} />;
    } else {
      return <Route {...props} />;
    }
  } else {
    return <Redirect to={{ pathname: ROUTE_AUTH, state: { from: location } }} />;
  }
};

export default PrivateRoute;
