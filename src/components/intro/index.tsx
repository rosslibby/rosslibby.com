'use client'

import { useContext } from 'react';
import { useIntro } from './hooks';
import { viewfinderCtx } from '@/viewfinder-context';
import styles from './intro.module.scss';

export * from './hooks';

export const Intro = () => {
  const { presize } = useContext(viewfinderCtx);
  const { dimensions: [width, height], current, noun } = useIntro({
    targetId: 'intro',
    manualCycle: false,
  });

  const style = {
    height: height ? `${height}px` : 'auto',
    width: presize && width ? `${width}px` : 'auto',
  } as React.CSSProperties;

  return (
    <h1 className={styles.heading} style={style}>
      <span className={styles.name}>
        <span className={styles.givenName}>Ross</span>
        <span className={styles.familyName}>Libby</span>
      </span>
      <span className={styles.noun}>{current}</span>
    </h1>
  );
};
