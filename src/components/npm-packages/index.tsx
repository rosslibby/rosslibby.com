import { MongoSingleton, ReactWaveform, RedisHub } from './packages';
import styles from './npm-packages.module.scss';

export const NpmPackages = () => {
  return (
    <div className={styles.packages}>
      <RedisHub />
      <MongoSingleton />
      <ReactWaveform />
    </div>
  );
};
