import styles from './viewfinder.module.css';

const distance = 75;
const points = Array.from({ length: 4 }, (_, i) => ({
  x: i % 2 === 0 ? -1 * distance : distance,
  y: i < 2 ? -1 * distance : distance,
}));

const Corner = ({ x, y }: {
  x: number;
  y: number;
}) => {
  const style = {
    transform: `translate(${x}%, ${y}%)`,
  } as React.CSSProperties;

  return <div className={styles.corner} style={style} />;
};

export const Scoped = () => (
  <>
    {points.map((point, i: number) => (
      <Corner key={i} {...point} />
    ))}
  </>
);

export const Locked = () => (
  <>
    {points.map((_, i: number) => (
      <Corner key={i} x={0} y={0} />
    ))}
  </>
);
