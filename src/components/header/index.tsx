'use client'

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Intro } from '@/components';
import styles from './header.module.css';

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { sticky } = useStickyHeader(headerRef);
  const classname = [
    styles.header,
    ...(sticky ? [styles.collapsed] : []),
  ].join(' ');

  return (
    <header className={classname} ref={headerRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/"><div className={styles.logo} /></Link>
          <Intro />
        </div>
      </div>
    </header>
  );
};

const useStickyHeader = (ref: React.RefObject<HTMLElement | null>) => {
  const [sticky, setSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(88);

  const updateHeaderHeight = useCallback(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [ref, setHeaderHeight]);

  useEffect(() => {
    if (ref.current) {
      updateHeaderHeight();
    }
  }, [ref, updateHeaderHeight])

  const scrolling = useCallback(() => {
    if (typeof window !== 'undefined' && ref.current) {
      const distance = window.scrollY;

      if (distance > headerHeight * .8 && !sticky) {
        setSticky(true);
      } else if (distance < headerHeight * .4 && sticky) {
        setSticky(false);
      }
    }
  }, [headerHeight, ref, sticky, setSticky]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
