'use client'

import Link from 'next/link';
import { Block, Blocks, BlockTitle, Code, Intro, Target } from '@/components';
import { Target as Tar } from './targets';
import styles from './page.module.scss';

const rhsrc = [{code:"import { createClient, RedisClientOptions } from 'redis';"},{code:"import { RedisClient, LoggerConfig, LogResult } from './types';"},{code:"import { Logger } from './utils';"},{code:"const logger = new Logger();"},{code:"/**"},{code:" * Central hub managing named Redis clients. Each"},{code:" * name gets one shared connection."},{code:" * "},{code:" * Pub/sub roles or per-namespace/user connections"},{code:" * are just distinct names."},{code:" */"},{code:"export class RedisHub {"},{code:"  private defaultClientName: string = 'default';"},{code:"  private clients: Record<string, RedisClient> = {};"},{code:"  private clientOptions: Record<string, RedisClientOptions> = {};"},{code:"  private defaultOptions: RedisClientOptions | undefined = {};"},{code:"  public error: any | null = null;"},{code:"  public status: string | null = null;"},{code:"  public connect: ("},{code:"    clientId: string,"},{code:"  ) => Promise<RedisClient> = this.client.bind(this);"},{code:"  constructor(loggerConfig?: LoggerConfig) {"},{code:"    this.configureLogger(loggerConfig);"},{code:"  }"},{code:"  public configureLogger(config: LoggerConfig = { logs: true }): void {"},{code:"    logger.setup(config);"},{code:"  }"},{code:"  public async getDefaultClient(): Promise<RedisClient> {"},{code:"    return await this.client(this.defaultClientName);"},{code:"  }"},{code:"  private setDefaultOptions(options: RedisClientOptions): void {"},{code:"    this.defaultOptions = options;"},{code:"  }"},{code:"  /**"},{code:"   * Set the global default Redis options used when no per-client override exists."},{code:"   * @param options RedisClientOptions"},{code:"   * @param options.defaultClientName string"},{code:"   */"},{code:"  public init(options: RedisClientOptions & {"},{code:"    defaultClientName?: string;"},{code:"  }): void {"},{code:"    const { defaultClientName, ...redisClientOptions } = options;"},{code:"    this.setDefaultOptions(redisClientOptions);"},{code:"    if (defaultClientName) {"},{code:"      this.defaultClientName = defaultClientName;"},{code:"    }"},{code:"  }"},{code:"  public getClientById(clientId: string): RedisClient | null {"},{code:"    return this.clients[clientId] ?? null;"},{code:"  }"},{code:"  private createClient("},{code:"    clientId: string,"},{code:"    options?: RedisClientOptions,"},{code:"  ): RedisClient {"},{code:"    options = options ?? this.defaultOptions;"},{code:"    if (!options) {"},{code:"      throw new Error("},{code:"        `No options provided for '${clientId}' and no default options exist.`"},{code:"      );"},{code:"    }"},{code:"    const client = createClient(options);"},{code:"    this.handleClientEvents(client, clientId);"},{code:"    this.clients[clientId] = client;"},{code:"    this.clientOptions[clientId] = options;"},{code:"    return client;"},{code:"  }"},{code:"  private conflictingOptions("},{code:"    clientId: string,"},{code:"    options: RedisClientOptions,"},{code:"  ): boolean {"},{code:"    const clientOptions = JSON.stringify(this.clientOptions[clientId]);"},{code:"    return JSON.stringify(options) !== clientOptions;"},{code:"  }"},{code:"  /**"},{code:"   * Get or create a named Redis client. Lazy-connects on first call."},{code:"   * @param clientId Logical name (e.g., \"publisher\", \"user-123-subscriber\")."},{code:"   * @param options Optional per-client options; only applied on first creation."},{code:"   * @returns Connected Redis client."},{code:"   */"},{code:"  public async client("},{code:"    clientId: string,"},{code:"    options?: RedisClientOptions,"},{code:"): Promise<RedisClient> {"},{code:"    if (this.clients[clientId]) {"},{code:"      if (options && this.conflictingOptions(clientId, options)) {"},{code:"        logger.warn("},{code:"          `Options for '${clientId}' were passed again and ignored.`"},{code:"        );"},{code:"      }"},{code:"      return this.clients[clientId];"},{code:"    }"},{code:"    const client = this.createClient(clientId, options);"},{code:"    await client.connect();"},{code:"    return client;"},{code:"  }"},{code:"  /**"},{code:"   * Disconnects all managed clients and clears internal state."},{code:"   */"},{code:"  public async disconnectAll(): Promise<void> {"},{code:"    await Promise.all("},{code:"      Object.values(this.clients).map((client) => client.destroy())"},{code:"    );"},{code:"    this.clients = {};"},{code:"  }"},{code:"  /**"},{code:"   * List all logs; useful if logging is disabled"},{code:"   */"},{code:"  public logs(): LogResult[] {"},{code:"    return logger.logs;"},{code:"  }"},{code:"  private handleClientEvents(client: RedisClient, clientId: string): void {"},{code:"    // Prevent double-binding: Redis client instances are"},{code:"    // new per name so safe to bind unconditionally here."},{code:"    client.on('connect', () => {"},{code:"      this.status = `[${clientId}]: client connected.`;"},{code:"      logger.log(this.status);"},{code:"      this.clients[clientId] = client;"},{code:"    });"},{code:"    client.on('ready', () => {"},{code:"      this.status = `[${clientId}]: client ready.`;"},{code:"      logger.log(this.status);"},{code:"      this.clients[clientId] = client;"},{code:"    });"},{code:"    client.on('reconnecting', () => {"},{code:"      this.status = `[${clientId}]: client reconnecting...`;"},{code:"      logger.log(this.status);"},{code:"      this.clients[clientId] = client;"},{code:"    });"},{code:"    client.on('end', () => {"},{code:"      this.status = `[${clientId}]: client closed.`;"},{code:"      logger.log(this.status);"},{code:"      this.clients[clientId] = client;"},{code:"    });"},{code:"    client.on('error', (err) => {"},{code:"      this.status = `[${clientId}]: client error:`"},{code:"      this.error = err;"},{code:"      logger.error(this.status, this.error);"},{code:"      this.clients[clientId] = client;"},{code:"    });"},{code:"  }"},{code:"}"}];

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
