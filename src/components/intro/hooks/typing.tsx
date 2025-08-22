'use client'

import { useCallback, useEffect, useState } from 'react';

export const useTyping = (initialText: string) => {
  const [typing, setTyping] = useState(true);
  const [backspacing, setBackspacing] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [nextText, setNextText] = useState('');
  const [text, setText] = useState(initialText);
  const [textIndex, setTextIndex] = useState(0);
  const max = text.length;
  const current = text.substring(0, textIndex);

  const update = (text: string) => {
    setNextText(text);
    setBackspacing(true);
  };

  const typeText = useCallback(() => {
    setTextIndex((prev) => prev + 1);
  }, [setTextIndex]);

  const next = useCallback(() => {
    setBackspacing(false);
    setTyping(true);
    setText(nextText);
    setSwitching(true);
  }, [nextText, setBackspacing, setText, setTyping, setSwitching]);

  const backspace = useCallback(() => {
    if (textIndex > 0) {
      setTextIndex((prev) => prev - 1);
    } else {
      next();
    }
  }, [textIndex, setTextIndex]);

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

  return { current, switching, update };
};
