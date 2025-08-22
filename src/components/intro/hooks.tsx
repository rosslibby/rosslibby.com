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
  const { current, update } = useTyping(noun);

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

const useTyping = (initialText: string) => {
  const [typing, setTyping] = useState(true);
  const [backspacing, setBackspacing] = useState(false);
  const [nextText, setNextText] = useState('');
  const [text, setText] = useState(initialText);
  const [textIndex, setTextIndex] = useState(0);
  const max = text.length;
  const current = text.substring(0, textIndex);

  const update = (text: string) => {
    setNextText(text);
    // setTextIndex(0);
    // setTyping(true);
    setBackspacing(true);
  };

  const typeText = useCallback(() => {
    setTextIndex((prev) => prev + 1);
  }, [setTextIndex]);

  const backspace = useCallback(() => {
    if (textIndex > 0) {
      setTextIndex((prev) => prev - 1);
    } else {
      setBackspacing(false);
      setTyping(true);
      setText(nextText);
    }
  }, [nextText, textIndex, setTextIndex, setBackspacing, setTyping, update, setText]);

  const complete = () => {
    setTyping(false);
  };

  useEffect(() => {
    if (textIndex >= max) {
      complete();
    }
  }, [max, textIndex]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (typing) {
      interval = setInterval(() => typeText(), 75);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  }, [typing, typeText]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (backspacing) {
      interval = setInterval(() => backspace(), 30);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  }, [backspace, backspacing]);

  return { current, update };
};
