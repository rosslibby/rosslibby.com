'use client';

import { createContext, useState } from 'react';
import { TargetInsight, TargetSpecs, ViewfinderCtx } from '@/types';
import { Cursor } from '@/components';

const initialState: ViewfinderCtx = {
  focusing: null,
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
  const [focusing, setFocusing] = useState<string | null>(null);
  const [insights, setInsights] = useState<TargetInsight[]>([]);
  const [targetSpecs, setTargetSpecs] = useState<TargetSpecs>(
    initialState.targetSpecs
  );
  const [viewfinder, setViewfinder] = useState(initialState.viewfinder);
  const values = { focusing, insights, targetSpecs, viewfinder };
  const fns = { setFocusing, setInsights, setTargetSpecs, setViewfinder };

  return (
    <>
      <viewfinderCtx.Provider value={{ ...values, _: fns }}>
        {children}
      </viewfinderCtx.Provider>
      <Cursor />
    </>
  );
};
