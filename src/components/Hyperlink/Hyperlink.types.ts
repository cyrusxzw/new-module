import type { MouseEvent, ReactNode } from 'react';
import type { Themes } from '~/types';

type TextAlign = 'center' | 'left' | 'right';
type LinkStyle =
  | 'External Button Link'
  | 'External No Icon Button Link'
  | 'External No Icon Link'
  | 'External Text Link'
  | 'Internal Button Link'
  | 'Internal No Icon Button Link'
  | 'Internal No Icon Link'
  | 'Internal Text Link';

type HyperlinkProps = {
  children: ReactNode;
  className?: string;
  dataTestId?: string;
  dataTestRef?: string;
  hasTargetInNewWindow?: boolean;
  id?: string;
  isAlternate?: boolean;
  isDownload?: boolean;
  kind?: LinkStyle;
  onClick?: (event: MouseEvent) => void;
  /** @deprecated use `kind` instead */
  style?: LinkStyle;
  tabIndex?: number;
  textAlign?: TextAlign;
  theme?: Themes;
  title?: string;
  url: string;
};

export type { HyperlinkProps, LinkStyle };
