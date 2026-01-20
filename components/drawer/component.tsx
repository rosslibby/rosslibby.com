'use client'

import { useRef } from 'react';
import { useDrawerComponent } from './hooks';
import styles from './drawer.module.css';

export const Component = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { clone } = useDrawerComponent();

  if (!clone) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.component}
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: clone.outerHTML }}
      />
    </div>
  );
};
