'use client';

import { useContext } from 'react';
import { viewfinderCtx } from '@/viewfinder-context';
import { useCursor } from '../cursor';

export const useViewFinder = () => {
  const { targeting } = useCursor();
  const { focusing, targetSpecs } = useContext(viewfinderCtx);

  return { focusing, targeting, ...targetSpecs };
};
