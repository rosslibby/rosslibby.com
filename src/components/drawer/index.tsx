'use client';

import { useContext } from 'react';
import { cursorCtx } from '@/cursor-context';
import { Code } from './code';
import { Component } from './component';
import styles from './drawer.module.scss';

export const Drawer = () => {
  const { targeting } = useContext(cursorCtx);
  const attributes = {
    ...(targeting ? { 'data-targeting': targeting } : {}),
  };

  return (
    <div className={styles.drawer} {...attributes}>
      <Component />
      <Code />
    </div>
  );
};
