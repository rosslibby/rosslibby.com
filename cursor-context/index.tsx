'use client'

import { createContext, useState } from 'react';
import { CursorCtx } from '@/types';
import { useCursor } from './hooks';

const initialState: CursorCtx = {
  coordinates: [0, 0],
  down: false,
  targeting: null,
  _: {},
};
export const cursorCtx = createContext<CursorCtx>(initialState);

export const CursorProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [down, setDown] = useState(false);
  const [targeting, setTargeting] = useState<string | null>(null);

  useCursor(setCoordinates, setDown);

  const values = { coordinates, down, targeting };
  const fns = { setCoordinates, setDown, setTargeting };

  return (
    <cursorCtx.Provider value={{ ...values, _: fns }}>
      {children}
    </cursorCtx.Provider>
  );
};
