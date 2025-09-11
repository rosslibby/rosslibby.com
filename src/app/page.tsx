'use client'

import Link from 'next/link';
import { Block, Blocks, BlockTitle, FeatureDemo, Intro } from '@/components';
import styles from './page.module.scss';
import Image from 'next/image';
import { NpmPackages } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Intro />
      </div>
      <hr />
      <Blocks>
        <BlockTitle
          title="Fullstack Node/Typescript Maven"
          subtitle="From vision to production, I build software that lasts. I thrive on creating scalable systems and impactful user experiences that stand the test of time."
        />
      </Blocks>
      <Blocks columns="repeat(3, 1fr)" style={{ maxWidth: '40rem', zIndex: 2 }}>
        <Block style={{ borderLeft: 'none', justifyContent: 'end', alignItems: 'center', gap: '0.5rem' }}>
          <Link href="https://github.com/rosslibby" target="_blank">
            <Image src="github-mark.svg" width={32} height={32} alt="GitHub" />
          </Link>
          <p>
            <Link href="https://github.com/rosslibby" target="_blank">rosslibby</Link>
          </p>
          <h3 style={{fontSize: '14px', fontWeight: 700}}>GitHub</h3>
        </Block>
        <Block style={{ justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
          {/* <h3>LinkedIn</h3> */}
          <Link href="https://www.linkedin.com/in/rosslibby" target="_blank">
            <Image src="/InBug-White.png" width={32} height={32} alt="LinkedIn" />
          </Link>
          <p>
            <Link href="https://www.linkedin.com/in/rosslibby" target="_blank">in/rosslibby</Link>
          </p>
          <h3 style={{fontSize: '14px', fontWeight: 700}}>LinkedIn</h3>
        </Block>
        <Block style={{ borderRight: 'none', justifyContent: 'start', alignItems: 'center', gap: '0.75rem' }}>
          {/* <h3>NPM</h3> */}
          <Link href="https://www.npmjs.com/~rosslibby" target="_blank">
            <Image src="Npm-logo.svg" width={82.28} height={32} alt="LinkedIn" />
          </Link>
          <p>
            <Link href="https://www.npmjs.com/~rosslibby" target="_blank">~rosslibby</Link>
          </p>
          <h3 style={{fontSize: '14px', fontWeight: 700}}>NPM</h3>
        </Block>
      </Blocks>
      <div><FeatureDemo /></div>
      <Blocks>
        <BlockTitle
          title="Open source contributions"
          subtitle="Selected npm packages I've published and maintain"
        />
      </Blocks>
      <NpmPackages />
    </main>
  );
}
