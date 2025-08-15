'use client'

import { useCallback, useEffect, useState } from 'react';
import styles from './intro.module.scss';

const nouns = [
  'Ross',
  'a Typescript developer',
  'a Senior full-stack engineer',
  'a NodeJS developer',
  'an open-source contributor',
  'an e-commerce enthusiast',
  'a GraphQL developer',
  'a mentor',
  'a self-taught programmer',
  'a musician',
  'a React developer',
];

type useIntroProps = {
  targetId: string;
  manualCycle?: boolean;
};
export const useIntro = ({
  targetId,
  manualCycle,
}: useIntroProps) => {
  const [history, setHistory] = useState<string[]>([nouns[0]]);
  const [noun, setNoun] = useState(nouns[0]);
  const [dimensions, setDimensions] = useState<[number, number]>([0, 0]);

  const selectNoun = useCallback((): string => {
    const available = nouns.filter((n) => !history.includes(n));
    const index = Math.floor(Math.random() * available.length);
    const noun = available[index] || nouns[index];
    setHistory((entries) => !available.length ? [noun] : [...entries, noun]);
    return noun;
  }, [history, setHistory]);

  const cycleIntro = useCallback(async () => {
    const noun = selectNoun();
    await preRender(noun);
    setHistory((prev) => [...prev, noun]);
    setNoun(noun);
  }, [selectNoun, setNoun]);

  const preRender = useCallback(async (noun: string) => {
    const bounds = await prerender(targetId, noun);
    setDimensions([bounds.width, bounds.height]);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 350);
    });
  }, [targetId, setDimensions]);

  useEffect(() => {
    const cycle = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        cycleIntro();
      }
    };
    let timer: NodeJS.Timeout | null

    if (manualCycle) {
      document.addEventListener('keydown', cycle);
    } else {
      timer = setInterval(() => {
        cycleIntro();
      }, 3600);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }

      if (manualCycle) {
        document.removeEventListener('keydown', cycle);
      }
    };
  }, [manualCycle, noun]);

  return { dimensions, noun };
};

async function prerender(targetId: string, noun: string): Promise<DOMRect> {
  const target = document.querySelector(
    `[data-target-id="${targetId}"]`
  ) as HTMLDivElement;
  const clone = target.cloneNode(true) as HTMLDivElement;
  clone.querySelector('h1')?.removeAttribute('style');
  clone.querySelector('span')!.textContent = noun;
  clone.classList.add(styles.prerender);
  clone.setAttribute('data-clone-id', targetId);
  clone.style.width = 'max-content';
  (target.parentElement as HTMLElement).insertBefore(clone, target);
  return new Promise((resolve) => {
    const bounds = clone.getBoundingClientRect();
    setTimeout(() => {
      clone.remove();
      resolve(bounds);
    });
  });
}
