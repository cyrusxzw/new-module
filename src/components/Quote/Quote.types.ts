import type { Themes } from '~/types';

type QuoteProps = {
  author: string;
  className?: string;
  content: string;
  theme?: Themes;
};

export type { QuoteProps };
