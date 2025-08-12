import { Dispatch, SetStateAction } from 'react';
import { TargetInsight } from './target';

export * from './drawer';
export * from './target';

export interface ViewfinderCtx {
  focusing: string | null;
  insights: TargetInsight[];
  viewfinder: boolean;
  _: Record<string, Dispatch<SetStateAction<any>>>;
}

export interface CursorCtx {
  coordinates: [number, number];
  down: boolean;
  targeting: string | null;
  _: Record<string, Dispatch<SetStateAction<any>>>;
}
