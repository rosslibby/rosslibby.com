'use client'

import { createContext, useState } from 'react';
import { TargetInsight, ViewfinderCtx } from '@/types';

const initialState: ViewfinderCtx = {
  focusing: null,
  insights: [],
  presize: false,
  viewfinder: false,
  _: {},
};
export const viewfinderCtx = createContext<ViewfinderCtx>(initialState);

export const ViewfinderProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [presize, setPresize] = useState(false);
  const [focusing, setFocusing] = useState<string | null>(null);
  const [insights, setInsights] = useState<TargetInsight[]>([]);
  const [viewfinder, setViewfinder] = useState(initialState.viewfinder);
  const values = { focusing, insights, presize, viewfinder };
  const fns = { setFocusing, setInsights, setPresize, setViewfinder };

  return (
    <>
      <viewfinderCtx.Provider value={{ ...values, _: fns }}>
        {children}
      </viewfinderCtx.Provider>
    </>
  );
};
