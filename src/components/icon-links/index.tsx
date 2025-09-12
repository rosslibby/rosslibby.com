import styles from './icon-links.module.scss';

export const IconLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.frame}>
        {children}
      </div>
    </div>
  );
};
