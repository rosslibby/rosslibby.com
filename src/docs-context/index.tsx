'use client';
import { createContext, useState } from 'react';
import { Doc, DocsCtx } from '@/types';

export const docsCtx = createContext<DocsCtx>({
  loading: false,
  docs: {},
  _: {},
});

export const DocsProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState<Record<string, Doc>>({});

  const values = { docs, loading };
  const fns = { setDocs, setLoading };

  return (
    <docsCtx.Provider value={{ ...values, _: fns }}>
      {children}
    </docsCtx.Provider>
  );
}

export * from './hooks';
