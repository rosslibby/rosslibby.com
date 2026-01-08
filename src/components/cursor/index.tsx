'use client'

import { useCursor } from './hooks';
import styles from './cursor.module.css';

export * from './hooks';

export const Cursor = () => {
  const { down, focusing, released, targeting, x, y } = useCursor();

  const classname = [
    styles.cursor,
    ...(focusing === null ? [styles.unfocused] : []),
    ...(targeting ? [styles.viewfinder] : []),
    ...(down ? [styles.click, styles.down] : []),
    ...(released ? [styles.click, styles.release] : []),
  ].join(' ');

  const style = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div className={classname} style={style}>
      {focusing !== null && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" fill="none"><path d="M1.1184 9.65671C-0.870669 4.09301 4.50269 -1.2803 10.0664 0.708809L33.2265 8.98895C39.2128 11.1291 39.4767 19.4971 33.6371 22.0102L28.3553 24.2833C26.711 24.9909 25.4003 26.3016 24.6926 27.946L22.4197 33.2276C19.9066 39.0671 11.5385 38.8032 9.39838 32.8169L1.1184 9.65671Z" fill="#4482ff"/></svg>}
    </div>
  );
};
