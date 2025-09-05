'use client';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Doc } from '@/types';
import { cursorCtx } from '@/cursor-context';
import { docsCtx } from '@/docs-context';

export const useDocs = () => {
  const { targeting } = useContext(cursorCtx);
  const { docs, _: { setDocs } } = useContext(docsCtx);
  const [current, setCurrent] = useState<Doc | null>(null);

  const selectCurrent = useCallback(() => {
    const key = targeting as keyof typeof docs;
    const current = docs[key] ?? null;
    setCurrent(current);
  }, [docs, targeting, setCurrent]);

  useEffect(() => {
    selectCurrent();
  }, [targeting, selectCurrent]);

  const addDoc = useCallback((doc: Doc) => {
    setDocs((prev: Record<string, Doc>) => ({ ...prev, [doc.id]: doc }));
  }, [setDocs]);

  return { add: addDoc, current, docs };
};
