import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '@sharedComponents/PrivateRoute';

import Root from '@routes/Root';

import { ROUTE_ROOT } from '@constants';

import styles from './PageLayout.module.css';

const PageLayout = () => {
  return (
    <div className={styles.layout}>
      <Switch>
        <PrivateRoute exact path={ROUTE_ROOT}>
          <Root />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default PageLayout;
