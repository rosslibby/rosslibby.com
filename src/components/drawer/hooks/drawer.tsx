'use client'

import { useCallback, useContext, useEffect } from 'react';
import { cursorCtx } from '@/cursor-context';

export const useDrawer = (
  drawerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const { targeting, _: { setTargeting } } = useContext(cursorCtx);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    const current = drawerRef.current as HTMLDivElement | null;
    const target = e.target as HTMLElement;

    if (!current || targeting === null) return;
    else console.log('click detected:', current, target, current.contains(target))

    if (!current.contains(target)) {
      setTargeting(null);
    }
  }, [drawerRef, targeting, setTargeting]);

  useEffect(() => {
    let current = drawerRef.current as HTMLDivElement | null;

    if (!current) return;

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      if (current) {
        document.removeEventListener('mousedown', handleOutsideClick);
        current = null;
      }
    };
  }, [drawerRef, handleOutsideClick]);

  return { targeting };
};
