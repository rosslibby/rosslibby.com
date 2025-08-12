'use client';

import { useContext } from 'react';
import { cursorCtx } from '@/cursor-context';

export const useDrawer = () => {
  const { targeting } = useContext(cursorCtx);

  return { targeting };
};
