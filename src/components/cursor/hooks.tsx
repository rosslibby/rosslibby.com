'use client';

import { useCallback, useContext, useEffect, useState } from 'react';
import { cursorCtx } from '@/cursor-context';

export const useCursor = () => {
  const { coordinates, down, targeting, _: {
    setCoordinates,
  } } = useContext(cursorCtx);
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

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCoordinates([e.clientX, e.clientY]);
  }, [setCoordinates]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return {
    down,
    released,
    targeting,
    x,
    y,
  };
};
