'use client';

import { RefObject } from 'react';
import styles from './viewfinder.module.scss';
import { useViewFinder } from './hooks';

export const ViewFinder = ({ targetRef }: {
  targetRef: RefObject<HTMLElement>;
}) => {
  const { height, width, x, y } = useViewFinder(targetRef);
  const style = {
    '--height': `${height}px`,
    '--width': `${width}px`,
    '--x': `${x}px`,
    '--y': `${y}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.viewfinder} style={style}>
      {Array.from(
        { length: 4 },
        () => <Corner />,
      )}
    </div>
  );
};

const Corner = () => <div className={styles.corner} />;
