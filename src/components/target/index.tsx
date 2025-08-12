'use client'

import { useCallback, useContext, useRef } from 'react';
import { TargetInsight } from '@/types';
import { viewfinderCtx } from '@/viewfinder-context';
import { cursorCtx } from '@/cursor-context';
import { Viewfinder } from '../viewfinder';
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
  } } = useContext(viewfinderCtx);
  const focused = id === focusing;
  const classname = [
    styles.target,
    ...(focused ? [styles.focused] : []),
  ].join(' ');

  const mouseEnter = useCallback(() => {
    if (focused) {
      return;
    }

    setFocusing(id);
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
      <div className={styles.component} data-target-id={id}>
        {children}
      </div>
      <Viewfinder id={id} target={targetRef} />
    </div>
  );
};
