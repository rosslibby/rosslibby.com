'use client'

import { Blocks, BlockTitle, FeatureDemo, NpmPackages } from '@/components';
import { Header } from './header';
import { Hero } from './hero';

export default function Home() {
  return (
    <>
      <Header />
      <hr />
      <Hero />
      <FeatureDemo />
      <Blocks>
        <BlockTitle
          title="Open source contributions"
          subtitle="Selected npm packages I've published and maintain"
        />
      </Blocks>
      <NpmPackages />
    </>
  );
}
