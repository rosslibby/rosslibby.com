'use client';

import { useContext, useRef } from 'react';
import { cursorCtx } from '@/cursor-context';
import { viewfinderCtx } from '@/viewfinder-context';
import { Viewfinder } from '@/components';
import styles from './target.module.scss';

type TargetProps = {
  children: React.ReactNode;
  id: string;
};

export const MinTarget = ({ children, id }: TargetProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { targeting, _: { setTargeting } } = useContext(cursorCtx);
  const { focusing, _: { setFocusing } } = useContext(viewfinderCtx);

  const focused = id === focusing;
  const onmouseenter = () => setFocusing(id);
  const onmousedown = () => setTargeting(id);

  const handlers = {
    onMouseEnter: !focused ? onmouseenter : undefined,
    onMouseDown: !targeting ? onmousedown : undefined,
  };

  return (
    <div className={styles.target}
      data-focused={id === targeting}
      ref={targetRef} {...handlers}>
      <div className={styles.component} data-target-id={id}>
        {children}
      </div>
      <Viewfinder id={id} target={targetRef} />
    </div>
  );
};
