'use client';

import { useCallback, useContext, useRef } from 'react';
import { TargetInsight } from '@/types';
import { viewfinderCtx } from '@/viewfinder-context';
import { cursorCtx } from '@/cursor-context';
import styles from './target.module.scss';

export const Target = ({ children, id, insights }: {
  children: React.ReactNode;
  id: string;
  insights: TargetInsight[];
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { targeting, _: { setTargeting } } = useContext(cursorCtx);
  const { focusing, _: {
    setFocusing,
    setInsights,
    setTargetSpecs,
  } } = useContext(viewfinderCtx);
  const focused = id === focusing;
  const classname = focused ? styles.focused : '';

  const updateSpecs = useCallback(() => {
    const target = targetRef.current;
    if (!target) {
      return;
    }

    setTargetSpecs({
      height: target.offsetHeight,
      width: target.offsetWidth,
      x: target.offsetLeft,
      y: target.offsetTop,
    });
  }, [focused, targetRef, setTargetSpecs]);

  const mouseEnter = useCallback(() => {
    if (focused) {
      console.log('Already focused ---- terminate.')
      return;
    } else {
      console.log('Currently focused:', focused, `${id} vs ${focusing}`);
    }

    setFocusing(id);
    updateSpecs();
  }, [id, focused, focusing, setFocusing]);

  const mouseDown = useCallback(() => {
    if (targeting) {
      return;
    }

    setInsights(insights);
    setTargeting(id);
  }, [id, insights, setInsights, targeting, setTargeting]);

  return (
    <div
      className={classname}
      onMouseDown={mouseDown}
      onMouseEnter={mouseEnter}
      ref={targetRef}
    >
      {children}
    </div>
  );
};
