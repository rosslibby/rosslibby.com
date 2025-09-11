'use client'

import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

export const useCursor = (
  setCoordinates: Dispatch<SetStateAction<[number, number]>>,
  setDown: Dispatch<SetStateAction<boolean>>,
) => {
  const toggleMouseDown = useCallback((e: MouseEvent) => {
    setDown((prev) => !prev);
  }, [setDown]);

  const mouseMove = (e: MouseEvent) => setCoordinates([
    e.clientX,
    e.clientY,
  ]);

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mousedown', toggleMouseDown);
    document.addEventListener('mouseup', toggleMouseDown);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mousedown', toggleMouseDown);
      document.removeEventListener('mouseup', toggleMouseDown);
    };
  }, [toggleMouseDown]);
};
