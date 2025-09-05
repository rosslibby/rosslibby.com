'use client';
import styles from './content-blocks.module.scss';

export const BlockTitle = ({ title, subtitle }: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <Block className={styles.titleBlock}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Block>
  );
};

export const Block = ({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const classname = [
    styles.block,
    ...(className ? [className] : []),
  ].join(' ');
  return (
    <div className={classname} style={style}>
      {children}
    </div>
  );
};

export const Blocks = ({ children, columns }: {
  children: React.ReactNode;
  columns?: string;
}) => {
  const style = {
    gridTemplateColumns: columns,
  } as React.CSSProperties;

  return (
    <div className={styles.blocks} style={style}>
      {children}
    </div>
  );
};
