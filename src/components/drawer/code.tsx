'use client'

import { useRef } from 'react';
import { useDrawerCode } from './hooks';
import styles from './code.module.scss';

export const Code = () => {
  const codeRef = useRef<HTMLElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const { lines, targeting } = useDrawerCode(preRef, codeRef);

  if (!targeting) return null;

  return (
    <code className={styles.code}>
      <pre ref={preRef} className="language-javascript">
        <code className={styles.highlighted} ref={codeRef}>
          {lines.map((line) => `${line}\n`)}</code>
      </pre>
    </code>
  );
};
