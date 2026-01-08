'use client'

import { createContext, useContext, useState } from 'react';
import { DrawerCtx, InsightTarget } from '@/types';
import { cursorCtx } from '@/cursor-context';
import styles from './drawer-provider.module.css';

export const drawerCtx = createContext<DrawerCtx>({
  target: null,
  _: {},
});

export const DrawerProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const { targeting } = useContext(cursorCtx);
  const [target, setTarget] = useState<InsightTarget | null>(null);
  const values = { target };
  const fns = { setTarget };

  const classname = [
    styles.wrapper,
    ...(targeting !== null ? [styles.expanded] : []),
  ].join(' ');

  return (
    <drawerCtx.Provider value={{ ...values, _: fns }}>
      <div className={classname}>
        {children}
      </div>
    </drawerCtx.Provider>
  );
};
