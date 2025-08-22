'use client'

import { useIntro } from './hooks';
import styles from './intro.module.scss';

export * from './hooks';

export const Intro = () => {
  const { dimensions: [width, height], current, noun } = useIntro({
    targetId: 'intro',
    manualCycle: false,
  });

  const style = {
    height: height ? `${height}px` : 'auto',
    width: width ? `${width}px` : 'auto',
  } as React.CSSProperties;

  return (
    <h1 className={styles.heading} style={style}>
      Hey, I'm <span className={styles.noun}>{current}</span>.
    </h1>
  );
};
