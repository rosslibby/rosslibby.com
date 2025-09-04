'use client';
import { useRef } from 'react';
import { useBackgrounds, useCode } from './hooks';
import styles from './code.module.scss';

export const Code = ({ code, featured, language, setting }: {
  code: string;
  featured?: boolean;
  language?: string;
  setting?: number;
}) => {
  const codeRef = useRef<HTMLDivElement>(null);
  useCode({ ref: codeRef, input: code });
  const { changing, style } = useBackgrounds();

  const classname = [
    styles.wrapper,
    ...(featured ? [styles.featured] : []),
  ].join(' ');

  return (
    <div className={classname} data-theme="nuxt" style={style}>
      {changing && <div className={styles.fadebg} />}
      <div className={styles.frame}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
          </div>
          <div className={styles.title}>index.ts</div>
        </div>
        <div className={styles.body}>
          <div className={styles.code} ref={codeRef} />
        </div>
      </div>
    </div>
  );
};
