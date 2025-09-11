'use client';
import { useRef } from 'react';
import { useBackgrounds, useCode } from './hooks';
import styles from './code.module.scss';
import feature from '../feature/feature.module.scss';
import { Feature } from '../feature';

export const Code = ({ code, featured, language, background, title }: {
  code: string;
  featured?: boolean;
  language?: string;
  background?: number;
  title?: string;
}) => {
  const codeRef = useRef<HTMLDivElement>(null);
  useCode({ ref: codeRef, input: code, language });
  const { changing, style } = useBackgrounds(background);

  const classname = [
    styles.wrapper,
    ...(featured ? [styles.featured] : []),
  ].join(' ');

  return (
    <div className={classname} data-theme="nuxt-contrast" style={style}>
      {changing && <div className={styles.fadebg} />}
      {/* <Feature> */}
      {/* <div className={feature._container}>
        <div className={feature.background} />
        <div className={feature.floating}>
          <div className={feature.content}> */}
            <div className={styles.frame}>
              <div className={styles.header}>
                <div className={styles.buttons}>
                  <div className={styles.button}></div>
                  <div className={styles.button}></div>
                  <div className={styles.button}></div>
                </div>
                <div className={styles.title}>{title || 'index.ts'}</div>
              </div>
              <div className={styles.body}>
                <div className={styles.code} ref={codeRef} />
              </div>
            </div>
          {/* </div>
        </div>
      </div> */}
      {/* </Feature> */}
    </div>
  );
};
