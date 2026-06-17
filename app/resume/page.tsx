'use client'

import {} from 'react';
import { Block, Blocks, BlockTitle } from '@/components';
import styles from './resume.module.css';

export default function ResumePage() {
  return (
    <>
      <Blocks>
        <BlockTitle
          title="Fullstack Node/Typescript Maven"
          subtitle="Distributed systems | Real-time apps | Scalable UIs | Mentor"
        />
      </Blocks>
      <div className={styles.entries}>
        <Blocks>
          <Block>
            <h3>Profile</h3>
          </Block>
        </Blocks>
        <Blocks>
          <Block style={{ justifyContent: 'start' }}>
            <h3>Senior Full Stack Architect (Tech Lead) - SyncPlatform (2024 - Present)</h3>
            <ul>
              <li>Architected high-performance Node.js/TypeScript micro services and matching React interfaces to support 5,000+ trades per minute, leveraging GitHub Copilot to accelerate development velocity and maintain 100% end-to-end-type safety</li>
              <li>Engineered a sophisticated AI-driven auto-journaling engine using the Gemini API (Google AI Studio) to ingest and analyze real-time market data and headlines, automatically determining sentiment, impact-score, and urgency for active symbols</li>
              <li>Developed a RAG-based analysis pipeline that converts trade metadata and market events into vector embeddings for storage in MongoDB Vector Search, delivering automated, context-aware trade feedback and lifecycle criticism</li>
              <li>Engineered resilient backend pipelines using Redis and BullMQ, paired with real-time Next.js data visualizations; reduced system downtime by 30% and improved user session duration by 300% through seamless state management</li>
              <li>Developed a real-time notification ecosystem using Firebase Cloud Messaging (FCM) and WebSockets, facilitating instant trade confirmations and reducing user-reported latency by 40%</li>
            </ul>
          </Block>
        </Blocks>
      </div>
    </>
  );
}
