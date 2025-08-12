'use client'

import { useIntro } from './hooks';
import styles from './intro.module.scss';

export * from './hooks';

export const Intro = () => {
  const { dimensions: [width, height], noun } = useIntro({
    targetId: 'intro',
    manualCycle: false,
  });

  const style = {
    height: height ? `${height}px` : 'auto',
    width: width ? `${width}px` : 'auto',
  } as React.CSSProperties;

  return (
    <h1 className={styles.heading} style={style}>
      Hey, I'm <span className={styles.noun}>{noun}</span>.
    </h1>
  );
};
