'use client';

import { createContext } from 'react';

export const lightboxCtx = createContext<{
  content: React.ReactNode | null;
  details: string;
  open: boolean;
  _: Record<string, React.Dispatch<React.SetStateAction<any>>>;
}>({ content: null, details: '', open: false, _: {} });
