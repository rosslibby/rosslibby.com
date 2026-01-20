'use client'

import {
  FeatureDemo,
  Hero,
  NpmPackages,
} from '@/components';

export default function Home() {

  return (
    <>
      <Hero
        title="Fullstack Node/Typescript Maven"
        subtitle="From vision to production, I build software that lasts. I thrive on creating scalable systems and impactful user experiences that stand the test of time."
      />
      <FeatureDemo />
      <NpmPackages />
    </>
  );
}
