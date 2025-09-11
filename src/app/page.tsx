'use client'

import { Blocks, BlockTitle, FeatureDemo, NpmPackages } from '@/components';
import { Header } from './header';
import { Hero } from './hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <hr />
      <Hero />
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
