'use client';
import { useCallback, useContext } from 'react';
import { Doc } from '@/types';
import { docsCtx } from '@/docs-context';

export const useDocs = () => {
  const { docs, _: { setDocs } } = useContext(docsCtx);

  const addDoc = useCallback((doc: Doc) => {
    if (!docs[doc.id]) {
      setDocs({...docs, [doc.id]: doc });
    }
  }, [docs, setDocs]);

  return { add: addDoc };
};
