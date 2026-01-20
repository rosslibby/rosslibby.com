'use client'

import { useCallback, useContext, useEffect, useState } from 'react';
import { cursorCtx } from '@/cursor-context';

export const useDrawerComponent = () => {
  const [clone, setClone] = useState<HTMLElement | null>(null);
  const { targeting } = useContext(cursorCtx);

  const resetClone = useCallback(() => {
    if (clone) {
      setClone(null);
    }
  }, [clone, setClone]);

  const cloneTarget = useCallback(() => {
    if (targeting === null) {
      resetClone();
      return;
    }

    const targetId = targeting;
    const target = document.querySelector(
      `[data-target-id="${targetId}"]`
    ) as HTMLElement;

    if (!target) {
      return;
    }

    const clone = document.createElement(target.nodeName);
    clone.className = target.className;
    clone.innerHTML = target.innerHTML;
    setClone(clone);
  }, [targeting, resetClone, setClone]);

  useEffect(() => {
    cloneTarget();
  }, [targeting]);

  return { clone, targeting };
};
