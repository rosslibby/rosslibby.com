'use client'

import { useCallback, useEffect, useState } from 'react';

export const useViewfinder = (
  target: React.RefObject<HTMLDivElement | null>,
) => {
  const initialWidth = target.current?.getBoundingClientRect().width || 0;
  const [width, setWidth] = useState(initialWidth);

  const updateWidth = useCallback((width: number) => {
    setWidth(width);
  }, [target, setWidth]);

  useEffect(() => {
    let current: HTMLDivElement | null = target.current || null;

    if (!current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === current) {
          const width = entry.contentRect.width;
          updateWidth(width);
        }
      }
    });

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
        current = null;
      }
    };
  }, [target]);

  return { width };
};
