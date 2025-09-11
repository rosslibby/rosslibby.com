import { Dispatch, SetStateAction } from 'react';
import { TargetInsight } from './target';

export type Explanation = {
  explanation: string;
  line: number;
};

export type CodeLine = TargetInsight & {
  line: number;
  read: boolean;
};

export type InsightTarget = {
  id: string;
  component: HTMLElement;
  insights: CodeLine[];
};

export interface DrawerCtx {
  target: InsightTarget | null;
  _: Record<string, Dispatch<SetStateAction<any>>>;
}
