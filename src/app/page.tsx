'use client'

import Link from 'next/link';
import { Block, Blocks, BlockTitle, Code, Intro, Target } from '@/components';
import styles from './page.module.scss';

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
const mongoSingleton = [
  `import { collection } from '@notross/mongo-singleton';`,
  '',
  `const getAccountById = async (id) => collection('accounts')`,
  `  .then((accounts) => accounts.findOne({ _id: id }));`,
];
const reactWaveform = [
  `import { Waveform } from '@notross/react-waveform'`,
  '',
  `const AudioPlayer = ({ track }) => <Waveform track={track} />;`,
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Target id="intro" insights={[
          {
            code: 'const { noun } = useIntro();',
            explanation: 'Get the "noun" variable from the useIntro() hook',
          },
          { code: '' },
          { code: 'return (' },
          {
            code: '  <h1>Hey, I\'m <span>{noun}</span>.</h1>',
            explanation: 'Display a heading that introduces me as the noun we got from the useIntro() hook',
          },
          { code: ');' },
        ]}>
          <Intro />
        </Target>
      </div>
      <hr />
      <Blocks>
        <BlockTitle
          title="Open-source projects"
          subtitle="A minimal connection hub for Redis in Node.js: lazily creates and reuses named Redis clients"
        />
      </Blocks>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <hr />
        <Blocks>
          <Block>
            <h3>Redis Hub</h3>
          </Block>
        </Blocks>
        <hr />
        <Blocks columns="6fr 6fr">
          <Block>
            <p>A minimal connection hub for Redis in Node.js: lazily creates and reuses named Redis clients (e.g., publisher, subscriber, per-user, per-namespace) with centralized config and event tracking.</p>
            <Link
              href="https://www.npmjs.com/package/@notross/redis-hub"
              target="_blank"
              rel="noopener noreferrer"
            >@notross/redis-hub</Link>
          </Block>
          <Block>
            <Code code={redisHub.join('\n')} />
          </Block>
        </Blocks>
        <hr />
        <Blocks>
          <Block>
            <h3>Mongo Singleton</h3>
          </Block>
        </Blocks>
        <hr />
        <Blocks columns="6fr 6fr">
          <Block>
            <Code code={mongoSingleton.join('\n')} />
          </Block>
          <Block>
            <p>A lightweight, zero-fuss way to get a single shared MongoDB connection across your Node.js codebase. Like me, it's single and looking for a connection. 💔</p>
            <Link
              href="https://www.npmjs.com/package/@notross/mongo-singleton"
              target="_blank"
              rel="noopener noreferrer"
            >@notross/mongo-singleton</Link>
          </Block>
        </Blocks>
        <hr />
        <Blocks>
          <Block>
            <h3>React Waveform</h3>
          </Block>
        </Blocks>
        <hr />
        <Blocks columns="6fr 6fr">
          <Block>
            <p>A React component for rendering audio waveforms, with support for multiple audio sources and custom styling.</p>
            <Link
              href="https://www.npmjs.com/package/@notross/react-waveform"
              target="_blank"
              rel="noopener noreferrer"
            >@notross/react-waveform</Link>
          </Block>
          <Block>
            <Code code={reactWaveform.join('\n')} />
          </Block>
        </Blocks>
      </div>
    </main>
  );
}
