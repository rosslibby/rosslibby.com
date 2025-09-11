import { NpmPackage } from './package';

const redisHubInsights = [
  `// Publisher\nconst pub = await redisClient('publisher');`,
  `await pub.publish('my-channel', 'hello world');`,
  '',
  `// Subscriber`,
  `const sub = await redisClient('subscriber');`,
  `await sub.subscribe('my-channel', (message) => {`,
  `  console.log('Got message:', message);`,
  `});`,
];

const mongoSingletonInsights = [
  `import { collection } from '@notross/mongo-singleton';`,
  '',
  `const getAccountById = async (id) => collection('accounts')`,
  `  .then((accounts) => accounts.findOne({ _id: id }));`,
];

const reactWaveformInsights = [
  `import { Waveform } from '@notross/react-waveform'`,
  '',
  `const AudioPlayer = ({ track }) => <Waveform track={track} />;`,
];

export const RedisHub = () => {
  return <NpmPackage
    index={0}
    id="redis-hub"
    insights={redisHubInsights}
    name="Redis Hub"
    docs="https://raw.githubusercontent.com/rosslibby/redis-hub/refs/heads/main/README.md"
    link={{ title: '@notross/redis-hub', url: 'https://www.npmjs.com/package/@notross/redis-hub' }}
    reverse={true}
    description="A minimal connection hub for Redis in Node.js, reusing named clients with centralized config and event tracking."
    origin="Started as a Mongo-style singleton, then expanded to handle pub/sub without repeating publisher, subscriber, and client logic."
  />;
};

export const MongoSingleton = () => <NpmPackage
  index={1}
  id="mongo-singleton"
  name="Mongo Singleton"
  docs="https://raw.githubusercontent.com/rosslibby/mongo-singleton/refs/heads/main/README.md"
  insights={mongoSingletonInsights}
  link={{ title: '@notross/mongo-singleton', url: 'https://www.npmjs.com/package/@notross/mongo-singleton' }}
  description="A zero-fuss way to share a single MongoDB connection across your codebase."
  origin="Created to avoid duplicating database connection code across multiple services in one project - this made setup cleaner and DRYer."
/>;

export const ReactWaveform = () => <NpmPackage
  index={2}
  id="react-waveform"
  name="React Waveform"
  docs="https://raw.githubusercontent.com/rosslibby/react-waveform/refs/heads/main/README.md"
  insights={reactWaveformInsights}
  description="A React component for rendering customizable audio waveforms from multiple sources."
  origin="Built to solve a gap I hit in a project - I needed multiple synced waveforms for a single audio track, something existing libraries did not support."
  link={{ title: '@notross/react-waveform', url: 'https://www.npmjs.com/package/@notross/react-waveform' }}
  reverse={true}
/>
