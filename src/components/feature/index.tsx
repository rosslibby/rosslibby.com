'use client';
import styles from './feature.module.scss';

export const Feature = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.floating}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
