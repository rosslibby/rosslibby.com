import { NpmPackage } from './package';

const redisHubInsights = [
  `import { RedisHub } from '@notross/redis-hub';`,
  `\nconst publisher = await RedisHub.getClient('publisher');`,
  `const subscriber = await RedisHub.getClient('subscriber');`,
  `\nsubscriber.pSubscribe('chats', (msg) => {\n  console.log(\`New message: $\{msg\}\`);\n});`,
  `await publisher.publish('chats', 'Hello, World!');`,
];

const mongoSingletonInsights = [
  `import { collection } from '@notross/mongo-singleton';`,
  '',
  `const accounts = await collection('accounts');`,
  `const getAccountByEmail = async (email) => {\n  return accounts.findOne({ email });\n};`,
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
    description="A minimal, zero-config connection hub for Redis in Node.js"
    origin="Zero-config, lazy connection hub for Redis in Node.js. Lazily creates and reuses named Redis clients (publisher, subscriber, per-tenant, per-worker) with centralized configuration, per-client state tracking, and pluggable structured logging."
  />;
};

export const MongoSingleton = () => <NpmPackage
  index={1}
  id="mongo-singleton"
  name="Mongo Singleton"
  docs="https://raw.githubusercontent.com/rosslibby/mongo-singleton/refs/heads/main/README.md"
  insights={mongoSingletonInsights}
  link={{ title: '@notross/mongo-singleton', url: 'https://www.npmjs.com/package/@notross/mongo-singleton' }}
  description="Zero-config, plug-and-play MongoDB client management for Node.js"
  origin="Zero-config, lazy-loading MongoDB client for Node.js. Configures automatically via environment variables and exposes top-level db and collection helpers for instant, zero-boilerplate database access."
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
