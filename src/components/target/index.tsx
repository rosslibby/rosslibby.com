'use client';

import { useContext, useState } from 'react';
import { TargetInsight } from '@/types';
import styles from './target.module.scss';
import { viewfinderCtx } from '@/viewfinder-context';

export const Target = ({ children, insights }: {
  children: React.ReactNode;
  insights: TargetInsight[];
}) => {
  const { _: { setInsights } } = useContext(viewfinderCtx);
  const [focused, setFocused] = useState(false);
  const classname = focused ? styles.focused : '';

  const onHover = () => {
    setFocused(true);
    setInsights(insights);
  };

  return (
    <div className={classname}>
      {children}
    </div>
  );
};
