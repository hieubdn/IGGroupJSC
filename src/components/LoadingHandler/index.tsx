import React from 'react';
import { useAppContext } from 'src/state/app';
import FullScreenLoading from '../FullScreenLoading';

export const LoadingHandler = () => {
  const { state } = useAppContext();
  
  if (state.loading > 0) {
    return <FullScreenLoading />;
  }

  return null;
}; 