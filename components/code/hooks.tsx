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

const _gradients = [
  ['rgb(65, 89, 208)','rgb(200, 79, 192)','rgb(255, 205, 112)'],
  ['rgb(7, 174, 234)','#07aeea','rgb(42, 243, 221)','rgb(43, 245, 152)'],
  ['rgb(250, 218, 97)','rgb(255, 145, 136)','rgb(255, 90, 205)'],
  ['rgb(35, 212, 253)','rgb(58, 152, 240)','rgb(183, 33, 255)'],
  ['rgb(250, 97, 218)','rgb(255, 136, 145)','rgb(255, 205, 90)'],
  ['rgb(53, 129, 221)','rgb(162, 255, 255)','rgb(253, 255, 164)'],
  ['rgb(217, 179, 226)','rgb(157, 84, 213)','rgb(82, 44, 164)'],
  ['rgb(134, 251, 201)','rgb(105, 255, 110)','rgb(181, 255, 114)'],
  ['rgb(65, 94, 208)','rgb(121, 113, 219)','rgb(216, 134, 230)'],
  ['rgb(68, 202, 255)','rgb(223, 50, 198)','rgb(255, 102, 63)'],
];
const __gradients = [
  [ '#4159d0', '#c84fc0', '#ffcd70' ],
  [ '#07aeea', '#2af3dd', '#2bf598' ],
  [ '#fada61', '#ff9188', '#ff5acd' ],
  [ '#23d4fd', '#3a98f0', '#b721ff' ],
  [ '#fa61da', '#ff8891', '#ffcd5a' ],
  [ '#3581dd', '#a2ffff', '#fdffa4' ],
  [ '#d9b3e2', '#9d54d5', '#522ca4' ],
  // [ '#86fbc9', '#69ff6e', '#b5ff72' ],
  [ '#415ed0', '#7971db', '#d886e6' ],
  [ '#44caff', '#df32c6', '#ff663f' ]
];

const complexGradients = [
  'repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))',
  'linear-gradient(131deg, rgba(186, 186, 186, 0.01) 0%, rgba(186, 186, 186, 0.01) 16.667%,rgba(192, 192, 192, 0.01) 16.667%, rgba(192, 192, 192, 0.01) 33.334%,rgba(48, 48, 48, 0.01) 33.334%, rgba(48, 48, 48, 0.01) 50.001000000000005%,rgba(33, 33, 33, 0.01) 50.001%, rgba(33, 33, 33, 0.01) 66.668%,rgba(182, 182, 182, 0.01) 66.668%, rgba(182, 182, 182, 0.01) 83.33500000000001%,rgba(211, 211, 211, 0.01) 83.335%, rgba(211, 211, 211, 0.01) 100.002%),linear-gradient(148deg, rgba(48, 48, 48, 0.01) 0%, rgba(48, 48, 48, 0.01) 16.667%,rgba(178, 178, 178, 0.01) 16.667%, rgba(178, 178, 178, 0.01) 33.334%,rgba(192, 192, 192, 0.01) 33.334%, rgba(192, 192, 192, 0.01) 50.001000000000005%,rgba(237, 237, 237, 0.01) 50.001%, rgba(237, 237, 237, 0.01) 66.668%,rgba(194, 194, 194, 0.01) 66.668%, rgba(194, 194, 194, 0.01) 83.33500000000001%,rgba(227, 227, 227, 0.01) 83.335%, rgba(227, 227, 227, 0.01) 100.002%),linear-gradient(138deg, rgba(146, 146, 146, 0.03) 0%, rgba(146, 146, 146, 0.03) 25%,rgba(33, 33, 33, 0.03) 25%, rgba(33, 33, 33, 0.03) 50%,rgba(46, 46, 46, 0.03) 50%, rgba(46, 46, 46, 0.03) 75%,rgba(172, 172, 172, 0.03) 75%, rgba(172, 172, 172, 0.03) 100%),linear-gradient(38deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 16.667%,rgba(28, 28, 28, 0.03) 16.667%, rgba(28, 28, 28, 0.03) 33.334%,rgba(236, 236, 236, 0.03) 33.334%, rgba(236, 236, 236, 0.03) 50.001000000000005%,rgba(3, 3, 3, 0.03) 50.001%, rgba(3, 3, 3, 0.03) 66.668%,rgba(207, 207, 207, 0.03) 66.668%, rgba(207, 207, 207, 0.03) 83.33500000000001%,rgba(183, 183, 183, 0.03) 83.335%, rgba(183, 183, 183, 0.03) 100.002%),linear-gradient(145deg, rgba(20, 20, 20, 0.02) 0%, rgba(20, 20, 20, 0.02) 20%,rgba(4, 4, 4, 0.02) 20%, rgba(4, 4, 4, 0.02) 40%,rgba(194, 194, 194, 0.02) 40%, rgba(194, 194, 194, 0.02) 60%,rgba(34, 34, 34, 0.02) 60%, rgba(34, 34, 34, 0.02) 80%,rgba(71, 71, 71, 0.02) 80%, rgba(71, 71, 71, 0.02) 100%),linear-gradient(78deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(95, 95, 95, 0.02) 20%, rgba(95, 95, 95, 0.02) 40%,rgba(71, 71, 71, 0.02) 40%, rgba(71, 71, 71, 0.02) 60%,rgba(7, 7, 7, 0.02) 60%, rgba(7, 7, 7, 0.02) 80%,rgba(130, 130, 130, 0.02) 80%, rgba(130, 130, 130, 0.02) 100%),linear-gradient(293deg, rgba(213, 213, 213, 0.03) 0%, rgba(213, 213, 213, 0.03) 20%,rgba(220, 220, 220, 0.03) 20%, rgba(220, 220, 220, 0.03) 40%,rgba(146, 146, 146, 0.03) 40%, rgba(146, 146, 146, 0.03) 60%,rgba(57, 57, 57, 0.03) 60%, rgba(57, 57, 57, 0.03) 80%,rgba(120, 120, 120, 0.03) 80%, rgba(120, 120, 120, 0.03) 100%),linear-gradient(90deg, rgb(225, 15, 180),rgb(78, 198, 243))',
  'linear-gradient(131deg, rgba(186, 186, 186, 0.01) 0%, rgba(186, 186, 186, 0.01) 16.667%,rgba(192, 192, 192, 0.01) 16.667%, rgba(192, 192, 192, 0.01) 33.334%,rgba(48, 48, 48, 0.01) 33.334%, rgba(48, 48, 48, 0.01) 50.001000000000005%,rgba(33, 33, 33, 0.01) 50.001%, rgba(33, 33, 33, 0.01) 66.668%,rgba(182, 182, 182, 0.01) 66.668%, rgba(182, 182, 182, 0.01) 83.33500000000001%,rgba(211, 211, 211, 0.01) 83.335%, rgba(211, 211, 211, 0.01) 100.002%),linear-gradient(148deg, rgba(48, 48, 48, 0.01) 0%, rgba(48, 48, 48, 0.01) 16.667%,rgba(178, 178, 178, 0.01) 16.667%, rgba(178, 178, 178, 0.01) 33.334%,rgba(192, 192, 192, 0.01) 33.334%, rgba(192, 192, 192, 0.01) 50.001000000000005%,rgba(237, 237, 237, 0.01) 50.001%, rgba(237, 237, 237, 0.01) 66.668%,rgba(194, 194, 194, 0.01) 66.668%, rgba(194, 194, 194, 0.01) 83.33500000000001%,rgba(227, 227, 227, 0.01) 83.335%, rgba(227, 227, 227, 0.01) 100.002%),linear-gradient(138deg, rgba(146, 146, 146, 0.03) 0%, rgba(146, 146, 146, 0.03) 25%,rgba(33, 33, 33, 0.03) 25%, rgba(33, 33, 33, 0.03) 50%,rgba(46, 46, 46, 0.03) 50%, rgba(46, 46, 46, 0.03) 75%,rgba(172, 172, 172, 0.03) 75%, rgba(172, 172, 172, 0.03) 100%),linear-gradient(38deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 16.667%,rgba(28, 28, 28, 0.03) 16.667%, rgba(28, 28, 28, 0.03) 33.334%,rgba(236, 236, 236, 0.03) 33.334%, rgba(236, 236, 236, 0.03) 50.001000000000005%,rgba(3, 3, 3, 0.03) 50.001%, rgba(3, 3, 3, 0.03) 66.668%,rgba(207, 207, 207, 0.03) 66.668%, rgba(207, 207, 207, 0.03) 83.33500000000001%,rgba(183, 183, 183, 0.03) 83.335%, rgba(183, 183, 183, 0.03) 100.002%),linear-gradient(145deg, rgba(20, 20, 20, 0.02) 0%, rgba(20, 20, 20, 0.02) 20%,rgba(4, 4, 4, 0.02) 20%, rgba(4, 4, 4, 0.02) 40%,rgba(194, 194, 194, 0.02) 40%, rgba(194, 194, 194, 0.02) 60%,rgba(34, 34, 34, 0.02) 60%, rgba(34, 34, 34, 0.02) 80%,rgba(71, 71, 71, 0.02) 80%, rgba(71, 71, 71, 0.02) 100%),linear-gradient(78deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(95, 95, 95, 0.02) 20%, rgba(95, 95, 95, 0.02) 40%,rgba(71, 71, 71, 0.02) 40%, rgba(71, 71, 71, 0.02) 60%,rgba(7, 7, 7, 0.02) 60%, rgba(7, 7, 7, 0.02) 80%,rgba(130, 130, 130, 0.02) 80%, rgba(130, 130, 130, 0.02) 100%),linear-gradient(293deg, rgba(213, 213, 213, 0.03) 0%, rgba(213, 213, 213, 0.03) 20%,rgba(220, 220, 220, 0.03) 20%, rgba(220, 220, 220, 0.03) 40%,rgba(146, 146, 146, 0.03) 40%, rgba(146, 146, 146, 0.03) 60%,rgba(57, 57, 57, 0.03) 60%, rgba(57, 57, 57, 0.03) 80%,rgba(120, 120, 120, 0.03) 80%, rgba(120, 120, 120, 0.03) 100%),linear-gradient(90deg, rgb(225, 15, 180),rgb(78, 198, 243))',
];

const dark = [
  'radial-gradient(circle at center center, rgba(33,33,33,0),rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(56,56,56) 0px, rgb(56,56,56) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))',
  'linear-gradient(45deg, rgb(33,33,33) 0%,transparent 73%),repeating-linear-gradient(90deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),repeating-linear-gradient(0deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),linear-gradient(0deg, rgb(33,33,33),rgb(33,33,33))',
  'linear-gradient(90deg, rgb(33,33,33) 0%,transparent 59%),repeating-linear-gradient(45deg, rgba(168, 168, 168,0.1) 0px, rgba(168, 168, 168,0.1) 1px,transparent 1px, transparent 13px),repeating-linear-gradient(135deg, rgba(168, 168, 168,0.1) 0px, rgba(168, 168, 168,0.1) 1px,transparent 1px, transparent 13px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))',
  'repeating-linear-gradient(135deg, hsla(55,0%,44%,0.09) 0px, hsla(55,0%,44%,0.09) 1px,transparent 1px, transparent 11px),repeating-linear-gradient(45deg, hsla(55,0%,44%,0.09) 0px, hsla(55,0%,44%,0.09) 1px,transparent 1px, transparent 11px),linear-gradient(90deg, hsl(22,0%,8%),hsl(22,0%,8%))',
  'repeating-linear-gradient(0deg, rgb(6, 6, 6) 0px, rgb(6, 6, 6) 1px,transparent 1px, transparent 21px),repeating-linear-gradient(90deg, rgb(6, 6, 6) 0px, rgb(6, 6, 6) 1px,transparent 1px, transparent 21px),linear-gradient(90deg, hsl(144,0%,9%),hsl(144,0%,9%))',
  'repeating-linear-gradient(0deg, rgb(41, 41, 41) 0px, rgb(41, 41, 41) 1px,transparent 1px, transparent 21px),repeating-linear-gradient(90deg, rgb(41, 41, 41) 0px, rgb(41, 41, 41) 1px,transparent 1px, transparent 21px),linear-gradient(90deg, hsl(87,0%,9%),hsl(87,0%,9%))',
];

const gradients = [
  'linear-gradient(45deg, #4159d0 0%, #c84fc0 50%, #ffcd70 100%)',
  'linear-gradient(45deg, #07aeea 0%, #2af3dd 50%, #2bf598 100%)',
  'linear-gradient(45deg, #fada61 0%, #ff9188 50%, #ff5acd 100%)',
  'linear-gradient(45deg, #23d4fd 0%, #3a98f0 50%, #b721ff 100%)',
  'linear-gradient(45deg, #fa61da 0%, #ff8891 50%, #ffcd5a 100%)',
  'linear-gradient(45deg, #3581dd 0%, #a2ffff 50%, #fdffa4 100%)',
  'linear-gradient(45deg, #d9b3e2 0%, #9d54d5 50%, #522ca4 100%)',
  'linear-gradient(45deg, #415ed0 0%, #7971db 50%, #d886e6 100%)',
  'linear-gradient(45deg, #44caff 0%, #df32c6 50%, #ff663f 100%)',
  'linear-gradient(45deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(45deg, rgb(160, 222, 219),rgb(3, 165, 209))',
];

export const useBackgrounds = (initialGradient: number = 7) => {
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
    const interval = setInterval(change, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [change]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'b') {
        change();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [change]);

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
  return gradients[index];
  const [a,b,c] = gradients[index];
  return `linear-gradient(45deg, ${a} 0%, ${b} 50%, ${c} 100%)`;
}
