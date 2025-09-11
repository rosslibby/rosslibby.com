'use client'

import { useCallback, useEffect, useState } from 'react';
import { useTyping } from './typing';
import styles from '../intro.module.scss';

const _nouns = [
  'a Staff software engineer',
  'a Typescript developer',
  'a full-stack engineer',
  'a distributed systems engineer',
  'a NodeJS developer',
  'an open-source contributor',
  'an e-commerce enthusiast',
  'a GraphQL developer',
  'a mentor',
  'a self-taught programmer',
  'a musician',
  'a React developer',
];

const __nouns = [
  'Staff software engineer',
  'Typescript developer',
  'full-stack engineer',
  'distributed systems engineer',
  'NodeJS developer',
  'open-source contributor',
  'e-commerce enthusiast',
  'GraphQL developer',
  'mentor',
  // 'self-taught programmer',
  'musician',
  'React developer',
];
const nouns = [
	'Staff Software Engineer',
	'Full-Stack Engineer',
	'Distributed Systems Engineer',
	'Node.js Developer',
	'GraphQL Developer',
	'Mentor',
	'Open-Source Contributor',
	'Technical Leader',
	'API Engineer',
	'Cloud-Native Developer',
	'Problem Solver',
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
  const { current, switching, update } = useTyping(noun);

  const updateTitle = useCallback(() => {
    const title = `Ross Libby | ${current}`;
    document.title = title;
  }, [current]);

  useEffect(() => {
    updateTitle();
  }, [current]);

  const selectNoun = useCallback((): string => {
    const available = nouns.filter((n) => !history.includes(n));
    const index = Math.floor(Math.random() * available.length);
    const noun = available[index] || nouns[index];
    setHistory((entries) => !available.length ? [noun] : [...entries, noun]);
    return noun;
  }, [history, setHistory]);

  const cycleIntro = useCallback(async () => {
    const noun = selectNoun();
    // await preRender(noun);
    setHistory((prev) => [...prev, noun]);
    setNoun(noun);
    update(noun);
  }, [selectNoun, setNoun, update]);

  const preRender = useCallback(async (noun: string) => {
    const bounds = await prerender(targetId, noun);
    const [prevWidth] = dimensions;
    const widthDecreased = prevWidth > bounds.width;
    const delay = widthDecreased ? 0 : 350;

    setDimensions([bounds.width, bounds.height]);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, delay);
    });
  }, [dimensions, targetId, setDimensions]);

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

  return { current, dimensions, noun };
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
