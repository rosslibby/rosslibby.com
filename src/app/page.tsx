'use client'

import { useRef } from 'react';
import { Blocks, BlockTitle, FeatureDemo, NpmPackages } from '@/components';
import { Header, Hero } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.layout} ref={layoutRef}>
      <Header layoutRef={layoutRef} />
      <hr className="inset" />
      <Hero />
      <FeatureDemo />
      <Blocks>
        <BlockTitle
          title="Open source contributions"
          subtitle="Selected npm packages I've published and maintain"
        />
      </Blocks>
      <NpmPackages />
    </div>
  );
}
