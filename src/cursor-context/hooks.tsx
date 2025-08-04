'use client';

import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

export const useCursor = (
  setCoordinates: Dispatch<SetStateAction<[number, number]>>,
  setDown: Dispatch<SetStateAction<boolean>>,
) => {
  const toggleMouseDown = useCallback((e: MouseEvent) => {
    setDown((prev) => !prev);
  }, [setDown]);
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCoordinates([e.clientX, e.clientY]);
  }, [setCoordinates]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', toggleMouseDown);
    document.addEventListener('mouseup', toggleMouseDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', toggleMouseDown);
      document.removeEventListener('mouseup', toggleMouseDown);
    };
  }, [handleMouseMove]);
};
