'use client';

import { Cursor, Drawer } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Drawer />
      <main className={styles.main}>
        <h1 data-target="true" data-target-id="0" data-component-id="intro">Hey, I'm <span>a Typescript developer</span>.</h1>
        <button data-target="true" data-target-id="1" data-component-id="counter">Click counter (<span id="counter"></span>)</button>
      </main>

      <Cursor />
    </>
  );
}
