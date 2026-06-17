import styles from './showcase.module.css';

export default function Showcase() {
  return (
    <div className={styles.frame}>
      <div className={styles.container} data-theme="light">
        <p>Alpha</p>
        <p>Bravo</p>
        <p>Charlie</p>
        <p>Delta</p>
        <p>Echo</p>
        <p>Foxtrot</p>
      </div>
    </div>
  );
}
