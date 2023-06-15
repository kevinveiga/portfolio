import { useState, useEffect } from 'react';

import { getLocalStorage, setLocalStorage } from '@/helpers/storage';
import { TState } from '@/type';

export function usePersistedState<T>(key: string, initialState: T): TState<T> {
  const storage = getLocalStorage(key);

  const [state, setState] = useState(storage !== undefined && storage !== null ? storage : initialState);

  useEffect(() => {
    setLocalStorage(key, state);
  }, [key, state]);

  return [state, setState];
}
