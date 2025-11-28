'use client'

import {
  FeatureDemo,
  Footer,
  Header,
  Hero,
  NpmPackages,
} from '@/components';
import styles from './page.module.css';

export default function Home() {

  return (
    <div className={styles.layout}>
      <Header />
      <hr className="inset" />
      <Hero />
      <FeatureDemo />
      <NpmPackages />
      <Footer />
    </div>
  );
}
