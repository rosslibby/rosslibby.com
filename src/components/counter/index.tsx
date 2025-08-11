'use client';

import { useState } from 'react';
import styles from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const label = `Click counter (${count})`;

  const handleClick = () => setCount((count) => count + 1);

  return (
    <button className={styles.counter} onClick={handleClick}>
      {label}
    </button>
  );
};
