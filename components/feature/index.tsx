'use client';

import { Code } from '../code';
import Showcase from '../showcase';
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
  `type Skill = {`,
  `  name: string;`,
  `  yearsOfExperience: number;`,
  `  rating: number;`,
  `  category: string;`,
  `};`,
  ``,
  `type Role = {`,
  `  title: string;`,
  `  company: string;`,
  `  location?: string;`,
  `  startDate: Date;`,
  `  endDate?: Date;`,
  `  description: string;`,
  `  skills: Skill[];`,
  `};`,
  ``,
  `interface SoftwareEngineer {`,
  `  name: string;`,
  `  bio: string;`,
  `  title: string;`,
  `  yearsOfExperience: number;`,
  `  skills: Skill[];`,
  `}`,
  ``,
  `const me: SoftwareEngineer = {`,
  `  name: 'Ross Libby',`,
  `  bio: 'Senior Engineer with 12+ years of experience architecting high-throughput, TypeScript-driven ecosystems within data-heavy and regulated sectors (Fintech, Healthcare, Legaltech). Expert in building resilient Node.js microservices and type-safe data layers, paired with high-performance React/Next.js frontends. Proven track record of delivering end-to-end architecture spanning event-driven backend pipelines (Kafka/RabbitMQ) and complex, state-driven UIs across GCP, AWS, and Azure. A product-minded leader focused on clean architecture, scalable design systems, and bridging the gap between complex requirements and intuitive user experiences.'`,
  `  title: 'Senior Full Stack Engineer',`,
  `  yearsOfExperience: 12,`,
  `  skills: []`,
  `};`,
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
        <Showcase />
      </div>
    </div>
  );
};

export const FeatureDemoOld = () => {
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
