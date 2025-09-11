'use client'

import { useContext } from 'react';
import { useIntro } from './hooks';
import { viewfinderCtx } from '@/viewfinder-context';
import { Target } from '@/components';
import styles from './intro.module.scss';

export * from './hooks';

export const Intro = ({ target }: { target?: boolean }) => {
  const { presize } = useContext(viewfinderCtx);
  const { dimensions: [width, height], current, noun } = useIntro({
    targeting: target,
    targetId: 'intro',
    manualCycle: false,
  });

  const style = {
    height: height ? `${height}px` : 'auto',
    width: presize && width ? `${width}px` : 'auto',
  } as React.CSSProperties;

  const Wrapper = target ? Targeted : Untargeted;

  return (
    <Wrapper>
      <h1 className={styles.heading} style={style}>
        <span className={styles.name}>
          <span className={styles.givenName}>Ross</span>
          <span className={styles.familyName}>Libby</span>
        </span>
        <span className={styles.noun}>{current}</span>
      </h1>
    </Wrapper>
  );
};

const Untargeted = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const Targeted = ({ children }: { children: React.ReactNode }) => {
  const insights = [
    {
      code: 'const { descriptor } = useIntro();',
      explanation: 'Get the "descriptor" variable from the useIntro() hook',
    },
    { code: '' },
    { code: 'return (' },
    {
      code: '  <h1>Hey, I\'m <span>{descriptor}</span>.</h1>',
      explanation: 'Display a heading that introduces me as the descriptor we got from the useIntro() hook',
    },
    { code: ');' },
  ];
  return (
    <Target id="intro" insights={insights}>
      {children}
    </Target>
  );
};
