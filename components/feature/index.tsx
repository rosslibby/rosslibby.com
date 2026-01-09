'use client';

import { Code } from '../code';
import styles from './feature.module.css';

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

const openSource = [
  '/**',
  ' * Redis Hub',
  ' * https://npmjs.com/package/@notross/redis-hub',
  ' */',
  `import { redisClient } from '@notross/redis-hub';`,
  `const publisher = await redisClient('publisher');`,
  `await publisher.publish('messages', 'Hello, World!');`,
  '',
  '/**',
  ' * Mongo Singleton',
  ' * https://npmjs.com/package/@notross/mongo-singleton',
  ' */',
  `import { collection } from '@notross/mongo-singleton'`,
  `const users = await collection('users')`,
  `await users.findOne({ email: 'john.doe@gmail.com' })`,
  '',
  '/**',
  ' * React Waveform',
  ' * https://npmjs.com/package/@notross/react-waveform',
  ' */',
  `import { Waveform } from '@notross/react-waveform';`,
  `const AudioPlayer = ({ song }) => <Waveform track={song} />`,
  '',
  '',
];

export const FeatureDemo = () => {
  return (
    <div className={styles.section} style={{
      background: 'linear-gradient(to bottom, #0d1116, #31386a 117%)',
      marginTop: '4rem',
    }}>
      <div className={styles.container} style={{
        marginTop: '4rem',
        maxWidth: '80rem',
      }}>
        <Feature>
          <Code code={openSource.join('\n')} featured={true} title="npm-packages.js" />
        </Feature>
      </div>
    </div>
  );
};
