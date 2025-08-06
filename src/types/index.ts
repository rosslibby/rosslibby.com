import { Dispatch, SetStateAction } from 'react';

export interface ViewfinderCtx {
  focusing: string | null;
  insights: TargetInsight[];
  viewfinder: boolean;
  targetSpecs: TargetSpecs;
  _: Record<string, Dispatch<SetStateAction<any>>>;
}

export type TargetSpecs = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export type TargetInsight = {
  code: string;
  explanation?: string;
};

export interface CursorCtx {
  coordinates: [number, number];
  down: boolean;
  targeting: string | null;
  _: Record<string, Dispatch<SetStateAction<any>>>;
}
