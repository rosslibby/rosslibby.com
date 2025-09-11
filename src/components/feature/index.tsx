'use client';
import { Code } from '../code';
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

export const FeatureDemo = () => {
  const redisHub = [
    `// Publisher\nconst pub = await redisClient('publisher');`,
    `await pub.publish('my-channel', 'hello world');`,
    '',
    `// Subscriber`,
    `const sub = await redisClient('subscriber');`,
    `await sub.subscribe('my-channel', (message) => {`,
    `  console.log('Got message:', message);`,
    `});`,
  ];

  return (
    <div className={styles.section} style={{
      // background: 'linear-gradient(to bottom, #886cff, #31386a 117%)',
      background: 'linear-gradient(to bottom, #0d1116, #31386a 117%)',
      marginTop: '4rem',
    }}>
      <div className={styles.container} style={{
        marginTop: '4rem',
        maxWidth: '80rem',
      }}>
        <Feature>
          <Code code={redisHub.join('\n')} featured={true} />
        </Feature>
      </div>
    </div>
  );
};
