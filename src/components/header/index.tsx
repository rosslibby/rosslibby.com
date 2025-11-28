'use client'

import { useCallback, useEffect, useState } from 'react';
import { Intro } from '@/components';
import styles from './header.module.css';

export const Header = () => {
  const { sticky } = useStickyHeader();
  const classname = [
    styles.header,
    ...(sticky ? [styles.collapsed] : []),
  ].join(' ');

  return (
    <header className={classname}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo} />
          <Intro />
        </div>
      </div>
    </header>
  );
};

const useStickyHeader = () => {
  const [sticky, setSticky] = useState(false);

  const scrolling = useCallback(() => {
    if (typeof window !== 'undefined') {
      const distance = window.scrollY;

      if (distance > 32 && !sticky) {
        setSticky(true);
      } else if (distance < 16 && sticky) {
        setSticky(false);
      }
    }
  }, [sticky, setSticky]);

  useEffect(() => {
    console.log(`Header is now ${sticky ? 'sticky' : 'not sticky'}`)
  }, [sticky])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Setting up window')
      window.addEventListener('scroll', scrolling);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', scrolling);
      }
    };
  }, [scrolling]);

  return { sticky };
};
