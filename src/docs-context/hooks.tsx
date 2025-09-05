'use client';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Doc } from '@/types';
import { cursorCtx } from '@/cursor-context';
import { docsCtx } from '@/docs-context';

export const useDocs = () => {
  const { docs, _: { setDocs } } = useContext(docsCtx);
  // const [current, setCurrent] = useState<Doc | null>(null);

  // const selectCurrent = useCallback(() => {
  //   const key = targeting as keyof typeof docs;
  //   const current = docs[key] ?? null;
  //   setCurrent(current);
  // }, [docs, targeting, setCurrent]);

  // useEffect(() => {
  //   selectCurrent();
  // }, [targeting]);

  const addDoc = useCallback((doc: Doc) => {
    console.log('doc to set:', doc);
    if (!docs[doc.id]) {
      console.log(`__setting doc: ${doc.id}`);
      setDocs({...docs, [doc.id]: doc });
    } else {
      console.log(`conflict: doc with id ${doc.id} already exists!`);
    }
    // setDocs((prev: Record<string, Doc>) => ({ ...prev, [doc.id]: doc }));
  }, [docs, setDocs]);

  return { add: addDoc };
};
