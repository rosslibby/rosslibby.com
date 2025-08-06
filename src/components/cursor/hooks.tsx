'use client';

import { useCallback, useContext, useEffect, useState } from 'react';
import { cursorCtx } from '@/cursor-context';

export const useCursor = () => {
  const { coordinates, down, targeting } = useContext(cursorCtx);
  const [x, y] = coordinates;
  const [released, setReleased] = useState(false);

  const handleMouseUp = useCallback(() => {
    if (!down) {
      setReleased(true);
      setTimeout(() => {
        setReleased(false);
      }, 415);
    }
  }, [down, setReleased]);

  useEffect(() => {
    handleMouseUp();
  }, [down, handleMouseUp]);

  return {
    down,
    released,
    targeting,
    x,
    y,
  };
};
