'use client';

import { useCallback, useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

export const useCode = ({ input, language, ref }: {
  input: string;
  language?: string;
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const [code, setCode] = useState('');

  const highlight = useCallback(async () => {
    const highlighted = await codeToHtml(input, {
      lang: language ?? 'typescript',
      theme: 'github-dark',
    });
    setCode(highlighted);
  }, [input, language, setCode]);

  useEffect(() => {
    highlight();
  });

  const renderCode = useCallback(() => {
    if (!ref.current) return;
    ref.current.innerHTML = code;
  }, [ref, code]);

  useEffect(() => {
    renderCode();
  }, [code]);
};

const gradients = [
  ['rgb(65, 89, 208)','rgb(200, 79, 192)','rgb(255, 205, 112)'],
  ['rgb(7, 174, 234)','rgb(42, 243, 221)','rgb(43, 245, 152)'],
  ['rgb(250, 218, 97)','rgb(255, 145, 136)','rgb(255, 90, 205)'],
  ['rgb(35, 212, 253)','rgb(58, 152, 240)','rgb(183, 33, 255)'],
  ['rgb(250, 97, 218)','rgb(255, 136, 145)','rgb(255, 205, 90)'],
  ['rgb(53, 129, 221)','rgb(162, 255, 255)','rgb(253, 255, 164)'],
  ['rgb(217, 179, 226)','rgb(157, 84, 213)','rgb(82, 44, 164)'],
  ['rgb(134, 251, 201)','rgb(105, 255, 110)','rgb(181, 255, 114)'],
  ['rgb(65, 94, 208)','rgb(121, 113, 219)','rgb(216, 134, 230)'],
  ['rgb(68, 202, 255)','rgb(223, 50, 198)','rgb(255, 102, 63)'],
];

export const useBackgrounds = (initialGradient: number = 8) => {
  const [gradient, setGradient] = useState(initialGradient);
  const [previous, setPrevious] = useState(gradient);
  const currentBg = makeGradient(gradient);
  const previousBg = makeGradient(previous);

  const change = useCallback((index?: number) => {
    if (typeof index !== 'undefined') {
      setGradient(index);
    } else {
      const available = Array.from(
        { length: gradients.length },
        (_, i) => i
      ).filter((_, i) => i !== gradient);
      const idx = Math.floor(Math.random() * available.length);
      setPrevious(gradient);
      setGradient(idx);
    }
  }, [gradient, setGradient, setPrevious]);

  useEffect(() => {
    setTimeout(() => setPrevious(gradient), 1600);
  }, [gradient, previous]);

  const style = {
    '--bg': currentBg,
    '--prev-bg': previousBg,
  } as React.CSSProperties;

  return { changing: previous !== gradient, style };
};

function makeGradient(index: number): string {
  const [a,b,c] = gradients[index];
  return `linear-gradient(45deg, ${a} 0%, ${b} 50%, ${c} 100%)`
}
