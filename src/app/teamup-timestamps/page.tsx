'use client'

import { Block, Blocks, BlockTitle, Code } from '@/components';
import styles from './teamup-timestamps.module.css';

const BOOKMARKLET = "javascript:async function run(){let e=Array.from(document.querySelectorAll('[data-date]')),t=e.shift().dataset.date,a=e.pop().dataset.date;console.log(`[${t}] --> [${a}]`);let n=`events?startDate=${t}&endDate=${a}&tz=America%2FNew_York`,i=window.location.href,d=`${i}/${n}`,{events:r}=await fetch(d).then(e=>e.json()),l=r.filter(({subcalendar_id:e})=>14219147===e);l.map(({id:e,creation_dt:t})=>{let a=document.querySelector(`[class*='teamup-event-id-${e}']`);l.find(t=>t.id===e);let n=document.createElement('span');return n.textContent=new Date(t).toLocaleDateString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),a.appendChild(n),a})}run()";

export default function Page() {
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
            <Code code={'1. Make sure your bookmarks bar is open.'} />
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
              <a href={BOOKMARKLET} className={styles.bookmark}>
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
            <Code code={'1. Make sure your bookmarks bar is open.'} />
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
            <Code code={'1. Make sure your bookmarks bar is open.'} />
          </Block>
        </Blocks>
      </div>
    </>
  );
}
