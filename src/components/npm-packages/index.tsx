import { Blocks, BlockTitle } from '@/components'
import { MongoSingleton, ReactWaveform, RedisHub } from './packages';
import styles from './npm-packages.module.css';

export const NpmPackages = () => {
  return (
    <>
      <Blocks>
        <BlockTitle
          title="Open source contributions"
          subtitle="Selected npm packages I've published and maintain"
        />
      </Blocks>
      <div className={styles.packages}>
        <RedisHub />
        <MongoSingleton />
        <ReactWaveform />
      </div>
    </>
  );
};
