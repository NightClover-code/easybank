import { useEffect, useState } from 'react';
import { counterResultType } from '../types';
import { useWindowWidth } from './useWindowWidth';

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(-1);
  const width = useWindowWidth();

  useEffect(() => setCounter(-1), [width]);

  return [counter, setCounter] as counterResultType;
};
