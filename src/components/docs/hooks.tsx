'use client';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Doc } from '@/types';
import { cursorCtx } from '@/cursor-context';
import { docsCtx } from '@/docs-context';

export const useDoc = () => {
  const { targeting } = useContext(cursorCtx);
  const { docs, loading, _: { setDocs, setLoading } } = useContext(docsCtx);
  const [markdown, setMarkdown] = useState('');
  const [current, setCurrent] = useState<Doc | null>(null);

  const selectDoc = useCallback(() => {
    const key = targeting as keyof typeof docs;
    const current = docs[key] ?? null;
    setCurrent(current);
  }, [docs, targeting, setCurrent]);

  useEffect(() => {
    selectDoc();
  }, [targeting, selectDoc]);

  const updateDoc = useCallback((id: string, changes: Partial<Doc>) => {
    setDocs((prev: Record<string, Doc>) => ({
      ...prev,
      [id]: { ...prev[id], ...changes },
    }));
  }, [setDocs]);

  const loadMarkdown = useCallback(async () => {
    if (!current || current.data) return;

    setLoading(true);
    const markdown = await fetch(current.url)
      .then((res) => res.text())
      .finally(() => setLoading(false));

    updateDoc(current.id, { data: markdown });
    setMarkdown(markdown);
    selectDoc();
  }, [current, loading, selectDoc, setLoading, setMarkdown, updateDoc]);

  useEffect(() => {
    if (!current?.data) {
      loadMarkdown();
    }
  }, [current]);

  return { current, markdown };
};
