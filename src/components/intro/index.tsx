'use client';

import { useIntro } from './hooks';
import styles from './intro.module.scss';

export * from './hooks';

export const Intro = () => {
  const { noun } = useIntro();

  return (
    <h1 className={styles.heading}>
      Hey, I'm <span className={styles.noun}>{noun}</span>.
    </h1>
  );
};
