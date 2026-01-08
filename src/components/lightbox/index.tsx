'use client';

import { useCallback, useContext, useRef, useState } from 'react';
import { lightboxCtx } from './context';
import styles from './lightbox.module.css';

export * from './context';
export * from './provider';

export const Lightbox = () => {
  const { content, details, open, _: { setOpen } } = useContext(lightboxCtx);
  const lightboxRef = useRef<HTMLDivElement>(null);

  if (!open) return null;
  return (
    <div className={styles.lightbox} ref={lightboxRef}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>{details}</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
        {content}
      </div>
    </div>
  )
}
