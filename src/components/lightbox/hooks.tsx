'use client';

import { useCallback, useContext } from 'react';
import { lightboxCtx } from './context';

export const useLightbox = () => {
  const { _: { setContent, setDetails, setOpen } } = useContext(lightboxCtx);

  const trigger = useCallback((
    content: React.ReactNode,
    details: string = '',
  ) => {
    console.log(`#triggered:`, content, details)
    setContent(content);
    setDetails(details);
    setOpen(true);
  }, [setContent, setDetails, setOpen]);

  return { trigger };
}
