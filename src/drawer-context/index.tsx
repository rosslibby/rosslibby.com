'use client'

import { createContext, useState } from 'react';
import { DrawerCtx, InsightTarget } from '@/types';

export const drawerCtx = createContext<DrawerCtx>({
  target: null,
  _: {},
});

export const DrawerProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [target, setTarget] = useState<InsightTarget | null>(null);
  const values = { target };
  const fns = { setTarget };

  return (
    <drawerCtx.Provider value={{ ...values, _: fns }}>
      {children}
    </drawerCtx.Provider>
  );
};
