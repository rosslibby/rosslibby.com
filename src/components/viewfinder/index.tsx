'use client';

import { MouseEvent, useCallback, useContext } from 'react';
import { viewfinderCtx } from '@/viewfinder-context';
import { useViewFinder } from './hooks';
import styles from './viewfinder.module.scss';

export const ViewFinder = () => {
  const { _: { setFocusing } } = useContext(viewfinderCtx);
  const { focusing, height, width, x, y } = useViewFinder();
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
      className={styles.viewfinder}
      style={style}
      onMouseOut={mouseLeave}
      onMouseLeave={() => console.log('mouse leave')}
    >
      {Array.from(
        { length: 4 },
        (_, i) => <Corner key={`corner-${i}`} />,
      )}
    </div>
  ) : null;
};

const Corner = () => <div className={styles.corner} />;
