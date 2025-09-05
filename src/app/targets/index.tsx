'use client';
import { useEffect } from 'react';
import { useDocs } from '@/docs-context';
import { MinTarget } from '@/components';

type TargetProps = {
  children: React.ReactNode;
  id: string;
  name: string;
  url: string;
};

export const Target = ({ children, ...props }: TargetProps) => {
  const docs = useDocs();
  const setup = () => docs.add(props);

  useEffect(setup);

  return <MinTarget id={props.id}>
    {children}
  </MinTarget>
};
