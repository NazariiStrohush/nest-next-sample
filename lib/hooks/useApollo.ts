import { useMemo } from 'react';
import { NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '../apollo';

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
