import { ReactNode } from 'react';
import type { Themes } from '~/types';

type GelAccordionItem = {
  content: ReactNode;
  heading: string;
  id: string;
};

type Props = {
  className?: string;
  id?: string;
  items?: GelAccordionItem[];
  theme?: Themes;
  wrapperClass?: string;
};

export type { Props };
