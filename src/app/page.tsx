'use client'

import { Code, Feature, Intro, Target } from '@/components';
import styles from './page.module.scss';
import Link from 'next/link';

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
      <div className={styles.section} style={{
        background: 'linear-gradient(to bottom, #886cff, #31386a 117%)',
      }}>
        <div className={styles.container} style={{
          marginTop: '4rem',
          maxWidth: '44rem',
        }}>
          <Feature>
            <Code code={redisHub.join('\n')} featured={true} />
          </Feature>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <div className={styles.container} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          margin: '2rem auto 4rem',
        }}>
          <h2>Open-source projects</h2>
          <p style={{
            textAlign: 'center',
            maxWidth: '50ch',
          }}>A minimal connection hub for Redis in Node.js: lazily creates and reuses named Redis clients</p>
        </div>

        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.packages}>
              <div className={styles.package}>
                <div className={styles.content}><h3>Redis Hub</h3></div>
                <Code code={redisHub.join('\n')} />
                <div className={styles.content}><p>A minimal connection hub for Redis in Node.js: lazily creates and reuses named Redis clients (e.g., publisher, subscriber, per-user, per-namespace) with centralized config and event tracking.</p></div>
                <Link
                  href="https://www.npmjs.com/package/@notross/redis-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >@notross/redis-hub</Link>
              </div>
              <div className={styles.package}>
                <div className={styles.content}><h3>Mongo Singleton</h3></div>
                <Code code={mongoSingleton.join('\n')} />
                <div className={styles.about}>
                  <div className={styles.content}><p>A lightweight, zero-fuss way to get a single shared MongoDB connection across your Node.js codebase. Like me, it's single and looking for a connection. 💔</p></div>
                  <Link
                    href="https://www.npmjs.com/package/@notross/mongo-singleton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >@notross/mongo-singleton</Link>
                </div>
              </div>
              <div className={styles.package}>
                <div className={styles.content}><h3>React Waveform</h3></div>
                <div className={styles.about}>
                  <div className={styles.content}><p>A React component for rendering audio waveforms, with support for multiple audio sources and custom styling.</p></div>
                  <Link
                    href="https://www.npmjs.com/package/@notross/react-waveform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >@notross/react-waveform</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Target id="counter" insights={[
        {
          code: 'const [count, setCount] = useState(0);',
          explanation: 'Set a variable to track a count starting from 0',
        },
        {
          code: 'const label = `Click counter (${count})`;',
          explanation: 'Set the button\'s text to display its title and the current count',
        },
        { code: '' },
        {
          code: 'const handleClick = () => setCount((count) => count + 1);',
          explanation: 'Build a function that will increment the counter',
        },
        { code: '' },
        { code: 'return (' },
        {
          code: '  <button onClick={handleClick}>{label}</button>',
          explanation: 'Display a button that shows the button\'s label and increments the count when clicked',
        },
        { code: ');' },
      ]}>
        <Counter />
      </Target> */}
    </main>
  );
}
