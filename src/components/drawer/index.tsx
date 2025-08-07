'use client';

import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import { viewfinderCtx } from '@/viewfinder-context';
import { TargetInsight } from '@/types';
import { cursorCtx } from '@/cursor-context';
import styles from './drawer.module.scss';

const highlightColor = '#4482ff30';

export const Drawer = () => {
  const { targeting } = useContext(cursorCtx);
  const attributes = {
    ...(targeting ? { 'data-target-id': targeting } : {}),
  };

  return (
    <div className={styles.drawer} {...attributes}>
      <div className={styles.component}>
        <div></div>
      </div>
      <Code />
    </div>
  );
};

const Content = () => {
  const { targeting } = useContext(cursorCtx);
  const { insights } = useContext(viewfinderCtx);

  if (!targeting) return null;

  const target = document.querySelector(
    `[data-component-id="${targeting}"]`
  ) as HTMLElement;
  const duplicate = document.createElement(target.nodeName);
  duplicate.className = target.className;
  duplicate.innerHTML = target.innerHTML;
};

type Explanation = {
  explanation: string;
  line: number;
};
type exp = {
  explanations: {
    explanation: string;
    line: number;
  }[];
  lines: string[];
}

const Code = () => {
  const codeRef = useRef<HTMLElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const { targeting } = useContext(cursorCtx);
  const { insights } = useContext(viewfinderCtx);
  const [parsedTarget, setParsedTarget] = useState<string | null>(targeting);
  const [explanations, setExplanations] = useState<Explanation[]>([]);
  const [lines, setLines] = useState<string[]>([]);
  const [hlLines, setHlLines] = useState<string[]>([]);
  const [hlels, setHlels] = useState<React.ReactNode[]>([]);
  const [ready, setReady] = useState(false);

  const parseCode = useCallback((targeting: string | null) => {
    const { explanations, lines } = getExplanations(insights);

    setExplanations(explanations);
    setLines(lines);
    setParsedTarget(targeting);
  }, [insights, setExplanations, setLines, setParsedTarget]);

  useEffect(() => {
    if (targeting === null || !preRef.current) {
      return;
    } else if (targeting === parsedTarget) {
      return;
    }

    parseCode(targeting);
  }, [parsedTarget, preRef, targeting]);

  const highlight = useCallback((container: HTMLPreElement) => {
    const code = container.querySelector('code') as HTMLElement;
    console.log('Explanations:', explanations);
    console.log('Lines:', lines);

    const highlightLines = explanations.map(({ line }) => ({
      start: line,
      end: line,
      color: highlightColor,
    }));
    hljs.highlightAll();
    setTimeout(() => {
      const codeLines = highlighter(code);
      setHlLines(codeLines);
      setReady(true);
    }, 100);
  }, [explanations, lines, setHlLines, setReady]);

  const uhlll = useCallback(() => {
    console.log(explanations)
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
    uhlll();
  }, [ready]);

  useEffect(() => {
    if (parsedTarget === null || !preRef.current) {
      console.log('exiting hl')
      return;
    } else {
      console.log('running hl')
    }

    highlight(preRef.current);
  }, [highlight, preRef, parsedTarget]);

  if (!targeting) return null;

  return (
    <code className={styles.code}>
      <pre ref={preRef} className="language-javascript">
        <code
          className={styles.highlighted}
          ref={codeRef}
        >
          {lines.map((line) => `${line}\n`)}</code>
      </pre>
    </code>
  );
};

function makeLine(code: string): string {
  return code.length ? code : '\n';
}

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
    lines.push(makeLine(code));
    if (!explanation) return;

    explanations.push({ explanation, line: lineNumber });
    lineNumber += code.length ? 1 : 2;
  });

  console.log('created:', lines)
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
