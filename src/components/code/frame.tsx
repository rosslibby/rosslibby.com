'use client';

import { useBackgrounds } from './hooks';
import styles from './code.module.css';

export const Frame = ({ content }: {
  content: React.ReactNode;
}) => {
  const { changing, style } = useBackgrounds();

  return (
    <div className={styles.wrapper} style={style}>
      {changing && <div className={styles.fadebg} />}

      <div style={{
        borderRadius: '0.25rem',
        height: '19.875rem',
        overflow: 'hidden',
        width: 'fit-content',
        position: 'relative',
        zIndex: 2,
      }}>
        {content}
      </div>
    </div>
  );
}
