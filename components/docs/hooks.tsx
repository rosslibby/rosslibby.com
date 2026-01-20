'use client';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Doc } from '@/types';
import { cursorCtx } from '@/cursor-context';
import { docsCtx } from '@/docs-context';

export const useDoc = (ref: React.RefObject<HTMLDivElement | null>) => {
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
  }, [targeting]);

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
    const html = await fetch(`https://api.github.com/markdown`, {
      method: 'POST',
      headers: {
        Accept: 'text/html',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({text:markdown}),
    }).then((res) => res.text());

    updateDoc(current.id, { data: html });
    setMarkdown(html);
    selectDoc();
  }, [current, loading, selectDoc, setLoading, setMarkdown, updateDoc]);

  const render = useCallback(() => {
    if (ref.current) {
      ref.current.innerHTML = markdown;
    }
  }, [ref, markdown]);

  useEffect(() => {
    render();
  }, [markdown]);

  useEffect(() => {
    if (!current?.data) {
      loadMarkdown();
    }
  }, [current]);

  return { current, markdown };
};
