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
        maxWidth: '44rem',
      }}>
        <Feature>
          <p>I'm Ross, a Staff Software Engineer with over a decade of experience building scalable, high-performance systems across fintech, logistics, and e-commerce. I specialize in TypeScript, React, Node.js, and distributed architectures, with a track record of shipping complex products from concept to production.</p>
          <p>I thrive at the intersection of innovation and execution — from designing resilient microservices to crafting seamless user experiences. Beyond the code, I'm a mentor and open-source contributor who values collaboration, clarity, and long-term impact.</p>

          <p>I am currently seeking a senior engineering role where I can drive technical leadership, contribute to impactful products, and continue growing alongside talented teams. Always excited to connect with fellow engineers, builders, and problem-solvers.</p>
          {/* <Code code={redisHub.join('\n')} featured={true} /> */}
        </Feature>
      </div>
    </div>
  );
};
