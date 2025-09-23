'use client'

import { useCallback, useEffect, useState } from 'react';
import { Intro } from '@/components';
import styles from './header.module.scss';

export const Header = ({ layoutRef }: {
  layoutRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { sticky } = useStickyHeader(layoutRef);
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

const useStickyHeader = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [sticky, setSticky] = useState(false);

  const scrolling = useCallback((e: Event) => {
    const target = e.target as HTMLDivElement;
    const distance = target.scrollTop;

    if (distance > 32 && !sticky) {
      setSticky(true);
    } else if (distance < 16 && sticky) {
      setSticky(false);
    }
  }, [sticky, setSticky]);

  useEffect(() => {
    let current = ref.current || null;

    if (current) {
      current.addEventListener('scroll', scrolling);
    }

    return () => {
      if (current) {
        current.removeEventListener('scroll', scrolling);
        current = null;
      }
    };
  }, [ref, scrolling]);

  return { sticky };
};
