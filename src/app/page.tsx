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
      <Hero
        title="Fullstack Node/Typescript Maven"
        subtitle="From vision to production, I build software that lasts. I thrive on creating scalable systems and impactful user experiences that stand the test of time."
      />
      <FeatureDemo />
      <NpmPackages />
      <Footer />
    </div>
  );
}
