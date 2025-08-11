'use client';

import { MouseEvent, useCallback, useContext } from 'react';
import { viewfinderCtx } from '@/viewfinder-context';
import { cursorCtx } from '@/cursor-context';
import { Locked, Scoped } from './corners';
import styles from './viewfinder.module.scss';

export const Viewfinder = ({ id }: {
  id: string;
}) => {
  const { focusing, _: { setFocusing } } = useContext(viewfinderCtx);
  const { targeting } = useContext(cursorCtx);
  const classname = [
    styles.viewfinder,
    ...(targeting === id ? [styles.targeting] : []),
  ].join(' ');

  const mouseLeave = useCallback((e: MouseEvent) => {
    setFocusing(null);
  }, [focusing, setFocusing]);

  if (focusing !== id) {
    return null;
  }

  return (
    <div className={classname} onMouseOut={mouseLeave}>
      {targeting && <Locked />}
      {!targeting && <Scoped />}
    </div>
  );
};
