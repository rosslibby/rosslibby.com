'use client'

import Link from 'next/link';
import { Block, Blocks, BlockTitle, Code, FeatureDemo, Intro, Target } from '@/components';
import { Target as Tar } from './targets';
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
          title="Fullstack Node/Typescript Maven"
          subtitle="From vision to production, I build software that lasts. I thrive on creating scalable systems and impactful user experiences that stand the test of time."
        />
      </Blocks>
      <div><FeatureDemo /></div>
      <Blocks>
        <BlockTitle
          title="Open source contributions"
          subtitle="Selected npm packages I've published and maintain"
        />
      </Blocks>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <hr />
        <Blocks>
          <Block>
            <Tar
              id="redis-hub"
              name="Redis Hub"
              url="https://raw.githubusercontent.com/rosslibby/redis-hub/refs/heads/main/README.md"
            >
              <h3>Redis Hub</h3>
            </Tar>
          </Block>
        </Blocks>
        <hr />
        <Blocks columns="6fr 6fr" reverse>
          <Block>
            <h5>A minimal connection hub for Redis in Node.js, reusing named clients with centralized config and event tracking.</h5>
            <em>Started as a Mongo-style singleton, then expanded to handle pub/sub without repeating publisher, subscriber, and client logic.</em>
            <Link
              href="https://www.npmjs.com/package/@notross/redis-hub"
              target="_blank"
              rel="noopener noreferrer"
            >@notross/redis-hub</Link>
          </Block>
          <Block style={{ padding: 0 }}>
            <Code code={redisHub.join('\n')} />
          </Block>
        </Blocks>
        <hr />
        <Blocks>
          <Block>
            <Tar
              id="mongo-singleton"
              name="Mongo Singleton"
              url="https://raw.githubusercontent.com/rosslibby/mongo-singleton/refs/heads/main/README.md"
            >
              <h3>Mongo Singleton</h3>
            </Tar>
          </Block>
        </Blocks>
        <hr />
        <Blocks columns="6fr 6fr">
          <Block style={{ padding: 0 }}>
            <Code code={mongoSingleton.join('\n')} />
          </Block>
          <Block>
            <h5>A zero-fuss way to share a single MongoDB connection across your codebase.</h5>
            <em>Created to avoid duplicating database connection code across multiple services in one project - this made setup cleaner and DRYer.</em>
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
            <Tar
              id="react-waveform"
              name="React Waveform"
              url="https://raw.githubusercontent.com/rosslibby/react-waveform/refs/heads/main/README.md"
            >
              <h3>React Waveform</h3>
            </Tar>
          </Block>
        </Blocks>
        <hr />
        <Blocks columns="6fr 6fr" reverse>
          <Block>
            <h5>A React component for rendering customizable audio waveforms from multiple sources.</h5>
            <em>Built to solve a gap I hit in a project - I needed multiple synced waveforms for a single audio track, something existing libraries did not support.</em>
            <Link
              href="https://www.npmjs.com/package/@notross/react-waveform"
              target="_blank"
              rel="noopener noreferrer"
            >@notross/react-waveform</Link>
          </Block>
          <Block style={{ padding: 0 }}>
            <Code code={reactWaveform.join('\n')} />
          </Block>
        </Blocks>
      </div>
    </main>
  );
}
