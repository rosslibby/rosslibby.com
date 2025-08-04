'use client';

import { createContext, useState } from 'react';
import { TargetInsight, TargetSpecs, ViewfinderCtx } from '@/types';
import { Cursor } from '@/components';

const initialState: ViewfinderCtx = {
  insights: [],
  viewfinder: false,
  targetSpecs: {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  },
  _: {},
};
export const viewfinderCtx = createContext<ViewfinderCtx>(initialState);

export const ViewfinderProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [insights, setInsights] = useState<TargetInsight[]>([]);
  const [targetSpecs, setTargetSpecs] = useState<TargetSpecs>(
    initialState.targetSpecs
  );
  const [viewfinder, setViewfinder] = useState(initialState.viewfinder);
  const values = { insights, targetSpecs, viewfinder };
  const fns = { setInsights, setTargetSpecs, setViewfinder };

  return (
    <>
      <viewfinderCtx.Provider value={{ ...values, _: fns }}>
        {children}
      </viewfinderCtx.Provider>
      <Cursor />
    </>
  );
};
