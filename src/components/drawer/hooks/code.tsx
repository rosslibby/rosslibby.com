'use client'

import {
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import hljs from 'highlight.js';
import { Explanation, TargetInsight } from '@/types';
import { viewfinderCtx } from '@/viewfinder-context';
import { cursorCtx } from '@/cursor-context';
import styles from '../code.module.scss';

export const useDrawerCode = (
  preRef: RefObject<HTMLPreElement | null>,
  codeRef: RefObject<HTMLElement | null>,
) => {
  const { targeting } = useContext(cursorCtx);
  const { insights } = useContext(viewfinderCtx);
  const [parsedTarget, setParsedTarget] = useState<string | null>(targeting);
  const [explanations, setExplanations] = useState<Explanation[]>([]);
  const [lines, setLines] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  const parseCode = useCallback((targeting: string | null) => {
    const { explanations, lines } = getExplanations(insights);

    setExplanations(explanations);
    setLines(lines);
    setParsedTarget(targeting);
  }, [insights, setExplanations, setLines, setParsedTarget]);

  const highlight = useCallback((container: HTMLPreElement) => {
    const code = container.querySelector('code') as HTMLElement;
    code.removeAttribute('data-highlighted');
    // hljs.highlightAll();
    highlighter(code);
    setReady(true);
  }, [explanations, lines, setReady]);

  const runHighligher = useCallback(() => {
    const code = codeRef.current;
    if (!code) {
      return;
    }
    const content = code.innerHTML.match(
      /([ \S]*\n|[ \S]*$)/gm,
    )?.reduce((acc: string[], line) => {
      if (!acc.length) return [...acc, line];
      if (line === '\n') {
        const last = acc[acc.length - 1];

        if (last === line) {
          return acc;
        }
      }
      return [...acc, line]
    }, []).map(
      (line, i) => {
        const exp = explanations.find(({ line }) => line === i);
        const classname = [
          styles.hlcode,
          ...(exp ? [styles.highlight] : [] ),
        ].join(' ');
        const attrs = exp ? 'data-unread="true"' : '';
        return `<span class="${classname}" ${attrs}>${line}</span>`;
      }
    ).join('\n') as string;
    code.innerHTML = content;
  }, [codeRef, explanations]);

  useEffect(() => {
    runHighligher();
  }, [ready]);

  useEffect(() => {
    if (targeting === null || !preRef.current) {
      return;
    } else if (targeting === parsedTarget) {
      return;
    }

    parseCode(targeting);
  }, [parsedTarget, preRef, targeting]);

  useEffect(() => {
    if (parsedTarget === null || !preRef.current) {
      return;
    }

    highlight(preRef.current);
  }, [highlight, preRef, parsedTarget]);

  return { lines, targeting };
};

function getExplanations(insights: TargetInsight[]): {
  explanations: {
    explanation: string;
    line: number;
  }[];
  lines: string[];
} {
  const lines: string[] = [];
  const explanations: {
    explanation: string;
    line: number;
  }[] = [];
  let lineNumber = 0;
  insights.forEach(({ code, explanation }) => {
    lines.push(code.length ? code : '\n');
    if (!explanation) return;

    explanations.push({ explanation, line: lineNumber });
    lineNumber += code.length ? 1 : 2;
  });

  return { explanations, lines };
}

function highlighter(container: HTMLElement): string[] {
  const lines = container.innerHTML
    .match(/([ \S]*\n|[ \S]*$)/gm)
    ?.reduce((acc: string[], line) => {
      if (!acc.length) return [...acc, line];
      if (line === '\n') {
        const last = acc[acc.length - 1];

        if (last === line) {
          return acc;
        }
      }
      return [...acc, line]
    }, []);

  return lines as string[];
}
