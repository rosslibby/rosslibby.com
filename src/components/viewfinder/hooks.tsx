'use client';

import { RefObject, useContext, useEffect, useState } from 'react';
import { TargetSpecs } from '@/types';
import { viewfinderCtx } from '@/viewfinder-context';

export const useViewFinder = (
  targetRef: RefObject<HTMLElement>,
) => {
  const { _: { setTargetSpecs } } = useContext(viewfinderCtx);
  const [properties, setProperties] = useState<TargetSpecs>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const updateProperties = () => {
    const target = targetRef.current;
    if (!target) return;
    setTargetSpecs({
      height: target.offsetHeight,
      width: target.offsetWidth,
      x: target.offsetLeft,
      y: target.offsetTop,
    });
  };

  useEffect(() => {
    if (targetRef?.current) {
      updateProperties();
    }
  }, [targetRef, updateProperties]);

  return { ...properties };
};
