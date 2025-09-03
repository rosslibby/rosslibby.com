'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { codeToHtml } from 'shiki';
import styles from './code.module.scss';

const bgs = [
  'linear-gradient(45deg, rgb(65, 89, 208) 0%, rgb(200, 79, 192) 50%, rgb(255, 205, 112) 100%)',
  'linear-gradient(45deg, rgb(7, 174, 234) 0%, rgb(42, 243, 221) 50%, rgb(43, 245, 152) 100%)',
  'linear-gradient(45deg, rgb(250, 218, 97) 0%, rgb(255, 145, 136) 50%, rgb(255, 90, 205) 100%)',
  'linear-gradient(45deg, rgb(35, 212, 253) 0%, rgb(58, 152, 240) 50%, rgb(183, 33, 255) 100%)',
  'linear-gradient(45deg, rgb(250, 97, 218) 0%, rgb(255, 136, 145) 50%, rgb(255, 205, 90) 100%)',
  'linear-gradient(45deg, rgb(53, 129, 221) 0%, rgb(162, 255, 255) 50%, rgb(253, 255, 164) 100%)',
  'linear-gradient(45deg, rgb(217, 179, 226) 0%, rgb(157, 84, 213) 50%, rgb(82, 44, 164) 100%)',
  'linear-gradient(45deg, rgb(134, 251, 201) 0%, rgb(105, 255, 110) 50%, rgb(181, 255, 114) 100%)',
  'linear-gradient(45deg, rgb(65, 94, 208) 0%, rgb(121, 113, 219) 50%, rgb(216, 134, 230) 100%)',
  'linear-gradient(45deg, rgb(68, 202, 255) 0%, rgb(223, 50, 198) 50%, rgb(255, 102, 63) 100%)',
];

export const Code = ({ code, featured, language, setting }: {
  code: string;
  featured?: boolean;
  language?: string;
  setting?: number;
}) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const [highlighted, setHighlighted] = useState('');
  const [background, setBackground] = useState(setting ?? 8);
  const [prevbg, setPrevbg] = useState(background);
  const bg = bgs[background];

  const classname = [
    styles.wrapper,
    ...(featured ? [styles.featured] : []),
  ].join(' ');

  const highlight = useCallback(async () => {
    const highlighted = await codeToHtml(code, {
      lang: language ?? 'typescript',
      theme: 'github-dark',
    });
    setHighlighted(highlighted);
  }, [code, language, setHighlighted]);

  const changeSetting = useCallback((setting?: number) => {
    if (setting) {
      setBackground(setting);
    } else {
      const settings = Array.from({ length: 10 }, (_,i) => i).filter((n) => n !== background);
      const selection = Math.floor(Math.random() * settings.length);
      setPrevbg(background);
      setBackground(settings[selection]);
    }
  }, [background, setPrevbg, setBackground]);

  useEffect(() => {
    setTimeout(() => setPrevbg(background), 1600);
  }, [background, prevbg]);

  useEffect(() => {
    let current = codeRef.current || null;

    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === 'b') {
        changeSetting();
      }
    };

    if (current) {
      document.addEventListener('keydown', handleKeys);
    }

    return () => {
      if (current) {
        document.removeEventListener('keydown', handleKeys);
        current = null;
      }
    }
  }, [codeRef, changeSetting]);

  const renderCode = useCallback(() => {
    if (!codeRef.current) return;
    codeRef.current.innerHTML = highlighted;
  }, [codeRef, highlighted]);

  useEffect(() => {
    highlight();
  });

  useEffect(() => {
    renderCode();
  }, [highlighted]);

  return (
    <div className={classname} data-theme="nuxt"
      style={{
        '--bg': bg,
        '--prev-bg': bgs[prevbg],
      } as React.CSSProperties}
    >
      {background !== prevbg && <div className={styles.fadebg} />}
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
