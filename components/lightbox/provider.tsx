'use client';

import { useEffect, useState } from 'react';
import { lightboxCtx } from './context';

export const LightboxProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [details, setDetails] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement?.classList?.toggle('prevent-scroll', open);
  }, [open]);

  return <lightboxCtx.Provider value={{
    content,
    details,
    open,
    _: { setContent, setDetails, setOpen },
  }}>
    {children}
  </lightboxCtx.Provider>;
}
