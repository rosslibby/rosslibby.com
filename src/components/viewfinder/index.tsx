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
    setFocusing(null);
  }, [focusing, setFocusing]);

  return focusing !== null ? (
    <div
      className={classname}
      style={style}
      onMouseOut={mouseLeave}
    >
      {targeting && <Locked />}
      {!targeting && <Scoped />}
    </div>
  ) : null;
};

export const InlineViewfinder = ({ id }: {
  id: string;
}) => {
  const { focusing, _: { setFocusing } } = useContext(viewfinderCtx);
  const { targeting } = useContext(cursorCtx);
  const classname = [
    styles.viewfinder,
    styles.inline,
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
