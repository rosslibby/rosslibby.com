'use client';

import { RefObject, useCallback, useContext } from 'react';
import { viewfinderCtx } from '@/viewfinder-context';
import { cursorCtx } from '@/cursor-context';
import { Locked, Scoped } from './corners';
import { useViewfinder } from './hooks';
import styles from './viewfinder.module.scss';

export const Viewfinder = ({ id, target }: {
  id: string;
  target: RefObject<HTMLDivElement | null>;
}) => {
  const { focusing, _: { setFocusing } } = useContext(viewfinderCtx);
  const { targeting } = useContext(cursorCtx);
  const { width } = useViewfinder(target);

  const classname = [
    styles.viewfinder,
    ...(targeting === id ? [styles.targeting] : []),
  ].join(' ');

  const style = { '--width': `${width}px` } as React.CSSProperties;

  const mouseLeave = useCallback(() => {
    setFocusing(null);
  }, [focusing, setFocusing]);

  if (focusing !== id && targeting !== id) {
    return null;
  }

  return (
    <div
      className={classname}
      style={style}
      onMouseOut={mouseLeave}
    >
      {targeting && <Locked />}
      {!targeting && <Scoped />}
    </div>
  );
};
