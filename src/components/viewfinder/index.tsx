'use client';

import { MouseEvent, useCallback, useContext } from 'react';
import { viewfinderCtx } from '@/viewfinder-context';
import { cursorCtx } from '@/cursor-context';
import { useViewFinder } from './hooks';
import { Locked, Scoped } from './corners';
import styles from './viewfinder.module.scss';

export const ViewFinder = () => {
  const { targeting } = useContext(cursorCtx);
  const { _: { setFocusing } } = useContext(viewfinderCtx);
  const { focusing, height, width, x, y } = useViewFinder();

  const classname = [
    styles.viewfinder,
    ...(targeting !== null ? [styles.targeting] : []),
  ].join(' ');

  const style = {
    '--height': `${height}px`,
    '--width': `${width}px`,
    '--x': `${x || -9999}px`,
    '--y': `${y || -9999}px`,
  } as React.CSSProperties;

  const mouseLeave = useCallback((e: MouseEvent) => {
    console.log('We left')
    setFocusing(null);
  }, [focusing, setFocusing]);

  return focusing !== null ? (
    <div
      className={classname}
      style={style}
      onMouseOut={mouseLeave}
      onMouseLeave={() => console.log('mouse leave')}
    >
      {targeting && <Locked />}
      {!targeting && <Scoped />}
    </div>
  ) : null;
};
