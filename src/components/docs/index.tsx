'use client';
import { useRef } from 'react';
import { useDoc } from './hooks';
import styles from './docs.module.css';

export const Docs = () => {
  const mdref = useRef<HTMLDivElement>(null);
  useDoc(mdref);

  return (
    <div className={styles.doc + ' markdown-body'} ref={mdref} />
  );
};
