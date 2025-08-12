'use client'

import { useCallback, useEffect, useState } from 'react';

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

export const useIntro = () => {
  const [history, setHistory] = useState<string[]>([nouns[0]]);
  const [noun, setNoun] = useState(nouns[0]);

  const getRandomNoun = useCallback(() => {
    const list = nouns.filter((noun) => !history.includes(noun));
    if (!list.length) {
      setHistory([nouns[0]]);
      return nouns[0];
    }

    const index = Math.floor(Math.random() * list.length);
    const noun = list[index];
    setHistory((prev) => [...prev, noun]);
    setNoun(noun);
  }, [history, setHistory, setNoun]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = setInterval(() => {
      getRandomNoun();
    }, 3600);

    return () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
  }, [noun]);

  return { noun };
};
