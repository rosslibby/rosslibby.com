'use client'

import { useContext, useRef } from 'react';
import { cursorCtx } from '@/cursor-context';
import { Docs } from '@/components';
import { Code } from './code';
import { Component } from './component';
import { useDrawer } from './hooks';
import styles from './drawer.module.scss';

export const Drawer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { targeting } = useContext(cursorCtx);
  useDrawer(containerRef);

  const attributes = {
    className: styles.drawer,
    ref: containerRef,
    ...(targeting ? { 'data-targeting': targeting } : {}),
  };

  return (
    <div {...attributes}>
      <Docs />
      <Component />
      <Code />
    </div>
  );
};
