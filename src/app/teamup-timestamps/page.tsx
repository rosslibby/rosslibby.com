'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Block, Blocks, BlockTitle } from '@/components';
import { Frame } from '@/components/code/frame';
import styles from './teamup-timestamps.module.css';

const BOOKMARKLET = "javascript:let k=JSON.parse([...document.querySelectorAll('script[nonce]')].find(s=>s.textContent.match(/var calendars =/)).textContent.match(/(?<=calendars: )(.*)/)[0]).map(c=>c.id);async function run(){let e=Array.from(document.querySelectorAll('[data-date]')),t=e.shift().dataset.date,a=e.pop().dataset.date;console.log(`[${t}] --> [${a}]`);let n=`events?startDate=${t}&endDate=${a}&tz=America/New_York`,i=window.location.href,d=`${i}/${n}`,{events:r}=await fetch(d).then(e=>e.json()),l=r.filter(({subcalendar_id:e})=>k.includes(e));l.map(({id:e,creation_dt:t})=>{let a=document.querySelector(`[class*='teamup-event-id-${e}']`);l.find(t=>t.id===e);let n=document.createElement('span');return n.textContent=new Date(t).toLocaleDateString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),a?.appendChild(n),a})}run()";

export default function Page() {
  const bookmarkletRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let current: HTMLAnchorElement | null = bookmarkletRef.current;

    if (current) {
      current.href = BOOKMARKLET;
    }

    return () => {
      current = null;
    }
  }, [bookmarkletRef]);

  return (
    <>
      <Blocks>
        <BlockTitle
          title="Teamup Insights Utility"
          subtitle={
            <>View the <u>exact</u> time each calendar event was created</>
          }
        />
      </Blocks>
      <div className={styles.instr}>
        <hr />
        <Blocks>
          <Block>
            <h3>Step 1</h3>
          </Block>
        </Blocks>
        <hr />
        <Blocks {...{ columns: '6fr 6fr', collapse: true }}>
          <Block style={{ justifyContent: 'start' }}>
            <h5>First, make sure your bookmarks bar is open.</h5>
            <p>The bookmarks bar is usually located at the top of your browser, positioned just below the address bar.</p>
            <em className={styles.explanation}>
              <span>If your bookmarks bar is not open, you can open it using keyboard shortcuts:</span>
              <span><strong>Windows:</strong> <code>Ctrl + Shift + B</code></span>
              <span><strong>Mac:</strong> <code>Cmd + Shift + B</code></span>
            </em>
          </Block>
          <Block style={{ padding: 0 }}>
            <Frame content={
              <Image
                width={480}
                height={318}
                src="/assets/gifs/show-favorites-bar-edge_1026x680.gif"
                alt="How to open the Favorites bar in Microsoft Edge"
              />
            } />
          </Block>
        </Blocks>
        <hr />
        <Blocks>
          <Block>
            <h3>Step 2</h3>
          </Block>
        </Blocks>
        <hr />
        <Blocks {...{ columns: '6fr 6fr', collapse: true }}>
          <Block style={{ justifyContent: 'start' }}>
            <h5>Next, drag this button into your bookmarks bar</h5>

            <div className={styles.bookmarklet}>
              <a href="" className={styles.bookmark} draggable ref={bookmarkletRef}>
                <span className={styles.handle}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </span>
                <span className={styles.name}>Show timestamps</span>
                <span className={styles.handle}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </span>
              </a>
            </div>
          </Block>
          <Block style={{ padding: 0 }}>
            <Frame content={
              <Image
                width={480}
                height={318}
                src="/assets/gifs/add-bookmarklet-to-bookmarks-bar_1024x680.gif"
                alt="How to add a bookmarklet to the bookmarks bar in Microsoft Edge"
              />
            } />
          </Block>
        </Blocks>
        <hr />
        <Blocks>
          <Block>
            <h3>Step 3</h3>
          </Block>
        </Blocks>
        <hr />
        <Blocks {...{ columns: '6fr 6fr', collapse: true }}>
          <Block style={{ justifyContent: 'start' }}>
            <h5>Open your Teamup calendar.</h5>

            <p>When you are viewing a Teamup calendar, you can reveal the event-creation times by clicking the "Show timestamps" bookmark.</p>
          </Block>
          <Block style={{ padding: 0 }}>
            <Frame content={
              <Image
                width={480}
                height={318}
                src="/assets/gifs/show-teamup-timestamps_1020x680.gif"
                alt="How to view Teamup timestamps"
              />
            } />
          </Block>
        </Blocks>
      </div>
    </>
  );
}
