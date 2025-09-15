'use client'

import { useCallback, useEffect, useState } from 'react';
import { useTyping } from './typing';
import styles from '../intro.module.scss';

const _descriptors = [
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

const __descriptors = [
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
const descriptors = [
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
  targeting?: boolean;
  targetId: string;
  manualCycle?: boolean;
};
export const useIntro = ({
  targeting,
  targetId,
  manualCycle,
}: useIntroProps) => {
  const [history, setHistory] = useState<string[]>([descriptors[0]]);
  const [descriptor, setDescriptor] = useState(descriptors[0]);
  const [dimensions, setDimensions] = useState<[number, number]>([0, 0]);
  const { current, text, update } = useTyping(descriptor);

  const updateTitle = useCallback(() => {
    const title = `Ross Libby | ${text}`;
    document.title = title;
  }, [text]);

  useEffect(() => {
    updateTitle();
  }, [current]);

  const selectdescriptor = useCallback((): string => {
    const available = descriptors.filter((n) => !history.includes(n));
    const index = Math.floor(Math.random() * available.length);
    const descriptor = available[index] || descriptors[index];
    setHistory((entries) => !available.length
      ? [descriptor]
      : [...entries, descriptor]
    );
    return descriptor;
  }, [history, setHistory]);

  const cycleIntro = useCallback(async () => {
    const descriptor = selectdescriptor();
    if (targeting) {
      await preRender(descriptor);
    }
    setHistory((prev) => [...prev, descriptor]);
    setDescriptor(descriptor);
    update(descriptor);
  }, [selectdescriptor, setDescriptor, targeting, update]);

  const preRender = useCallback(async (descriptor: string) => {
    const bounds = await prerender(targetId, descriptor);
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
  }, [manualCycle, descriptor]);

  return { current, dimensions, descriptor };
};

async function prerender(
  targetId: string,
  descriptor: string,
): Promise<DOMRect> {
  const target = document.querySelector(
    `[data-target-id="${targetId}"]`
  ) as HTMLDivElement;
  const clone = target.cloneNode(true) as HTMLDivElement;
  clone.querySelector('h1')?.removeAttribute('style');
  clone.querySelector('span')!.textContent = descriptor;
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
