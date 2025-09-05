import { Dispatch, SetStateAction } from 'react';

export type Doc = {
  id: string;
  name: string;
  url: string;
  data?: string;
};

export type Package = {
  name: string;
  npm: string;
  github: string;
  docs: string;
};

export interface DocsCtx {
  loading: boolean;
  docs: Record<string, Doc>;
  _: Record<string, Dispatch<SetStateAction<any>>>;
}
