import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '@state/users/slice';

import { RootState } from '@state';

const Root = () => {
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // @ts-ignore TODO add user types and remove comment
  return <div>{isLoading ? 'Loading...' : users?.map((user) => <div key={user.id}>{user.name}</div>)}</div>;
};

export default Root;
