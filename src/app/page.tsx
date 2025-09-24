'use client'

import { useRef } from 'react';
import { Block, Blocks, BlockTitle, FeatureDemo, NpmPackages } from '@/components';
import { Header, Hero } from '@/components';
import styles from './page.module.scss';
import footerStyles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
      <footer className={footerStyles.footer}>
        <Blocks>
          <Block className={footerStyles.repo}>
            <div style={{display: 'flex', gap: '0.75rem'}}>
              <Image src="github-mark.svg" width={26} height={26} alt="Check out my website's source code" />
              <p>Check out my website's <Link href="https://github.com/rosslibby/rosslibby.com" target="_blank">source code</Link></p>
            </div>
          </Block>
        </Blocks>
      </footer>
    </div>
  );
}
