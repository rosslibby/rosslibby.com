'use client';

import { Drawer, Intro, Target } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Drawer />
      <main className={styles.main}>
        <Target id="0" insights={[
          {
            code: 'const { noun } = useIntro();',
            explanation: 'Get the "noun" variable from the useIntro() hook',
          },
          { code: '' },
          { code: 'return (' },
          {
            code: '  <h1>Hey, I\'m a <span>{noun}</span>.</h1>',
            explanation: 'Display a heading that introduces me as the noun we got from the useIntro() hook',
          },
          { code: ');' },
        ]}>
          <Intro />
        </Target>
        <Target id="1" insights={[
          {
            code: 'const [count, setCount] = useState(0);',
            explanation: 'Set a variable to track a count starting from 0',
          },
          {
            code: 'const label = `Click counter (${count})`;',
            explanation: 'Set the button\'s text to display its title and the current count',
          },
          { code: '' },
          {
            code: 'const handleClick = () => setCount((count) => count + 1);',
            explanation: 'Build a function that will increment the counter',
          },
          { code: '' },
          { code: 'return (' },
          {
            code: '  <button onClick={handleClick}>{label}</button>',
            explanation: 'Display a button that shows the button\'s label and increments the count when clicked',
          },
          { code: ');' },
        ]}>
          <button data-target="true" data-target-id="1" data-component-id="counter">Click counter (<span id="counter"></span>)</button>
        </Target>
      </main>
    </>
  );
}
