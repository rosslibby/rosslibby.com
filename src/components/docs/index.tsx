'use client';
import Markdown from 'react-markdown';
import { useDoc } from './hooks';
import styles from './docs.module.scss';

export const Docs = () => {
  const { markdown } = useDoc();

  return (
    <div className={styles.doc}>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};
