'use client';

import { useContext, useEffect, useRef } from 'react';
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

const Code = () => {
  const preRef = useRef<HTMLPreElement>(null);
  const { targeting } = useContext(cursorCtx);
  const { insights } = useContext(viewfinderCtx);
  const { explanations, lines } = getExplanations(insights);

  useEffect(() => {
    if (!targeting || !preRef.current) return;

    console.log('Explanations:', explanations);
    console.log('Lines:', lines);

    const highlightLines = explanations.map(({ line }) => ({
      start: line,
      end: line,
      color: highlightColor,
    }));
    hljs.highlightAll();
  }, [explanations, lines, preRef, targeting]);

  if (!targeting) return null;

  return (
    <code className={styles.code}>
      <pre ref={preRef}>
        <code>{lines}</code>
      </pre>
    </code>
  );
};

function makeLine(code: string): Text {
  return document.createTextNode(
    code.length ? code : '\n'
  );
}

function getExplanations(insights: TargetInsight[]): {
  explanations: {
    explanation: string;
    line: number;
  }[];
  lines: string;
} {
  const lines: Text[] = [];
  const explanations: {
    explanation: string;
    line: number;
  }[] = [];
  let lineNumber = 1;
  insights.forEach(({ code, explanation }) => {
    lines.push(makeLine(code));
    if (!explanation) return;

    explanations.push({ explanation, line: lineNumber });
    lineNumber += code.length ? 1 : 2;
  });

  return { explanations, lines: lines.join('\n') };
}
